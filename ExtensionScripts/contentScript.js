'use strict';
(function (scope) {
    scope.listenForDlp();
    Mindspark.ToolbarMessaging.send(safari.self.tab, 'background.contentLoaded', {url: window.location.href});
    safari.self.addEventListener('message', function (e) {
        Mindspark.ToolbarMessaging.receive(e, scope, safari.self.tab);
    }, true);
}({
    listenForDlp : function listenForDlp() {
        var messageListener = function messageListener_fn(ev) {
            var evData = Mindspark.Utility.isString(ev.data) ? JSON.parse(ev.data) : ev.data;
            var envelope;
            if (Mindspark.Utility.isObject(evData)) {
                if (ev.origin === window.location.origin && evData.from === 'DOCUMENT' && evData.status === 'GET_INFO') {
                    Mindspark.ToolbarMessaging.send(safari.self.tab, 'background.getInfoForDlp', {}, function getInfoForDlp_callback(info) {
                        // These will allow the page to recognize the answer sent back
                        envelope = {
                            from : 'EXTENSION',
                            status : evData.status,
                            toolbarId : info.toolbarId,
                            message : info
                        };
                        ev.source.postMessage(JSON.stringify(envelope), window.location.href);
                    });
                }
            }
        };
        window.addEventListener('message', messageListener, false);
    },
    contentScript: {
        removeContent: function removeContent(id, callback) {
            var node = document.getElementById(id);
            if (node) {
                node.parentNode.removeChild(node);
            }
            !callback || callback({success: !!node});
        },
        loadContent: function loadContent(url, timeout, callback) {
            var id = String(url).replace(/[^\w]+/g, '.');
            var iframe;
            var timerId;
            if(url === window.location.href){
               return !callback || callback({url: url, parent: window.location.href, id:id, timeout: false});
            }
            if (window === window.top && url && window.location.href !== url) {
                if (!document.getElementById(id)) {
                    if (timeout) {
                        timerId = setTimeout(function () {
                            !callback || callback({url: url, parent: window.location.href, timeout: true});
                            callback = timerId = null;
                        }, timeout);
                    }
                    iframe = document.createElement('iframe');
                    iframe.setAttribute('id', id);
                    iframe.style.display = 'none';
                    iframe.addEventListener('load', function (e) {
                        !timerId || clearTimeout(timerId);
                        !callback || callback({url: url, parent: window.location.href, id: id, timeout: false});
                        callback = null;
                    }, true);
                    iframe.setAttribute('src', url);
                    document.body.appendChild(iframe);
                }
            }
        },
        getCookies: function getCookies(keys, url, callback) {
            var cookies;
            if (url && url.toUpperCase() == window.location.href.toUpperCase()) {
                cookies = Mindspark.CookieUtil.parse(document.cookie);
                if (keys.length) {
                    cookies = keys.reduce(function (obj, key) {
                        obj[key] = cookies[key];
                        return obj;
                    }, {});
                }
                !callback || callback(cookies);
            }
        },
        setCookie: function setCookie(cookie, callback) {
            var rc = false;
            var cookieAsString;
            var date;
            if (Mindspark.Utility.isObject(cookie) && cookie.url === window.location.href && cookie.name) {
                cookieAsString = cookie.name + '="' + cookie.value + '"';
                if (cookie.expiresInDays) {
                    date = new Date();
                    date.setDate(date.getDate() + cookie.expiresInDays);
                    cookieAsString += '; expires=' + date.toGMTString();
                }
                cookieAsString += '; path=/';
                document.cookie = cookieAsString;
                rc = true;
            }
            !callback || callback(rc);
        },
        broadcastExtensionIsReady: function broadcastExtensionIsReady(data) {
            var href = window.location.href;
            if (href && href.substr(0,4).toUpperCase() === 'HTTP') {
                window.postMessage(data, href);
            }
        },
        getLocalStorage: function getLocalStorage(keys, url, callback) {
            var data = {};
            var storage;
            var val;
            var i;
            var key;
            if (url && url.toUpperCase() === window.location.href.toUpperCase()) {
                storage = window.localStorage;
                if (keys && keys.length) {
                    data = keys.reduce(function (obj, key) {
                        val = storage.getItem(key);
                        if (val !== null) {
                            obj[key] = val;
                        }
                        return obj;
                    }, data);
                } else {
                    for (i = 0; i < storage.length; i++) {
                        key = storage.key(i);
                        data[key] = storage.getItem(key);
                    }
                }
                !callback || callback(data);
            }
        },
        console: {
            log: function (param/*,...*/) {
                console.log.apply(console, Array.prototype.slice.call(arguments));
            }
        }
    }
}));