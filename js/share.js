!function(a) {
    function b(d) {
        if (c[d])
            return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded=!0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}([function(a, b) {
    (function() {
        !function() {
            var a, b, c, d, e, f;
            if (b = function(b) {
                return a.getElementsByClassName ? a.getElementsByClassName(b) : a.querySelectorAll("." + b)
            }, e = function(b) {
                var c, d, e;
                if (b.stopPropagation(), b ? e = b.target : (b = window.event, e = b.srcElement), e = b.target, "A" !== e.tagName && (e = e.parentNode), "undefined" != typeof e.href && null !== e.getAttribute("data-mode"))
                    return window._embedTF = {
                        url: e.href,
                        mode: parseInt(e.getAttribute("data-mode"), 10)
                    }, c = a.createElement("script"), c.src = "https://s3-eu-west-1.amazonaws.com/share.typeform.com/typeform.js?v1", d = a.getElementsByTagName("script")[0], d.parentNode.insertBefore(c, d), !1
            }, a = document, d = b("typeform-share", a), f = void 0, !/mobile|tablet/i.test(navigator.userAgent.toLowerCase()
                ) && screen.width >= 1024 && screen.height >= 768)for (c = 0; c < d.length;)
                d[c].getAttribute("data-mode") > 0 && (d[c].onclick = e), c++
        }()
    }).call(this)
}
]);

