'use strict';
var Mindspark = Mindspark || {};
Mindspark.Utility = {
    kind: function (obj) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString :
        //    Starting in JavaScript 1.8.5 toString() called on null returns [object Null], and undefined returns [object Undefined],
        //    as defined in the 5th Edition of ECMAScript and a subsequent Errata. See Using toString to detect object type.
        return Object.prototype.toString.call(obj).slice(8, -1);
    },
    isString: function (obj) {
        return this.kind(obj).toLowerCase() === 'string';
    },
    isArray: function (obj) {
        return this.kind(obj).toLowerCase() === 'array';
    },
    isFunction: function (obj) {
        return this.kind(obj).toLowerCase() === 'function';
    },
    isObject: function (obj) {
        return this.kind(obj).toLowerCase() === 'object';
    },
    toArray: function (obj) {
        return this.isArray(obj) ? obj : Array(obj);
    },
    uid:  (function() {
        var i = 0;
        return function uid(p) {
                return [p || 'uid', i++, (+new Date).toString(36)].join('');
            };
    })()
};

Mindspark.ObjectUtil = {
    isEmpty: function (obj) {
        return obj === undefined || obj === null || Mindspark.Utility.isObject(obj) && Object.keys(obj).length === 0;
    },
    clone: function(obj) {
        try {
            return JSON.parse(JSON.stringify(obj));
        } catch(e) {
        }
    }
};

Mindspark.CookieUtil = {
    parse: function (cookie) {
        var data = {};
        String(cookie).replace(/([^;=\s]+)\s*=([^;]*)/g, function (m, k, v) {
            data[k] = v;
        });
        return data;
    }
};

Mindspark.StringUtil = {
    hasSuffix: function (str, suffix, caseInsensitive) {
        var x = String(str).slice(str.length - String(suffix).length);
        if (caseInsensitive) {
            return x.toLocaleLowerCase() === suffix.toLowerCase();
        }
        return x === suffix;
    },
    hasPrefix: function (str, prefix, caseInsensitive) {
        var x = String(str).slice(0, String(prefix).length);
        if (caseInsensitive) {
            return x.toLocaleLowerCase() === prefix.toLowerCase();
        }
        return x === prefix;
    }
};

Mindspark.EventDispatcher = (function() {
    var listeners = {};
    function addEventListener (receiver, eventName, callback, capture) {
        listeners[eventName] || (listeners[eventName] = []);
        var listener = {
            proxy: function (e) {
                !Mindspark.Utility.isFunction(callback) || callback.call(receiver, e);
            },
            callback: callback,
            capture: !!capture
        };

        listeners[eventName].push(listener);
        window.addEventListener(eventName, listener.proxy, listener.capture);
    };

    function removeEventListener(eventName, callback, capture) {
        var ls = listeners[eventName];
        if (ls) {
            listeners[eventName] = ls.reduce(function (acc, ln) {
                if (callback === ln.callback && ln.capture === !!capture) {
                    window.removeEventListener(eventName, ln.proxy, ln.capture);
                } else {
                    acc.push(ln);
                }

                return acc;
            }, []);
        }
    };

    function dispatchEvent(eventName, data) {
        if (eventName) {
            var e = document.createEvent('Event');
            if (e) {
                e.data = data || {};
                e.initEvent(eventName, false, false);
                window.dispatchEvent(e);
            }
        }
    };
    var that = {
        addEventListener: addEventListener,
        removeEventListener: removeEventListener,
        dispatchEvent: dispatchEvent
    };
    return that;
})();
/**
 *  ToolbarMessaging encapsulate the communication between background page (Global.html) and the content scripts
 */
Mindspark.ToolbarMessaging = (function() {
    function resolveMethod(scope, namespace) {
        var tokens = namespace.split('.');
        var methodName = tokens.pop();
        var obj = tokens.reduce(function (obj, key) {
                return obj ? obj[key] : obj;
            }, scope) || scope;
        var method = obj[methodName];
        if (method) {
            return {
                length: method.length,
                invoke: function (params) {
                    var args = arguments.length > 1 ? arguments : Mindspark.Utility.toArray(params);
                    return method.apply(obj, args);
                }
            };
        }
        //Return undefined;
    };
    var callbacks = {
        get: function (id) {
            var value = resolveMethod(this, id);
            delete this[id];
            return value;
        },
        register: function (callback) {
            var id = Mindspark.Utility.uid('callback');
            this[id] = callback;
            return id;
        }
    };

    function send(target, message, args, callback) {
        !target || target.dispatchMessage(message, {
            data: args,
            reply: Mindspark.Utility.isString(callback) ? callback : callbacks.register(callback)
        });
        return !!target;
    }

    function receive(e, scope, target) {
        var _this = this;
        var handler = callbacks.get(e.name) || resolveMethod(scope, e.name);
        var args;
        if (!target) {
            target = e.target ? e.target.page : null;
        }
        if (handler) {
            args = e.message.data ? e.message.data : [];
            if (!Mindspark.Utility.isArray(args)) {
                args = Mindspark.Utility.toArray(args);
            }
            if (e.message.reply) {
                if (handler.length > args.length) {
                    args.push.apply(args, new Array(handler.length - args.length));
                    args[args.length - 1] = function () {
                        !target || _this.send(target, e.message.reply, Array.prototype.slice.call(arguments));
                    };
                }
            }
            handler.invoke(args);
        }
    }
    var that = {
        send: send,
        receive: receive
    };
    return that;
})();