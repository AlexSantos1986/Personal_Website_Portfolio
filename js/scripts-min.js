!function($, t, e, i) {
    "use strict";
    function n(t) {
        return ("string" == typeof t || t instanceof String) && (t = t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), t
    }
    var a = function(t) {
        for (var e = t.length, i = $("head"); e--;)
            0 === i.has("." + t[e]).length && i.append('<meta class="' + t[e] + '" />')
    };
    a(["foundation-mq-small", "foundation-mq-small-only", "foundation-mq-medium", "foundation-mq-medium-only", "foundation-mq-large", "foundation-mq-large-only", "foundation-mq-xlarge", "foundation-mq-xlarge-only", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), $(function() {
        "undefined" != typeof FastClick && "undefined" != typeof e.body && FastClick.attach(e.body)
    });
    var s = function(t, i) {
        if ("string" == typeof t) {
            if (i) {
                var n;
                if (i.jquery) {
                    if (n = i[0], !n)
                        return i
                } else 
                    n = i;
                return $(n.querySelectorAll(t))
            }
            return $(e.querySelectorAll(t))
        }
        return $(t, i)
    }, o = function(t) {
        var e = [];
        return t || e.push("data"), this.namespace.length > 0 && e.push(this.namespace), e.push(this.name), e.join("-")
    }, r = function(t) {
        for (var e = t.split("-"), i = e.length, n = []; i--;)
            0 !== i ? n.push(e[i]) : this.namespace.length > 0 ? n.push(this.namespace, e[i]) : n.push(e[i]);
        return n.reverse().join("-")
    }, l = function(t, e) {
        var i = this, n = function() {
            var n = s(this), a=!n.data(i.attr_name(!0) + "-init");
            n.data(i.attr_name(!0) + "-init", $.extend({}, i.settings, e || t, i.data_options(n))), a && i.events(this)
        };
        return s(this.scope).is("[" + this.attr_name() + "]") ? n.call(this.scope) : s("[" + this.attr_name() + "]", this.scope).each(n), "string" == typeof t ? this[t].call(this, e) : void 0
    }, d = function(t, e) {
        function i() {
            e(t[0])
        }
        function n() {
            if (this.one("load", i), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                var t = this.attr("src"), e = t.match(/\?/) ? "&": "?";
                e += "random=" + (new Date).getTime(), this.attr("src", t + e)
            }
        }
        return t.attr("src") ? void(t[0].complete || 4 === t[0].readyState ? i() : n.call(t)) : void i()
    };
    t.matchMedia = t.matchMedia || function(t) {
        var e, i = t.documentElement, n = i.firstElementChild || i.firstChild, a = t.createElement("body"), s = t.createElement("div");
        return s.id = "mq-test-1", s.style.cssText = "position:absolute;top:-100em", a.style.background = "none", a.appendChild(s), function(t) {
            return s.innerHTML = '&shy;<style media="' + t + '"> #mq-test-1 { width: 42px; }</style>', i.insertBefore(a, n), e = 42 === s.offsetWidth, i.removeChild(a), {
                matches: e,
                media: t
            }
        }
    }(e), function(e) {
        function i() {
            n && (o(i), l && e.fx.tick())
        }
        for (var n, a = 0, s = ["webkit", "moz"], o = t.requestAnimationFrame, r = t.cancelAnimationFrame, l = "undefined" != typeof e.fx; a < s.length&&!o; a++)
            o = t[s[a] + "RequestAnimationFrame"], r = r || t[s[a] + "CancelAnimationFrame"] || t[s[a] + "CancelRequestAnimationFrame"];
        o ? (t.requestAnimationFrame = o, t.cancelAnimationFrame = r, l && (e.fx.timer = function(t) {
            t() && e.timers.push(t)&&!n && (n=!0, i())
        }, e.fx.stop = function() {
            n=!1
        })) : (t.requestAnimationFrame = function(e) {
            var i = (new Date).getTime(), n = Math.max(0, 16 - (i - a)), s = t.setTimeout(function() {
                e(i + n)
            }, n);
            return a = i + n, s
        }, t.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        })
    }($), t.Foundation = {
        name: "Foundation",
        version: "5.5.1",
        media_queries: {
            small: s(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "small-only": s(".foundation-mq-small-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            medium: s(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "medium-only": s(".foundation-mq-medium-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            large: s(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "large-only": s(".foundation-mq-large-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xlarge: s(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "xlarge-only": s(".foundation-mq-xlarge-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xxlarge: s(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
        },
        stylesheet: $("<style></style>").appendTo("head")[0].sheet,
        global: {
            namespace: i
        },
        init: function(e, i, n, a, o) {
            var r = [e, n, a, o], l = [];
            if (this.rtl = /rtl/i.test(s("html").attr("dir")), this.scope = e || this.scope, this.set_namespace(), i && "string" == typeof i&&!/reflow/i.test(i))
                this.libs.hasOwnProperty(i) && l.push(this.init_lib(i, r));
            else 
                for (var d in this.libs)
                    l.push(this.init_lib(d, i));
            return s(t).load(function() {
                s(t).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")
            }), e
        },
        init_lib: function(t, e) {
            return this.libs.hasOwnProperty(t) ? (this.patch(this.libs[t]), e && e.hasOwnProperty(t) ? ("undefined" != typeof this.libs[t].settings ? $.extend(!0, this.libs[t].settings, e[t]) : "undefined" != typeof this.libs[t].defaults && $.extend(!0, this.libs[t].defaults, e[t]), this.libs[t].init.apply(this.libs[t], [this.scope, e[t]])) : (e = e instanceof Array ? e : new Array(e), this.libs[t].init.apply(this.libs[t], e))) : function() {}
        },
        patch: function(t) {
            t.scope = this.scope, t.namespace = this.global.namespace, t.rtl = this.rtl, t.data_options = this.utils.data_options, t.attr_name = o, t.add_namespace = r, t.bindings = l, t.S = this.utils.S
        },
        inherit: function(t, e) {
            for (var i = e.split(" "), n = i.length; n--;)
                this.utils.hasOwnProperty(i[n]) && (t[i[n]] = this.utils[i[n]])
        },
        set_namespace: function() {
            var t = this.global.namespace === i ? $(".foundation-data-attribute-namespace").css("font-family"): this.global.namespace;
            this.global.namespace = t === i || /false/i.test(t) ? "" : t
        },
        libs: {},
        utils: {
            S: s,
            throttle: function(t, e) {
                var i = null;
                return function() {
                    var n = this, a = arguments;
                    null == i && (i = setTimeout(function() {
                        t.apply(n, a), i = null
                    }, e))
                }
            },
            debounce: function(t, e, i) {
                var n, a;
                return function() {
                    var s = this, o = arguments, r = function() {
                        n = null, i || (a = t.apply(s, o))
                    }, l = i&&!n;
                    return clearTimeout(n), n = setTimeout(r, e), l && (a = t.apply(s, o)), a
                }
            },
            data_options: function(t, e) {
                function i(t) {
                    return !isNaN(t - 0) && null !== t && "" !== t && t!==!1 && t!==!0
                }
                function n(t) {
                    return "string" == typeof t ? $.trim(t) : t
                }
                e = e || "options";
                var a = {}, s, o, r, l = function(t) {
                    var i = Foundation.global.namespace;
                    return t.data(i.length > 0 ? i + "-" + e : e)
                }, d = l(t);
                if ("object" == typeof d)
                    return d;
                for (r = (d || ":").split(";"), s = r.length; s--;)
                    o = r[s].split(":"), o = [o[0], o.slice(1).join(":")], /true/i.test(o[1]) && (o[1]=!0), /false/i.test(o[1]) && (o[1]=!1), i(o[1]) && (o[1] =- 1 === o[1].indexOf(".") ? parseInt(o[1], 10) : parseFloat(o[1])), 2 === o.length && o[0].length > 0 && (a[n(o[0])] = n(o[1]));
                return a
            },
            register_media: function(t, e) {
                Foundation.media_queries[t] === i && ($("head").append('<meta class="' + e + '"/>'), Foundation.media_queries[t] = n($("." + e).css("font-family")))
            },
            add_custom_rule: function(t, e) {
                if (e === i && Foundation.stylesheet)
                    Foundation.stylesheet.insertRule(t, Foundation.stylesheet.cssRules.length);
                else {
                    var n = Foundation.media_queries[e];
                    n !== i && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[e] + "{ " + t + " }")
                }
            },
            image_loaded: function(t, e) {
                var i = this, n = t.length;
                0 === n && e(t), t.each(function() {
                    d(i.S(this), function() {
                        n -= 1, 0 === n && e(t)
                    })
                })
            },
            random_str: function() {
                return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", ( + new Date).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
            },
            match: function(e) {
                return t.matchMedia(e).matches
            },
            is_small_up: function() {
                return this.match(Foundation.media_queries.small)
            },
            is_medium_up: function() {
                return this.match(Foundation.media_queries.medium)
            },
            is_large_up: function() {
                return this.match(Foundation.media_queries.large)
            },
            is_xlarge_up: function() {
                return this.match(Foundation.media_queries.xlarge)
            },
            is_xxlarge_up: function() {
                return this.match(Foundation.media_queries.xxlarge)
            },
            is_small_only: function() {
                return !(this.is_medium_up() || this.is_large_up() || this.is_xlarge_up() || this.is_xxlarge_up())
            },
            is_medium_only: function() {
                return this.is_medium_up()&&!this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()
            },
            is_large_only: function() {
                return this.is_medium_up() && this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()
            },
            is_xlarge_only: function() {
                return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up()&&!this.is_xxlarge_up()
            },
            is_xxlarge_only: function() {
                return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up()
            }
        }
    }, $.fn.foundation = function() {
        var t = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            return Foundation.init.apply(Foundation, [this].concat(t)), this
        })
    }
}(jQuery, window, window.document), function($, t, e, i) {
    "use strict";
    Foundation.libs.equalizer = {
        name: "equalizer",
        version: "5.5.1",
        settings: {
            use_tallest: !0,
            before_height_change: $.noop,
            after_height_change: $.noop,
            equalize_on_stack: !1
        },
        init: function(t, e, i) {
            Foundation.inherit(this, "image_loaded"), this.bindings(e, i), this.reflow()
        },
        events: function() {
            this.S(t).off(".equalizer").on("resize.fndtn.equalizer", function(t) {
                this.reflow()
            }.bind(this))
        },
        equalize: function(t) {
            var e=!1, i = t.find("[" + this.attr_name() + "-watch]:visible"), n = t.data(this.attr_name(!0) + "-init");
            if (0 !== i.length) {
                var a = i.first().offset().top;
                if (n.before_height_change(), t.trigger("before-height-change").trigger("before-height-change.fndth.equalizer"), i.height("inherit"), i.each(function() {
                    var t = $(this);
                    t.offset().top !== a && (e=!0)
                }), n.equalize_on_stack!==!1 ||!e) {
                    var s = i.map(function() {
                        return $(this).outerHeight(!1)
                    }).get();
                    if (n.use_tallest) {
                        var o = Math.max.apply(null, s);
                        i.css("height", o)
                    } else {
                        var r = Math.min.apply(null, s);
                        i.css("height", r)
                    }
                    n.after_height_change(), t.trigger("after-height-change").trigger("after-height-change.fndtn.equalizer")
                }
            }
        },
        reflow: function() {
            var t = this;
            this.S("[" + this.attr_name() + "]", this.scope).each(function() {
                var e = $(this);
                t.image_loaded(t.S("img", this), function() {
                    t.equalize(e)
                })
            })
        }
    }
}(jQuery, window, window.document), function($, t, e, i) {
    "use strict";
    Foundation.libs.interchange = {
        name: "interchange",
        version: "5.5.1",
        cache: {},
        images_loaded: !1,
        nodes_loaded: !1,
        settings: {
            load_attr: "interchange",
            named_queries: {
                "default": "only screen",
                small: Foundation.media_queries.small,
                "small-only": Foundation.media_queries["small-only"],
                medium: Foundation.media_queries.medium,
                "medium-only": Foundation.media_queries["medium-only"],
                large: Foundation.media_queries.large,
                "large-only": Foundation.media_queries["large-only"],
                xlarge: Foundation.media_queries.xlarge,
                "xlarge-only": Foundation.media_queries["xlarge-only"],
                xxlarge: Foundation.media_queries.xxlarge,
                landscape: "only screen and (orientation: landscape)",
                portrait: "only screen and (orientation: portrait)",
                retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
            },
            directives: {
                replace: function(t, e, i) {
                    if (/IMG/.test(t[0].nodeName)) {
                        var n = t[0].src;
                        if (new RegExp(e, "i").test(n))
                            return;
                        return t[0].src = e, i(t[0].src)
                    }
                    var a = t.data(this.data_attr + "-last-path"), s = this;
                    if (a != e)
                        return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(e) ? ($(t).css("background-image", "url(" + e + ")"), t.data("interchange-last-path", e), i(e)) : $.get(e, function(n) {
                            t.html(n), t.data(s.data_attr + "-last-path", e), i()
                        })
                }
            }
        },
        init: function(t, e, i) {
            Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), $.extend(!0, this.settings, e, i), this.bindings(e, i), this.load("images"), this.load("nodes")
        },
        get_media_hash: function() {
            var t = "";
            for (var e in this.settings.named_queries)
                t += matchMedia(this.settings.named_queries[e]).matches.toString();
            return t
        },
        events: function() {
            var e = this, i;
            return $(t).off(".interchange").on("resize.fndtn.interchange", e.throttle(function() {
                var t = e.get_media_hash();
                t !== i && e.resize(), i = t
            }, 50)), this
        },
        resize: function() {
            var t = this.cache;
            if (!this.images_loaded ||!this.nodes_loaded)
                return void setTimeout($.proxy(this.resize, this), 50);
            for (var e in t)
                if (t.hasOwnProperty(e)) {
                    var i = this.results(e, t[e]);
                    i && this.settings.directives[i.scenario[1]].call(this, i.el, i.scenario[0], function(t) {
                        if (arguments[0]instanceof Array)
                            var e = arguments[0];
                        else 
                            var e = Array.prototype.slice.call(arguments, 0);
                            return function() {
                                t.el.trigger(t.scenario[1], e)
                            }
                        }(i))
                }
        },
        results: function(t, e) {
            var i = e.length;
            if (i > 0)
                for (var n = this.S("[" + this.add_namespace("data-uuid") + '="' + t + '"]'); i--;) {
                    var a, s = e[i][2];
                    if (a = matchMedia(this.settings.named_queries.hasOwnProperty(s) ? this.settings.named_queries[s] : s), a.matches)
                        return {
                            el: n,
                            scenario: e[i]
                        }
                }
            return !1
        },
        load: function(t, e) {
            return ("undefined" == typeof this["cached_" + t] || e) && this["update_" + t](), this["cached_" + t]
        },
        update_images: function() {
            var t = this.S("img[" + this.data_attr + "]"), e = t.length, i = e, n = 0, a = this.data_attr;
            for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === e; i--;) {
                if (n++, t[i]) {
                    var s = t[i].getAttribute(a) || "";
                    s.length > 0 && this.cached_images.push(t[i])
                }
                n === e && (this.images_loaded=!0, this.enhance("images"))
            }
            return this
        },
        update_nodes: function() {
            var t = this.S("[" + this.data_attr + "]").not("img"), e = t.length, i = e, n = 0, a = this.data_attr;
            for (this.cached_nodes = [], this.nodes_loaded = 0 === e; i--;) {
                n++;
                var s = t[i].getAttribute(a) || "";
                s.length > 0 && this.cached_nodes.push(t[i]), n === e && (this.nodes_loaded=!0, this.enhance("nodes"))
            }
            return this
        },
        enhance: function(e) {
            for (var i = this["cached_" + e].length; i--;)
                this.object($(this["cached_" + e][i]));
            return $(t).trigger("resize").trigger("resize.fndtn.interchange")
        },
        convert_directive: function(t) {
            var e = this.trim(t);
            return e.length > 0 ? e : "replace"
        },
        parse_scenario: function(t) {
            var e = t[0].match(/(.+),\s*(\w+)\s*$/), i = t[1];
            if (e)
                var n = e[1], a = e[2];
            else 
                var s = t[0].split(/,\s*$/), n = s[0], a = "";
            return [this.trim(n), this.convert_directive(a), this.trim(i)]
        },
        object: function(t) {
            var e = this.parse_data_attr(t), i = [], n = e.length;
            if (n > 0)
                for (; n--;) {
                    var a = e[n].split(/\(([^\)]*?)(\))$/);
                    if (a.length > 1) {
                        var s = this.parse_scenario(a);
                        i.push(s)
                    }
                }
            return this.store(t, i)
        },
        store: function(t, e) {
            var i = this.random_str(), n = t.data(this.add_namespace("uuid", !0));
            return this.cache[n] ? this.cache[n] : (t.attr(this.add_namespace("data-uuid"), i), this.cache[i] = e)
        },
        trim: function(t) {
            return "string" == typeof t ? $.trim(t) : t
        },
        set_data_attr: function(t) {
            return t ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
        },
        parse_data_attr: function(t) {
            for (var e = t.attr(this.attr_name()).split(/\[(.*?)\]/), i = e.length, n = []; i--;)
                e[i].replace(/[\W\d]+/, "").length > 4 && n.push(e[i]);
            return n
        },
        reflow: function() {
            this.load("images", !0), this.load("nodes", !0)
        }
    }
}(jQuery, window, window.document), function($, t, e, i) {
    "use strict";
    Foundation.libs.dropdown = {
        name: "dropdown",
        version: "5.5.1",
        settings: {
            active_class: "open",
            disabled_class: "disabled",
            mega_class: "mega",
            align: "bottom",
            is_hover: !1,
            hover_timeout: 150,
            opened: function() {},
            closed: function() {}
        },
        init: function(t, e, i) {
            Foundation.inherit(this, "throttle"), $.extend(!0, this.settings, e, i), this.bindings(e, i)
        },
        events: function(i) {
            var n = this, a = n.S;
            a(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function(t) {
                var e = a(this).data(n.attr_name(!0) + "-init") || n.settings;
                (!e.is_hover || Modernizr.touch) && (t.preventDefault(), a(this).parent("[data-reveal-id]") && t.stopPropagation(), n.toggle($(this)))
            }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(t) {
                var e = a(this), i, s;
                clearTimeout(n.timeout), e.data(n.data_attr()) ? (i = a("#" + e.data(n.data_attr())), s = e) : (i = e, s = a("[" + n.attr_name() + '="' + i.attr("id") + '"]'));
                var o = s.data(n.attr_name(!0) + "-init") || n.settings;
                a(t.currentTarget).data(n.data_attr()) && o.is_hover && n.closeall.call(n), o.is_hover && n.open.apply(n, [i, s])
            }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(t) {
                var e = a(this), i;
                if (e.data(n.data_attr()))
                    i = e.data(n.data_attr(!0) + "-init") || n.settings;
                else 
                    var s = a("[" + n.attr_name() + '="' + a(this).attr("id") + '"]'), i = s.data(n.attr_name(!0) + "-init") || n.settings;
                n.timeout = setTimeout(function() {
                    e.data(n.data_attr()) ? i.is_hover && n.close.call(n, a("#" + e.data(n.data_attr()))) : i.is_hover && n.close.call(n, e)
                }.bind(this), i.hover_timeout)
            }).on("click.fndtn.dropdown", function(t) {
                var i = a(t.target).closest("[" + n.attr_name() + "-content]"), s = i.find("a");
                return s.length > 0 && "false" !== i.attr("aria-autoclose") && n.close.call(n, a("[" + n.attr_name() + "-content]")), t.target !== e&&!$.contains(e.documentElement, t.target) || a(t.target).closest("[" + n.attr_name() + "]").length > 0 ? void 0 : !a(t.target).data("revealId") && i.length > 0 && (a(t.target).is("[" + n.attr_name() + "-content]") || $.contains(i.first()[0], t.target)) ? void t.stopPropagation() : void n.close.call(n, a("[" + n.attr_name() + "-content]"))
            }).on("opened.fndtn.dropdown", "[" + n.attr_name() + "-content]", function() {
                n.settings.opened.call(this)
            }).on("closed.fndtn.dropdown", "[" + n.attr_name() + "-content]", function() {
                n.settings.closed.call(this)
            }), a(t).off(".dropdown").on("resize.fndtn.dropdown", n.throttle(function() {
                n.resize.call(n)
            }, 50)), this.resize()
        },
        close: function(t) {
            var e = this;
            t.each(function() {
                var i = $("[" + e.attr_name() + "=" + t[0].id + "]") || $("aria-controls=" + t[0].id + "]");
                i.attr("aria-expanded", "false"), e.S(this).hasClass(e.settings.active_class) && (e.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").attr("aria-hidden", "true").removeClass(e.settings.active_class).prev("[" + e.attr_name() + "]").removeClass(e.settings.active_class).removeData("target"), e.S(this).trigger("closed").trigger("closed.fndtn.dropdown", [t]))
            }), t.removeClass("f-open-" + this.attr_name(!0))
        },
        closeall: function() {
            var t = this;
            $.each(t.S(".f-open-" + this.attr_name(!0)), function() {
                t.close.call(t, t.S(this))
            })
        },
        open: function(t, e) {
            this.css(t.addClass(this.settings.active_class), e), t.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class), t.data("target", e.get(0)).trigger("opened").trigger("opened.fndtn.dropdown", [t, e]), t.attr("aria-hidden", "false"), e.attr("aria-expanded", "true"), t.focus(), t.addClass("f-open-" + this.attr_name(!0))
        },
        data_attr: function() {
            return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
        },
        toggle: function(t) {
            if (!t.hasClass(this.settings.disabled_class)) {
                var e = this.S("#" + t.data(this.data_attr()));
                0 !== e.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(e)), e.hasClass(this.settings.active_class) ? (this.close.call(this, e), e.data("target") !== t.get(0) && this.open.call(this, e, t)) : this.open.call(this, e, t))
            }
        },
        resize: function() {
            var t = this.S("[" + this.attr_name() + "-content].open"), e = $(t.data("target"));
            t.length && e.length && this.css(t, e)
        },
        css: function(t, e) {
            var i = Math.max((e.width() - t.width()) / 2, 8), n = e.data(this.attr_name(!0) + "-init") || this.settings;
            if (this.clear_idx(), this.small()) {
                var a = this.dirs.bottom.call(t, e, n);
                t.attr("style", "").removeClass("drop-left drop-right drop-top").css({
                    position: "absolute",
                    width: "95%",
                    "max-width": "none",
                    top: a.top
                }), t.css(Foundation.rtl ? "right" : "left", i)
            } else 
                this.style(t, e, n);
            return t
        },
        style: function(t, e, i) {
            var n = $.extend({
                position: "absolute"
            }, this.dirs[i.align].call(t, e, i));
            t.attr("style", "").css(n)
        },
        dirs: {
            _base: function(i) {
                var n = this.offsetParent(), a = n.offset(), s = i.offset();
                s.top -= a.top, s.left -= a.left, s.missRight=!1, s.missTop=!1, s.missLeft=!1, s.leftRightFlag=!1;
                var o;
                o = e.getElementsByClassName("row")[0] ? e.getElementsByClassName("row")[0].clientWidth : t.outerWidth;
                var r = (t.outerWidth - o) / 2, l = o;
                return this.hasClass("mega") || (i.offset().top <= this.outerHeight() && (s.missTop=!0, l = t.outerWidth - r, s.leftRightFlag=!0), i.offset().left + this.outerWidth() > i.offset().left + r && i.offset().left - r > this.outerWidth() && (s.missRight=!0, s.missLeft=!1), i.offset().left - this.outerWidth() <= 0 && (s.missLeft=!0, s.missRight=!1)), s
            },
            top: function(t, e) {
                var i = Foundation.libs.dropdown, n = i.dirs._base.call(this, t);
                return this.addClass("drop-top"), 1 == n.missTop && (n.top = n.top + t.outerHeight() + this.outerHeight(), this.removeClass("drop-top")), 1 == n.missRight && (n.left = n.left - this.outerWidth() + t.outerWidth()), (t.outerWidth() < this.outerWidth() || i.small() || this.hasClass(e.mega_menu)) && i.adjust_pip(this, t, e, n), Foundation.rtl ? {
                    left: n.left - this.outerWidth() + t.outerWidth(),
                    top: n.top - this.outerHeight()
                } : {
                    left: n.left,
                    top: n.top - this.outerHeight()
                }
            },
            bottom: function(t, e) {
                var i = Foundation.libs.dropdown, n = i.dirs._base.call(this, t);
                return 1 == n.missRight && (n.left = n.left - this.outerWidth() + t.outerWidth()), (t.outerWidth() < this.outerWidth() || i.small() || this.hasClass(e.mega_menu)) && i.adjust_pip(this, t, e, n), i.rtl ? {
                    left: n.left - this.outerWidth() + t.outerWidth(),
                    top: n.top + t.outerHeight()
                } : {
                    left: n.left,
                    top: n.top + t.outerHeight()
                }
            },
            left: function(t, e) {
                var i = Foundation.libs.dropdown.dirs._base.call(this, t);
                return this.addClass("drop-left"), 1 == i.missLeft && (i.left = i.left + this.outerWidth(), i.top = i.top + t.outerHeight(), this.removeClass("drop-left")), {
                    left: i.left - this.outerWidth(),
                    top: i.top
                }
            },
            right: function(t, e) {
                var i = Foundation.libs.dropdown.dirs._base.call(this, t);
                this.addClass("drop-right"), 1 == i.missRight ? (i.left = i.left - this.outerWidth(), i.top = i.top + t.outerHeight(), this.removeClass("drop-right")) : i.triggeredRight=!0;
                var n = Foundation.libs.dropdown;
                return (t.outerWidth() < this.outerWidth() || n.small() || this.hasClass(e.mega_menu)) && n.adjust_pip(this, t, e, i), {
                    left: i.left + t.outerWidth(),
                    top: i.top
                }
            }
        },
        adjust_pip: function(t, e, i, n) {
            var a = Foundation.stylesheet, s = 8;
            t.hasClass(i.mega_class) ? s = n.left + e.outerWidth() / 2 - 8 : this.small() && (s += n.left - 8), this.rule_idx = a.cssRules.length;
            var o = ".f-dropdown.open:before", r = ".f-dropdown.open:after", l = "left: " + s + "px;", d = "left: " + (s - 1) + "px;";
            1 == n.missRight && (s = t.outerWidth() - 23, o = ".f-dropdown.open:before", r = ".f-dropdown.open:after", l = "left: " + s + "px;", d = "left: " + (s - 1) + "px;"), 1 == n.triggeredRight && (o = ".f-dropdown.open:before", r = ".f-dropdown.open:after", l = "left:-12px;", d = "left:-14px;"), a.insertRule ? (a.insertRule([o, "{", l, "}"].join(" "), this.rule_idx), a.insertRule([r, "{", d, "}"].join(" "), this.rule_idx + 1)) : (a.addRule(o, l, this.rule_idx), a.addRule(r, d, this.rule_idx + 1))
        },
        clear_idx: function() {
            var t = Foundation.stylesheet;
            "undefined" != typeof this.rule_idx && (t.deleteRule(this.rule_idx), t.deleteRule(this.rule_idx), delete this.rule_idx)
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches
        },
        off: function() {
            this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), this.S(t).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown")
        },
        reflow: function() {}
    }
}(jQuery, window, window.document), function($, t, e, i) {
    "use strict";
    Foundation.libs.accordion = {
        name: "accordion",
        version: "5.5.1",
        settings: {
            content_class: "content",
            active_class: "active",
            multi_expand: !1,
            toggleable: !0,
            callback: function() {}
        },
        init: function(t, e, i) {
            this.bindings(e, i)
        },
        events: function() {
            var t = this, e = this.S;
            e(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > .accordion-navigation > a", function(i) {
                var n = e(this).closest("[" + t.attr_name() + "]"), a = t.attr_name() + "=" + n.attr(t.attr_name()), s = n.data(t.attr_name(!0) + "-init") || t.settings, o = e("#" + this.href.split("#")[1]), r = $("> .accordion-navigation", n), l = r.children("." + s.content_class), d = l.filter("." + s.active_class);
                return i.preventDefault(), n.attr(t.attr_name()) && (l = l.add("[" + a + "] dd > ." + s.content_class), r = r.add("[" + a + "] .accordion-navigation")), s.toggleable && o.is(d) ? (o.parent(".accordion-navigation").toggleClass(s.active_class, !1), o.toggleClass(s.active_class, !1), s.callback(o), o.triggerHandler("toggled", [n]), void n.triggerHandler("toggled", [o])) : (s.multi_expand || (l.removeClass(s.active_class), r.removeClass(s.active_class)), o.addClass(s.active_class).parent().addClass(s.active_class), s.callback(o), o.triggerHandler("toggled", [n]), void n.triggerHandler("toggled", [o]))
            })
        },
        off: function() {},
        reflow: function() {}
    }
}(jQuery, window, window.document), function($, t, e, i) {
    "use strict";
    Foundation.libs.alert = {
        name: "alert",
        version: "5.5.1",
        settings: {
            callback: function() {}
        },
        init: function(t, e, i) {
            this.bindings(e, i)
        },
        events: function() {
            var t = this, e = this.S;
            $(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] .close", function(i) {
                var n = e(this).closest("[" + t.attr_name() + "]"), a = n.data(t.attr_name(!0) + "-init") || t.settings;
                i.preventDefault(), Modernizr.csstransitions ? (n.addClass("alert-close"), n.on("transitionend webkitTransitionEnd oTransitionEnd", function(t) {
                    e(this).trigger("close").trigger("close.fndtn.alert").remove(), a.callback()
                })) : n.fadeOut(300, function() {
                    e(this).trigger("close").trigger("close.fndtn.alert").remove(), a.callback()
                })
            })
        },
        reflow: function() {}
    }
}(jQuery, window, window.document), function($, t, e, i) {
    "use strict";
    Foundation.libs["magellan-expedition"] = {
        name: "magellan-expedition",
        version: "5.5.1",
        settings: {
            active_class: "active",
            threshold: 0,
            destination_threshold: 20,
            throttle_delay: 30,
            fixed_top: 0,
            offset_by_height: !0,
            duration: 700,
            easing: "swing"
        },
        init: function(t, e, i) {
            Foundation.inherit(this, "throttle"), this.bindings(e, i)
        },
        events: function() {
            var e = this, i = e.S, n = e.settings;
            e.set_expedition_position(), i(e.scope).off(".magellan").on("click.fndtn.magellan", "[" + e.add_namespace("data-magellan-arrival") + '] a[href^="#"]', function(t) {
                t.preventDefault();
                var i = $(this).closest("[" + e.attr_name() + "]"), n = i.data("magellan-expedition-init"), a = this.hash.split("#").join(""), s = $('a[name="' + a + '"]');
                0 === s.length && (s = $("#" + a));
                var o = s.offset().top - n.destination_threshold + 1;
                n.offset_by_height && (o -= i.outerHeight()), $("html, body").stop().animate({
                    scrollTop: o
                }, n.duration, n.easing, function() {
                    history.pushState ? history.pushState(null, null, "#" + a) : location.hash = "#" + a
                })
            }).on("scroll.fndtn.magellan", e.throttle(this.check_for_arrivals.bind(this), n.throttle_delay)), $(t).on("resize.fndtn.magellan", e.throttle(this.set_expedition_position.bind(this), n.throttle_delay))
        },
        check_for_arrivals: function() {
            var t = this;
            t.update_arrivals(), t.update_expedition_positions()
        },
        set_expedition_position: function() {
            var t = this;
            $("[" + this.attr_name() + "=fixed]", t.scope).each(function(e, i) {
                var n = $(this), a = n.data("magellan-expedition-init"), s = n.attr("styles"), o, r;
                n.attr("style", ""), o = n.offset().top + a.threshold, r = parseInt(n.data("magellan-fixed-top")), isNaN(r) || (t.settings.fixed_top = r), n.data(t.data_attr("magellan-top-offset"), o), n.attr("style", s)
            })
        },
        update_expedition_positions: function() {
            var e = this, i = $(t).scrollTop();
            $("[" + this.attr_name() + "=fixed]", e.scope).each(function() {
                var t = $(this), n = t.data("magellan-expedition-init"), a = t.attr("style"), s = t.data("magellan-top-offset");
                if (i + e.settings.fixed_top >= s) {
                    var o = t.prev("[" + e.add_namespace("data-magellan-expedition-clone") + "]");
                    0 === o.length && (o = t.clone(), o.removeAttr(e.attr_name()), o.attr(e.add_namespace("data-magellan-expedition-clone"), ""), t.before(o)), t.css({
                        position: "fixed",
                        top: n.fixed_top
                    }).addClass("fixed")
                } else 
                    t.prev("[" + e.add_namespace("data-magellan-expedition-clone") + "]").remove(), t.attr("style", a).css("position", "").css("top", "").removeClass("fixed")
            })
        },
        update_arrivals: function() {
            var e = this, i = $(t).scrollTop();
            $("[" + this.attr_name() + "]", e.scope).each(function() {
                var t = $(this), n = t.data(e.attr_name(!0) + "-init"), a = e.offsets(t, i), s = t.find("[" + e.add_namespace("data-magellan-arrival") + "]"), o=!1;
                a.each(function(i, a) {
                    if (a.viewport_offset >= a.top_offset) {
                        var s = t.find("[" + e.add_namespace("data-magellan-arrival") + "]");
                        return s.not(a.arrival).removeClass(n.active_class), a.arrival.addClass(n.active_class), o=!0, !0
                    }
                }), o || s.removeClass(n.active_class)
            })
        },
        offsets: function(t, e) {
            var i = this, n = t.data(i.attr_name(!0) + "-init"), a = e;
            return t.find("[" + i.add_namespace("data-magellan-arrival") + "]").map(function(e, s) {
                var o = $(this).data(i.data_attr("magellan-arrival")), r = $("[" + i.add_namespace("data-magellan-destination") + "=" + o + "]");
                if (r.length > 0) {
                    var l = r.offset().top - n.destination_threshold;
                    return n.offset_by_height && (l -= t.outerHeight()), l = Math.floor(l), {
                        destination: r,
                        arrival: $(this),
                        top_offset: l,
                        viewport_offset: a
                    }
                }
            }).sort(function(t, e) {
                return t.top_offset < e.top_offset?-1 : t.top_offset > e.top_offset ? 1 : 0
            })
        },
        data_attr: function(t) {
            return this.namespace.length > 0 ? this.namespace + "-" + t : t
        },
        off: function() {
            this.S(this.scope).off(".magellan"), this.S(t).off(".magellan")
        },
        reflow: function() {
            var t = this;
            $("[" + t.add_namespace("data-magellan-expedition-clone") + "]", t.scope).remove()
        }
    }
}(jQuery, window, window.document), function($, t, e, i) {
    "use strict";
    Foundation.libs.offcanvas = {
        name: "offcanvas",
        version: "5.5.1",
        settings: {
            open_method: "move",
            close_on_click: !1
        },
        init: function(t, e, i) {
            this.bindings(e, i)
        },
        events: function() {
            var t = this, e = t.S, i = "", n = "", a = "";
            "move" === this.settings.open_method ? (i = "move-", n = "right", a = "left") : "overlap_single" === this.settings.open_method ? (i = "offcanvas-overlap-", n = "right", a = "left") : "overlap" === this.settings.open_method && (i = "offcanvas-overlap"), e(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function(a) {
                t.click_toggle_class(a, i + n), "overlap" !== t.settings.open_method && e(".left-submenu").removeClass(i + n), $(".left-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function(a) {
                var s = t.get_settings(a), o = e(this).parent();
                !s.close_on_click || o.hasClass("has-submenu") || o.hasClass("back") ? e(this).parent().hasClass("has-submenu") ? (a.preventDefault(), e(this).siblings(".left-submenu").toggleClass(i + n)) : o.hasClass("back") && (a.preventDefault(), o.parent().removeClass(i + n)) : (t.hide.call(t, i + n, t.get_wrapper(a)), o.parent().removeClass(i + n)), $(".left-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function(n) {
                t.click_toggle_class(n, i + a), "overlap" !== t.settings.open_method && e(".right-submenu").removeClass(i + a), $(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function(n) {
                var s = t.get_settings(n), o = e(this).parent();
                !s.close_on_click || o.hasClass("has-submenu") || o.hasClass("back") ? e(this).parent().hasClass("has-submenu") ? (n.preventDefault(), e(this).siblings(".right-submenu").toggleClass(i + a)) : o.hasClass("back") && (n.preventDefault(), o.parent().removeClass(i + a)) : (t.hide.call(t, i + a, t.get_wrapper(n)), o.parent().removeClass(i + a)), $(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(s) {
                t.click_remove_class(s, i + a), e(".right-submenu").removeClass(i + a), n && (t.click_remove_class(s, i + n), e(".left-submenu").removeClass(i + a)), $(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(e) {
                t.click_remove_class(e, i + a), $(".left-off-canvas-toggle").attr("aria-expanded", "false"), n && (t.click_remove_class(e, i + n), $(".right-off-canvas-toggle").attr("aria-expanded", "false"))
            })
        },
        toggle: function(t, e) {
            e = e || this.get_wrapper(), e.is("." + t) ? this.hide(t, e) : this.show(t, e)
        },
        show: function(t, e) {
            e = e || this.get_wrapper(), e.trigger("open").trigger("open.fndtn.offcanvas"), e.addClass(t)
        },
        hide: function(t, e) {
            e = e || this.get_wrapper(), e.trigger("close").trigger("close.fndtn.offcanvas"), e.removeClass(t)
        },
        click_toggle_class: function(t, e) {
            t.preventDefault();
            var i = this.get_wrapper(t);
            this.toggle(e, i)
        },
        click_remove_class: function(t, e) {
            t.preventDefault();
            var i = this.get_wrapper(t);
            this.hide(e, i)
        },
        get_settings: function(t) {
            var e = this.S(t.target).closest("[" + this.attr_name() + "]");
            return e.data(this.attr_name(!0) + "-init") || this.settings
        },
        get_wrapper: function(t) {
            var e = this.S(t ? t.target : this.scope).closest(".off-canvas-wrap");
            return 0 === e.length && (e = this.S(".off-canvas-wrap")), e
        },
        reflow: function() {}
    }
}(jQuery, window, window.document), function($, t, e, i) {
    "use strict";
    function n(t) {
        var e = /fade/i.test(t), i = /pop/i.test(t);
        return {
            animate: e || i,
            pop: i,
            fade: e
        }
    }
    Foundation.libs.reveal = {
        name: "reveal",
        version: "5.5.1",
        locked: !1,
        settings: {
            animation: "fadeAndPop",
            animation_speed: 250,
            close_on_background_click: !0,
            close_on_esc: !0,
            dismiss_modal_class: "close-reveal-modal",
            multiple_opened: !1,
            bg_class: "reveal-modal-bg",
            root_element: "body",
            open: function() {},
            opened: function() {},
            close: function() {},
            closed: function() {},
            bg: $(".reveal-modal-bg"),
            css: {
                open: {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                },
                close: {
                    opacity: 1,
                    visibility: "hidden",
                    display: "none"
                }
            }
        },
        init: function(t, e, i) {
            $.extend(!0, this.settings, e, i), this.bindings(e, i)
        },
        events: function(t) {
            var i = this, n = i.S;
            return n(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function(t) {
                if (t.preventDefault(), !i.locked) {
                    var e = n(this), a = e.data(i.data_attr("reveal-ajax"));
                    if (i.locked=!0, "undefined" == typeof a)
                        i.open.call(i, e);
                    else {
                        var s = a===!0 ? e.attr("href"): a;
                        i.open.call(i, e, {
                            url: s
                        })
                    }
                }
            }), n(e).on("click.fndtn.reveal", this.close_targets(), function(t) {
                if (t.preventDefault(), !i.locked) {
                    var e = n("[" + i.attr_name() + "].open").data(i.attr_name(!0) + "-init") || i.settings, a = n(t.target)[0] === n("." + e.bg_class)[0];
                    if (a) {
                        if (!e.close_on_background_click)
                            return;
                        t.stopPropagation()
                    }
                    i.locked=!0, i.close.call(i, a ? n("[" + i.attr_name() + "].open") : n(this).closest("[" + i.attr_name() + "]"))
                }
            }), n("[" + i.attr_name() + "]", this.scope).length > 0 ? n(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : n(this.scope).on("open.fndtn.reveal", "[" + i.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + i.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + i.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + i.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + i.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + i.attr_name() + "]", this.close_video), !0
        },
        key_up_on: function(t) {
            var e = this;
            return e.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(t) {
                var i = e.S("[" + e.attr_name() + "].open"), n = i.data(e.attr_name(!0) + "-init") || e.settings;
                n && 27 === t.which && n.close_on_esc&&!e.locked && e.close.call(e, i)
            }), !0
        },
        key_up_off: function(t) {
            return this.S("body").off("keyup.fndtn.reveal"), !0
        },
        open: function(e, i) {
            var n = this, a;
            e ? "undefined" != typeof e.selector ? a = n.S("#" + e.data(n.data_attr("reveal-id"))).first() : (a = n.S(this.scope), i = e) : a = n.S(this.scope);
            var s = a.data(n.attr_name(!0) + "-init");
            if (s = s || this.settings, a.hasClass("open") && e.attr("data-reveal-id") == a.attr("id"))
                return n.close(a);
            if (!a.hasClass("open")) {
                var o = n.S("[" + n.attr_name() + "].open");
                if ("undefined" == typeof a.data("css-top") && a.data("css-top", parseInt(a.css("top"), 10)).data("offset", this.cache_offset(a)), this.key_up_on(a), a.on("open.fndtn.reveal").trigger("open.fndtn.reveal"), o.length < 1 && this.toggle_bg(a, !0), "string" == typeof i && (i = {
                    url: i
                }), "undefined" != typeof i && i.url) {
                    var r = "undefined" != typeof i.success ? i.success: null;
                    $.extend(i, {
                        success: function(t, e, i) {
                            if ($.isFunction(r)) {
                                var l = r(t, e, i);
                                "string" == typeof l && (t = l)
                            }
                            a.html(t), n.S(a).foundation("section", "reflow"), n.S(a).children().foundation(), o.length > 0 && (s.multiple_opened ? this.to_back(o) : this.hide(o, s.css.close)), n.show(a, s.css.open)
                        }
                    }), $.ajax(i)
                } else 
                    o.length > 0 && (s.multiple_opened ? this.to_back(o) : this.hide(o, s.css.close)), this.show(a, s.css.open)
            }
            n.S(t).trigger("resize")
        },
        close: function(t) {
            var t = t && t.length ? t: this.S(this.scope), e = this.S("[" + this.attr_name() + "].open"), i = t.data(this.attr_name(!0) + "-init") || this.settings;
            e.length > 0 && (this.locked=!0, this.key_up_off(t), t.trigger("close").trigger("close.fndtn.reveal"), (i.multiple_opened && 1 === e.length ||!i.multiple_opened || t.length > 1) && (this.toggle_bg(t, !1), this.to_front(t)), i.multiple_opened ? (this.hide(t, i.css.close, i), this.to_front($($.makeArray(e).reverse()[1]))) : this.hide(e, i.css.close, i))
        },
        close_targets: function() {
            var t = "." + this.settings.dismiss_modal_class;
            return this.settings.close_on_background_click ? t + ", ." + this.settings.bg_class : t
        },
        toggle_bg: function(t, e) {
            0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = $("<div />", {
                "class": this.settings.bg_class
            }).appendTo("body").hide());
            var n = this.settings.bg.filter(":visible").length > 0;
            e != n && ((e == i ? n : !e) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
        },
        show: function(e, i) {
            if (i) {
                var a = e.data(this.attr_name(!0) + "-init") || this.settings, s = a.root_element;
                if (0 === e.parent(s).length) {
                    var o = e.wrap('<div style="display: none;" />').parent();
                    e.on("closed.fndtn.reveal.wrapped", function() {
                        e.detach().appendTo(o), e.unwrap().unbind("closed.fndtn.reveal.wrapped")
                    }), e.detach().appendTo(s)
                }
                var r = n(a.animation);
                if (r.animate || (this.locked=!1), r.pop) {
                    i.top = $(t).scrollTop() - e.data("offset") + "px";
                    var l = {
                        top: $(t).scrollTop() + e.data("css-top") + "px",
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return e.css(i).animate(l, a.animation_speed, "linear", function() {
                            this.locked=!1, e.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), a.animation_speed / 2)
                }
                if (r.fade) {
                    i.top = $(t).scrollTop() + e.data("css-top") + "px";
                    var l = {
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return e.css(i).animate(l, a.animation_speed, "linear", function() {
                            this.locked=!1, e.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), a.animation_speed / 2)
                }
                return e.css(i).show().css({
                    opacity: 1
                }).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")
            }
            var a = this.settings;
            return n(a.animation).fade ? e.fadeIn(a.animation_speed / 2) : (this.locked=!1, e.show())
        },
        to_back: function(t) {
            t.addClass("toback")
        },
        to_front: function(t) {
            t.removeClass("toback")
        },
        hide: function(e, i) {
            if (i) {
                var a = e.data(this.attr_name(!0) + "-init");
                a = a || this.settings;
                var s = n(a.animation);
                if (s.animate || (this.locked=!1), s.pop) {
                    var o = {
                        top: - $(t).scrollTop() - e.data("offset") + "px",
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return e.animate(o, a.animation_speed, "linear", function() {
                            this.locked=!1, e.css(i).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this), a.animation_speed / 2)
                }
                if (s.fade) {
                    var o = {
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return e.animate(o, a.animation_speed, "linear", function() {
                            this.locked=!1, e.css(i).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this), a.animation_speed / 2)
                }
                return e.hide().css(i).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")
            }
            var a = this.settings;
            return n(a.animation).fade ? e.fadeOut(a.animation_speed / 2) : e.hide()
        },
        close_video: function(t) {
            var e = $(".flex-video", t.target), i = $("iframe", e);
            i.length > 0 && (i.attr("data-src", i[0].src), i.attr("src", i.attr("src")), e.hide())
        },
        open_video: function(t) {
            var e = $(".flex-video", t.target), n = e.find("iframe");
            if (n.length > 0) {
                var a = n.attr("data-src");
                if ("string" == typeof a)
                    n[0].src = n.attr("data-src");
                else {
                    var s = n[0].src;
                    n[0].src = i, n[0].src = s
                }
                e.show()
            }
        },
        data_attr: function(t) {
            return this.namespace.length > 0 ? this.namespace + "-" + t : t
        },
        cache_offset: function(t) {
            var e = t.show().height() + parseInt(t.css("top"), 10);
            return t.hide(), e
        },
        off: function() {
            $(this.scope).off(".fndtn.reveal")
        },
        reflow: function() {}
    }
}(jQuery, window, window.document), function($, t, e, i) {
    "use strict";
    Foundation.libs.slider = {
        name: "slider",
        version: "5.5.1",
        settings: {
            start: 0,
            end: 100,
            step: 1,
            precision: null,
            initial: null,
            display_selector: "",
            vertical: !1,
            trigger_input_change: !1,
            on_change: function() {}
        },
        cache: {},
        init: function(t, e, i) {
            Foundation.inherit(this, "throttle"), this.bindings(e, i), this.reflow()
        },
        events: function() {
            var e = this;
            $(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider", "[" + e.attr_name() + "]:not(.disabled, [disabled]) .range-slider-handle", function(t) {
                e.cache.active || (t.preventDefault(), e.set_active_slider($(t.target)))
            }).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider", function(i) {
                if (e.cache.active)
                    if (i.preventDefault(), $.data(e.cache.active[0], "settings").vertical) {
                        var n = 0;
                        i.pageY || (n = t.scrollY), e.calculate_position(e.cache.active, e.get_cursor_position(i, "y") + n)
                    } else 
                        e.calculate_position(e.cache.active, e.get_cursor_position(i, "x"))
            }).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider", function(t) {
                e.remove_active_slider()
            }).on("change.fndtn.slider", function(t) {
                e.settings.on_change()
            }), e.S(t).on("resize.fndtn.slider", e.throttle(function(t) {
                e.reflow()
            }, 300))
        },
        get_cursor_position: function(t, e) {
            var i = "page" + e.toUpperCase(), n = "client" + e.toUpperCase(), a;
            return "undefined" != typeof t[i] ? a = t[i] : "undefined" != typeof t.originalEvent[n] ? a = t.originalEvent[n] : t.originalEvent.touches && t.originalEvent.touches[0] && "undefined" != typeof t.originalEvent.touches[0][n] ? a = t.originalEvent.touches[0][n] : t.currentPoint && "undefined" != typeof t.currentPoint[e] && (a = t.currentPoint[e]), a
        },
        set_active_slider: function(t) {
            this.cache.active = t
        },
        remove_active_slider: function() {
            this.cache.active = null
        },
        calculate_position: function(t, e) {
            var i = this, n = $.data(t[0], "settings"), a = $.data(t[0], "handle_l"), s = $.data(t[0], "handle_o"), o = $.data(t[0], "bar_l"), r = $.data(t[0], "bar_o");
            requestAnimationFrame(function() {
                var a;
                a = Foundation.rtl&&!n.vertical ? i.limit_to((r + o - e) / o, 0, 1) : i.limit_to((e - r) / o, 0, 1), a = n.vertical ? 1 - a : a;
                var s = i.normalized_value(a, n.start, n.end, n.step, n.precision);
                i.set_ui(t, s)
            })
        },
        set_ui: function(t, e) {
            var i = $.data(t[0], "settings"), n = $.data(t[0], "handle_l"), a = $.data(t[0], "bar_l"), s = this.normalized_percentage(e, i.start, i.end), o = s * (a - n) - 1, r = 100 * s, l = t.parent(), d = t.parent().children("input[type=hidden]");
            Foundation.rtl&&!i.vertical && (o =- o), o = i.vertical?-o + a - n + 1 : o, this.set_translate(t, o, i.vertical), i.vertical ? t.siblings(".range-slider-active-segment").css("height", r + "%") : t.siblings(".range-slider-active-segment").css("width", r + "%"), l.attr(this.attr_name(), e).trigger("change").trigger("change.fndtn.slider"), d.val(e), i.trigger_input_change && d.trigger("change"), t[0].hasAttribute("aria-valuemin") || t.attr({
                "aria-valuemin": i.start,
                "aria-valuemax": i.end
            }), t.attr("aria-valuenow", e), "" != i.display_selector && $(i.display_selector).each(function() {
                this.hasOwnProperty("value") ? $(this).val(e) : $(this).text(e)
            })
        },
        normalized_percentage: function(t, e, i) {
            return Math.min(1, (t - e) / (i - e))
        },
        normalized_value: function(t, e, i, n, a) {
            var s = i - e, o = t * s, r = (o - o%n) / n, l = o%n, d = l >= .5 * n ? n: 0;
            return (r * n + d + e).toFixed(a)
        },
        set_translate: function(t, e, i) {
            i ? $(t).css("-webkit-transform", "translateY(" + e + "px)").css("-moz-transform", "translateY(" + e + "px)").css("-ms-transform", "translateY(" + e + "px)").css("-o-transform", "translateY(" + e + "px)").css("transform", "translateY(" + e + "px)") : $(t).css("-webkit-transform", "translateX(" + e + "px)").css("-moz-transform", "translateX(" + e + "px)").css("-ms-transform", "translateX(" + e + "px)").css("-o-transform", "translateX(" + e + "px)").css("transform", "translateX(" + e + "px)")
        },
        limit_to: function(t, e, i) {
            return Math.min(Math.max(t, e), i)
        },
        initialize_settings: function(t) {
            var e = $.extend({}, this.settings, this.data_options($(t).parent())), i;
            null === e.precision && (i = ("" + e.step).match(/\.([\d]*)/), e.precision = i && i[1] ? i[1].length : 0), e.vertical ? ($.data(t, "bar_o", $(t).parent().offset().top), $.data(t, "bar_l", $(t).parent().outerHeight()), $.data(t, "handle_o", $(t).offset().top), $.data(t, "handle_l", $(t).outerHeight())) : ($.data(t, "bar_o", $(t).parent().offset().left), $.data(t, "bar_l", $(t).parent().outerWidth()), $.data(t, "handle_o", $(t).offset().left), $.data(t, "handle_l", $(t).outerWidth())), $.data(t, "bar", $(t).parent()), $.data(t, "settings", e)
        },
        set_initial_position: function(t) {
            var e = $.data(t.children(".range-slider-handle")[0], "settings"), i = "number" != typeof e.initial || isNaN(e.initial) ? Math.floor(.5 * (e.end - e.start) / e.step) * e.step + e.start: e.initial, n = t.children(".range-slider-handle");
            this.set_ui(n, i)
        },
        set_value: function(t) {
            var e = this;
            $("[" + e.attr_name() + "]", this.scope).each(function() {
                $(this).attr(e.attr_name(), t)
            }), $(this.scope).attr(e.attr_name()) && $(this.scope).attr(e.attr_name(), t), e.reflow()
        },
        reflow: function() {
            var t = this;
            t.S("[" + this.attr_name() + "]").each(function() {
                var e = $(this).children(".range-slider-handle")[0], i = $(this).attr(t.attr_name());
                t.initialize_settings(e), i ? t.set_ui($(e), parseFloat(i)) : t.set_initial_position($(this))
            })
        }
    }
}(jQuery, window, window.document), function($, t, e, i) {
    "use strict";
    Foundation.libs.tab = {
        name: "tab",
        version: "5.5.1",
        settings: {
            active_class: "active",
            callback: function() {},
            deep_linking: !1,
            scroll_to_content: !0,
            is_hover: !1
        },
        default_tab_hashes: [],
        init: function(e, i, n) {
            var a = this, s = this.S;
            this.bindings(i, n), a.entry_location = t.location.href, this.handle_location_hash_change(), s("[" + this.attr_name() + "] > .active > a", this.scope).each(function() {
                a.default_tab_hashes.push(this.hash)
            })
        },
        events: function() {
            var e = this, i = this.S, n = function(t) {
                var n = i(this).closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init");
                (!n.is_hover || Modernizr.touch) && (t.preventDefault(), t.stopPropagation(), e.toggle_active_tab(i(this).parent()))
            };
            i(this.scope).off(".tab").on("focus.fndtn.tab", "[" + this.attr_name() + "] > * > a", n).on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", n).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(t) {
                var n = i(this).closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init");
                n.is_hover && e.toggle_active_tab(i(this).parent())
            }), i(t).on("hashchange.fndtn.tab", function(t) {
                t.preventDefault(), e.handle_location_hash_change()
            })
        },
        handle_location_hash_change: function() {
            var t = this, e = this.S;
            e("[" + this.attr_name() + "]", this.scope).each(function() {
                var n = e(this).data(t.attr_name(!0) + "-init");
                if (n.deep_linking) {
                    var a;
                    if (a = n.scroll_to_content ? t.scope.location.hash : t.scope.location.hash.replace("fndtn-", ""), "" != a) {
                        var s = e(a);
                        if (s.hasClass("content") && s.parent().hasClass("tabs-content"))
                            t.toggle_active_tab($("[" + t.attr_name() + "] > * > a[href=" + a + "]").parent());
                        else {
                            var o = s.closest(".content").attr("id");
                            o != i && t.toggle_active_tab($("[" + t.attr_name() + "] > * > a[href=#" + o + "]").parent(), a)
                        }
                    } else 
                        for (var r = 0; r < t.default_tab_hashes.length; r++)
                            t.toggle_active_tab($("[" + t.attr_name() + "] > * > a[href=" + t.default_tab_hashes[r] + "]").parent())
                }
            })
        },
        toggle_active_tab: function(n, a) {
            var s = this, o = s.S, r = n.closest("[" + this.attr_name() + "]"), l = n.find("a"), d = n.children("a").first(), c = "#" + d.attr("href").split("#")[1], h = o(c), u = n.siblings(), f = r.data(this.attr_name(!0) + "-init"), p = function(t) {
                var i = $(this), n = $(this).parents("li").prev().children('[role="tab"]'), a = $(this).parents("li").next().children('[role="tab"]'), s;
                switch (t.keyCode) {
                case 37:
                    s = n;
                    break;
                case 39:
                    s = a;
                    break;
                default:
                    s=!1
                }
                s.length && (i.attr({
                    tabindex: "-1",
                    "aria-selected": null
                }), s.attr({
                    tabindex: "0",
                    "aria-selected": !0
                }).focus()), $('[role="tabpanel"]').attr("aria-hidden", "true"), $("#" + $(e.activeElement).attr("href").substring(1)).attr("aria-hidden", null)
            }, m = function(e) {
                var i = t.location.href === s.entry_location, n = f.scroll_to_content ? s.default_tab_hashes[0]: i ? t.location.hash: "fndtn-" + s.default_tab_hashes[0].replace("#", "");
                i && e === n || (t.location.hash = e)
            };
            o(this).data(this.data_attr("tab-content")) && (c = "#" + o(this).data(this.data_attr("tab-content")).split("#")[1], h = o(c)), f.deep_linking && (f.scroll_to_content ? (m(a || c), a == i || a == c ? n.parent()[0].scrollIntoView() : o(c)[0].scrollIntoView()) : m(a != i ? "fndtn-" + a.replace("#", "") : "fndtn-" + c.replace("#", ""))), n.addClass(f.active_class).triggerHandler("opened"), l.attr({
                "aria-selected": "true",
                tabindex: 0
            }), u.removeClass(f.active_class), u.find("a").attr({
                "aria-selected": "false",
                tabindex: - 1
            }), h.siblings().removeClass(f.active_class).attr({
                "aria-hidden": "true",
                tabindex: - 1
            }), h.addClass(f.active_class).attr("aria-hidden", "false").removeAttr("tabindex"), f.callback(n), h.triggerHandler("toggled", [n]), r.triggerHandler("toggled", [h]), l.off("keydown").on("keydown", p)
        },
        data_attr: function(t) {
            return this.namespace.length > 0 ? this.namespace + "-" + t : t
        },
        off: function() {},
        reflow: function() {}
    }
}(jQuery, window, window.document), function($, t, e, i) {
    "use strict";
    Foundation.libs.tooltip = {
        name: "tooltip",
        version: "5.5.1",
        settings: {
            additional_inheritable_classes: [],
            tooltip_class: ".tooltip",
            append_to: "body",
            touch_close_text: "Tap To Close",
            disable_for_touch: !1,
            hover_delay: 200,
            show_on: "all",
            tip_template: function(t, e) {
                return '<span data-selector="' + t + '" id="' + t + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '" role="tooltip">' + e + '<span class="nub"></span></span>'
            }
        },
        cache: {},
        init: function(t, e, i) {
            Foundation.inherit(this, "random_str"), this.bindings(e, i)
        },
        should_show: function(t, e) {
            var i = $.extend({}, this.settings, this.data_options(t));
            return "all" === i.show_on?!0 : this.small() && "small" === i.show_on?!0 : this.medium() && "medium" === i.show_on?!0 : this.large() && "large" === i.show_on?!0 : !1
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches
        },
        events: function(t) {
            var e = this, i = e.S;
            e.create(this.S(t)), $(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function(t) {
                var n = i(this), a = $.extend({}, e.settings, e.data_options(n)), s=!1;
                if (Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type) && i(t.target).is("a"))
                    return !1;
                if (/mouse/i.test(t.type) && e.ie_touch(t))
                    return !1;
                if (n.hasClass("open"))
                    Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type) && t.preventDefault(), e.hide(n);
                else {
                    if (a.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type))
                        return;
                    !a.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type) && (t.preventDefault(), i(a.tooltip_class + ".open").hide(), s=!0), /enter|over/i.test(t.type) ? this.timer = setTimeout(function() {
                        var t = e.showTip(n)
                    }.bind(this), e.settings.hover_delay) : "mouseout" === t.type || "mouseleave" === t.type ? (clearTimeout(this.timer), e.hide(n)) : e.showTip(n)
                }
            }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function(t) {
                return /mouse/i.test(t.type) && e.ie_touch(t)?!1 : void(("touch" != $(this).data("tooltip-open-event-type") || "mouseleave" != t.type) && ("mouse" == $(this).data("tooltip-open-event-type") && /MSPointerDown|touchstart/i.test(t.type) ? e.convert_to_touch($(this)) : e.hide($(this))))
            }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function(t) {
                e.hide(i(this))
            })
        },
        ie_touch: function(t) {
            return !1
        },
        showTip: function(t) {
            var e = this.getTip(t);
            return this.should_show(t, e) ? this.show(t) : void 0
        },
        getTip: function(t) {
            var e = this.selector(t), i = $.extend({}, this.settings, this.data_options(t)), n = null;
            return e && (n = this.S('span[data-selector="' + e + '"]' + i.tooltip_class)), "object" == typeof n ? n : !1
        },
        selector: function(t) {
            var e = t.attr("id"), i = t.attr(this.attr_name()) || t.attr("data-selector");
            return (e && e.length < 1 ||!e) && "string" != typeof i && (i = this.random_str(6), t.attr("data-selector", i).attr("aria-describedby", i)), e && e.length > 0 ? e : i
        },
        create: function(e) {
            var i = this, n = $.extend({}, this.settings, this.data_options(e)), a = this.settings.tip_template;
            "string" == typeof n.tip_template && t.hasOwnProperty(n.tip_template) && (a = t[n.tip_template]);
            var s = $(a(this.selector(e), $("<div></div>").html(e.attr("title")).html())), o = this.inheritable_classes(e);
            s.addClass(o).appendTo(n.append_to), Modernizr.touch && (s.append('<span class="tap-to-close">' + n.touch_close_text + "</span>"), s.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function(t) {
                i.hide(e)
            })), e.removeAttr("title").attr("title", "")
        },
        reposition: function(t, e, i) {
            var n, a, s, o, r, l;
            if (e.css("visibility", "hidden").show(), n = t.data("width"), a = e.children(".nub"), s = a.outerHeight(), o = a.outerHeight(), e.css(this.small() ? {
                width: "100%"
            } : {
                width: n ? n: "auto"
            }), l = function(t, e, i, n, a, s) {
                return t.css({
                    top: e ? e: "auto",
                    bottom: n ? n: "auto",
                    left: a ? a: "auto",
                    right: i ? i: "auto"
                }).end()
            }, l(e, t.offset().top + t.outerHeight() + 10, "auto", "auto", t.offset().left), this.small())
                l(e, t.offset().top + t.outerHeight() + 10, "auto", "auto", 12.5, $(this.scope).width()), e.addClass("tip-override"), l(a, - s, "auto", "auto", t.offset().left);
            else {
                var d = t.offset().left;
                Foundation.rtl && (a.addClass("rtl"), d = t.offset().left + t.outerWidth() - e.outerWidth()), l(e, t.offset().top + t.outerHeight() + 10, "auto", "auto", d), e.removeClass("tip-override"), i && i.indexOf("tip-top")>-1 ? (Foundation.rtl && a.addClass("rtl"), l(e, t.offset().top - e.outerHeight(), "auto", "auto", d).removeClass("tip-override")) : i && i.indexOf("tip-left")>-1 ? (l(e, t.offset().top + t.outerHeight() / 2 - e.outerHeight() / 2, "auto", "auto", t.offset().left - e.outerWidth() - s).removeClass("tip-override"), a.removeClass("rtl")) : i && i.indexOf("tip-right")>-1 && (l(e, t.offset().top + t.outerHeight() / 2 - e.outerHeight() / 2, "auto", "auto", t.offset().left + t.outerWidth() + s).removeClass("tip-override"), a.removeClass("rtl"))
            }
            e.css("visibility", "visible").hide()
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches
        },
        inheritable_classes: function(t) {
            var e = $.extend({}, this.settings, this.data_options(t)), i = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(e.additional_inheritable_classes), n = t.attr("class"), a = n ? $.map(n.split(" "), function(t, e) {
                return - 1 !== $.inArray(t, i) ? t : void 0
            }).join(" "): "";
            return $.trim(a)
        },
        convert_to_touch: function(t) {
            var e = this, i = e.getTip(t), n = $.extend({}, e.settings, e.data_options(t));
            0 === i.find(".tap-to-close").length && (i.append('<span class="tap-to-close">' + n.touch_close_text + "</span>"), i.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function(i) {
                e.hide(t)
            })), t.data("tooltip-open-event-type", "touch")
        },
        show: function(t) {
            var e = this.getTip(t);
            "touch" == t.data("tooltip-open-event-type") && this.convert_to_touch(t), this.reposition(t, e, t.attr("class")), t.addClass("open"), e.fadeIn(150)
        },
        hide: function(t) {
            var e = this.getTip(t);
            e.fadeOut(150, function() {
                e.find(".tap-to-close").remove(), e.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"), t.removeClass("open")
            })
        },
        off: function() {
            var t = this;
            this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function(e) {
                $("[" + t.attr_name() + "]").eq(e).attr("title", $(this).text())
            }).remove()
        },
        reflow: function() {}
    }
}(jQuery, window, window.document), function($, t, e, i) {
    "use strict";
    Foundation.libs.topbar = {
        name: "topbar",
        version: "5.5.1",
        settings: {
            index: 0,
            sticky_class: "sticky",
            custom_back_text: !0,
            back_text: "Back",
            mobile_show_parent_link: !0,
            is_hover: !0,
            scrolltop: !0,
            sticky_on: "all"
        },
        init: function(t, e, i) {
            Foundation.inherit(this, "add_custom_rule register_media throttle");
            var n = this;
            n.register_media("topbar", "foundation-mq-topbar"), this.bindings(e, i), n.S("[" + this.attr_name() + "]", this.scope).each(function() {
                var t = $(this), e = t.data(n.attr_name(!0) + "-init"), i = n.S("section, .top-bar-section", this);
                t.data("index", 0);
                var a = t.parent();
                a.hasClass("fixed") || n.is_sticky(t, a, e) ? (n.settings.sticky_class = e.sticky_class, n.settings.sticky_topbar = t, t.data("height", a.outerHeight()), t.data("stickyoffset", a.offset().top)) : t.data("height", t.outerHeight()), e.assembled || n.assemble(t), e.is_hover ? n.S(".has-dropdown", t).addClass("not-click") : n.S(".has-dropdown", t).removeClass("not-click"), n.add_custom_rule(".f-topbar-fixed { padding-top: " + t.data("height") + "px }"), a.hasClass("fixed") && n.S("body").addClass("f-topbar-fixed")
            })
        },
        is_sticky: function(t, e, i) {
            var n = e.hasClass(i.sticky_class), a = matchMedia(Foundation.media_queries.small).matches, s = matchMedia(Foundation.media_queries.medium).matches, o = matchMedia(Foundation.media_queries.large).matches;
            return n && "all" === i.sticky_on?!0 : n && this.small()&&-1 !== i.sticky_on.indexOf("small") && a&&!s&&!o?!0 : n && this.medium()&&-1 !== i.sticky_on.indexOf("medium") && a && s&&!o?!0 : n && this.large()&&-1 !== i.sticky_on.indexOf("large") && a && s && o?!0 : n && navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?!0 : !1
        },
        toggle: function(e) {
            var i = this, n;
            n = e ? i.S(e).closest("[" + this.attr_name() + "]") : i.S("[" + this.attr_name() + "]");
            var a = n.data(this.attr_name(!0) + "-init"), s = i.S("section, .top-bar-section", n);
            i.breakpoint() && (i.rtl ? (s.css({
                right: "0%"
            }), $(">.name", s).css({
                right: "100%"
            })) : (s.css({
                left: "0%"
            }), $(">.name", s).css({
                left: "100%"
            })), i.S("li.moved", s).removeClass("moved"), n.data("index", 0), n.toggleClass("expanded").css("height", "")), a.scrolltop ? n.hasClass("expanded") ? n.parent().hasClass("fixed") && (a.scrolltop ? (n.parent().removeClass("fixed"), n.addClass("fixed"), i.S("body").removeClass("f-topbar-fixed"), t.scrollTo(0, 0)) : n.parent().removeClass("expanded")) : n.hasClass("fixed") && (n.parent().addClass("fixed"), n.removeClass("fixed"), i.S("body").addClass("f-topbar-fixed")) : (i.is_sticky(n, n.parent(), a) && n.parent().addClass("fixed"), n.parent().hasClass("fixed") && (n.hasClass("expanded") ? (n.addClass("fixed"), n.parent().addClass("expanded"), i.S("body").addClass("f-topbar-fixed")) : (n.removeClass("fixed"), n.parent().removeClass("expanded"), i.update_sticky_positioning())))
        },
        timer: null,
        events: function(e) {
            var i = this, n = this.S;
            n(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function(t) {
                t.preventDefault(), i.toggle(this)
            }).on("click.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function(t) {
                var e = $(this).closest("li");
                !i.breakpoint() || e.hasClass("back") || e.hasClass("has-dropdown") || i.toggle()
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function(t) {
                var e = n(this), a = n(t.target), s = e.closest("[" + i.attr_name() + "]"), o = s.data(i.attr_name(!0) + "-init");
                return a.data("revealId") ? void i.toggle() : void(i.breakpoint() || (!o.is_hover || Modernizr.touch) && (t.stopImmediatePropagation(), e.hasClass("hover") ? (e.removeClass("hover").find("li").removeClass("hover"), e.parents("li.hover").removeClass("hover")) : (e.addClass("hover"), $(e).siblings().removeClass("hover"), "A" === a[0].nodeName && a.parent().hasClass("has-dropdown") && t.preventDefault())))
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function(t) {
                if (i.breakpoint()) {
                    t.preventDefault();
                    var e = n(this), a = e.closest("[" + i.attr_name() + "]"), s = a.find("section, .top-bar-section"), o = e.next(".dropdown").outerHeight(), r = e.closest("li");
                    a.data("index", a.data("index") + 1), r.addClass("moved"), i.rtl ? (s.css({
                        right: - (100 * a.data("index")) + "%"
                    }), s.find(">.name").css({
                        right: 100 * a.data("index") + "%"
                    })) : (s.css({
                        left: - (100 * a.data("index")) + "%"
                    }), s.find(">.name").css({
                        left: 100 * a.data("index") + "%"
                    })), a.css("height", e.siblings("ul").outerHeight(!0) + a.data("height"))
                }
            }), n(t).off(".topbar").on("resize.fndtn.topbar", i.throttle(function() {
                i.resize.call(i)
            }, 50)).trigger("resize").trigger("resize.fndtn.topbar").load(function() {
                n(this).trigger("resize.fndtn.topbar")
            }), n("body").off(".topbar").on("click.fndtn.topbar", function(t) {
                var e = n(t.target).closest("li").closest("li.hover");
                e.length > 0 || n("[" + i.attr_name() + "] li.hover").removeClass("hover")
            }), n(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function(t) {
                t.preventDefault();
                var e = n(this), a = e.closest("[" + i.attr_name() + "]"), s = a.find("section, .top-bar-section"), o = a.data(i.attr_name(!0) + "-init"), r = e.closest("li.moved"), l = r.parent();
                a.data("index", a.data("index") - 1), i.rtl ? (s.css({
                    right: - (100 * a.data("index")) + "%"
                }), s.find(">.name").css({
                    right: 100 * a.data("index") + "%"
                })) : (s.css({
                    left: - (100 * a.data("index")) + "%"
                }), s.find(">.name").css({
                    left: 100 * a.data("index") + "%"
                })), 0 === a.data("index") ? a.css("height", "") : a.css("height", l.outerHeight(!0) + a.data("height")), setTimeout(function() {
                    r.removeClass("moved")
                }, 300)
            }), n(this.scope).find(".dropdown a").focus(function() {
                $(this).parents(".has-dropdown").addClass("hover")
            }).blur(function() {
                $(this).parents(".has-dropdown").removeClass("hover")
            })
        },
        resize: function() {
            var t = this;
            t.S("[" + this.attr_name() + "]").each(function() {
                var i = t.S(this), n = i.data(t.attr_name(!0) + "-init"), a = i.parent("." + t.settings.sticky_class), s;
                if (!t.breakpoint()) {
                    var o = i.hasClass("expanded");
                    i.css("height", "").removeClass("expanded").find("li").removeClass("hover"), o && t.toggle(i)
                }
                t.is_sticky(i, a, n) && (a.hasClass("fixed") ? (a.removeClass("fixed"), s = a.offset().top, t.S(e.body).hasClass("f-topbar-fixed") && (s -= i.data("height")), i.data("stickyoffset", s), a.addClass("fixed")) : (s = a.offset().top, i.data("stickyoffset", s)))
            })
        },
        breakpoint: function() {
            return !matchMedia(Foundation.media_queries.topbar).matches
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches
        },
        assemble: function(t) {
            var e = this, i = t.data(this.attr_name(!0) + "-init"), n = e.S("section, .top-bar-section", t);
            n.detach(), e.S(".has-dropdown>a", n).each(function() {
                var t = e.S(this), n = t.siblings(".dropdown"), a = t.attr("href"), s;
                n.find(".title.back").length || (s = $(1 == i.mobile_show_parent_link && a ? '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-large-up"><a class="parent-link js-generated" href="' + a + '">' + t.html() + "</a></li>" : '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'), $("h5>a", s).html(1 == i.custom_back_text ? i.back_text : "&laquo; " + t.html()), n.prepend(s))
            }), n.appendTo(t), this.sticky(), this.assembled(t)
        },
        assembled: function(t) {
            t.data(this.attr_name(!0), $.extend({}, t.data(this.attr_name(!0)), {
                assembled: !0
            }))
        },
        height: function(t) {
            var e = 0, i = this;
            return $("> li", t).each(function() {
                e += i.S(this).outerHeight(!0)
            }), e
        },
        sticky: function() {
            var e = this;
            this.S(t).on("scroll", function() {
                e.update_sticky_positioning()
            })
        },
        update_sticky_positioning: function() {
            var e = "." + this.settings.sticky_class, i = this.S(t), n = this;
            if (n.settings.sticky_topbar && n.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                var a = this.settings.sticky_topbar.data("stickyoffset");
                n.S(e).hasClass("expanded") || (i.scrollTop() > a ? n.S(e).hasClass("fixed") || (n.S(e).addClass("fixed"), n.S("body").addClass("f-topbar-fixed")) : i.scrollTop() <= a && n.S(e).hasClass("fixed") && (n.S(e).removeClass("fixed"), n.S("body").removeClass("f-topbar-fixed")))
            }
        },
        off: function() {
            this.S(this.scope).off(".fndtn.topbar"), this.S(t).off(".fndtn.topbar")
        },
        reflow: function() {}
    }
}(jQuery, window, window.document), function($) {
    $.extend($.fn, {
        validate: function(t) {
            if (!this.length)
                return void(t && t.debug && window.console && console.warn("nothing selected, can't validate, returning nothing"));
            var e = $.data(this[0], "validator");
            return e ? e : (e = new $.validator(t, this[0]), $.data(this[0], "validator", e), e.settings.onsubmit && (this.find("input, button").filter(".cancel").click(function() {
                e.cancelSubmit=!0
            }), e.settings.submitHandler && this.find("input, button").filter(":submit").click(function() {
                e.submitButton = this
            }), this.submit(function(t) {
                function i() {
                    if (e.settings.submitHandler) {
                        if (e.submitButton)
                            var t = $("<input type='hidden'/>").attr("name", e.submitButton.name).val(e.submitButton.value).appendTo(e.currentForm);
                        return e.settings.submitHandler.call(e, e.currentForm), e.submitButton && t.remove(), !1
                    }
                    return !0
                }
                return e.settings.debug && t.preventDefault(), e.cancelSubmit ? (e.cancelSubmit=!1, i()) : e.form() ? e.pendingRequest ? (e.formSubmitted=!0, !1) : i() : (e.focusInvalid(), !1)
            })), e)
        },
        valid: function() {
            if ($(this[0]).is("form"))
                return this.validate().form();
            var t=!0, e = $(this[0].form).validate();
            return this.each(function() {
                t&=e.element(this)
            }), t
        },
        removeAttrs: function(t) {
            var e = {}, i = this;
            return $.each(t.split(/\s/), function(t, n) {
                e[n] = i.attr(n), i.removeAttr(n)
            }), e
        },
        rules: function(t, e) {
            var i = this[0];
            if (t) {
                var n = $.data(i.form, "validator").settings, a = n.rules, s = $.validator.staticRules(i);
                switch (t) {
                case"add":
                    $.extend(s, $.validator.normalizeRule(e)), a[i.name] = s, e.messages && (n.messages[i.name] = $.extend(n.messages[i.name], e.messages));
                    break;
                case"remove":
                    if (!e)
                        return delete a[i.name], s;
                    var o = {};
                    return $.each(e.split(/\s/), function(t, e) {
                        o[e] = s[e], delete s[e]
                    }), o
                }
            }
            var r = $.validator.normalizeRules($.extend({}, $.validator.metadataRules(i), $.validator.classRules(i), $.validator.attributeRules(i), $.validator.staticRules(i)), i);
            if (r.required) {
                var l = r.required;
                delete r.required, r = $.extend({
                    required: l
                }, r)
            }
            return r
        }
    }), $.extend($.expr[":"], {
        blank: function(t) {
            return !$.trim("" + t.value)
        },
        filled: function(t) {
            return !!$.trim("" + t.value)
        },
        unchecked: function(t) {
            return !t.checked
        }
    }), $.validator = function(t, e) {
        this.settings = $.extend(!0, {}, $.validator.defaults, t), this.currentForm = e, this.init()
    }, $.validator.format = function(t, e) {
        return 1 == arguments.length ? function() {
            var e = $.makeArray(arguments);
            return e.unshift(t), $.validator.format.apply(this, e)
        } : (arguments.length > 2 && e.constructor != Array && (e = $.makeArray(arguments).slice(1)), e.constructor != Array && (e = [e]), $.each(e, function(e, i) {
            t = t.replace(new RegExp("\\{" + e + "\\}", "g"), i)
        }), t)
    }, $.extend($.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: $([]),
            errorLabelContainer: $([]),
            onsubmit: !0,
            ignore: [],
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t, this.settings.focusCleanup&&!this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.errorsFor(t).hide())
            },
            onfocusout: function(t) {
                this.checkable(t) ||!(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function(t) {
                (t.name in this.submitted || t == this.lastElement) && this.element(t)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(t, e, i) {
                $(t).addClass(e).removeClass(i)
            },
            unhighlight: function(t, e, i) {
                $(t).removeClass(e).addClass(i)
            }
        },
        setDefaults: function(t) {
            $.extend($.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            accept: "Please enter a value with a valid extension.",
            maxlength: $.validator.format("Please enter no more than {0} characters."),
            minlength: $.validator.format("Please enter at least {0} characters."),
            rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
            range: $.validator.format("Please enter a value between {0} and {1}."),
            max: $.validator.format("Please enter a value less than or equal to {0}."),
            min: $.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function t(t) {
                    var e = $.data(this[0].form, "validator"), i = "on" + t.type.replace(/^validate/, "");
                    e.settings[i] && e.settings[i].call(e, this[0])
                }
                this.labelContainer = $(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm), this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var e = this.groups = {};
                $.each(this.settings.groups, function(t, i) {
                    $.each(i.split(/\s/), function(i, n) {
                        e[n] = t
                    })
                });
                var i = this.settings.rules;
                $.each(i, function(t, e) {
                    i[t] = $.validator.normalizeRule(e)
                }), $(this.currentForm).validateDelegate(":text, :password, :file, select, textarea", "focusin focusout keyup", t).validateDelegate(":radio, :checkbox, select, option", "click", t), this.settings.invalidHandler && $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(), $.extend(this.submitted, this.errorMap), this.invalid = $.extend({}, this.errorMap), this.valid() || $(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++)
                    this.check(e[t]);
                return this.valid()
            },
            element: function(t) {
                t = this.clean(t), this.lastElement = t, this.prepareElement(t), this.currentElements = $(t);
                var e = this.check(t);
                return e ? delete this.invalid[t.name] : this.invalid[t.name]=!0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
            },
            showErrors: function(t) {
                if (t) {
                    $.extend(this.errorMap, t), this.errorList = [];
                    for (var e in t)
                        this.errorList.push({
                            message: t[e],
                            element: this.findByName(e)[0]
                        });
                    this.successList = $.grep(this.successList, function(e) {
                        return !(e.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                $.fn.resetForm && $(this.currentForm).resetForm(), this.submitted = {}, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e = 0;
                for (var i in t)
                    e++;
                return e
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 == this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 == $.grep(this.errorList, function(e) {
                    return e.element.name == t.name
                }).length && t
            },
            elements: function() {
                var t = this, e = {};
                return $([]).add(this.currentForm.elements).filter(":input").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in e ||!t.objectLength($(this).rules())?!1 : (e[this.name]=!0, !0)
                })
            },
            clean: function(t) {
                return $(t)[0]
            },
            errors: function() {
                return $(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = $([]), this.toHide = $([]), this.currentElements = $([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(), this.toHide = this.errorsFor(t)
            },
            check: function(t) {
                t = this.clean(t), this.checkable(t) && (t = this.findByName(t.name)[0]);
                var e = $(t).rules(), i=!1;
                for (method in e) {
                    var n = {
                        method: method,
                        parameters: e[method]
                    };
                    try {
                        var a = $.validator.methods[method].call(this, t.value.replace(/\r/g, ""), t, n.parameters);
                        if ("dependency-mismatch" == a) {
                            i=!0;
                            continue
                        }
                        if (i=!1, "pending" == a)
                            return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!a)
                            return this.formatAndAdd(t, n), !1
                    } catch (s) {
                        throw this.settings.debug && window.console && console.log("exception occured when checking element " + t.id + ", check the '" + n.method + "' method", s), s
                    }
                }
                return i ? void 0 : (this.objectLength(e) && this.successList.push(t), !0)
            },
            customMetaMessage: function(t, e) {
                if ($.metadata) {
                    var i = this.settings.meta ? $(t).metadata()[this.settings.meta]: $(t).metadata();
                    return i && i.messages && i.messages[e]
                }
            },
            customMessage: function(t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor == String ? i : i[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t])
                        return arguments[t];
                return void 0
            },
            defaultMessage: function(t, e) {
                return this.findDefined(this.customMessage(t.name, e), this.customMetaMessage(t, e), !this.settings.ignoreTitle && t.title || void 0, $.validator.messages[e], "<strong>Warning: No message defined for " + t.name + "</strong>")
            },
            formatAndAdd: function(t, e) {
                var i = this.defaultMessage(t, e.method), n = /\$?\{(\d+)\}/g;
                "function" == typeof i ? i = i.call(this, e.parameters, t) : n.test(i) && (i = jQuery.format(i.replace(n, "{$1}"), e.parameters)), this.errorList.push({
                    message: i,
                    element: t
                }), this.errorMap[t.name] = i, this.submitted[t.name] = i
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            },
            defaultShowErrors: function() {
                for (var t = 0; this.errorList[t]; t++) {
                    var e = this.errorList[t];
                    this.settings.highlight && this.settings.highlight.call(this, e.element, this.settings.errorClass, this.settings.validClass), this.showLabel(e.element, e.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (var t = 0; this.successList[t]; t++)
                        this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (var t = 0, i = this.validElements(); i[t]; t++)
                        this.settings.unhighlight.call(this, i[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return $(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, e) {
                var i = this.errorsFor(t);
                i.length ? (i.removeClass().addClass(this.settings.errorClass), i.attr("generated") && i.html(e)) : (i = $("<" + this.settings.errorElement + "/>").attr({
                    "for": this.idOrName(t),
                    generated: !0
                }).addClass(this.settings.errorClass).html(e || ""), this.settings.wrapper && (i = i.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(i).length || (this.settings.errorPlacement ? this.settings.errorPlacement(i, $(t)) : i.insertAfter(t))), !e && this.settings.success && (i.text(""), "string" == typeof this.settings.success ? i.addClass(this.settings.success) : this.settings.success(i)), this.toShow = this.toShow.add(i)
            },
            errorsFor: function(t) {
                var e = this.idOrName(t);
                return this.errors().filter(function() {
                    return $(this).attr("for") == e
                })
            },
            idOrName: function(t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(t) {
                var e = this.currentForm;
                return $(document.getElementsByName(t)).map(function(i, n) {
                    return n.form == e && n.name == t && n || null
                })
            },
            getLength: function(t, e) {
                switch (e.nodeName.toLowerCase()) {
                case"select":
                    return $("option:selected", e).length;
                case"input":
                    if (this.checkable(e))
                        return this.findByName(e.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(t, e) {
                return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
            },
            dependTypes: {
                "boolean": function(t, e) {
                    return t
                },
                string: function(t, e) {
                    return !!$(t, e.form).length
                },
                "function": function(t, e) {
                    return t(e)
                }
            },
            optional: function(t) {
                return !$.validator.methods.required.call(this, $.trim(t.value), t) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++, this.pending[t.name]=!0)
            },
            stopRequest: function(t, e) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e && 0 == this.pendingRequest && this.formSubmitted && this.form() ? ($(this.currentForm).submit(), this.formSubmitted=!1) : !e && 0 == this.pendingRequest && this.formSubmitted && ($(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted=!1)
            },
            previousValue: function(t) {
                return $.data(t, "previousValue") || $.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            dateDE: {
                dateDE: !0
            },
            number: {
                number: !0
            },
            numberDE: {
                numberDE: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, e) {
            t.constructor == String ? this.classRuleSettings[t] = e : $.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var e = {}, i = $(t).attr("class");
            return i && $.each(i.split(" "), function() {
                this in $.validator.classRuleSettings && $.extend(e, $.validator.classRuleSettings[this])
            }), e
        },
        attributeRules: function(t) {
            var e = {}, i = $(t);
            for (method in $.validator.methods) {
                var n = i.attr(method);
                n && (e[method] = n)
            }
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        metadataRules: function(t) {
            if (!$.metadata)
                return {};
            var e = $.data(t.form, "validator").settings.meta;
            return e ? $(t).metadata()[e] : $(t).metadata()
        },
        staticRules: function(t) {
            var e = {}, i = $.data(t.form, "validator");
            return i.settings.rules && (e = $.validator.normalizeRule(i.settings.rules[t.name]) || {}), e
        },
        normalizeRules: function(t, e) {
            return $.each(t, function(i, n) {
                if (n===!1)
                    return void delete t[i];
                if (n.param || n.depends) {
                    var a=!0;
                    switch (typeof n.depends) {
                    case"string":
                        a=!!$(n.depends, e.form).length;
                        break;
                    case"function":
                        a = n.depends.call(e, e)
                    }
                    a ? t[i] = void 0 !== n.param ? n.param : !0 : delete t[i]
                }
            }), $.each(t, function(i, n) {
                t[i] = $.isFunction(n) ? n(e) : n
            }), $.each(["minlength", "maxlength", "min", "max"], function() {
                t[this] && (t[this] = Number(t[this]))
            }), $.each(["rangelength", "range"], function() {
                t[this] && (t[this] = [Number(t[this][0]), Number(t[this][1])])
            }), $.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t.messages && delete t.messages, t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var e = {};
                $.each(t.split(/\s/), function() {
                    e[this]=!0
                }), t = e
            }
            return t
        },
        addMethod: function(t, e, i) {
            $.validator.methods[t] = e, $.validator.messages[t] = void 0 != i ? i : $.validator.messages[t], e.length < 3 && $.validator.addClassRules(t, $.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, e, i) {
                if (!this.depend(i, e))
                    return "dependency-mismatch";
                switch (e.nodeName.toLowerCase()) {
                case"select":
                    var n = $(e).val();
                    return n && n.length > 0;
                case"input":
                    if (this.checkable(e))
                        return this.getLength(t, e) > 0;
                default:
                    return $.trim(t).length > 0
                }
            },
            remote: function(t, e, i) {
                if (this.optional(e))
                    return "dependency-mismatch";
                var n = this.previousValue(e);
                if (this.settings.messages[e.name] || (this.settings.messages[e.name] = {}), n.originalMessage = this.settings.messages[e.name].remote, this.settings.messages[e.name].remote = n.message, i = "string" == typeof i && {
                    url: i
                }
                || i, n.old !== t) {
                    n.old = t;
                    var a = this;
                    this.startRequest(e);
                    var s = {};
                    return s[e.name] = t, $.ajax($.extend(!0, {
                        url: i,
                        mode: "abort",
                        port: "validate" + e.name,
                        dataType: "json",
                        data: s,
                        success: function(i) {
                            a.settings.messages[e.name].remote = n.originalMessage;
                            var s = i===!0;
                            if (s) {
                                var o = a.formSubmitted;
                                a.prepareElement(e), a.formSubmitted = o, a.successList.push(e), a.showErrors()
                            } else {
                                var r = {}, l = n.message = i || a.defaultMessage(e, "remote");
                                r[e.name] = $.isFunction(l) ? l(t) : l, a.showErrors(r)
                            }
                            n.valid = s, a.stopRequest(e, s)
                        }
                    }, i)), "pending"
                }
                return this.pending[e.name] ? "pending" : n.valid
            },
            minlength: function(t, e, i) {
                return this.optional(e) || this.getLength($.trim(t), e) >= i
            },
            maxlength: function(t, e, i) {
                return this.optional(e) || this.getLength($.trim(t), e) <= i
            },
            rangelength: function(t, e, i) {
                var n = this.getLength($.trim(t), e);
                return this.optional(e) || n >= i[0] && n <= i[1]
            },
            min: function(t, e, i) {
                return this.optional(e) || t >= i
            },
            max: function(t, e, i) {
                return this.optional(e) || i >= t
            },
            range: function(t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            email: function(t, e) {
                return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
            },
            date: function(t, e) {
                return this.optional(e) ||!/Invalid|NaN/.test(new Date(t))
            },
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            creditcard: function(t, e) {
                if (this.optional(e))
                    return "dependency-mismatch";
                if (/[^0-9-]+/.test(t))
                    return !1;
                var i = 0, n = 0, a=!1;
                t = t.replace(/\D/g, "");
                for (var s = t.length - 1; s >= 0; s--) {
                    var o = t.charAt(s), n = parseInt(o, 10);
                    a && (n*=2) > 9 && (n -= 9), i += n, a=!a
                }
                return i%10 == 0
            },
            accept: function(t, e, i) {
                return i = "string" == typeof i ? i.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(e) || t.match(new RegExp(".(" + i + ")$", "i"))
            },
            equalTo: function(t, e, i) {
                var n = $(i).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    $(e).valid()
                });
                return t == n.val()
            }
        }
    }), $.format = $.validator.format
}(jQuery), function($) {
    var t = $.ajax, e = {};
    $.ajax = function(i) {
        i = $.extend(i, $.extend({}, $.ajaxSettings, i));
        var n = i.port;
        return "abort" == i.mode ? (e[n] && e[n].abort(), e[n] = t.apply(this, arguments)) : t.apply(this, arguments)
    }
}(jQuery), function($) {
    jQuery.event.special.focusin || jQuery.event.special.focusout ||!document.addEventListener || $.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        function i(t) {
            return t = $.event.fix(t), t.type = e, $.event.handle.call(this, t)
        }
        $.event.special[e] = {
            setup: function() {
                this.addEventListener(t, i, !0)
            },
            teardown: function() {
                this.removeEventListener(t, i, !0)
            },
            handler: function(t) {
                return arguments[0] = $.event.fix(t), arguments[0].type = e, $.event.handle.apply(this, arguments)
            }
        }
    }), $.extend($.fn, {
        validateDelegate: function(t, e, i) {
            return this.bind(e, function(e) {
                var n = $(e.target);
                return n.is(t) ? i.apply(n, arguments) : void 0
            })
        }
    })
}(jQuery), function(t, e, $, i) {
    "use strict";
    var n = $("html"), a = $(t), s = $(e), o = $.fancybox = function() {
        o.open.apply(this, arguments)
    }, r = navigator.userAgent.match(/msie/i), l = null, d = e.createTouch !== i, c = function(t) {
        return t && t.hasOwnProperty && t instanceof $
    }, h = function(t) {
        return t && "string" === $.type(t)
    }, u = function(t) {
        return h(t) && t.indexOf("%") > 0
    }, f = function(t) {
        return t&&!(t.style.overflow && "hidden" === t.style.overflow) && (t.clientWidth && t.scrollWidth > t.clientWidth || t.clientHeight && t.scrollHeight > t.clientHeight)
    }, p = function(t, e) {
        var i = parseInt(t, 10) || 0;
        return e && u(t) && (i = o.getViewport()[e] / 100 * i), Math.ceil(i)
    }, m = function(t, e) {
        return p(t, e) + "px"
    };
    $.extend(o, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !d,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (r ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: $.noop,
            beforeLoad: $.noop,
            afterLoad: $.noop,
            beforeShow: $.noop,
            afterShow: $.noop,
            beforeChange: $.noop,
            beforeClose: $.noop,
            afterClose: $.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(t, e) {
            return t && ($.isPlainObject(e) || (e = {}), !1 !== o.close(!0)) ? ($.isArray(t) || (t = c(t) ? $(t).get() : [t]), $.each(t, function(n, a) {
                var s = {}, r, l, d, u, f, p, m;
                "object" === $.type(a) && (a.nodeType && (a = $(a)), c(a) ? (s = {
                    href: a.data("fancybox-href") || a.attr("href"),
                    title: a.data("fancybox-title") || a.attr("title"),
                    isDom: !0,
                    element: a
                }, $.metadata && $.extend(!0, s, a.metadata())) : s = a), r = e.href || s.href || (h(a) ? a : null), l = e.title !== i ? e.title : s.title || "", d = e.content || s.content, u = d ? "html" : e.type || s.type, !u && s.isDom && (u = a.data("fancybox-type"), u || (f = a.prop("class").match(/fancybox\.(\w+)/), u = f ? f[1] : null)), h(r) && (u || (o.isImage(r) ? u = "image" : o.isSWF(r) ? u = "swf" : "#" === r.charAt(0) ? u = "inline" : h(a) && (u = "html", d = a)), "ajax" === u && (p = r.split(/\s+/, 2), r = p.shift(), m = p.shift())), d || ("inline" === u ? r ? d = $(h(r) ? r.replace(/.*(?=#[^\s]+$)/, "") : r) : s.isDom && (d = a) : "html" === u ? d = r : u || r ||!s.isDom || (u = "inline", d = a)), $.extend(s, {
                    href: r,
                    type: u,
                    content: d,
                    title: l,
                    selector: m
                }), t[n] = s
            }), o.opts = $.extend(!0, {}, o.defaults, e), e.keys !== i && (o.opts.keys = e.keys ? $.extend({}, o.defaults.keys, e.keys) : !1), o.group = t, o._start(o.opts.index)) : void 0
        },
        cancel: function() {
            var t = o.coming;
            t&&!1 !== o.trigger("onCancel") && (o.hideLoading(), o.ajaxLoad && o.ajaxLoad.abort(), o.ajaxLoad = null, o.imgPreload && (o.imgPreload.onload = o.imgPreload.onerror = null), t.wrap && t.wrap.stop(!0, !0).trigger("onReset").remove(), o.coming = null, o.current || o._afterZoomOut(t))
        },
        close: function(t) {
            o.cancel(), !1 !== o.trigger("beforeClose") && (o.unbindEvents(), o.isActive && (o.isOpen && t!==!0 ? (o.isOpen = o.isOpened=!1, o.isClosing=!0, $(".fancybox-item, .fancybox-nav").remove(), o.wrap.stop(!0, !0).removeClass("fancybox-opened"), o.transitions[o.current.closeMethod]()) : ($(".fancybox-wrap").stop(!0).trigger("onReset").remove(), o._afterZoomOut())))
        },
        play: function(t) {
            var e = function() {
                clearTimeout(o.player.timer)
            }, i = function() {
                e(), o.current && o.player.isActive && (o.player.timer = setTimeout(o.next, o.current.playSpeed))
            }, n = function() {
                e(), s.unbind(".player"), o.player.isActive=!1, o.trigger("onPlayEnd")
            }, a = function() {
                o.current && (o.current.loop || o.current.index < o.group.length - 1) && (o.player.isActive=!0, s.bind({
                    "onCancel.player beforeClose.player": n,
                    "onUpdate.player": i,
                    "beforeLoad.player": e
                }), i(), o.trigger("onPlayStart"))
            };
            t===!0 ||!o.player.isActive && t!==!1 ? a() : n()
        },
        next: function(t) {
            var e = o.current;
            e && (h(t) || (t = e.direction.next), o.jumpto(e.index + 1, t, "next"))
        },
        prev: function(t) {
            var e = o.current;
            e && (h(t) || (t = e.direction.prev), o.jumpto(e.index - 1, t, "prev"))
        },
        jumpto: function(t, e, n) {
            var a = o.current;
            a && (t = p(t), o.direction = e || a.direction[t >= a.index ? "next": "prev"], o.router = n || "jumpto", a.loop && (0 > t && (t = a.group.length + t%a.group.length), t%=a.group.length), a.group[t] !== i && (o.cancel(), o._start(t)))
        },
        reposition: function(t, e) {
            var i = o.current, n = i ? i.wrap: null, a;
            n && (a = o._getPosition(e), t && "scroll" === t.type ? (delete a.position, n.stop(!0, !0).animate(a, 200)) : (n.css(a), i.pos = $.extend({}, i.dim, a)))
        },
        update: function(t) {
            var e = t && t.type, i=!e || "orientationchange" === e;
            i && (clearTimeout(l), l = null), o.isOpen&&!l && (l = setTimeout(function() {
                var n = o.current;
                n&&!o.isClosing && (o.wrap.removeClass("fancybox-tmp"), (i || "load" === e || "resize" === e && n.autoResize) && o._setDimension(), "scroll" === e && n.canShrink || o.reposition(t), o.trigger("onUpdate"), l = null)
            }, i&&!d ? 0 : 300))
        },
        toggle: function(t) {
            o.isOpen && (o.current.fitToView = "boolean" === $.type(t) ? t : !o.current.fitToView, d && (o.wrap.removeAttr("style").addClass("fancybox-tmp"), o.trigger("onUpdate")), o.update())
        },
        hideLoading: function() {
            s.unbind(".loading"), $("#fancybox-loading").remove()
        },
        showLoading: function() {
            var t, e;
            o.hideLoading(), t = $('<div id="fancybox-loading"><div></div></div>').click(o.cancel).appendTo("body"), s.bind("keydown.loading", function(t) {
                27 === (t.which || t.keyCode) && (t.preventDefault(), o.cancel())
            }), o.defaults.fixed || (e = o.getViewport(), t.css({
                position: "absolute",
                top: .5 * e.h + e.y,
                left: .5 * e.w + e.x
            }))
        },
        getViewport: function() {
            var e = o.current && o.current.locked ||!1, i = {
                x: a.scrollLeft(),
                y: a.scrollTop()
            };
            return e ? (i.w = e[0].clientWidth, i.h = e[0].clientHeight) : (i.w = d && t.innerWidth ? t.innerWidth : a.width(), i.h = d && t.innerHeight ? t.innerHeight : a.height()), i
        },
        unbindEvents: function() {
            o.wrap && c(o.wrap) && o.wrap.unbind(".fb"), s.unbind(".fb"), a.unbind(".fb")
        },
        bindEvents: function() {
            var t = o.current, e;
            t && (a.bind("orientationchange.fb" + (d ? "" : " resize.fb") + (t.autoCenter&&!t.locked ? " scroll.fb" : ""), o.update), e = t.keys, e && s.bind("keydown.fb", function(n) {
                var a = n.which || n.keyCode, s = n.target || n.srcElement;
                return 27 === a && o.coming?!1 : void(n.ctrlKey || n.altKey || n.shiftKey || n.metaKey || s && (s.type || $(s).is("[contenteditable]")) || $.each(e, function(e, s) {
                    return t.group.length > 1 && s[a] !== i ? (o[e](s[a]), n.preventDefault(), !1) : $.inArray(a, s)>-1 ? (o[e](), n.preventDefault(), !1) : void 0
                }))
            }), $.fn.mousewheel && t.mouseWheel && o.wrap.bind("mousewheel.fb", function(e, i, n, a) {
                for (var s = e.target || null, r = $(s), l=!1; r.length&&!(l || r.is(".fancybox-skin") || r.is(".fancybox-wrap"));)
                    l = f(r[0]), r = $(r).parent();
                0 === i || l || o.group.length > 1&&!t.canShrink && (a > 0 || n > 0 ? o.prev(a > 0 ? "down" : "left") : (0 > a || 0 > n) && o.next(0 > a ? "up" : "right"), e.preventDefault())
            }))
        },
        trigger: function(t, e) {
            var i, n = e || o.coming || o.current;
            if (n) {
                if ($.isFunction(n[t]) && (i = n[t].apply(n, Array.prototype.slice.call(arguments, 1))), i===!1)
                    return !1;
                n.helpers && $.each(n.helpers, function(e, i) {
                    i && o.helpers[e] && $.isFunction(o.helpers[e][t]) && o.helpers[e][t]($.extend(!0, {}, o.helpers[e].defaults, i), n)
                }), s.trigger(t)
            }
        },
        isImage: function(t) {
            return h(t) && t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(t) {
            return h(t) && t.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(t) {
            var e = {}, i, n, a, s, r;
            if (t = p(t), i = o.group[t] || null, !i)
                return !1;
            if (e = $.extend(!0, {}, o.opts, i), s = e.margin, r = e.padding, "number" === $.type(s) && (e.margin = [s, s, s, s]), "number" === $.type(r) && (e.padding = [r, r, r, r]), e.modal && $.extend(!0, e, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            }), e.autoSize && (e.autoWidth = e.autoHeight=!0), "auto" === e.width && (e.autoWidth=!0), "auto" === e.height && (e.autoHeight=!0), e.group = o.group, e.index = t, o.coming = e, !1 === o.trigger("beforeLoad"))
                return void(o.coming = null);
            if (a = e.type, n = e.href, !a)
                return o.coming = null, o.current && o.router && "jumpto" !== o.router ? (o.current.index = t, o[o.router](o.direction)) : !1;
            if (o.isActive=!0, ("image" === a || "swf" === a) && (e.autoHeight = e.autoWidth=!1, e.scrolling = "visible"), "image" === a && (e.aspectRatio=!0), "iframe" === a && d && (e.scrolling = "scroll"), e.wrap = $(e.tpl.wrap).addClass("fancybox-" + (d ? "mobile" : "desktop") + " fancybox-type-" + a + " fancybox-tmp " + e.wrapCSS).appendTo(e.parent || "body"), $.extend(e, {
                skin: $(".fancybox-skin", e.wrap),
                outer: $(".fancybox-outer", e.wrap),
                inner: $(".fancybox-inner", e.wrap)
            }), $.each(["Top", "Right", "Bottom", "Left"], function(t, i) {
                e.skin.css("padding" + i, m(e.padding[t]))
            }), o.trigger("onReady"), "inline" === a || "html" === a) {
                if (!e.content ||!e.content.length)
                    return o._error("content")
            } else if (!n)
                return o._error("href");
            "image" === a ? o._loadImage() : "ajax" === a ? o._loadAjax() : "iframe" === a ? o._loadIframe() : o._afterLoad()
        },
        _error: function(t) {
            $.extend(o.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: t,
                content: o.coming.tpl.error
            }), o._afterLoad()
        },
        _loadImage: function() {
            var t = o.imgPreload = new Image;
            t.onload = function() {
                this.onload = this.onerror = null, o.coming.width = this.width / o.opts.pixelRatio, o.coming.height = this.height / o.opts.pixelRatio, o._afterLoad()
            }, t.onerror = function() {
                this.onload = this.onerror = null, o._error("image")
            }, t.src = o.coming.href, t.complete!==!0 && o.showLoading()
        },
        _loadAjax: function() {
            var t = o.coming;
            o.showLoading(), o.ajaxLoad = $.ajax($.extend({}, t.ajax, {
                url: t.href,
                error: function(t, e) {
                    o.coming && "abort" !== e ? o._error("ajax", t) : o.hideLoading()
                },
                success: function(e, i) {
                    "success" === i && (t.content = e, o._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var t = o.coming, e = $(t.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", d ? "auto" : t.iframe.scrolling).attr("src", t.href);
            $(t.wrap).bind("onReset", function() {
                try {
                    $(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (t) {}
            }), t.iframe.preload && (o.showLoading(), e.one("load", function() {
                $(this).data("ready", 1), d || $(this).bind("load.fb", o.update), $(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), o._afterLoad()
            })), t.content = e.appendTo(t.inner), t.iframe.preload || o._afterLoad()
        },
        _preloadImages: function() {
            var t = o.group, e = o.current, i = t.length, n = e.preload ? Math.min(e.preload, i - 1): 0, a, s;
            for (s = 1; n >= s; s += 1)
                a = t[(e.index + s)%i], "image" === a.type && a.href && ((new Image).src = a.href)
        },
        _afterLoad: function() {
            var t = o.coming, e = o.current, i = "fancybox-placeholder", n, a, s, r, l, d;
            if (o.hideLoading(), t && o.isActive!==!1) {
                if (!1 === o.trigger("afterLoad", t, e))
                    return t.wrap.stop(!0).trigger("onReset").remove(), void(o.coming = null);
                switch (e && (o.trigger("beforeChange", e), e.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), o.unbindEvents(), n = t, a = t.content, s = t.type, r = t.scrolling, $.extend(o, {
                    wrap: n.wrap,
                    skin: n.skin,
                    outer: n.outer,
                    inner: n.inner,
                    current: n,
                    previous: e
                }), l = n.href, s) {
                case"inline":
                case"ajax":
                case"html":
                    n.selector ? a = $("<div>").html(a).find(n.selector) : c(a) && (a.data(i) || a.data(i, $('<div class="' + i + '"></div>').insertAfter(a).hide()), a = a.show().detach(), n.wrap.bind("onReset", function() {
                        $(this).find(a).length && a.hide().replaceAll(a.data(i)).data(i, !1)
                    }));
                    break;
                case"image":
                    a = n.tpl.image.replace("{href}", l);
                    break;
                case"swf":
                    a = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + l + '"></param>', d = "", $.each(n.swf, function(t, e) {
                        a += '<param name="' + t + '" value="' + e + '"></param>', d += " " + t + '="' + e + '"'
                    }), a += '<embed src="' + l + '" type="application/x-shockwave-flash" width="100%" height="100%"' + d + "></embed></object>"
                }
                c(a) && a.parent().is(n.inner) || n.inner.append(a), o.trigger("beforeShow"), n.inner.css("overflow", "yes" === r ? "scroll" : "no" === r ? "hidden" : r), o._setDimension(), o.reposition(), o.isOpen=!1, o.coming = null, o.bindEvents(), o.isOpened ? e.prevMethod && o.transitions[e.prevMethod]() : $(".fancybox-wrap").not(n.wrap).stop(!0).trigger("onReset").remove(), o.transitions[o.isOpened ? n.nextMethod: n.openMethod](), o._preloadImages()
            }
        },
        _setDimension: function() {
            var t = o.getViewport(), e = 0, i=!1, n=!1, a = o.wrap, s = o.skin, r = o.inner, l = o.current, d = l.width, c = l.height, h = l.minWidth, f = l.minHeight, g = l.maxWidth, v = l.maxHeight, _ = l.scrolling, b = l.scrollOutside ? l.scrollbarWidth : 0, x = l.margin, y = p(x[1] + x[3]), w = p(x[0] + x[2]), F, C, k, S, D, T, E, q, M, z, A, R, j, H, L;
            if (a.add(s).add(r).width("auto").height("auto").removeClass("fancybox-tmp"), F = p(s.outerWidth(!0) - s.width()), C = p(s.outerHeight(!0) - s.height()), k = y + F, S = w + C, D = u(d) ? (t.w - k) * p(d) / 100 : d, T = u(c) ? (t.h - S) * p(c) / 100 : c, "iframe" === l.type) {
                if (H = l.content, l.autoHeight && 1 === H.data("ready"))
                    try {
                        H[0].contentWindow.document.location && (r.width(D).height(9999), L = H.contents().find("body"), b && L.css("overflow-x", "hidden"), T = L.outerHeight(!0))
                    } catch (P) {}
            } else (l.autoWidth || l.autoHeight) 
                && (r.addClass("fancybox-tmp"), l.autoWidth || r.width(D), l.autoHeight || r.height(T), l.autoWidth && (D = r.width()), l.autoHeight && (T = r.height()), r.removeClass("fancybox-tmp"));
            if (d = p(D), c = p(T), M = D / T, h = p(u(h) ? p(h, "w") - k : h), g = p(u(g) ? p(g, "w") - k : g), f = p(u(f) ? p(f, "h") - S : f), v = p(u(v) ? p(v, "h") - S : v), E = g, q = v, l.fitToView && (g = Math.min(t.w - k, g), v = Math.min(t.h - S, v)), R = t.w - y, j = t.h - w, l.aspectRatio ? (d > g && (d = g, c = p(d / M)), c > v && (c = v, d = p(c * M)), h > d && (d = h, c = p(d / M)), f > c && (c = f, d = p(c * M))) : (d = Math.max(h, Math.min(d, g)), l.autoHeight && "iframe" !== l.type && (r.width(d), c = r.height()), c = Math.max(f, Math.min(c, v))), l.fitToView)
                if (r.width(d).height(c), a.width(d + F), z = a.width(), A = a.height(), l.aspectRatio)
                    for (; (z > R || A > j) && d > h && c > f&&!(e++>19);)
                        c = Math.max(f, Math.min(v, c - 10)), d = p(c * M), h > d && (d = h, c = p(d / M)), d > g && (d = g, c = p(d / M)), r.width(d).height(c), a.width(d + F), z = a.width(), A = a.height();
                else 
                    d = Math.max(h, Math.min(d, d - (z - R))), c = Math.max(f, Math.min(c, c - (A - j)));
            b && "auto" === _ && T > c && R > d + F + b && (d += b), r.width(d).height(c), a.width(d + F), z = a.width(), A = a.height(), i = (z > R || A > j) && d > h && c > f, n = l.aspectRatio ? E > d && q > c && D > d && T > c : (E > d || q > c) && (D > d || T > c), $.extend(l, {
                dim: {
                    width: m(z),
                    height: m(A)
                },
                origWidth: D,
                origHeight: T,
                canShrink: i,
                canExpand: n,
                wPadding: F,
                hPadding: C,
                wrapSpace: A - s.outerHeight(!0),
                skinSpace: s.height() - c
            }), !H && l.autoHeight && c > f && v > c&&!n && r.height("auto")
        },
        _getPosition: function(t) {
            var e = o.current, i = o.getViewport(), n = e.margin, a = o.wrap.width() + n[1] + n[3], s = o.wrap.height() + n[0] + n[2], r = {
                position: "absolute",
                top: n[0],
                left: n[3]
            };
            return e.autoCenter && e.fixed&&!t && s <= i.h && a <= i.w ? r.position = "fixed" : e.locked || (r.top += i.y, r.left += i.x), r.top = m(Math.max(r.top, r.top + (i.h - s) * e.topRatio)), r.left = m(Math.max(r.left, r.left + (i.w - a) * e.leftRatio)), r
        },
        _afterZoomIn: function() {
            var t = o.current;
            t && (o.isOpen = o.isOpened=!0, o.wrap.css("overflow", "visible").addClass("fancybox-opened"), o.update(), (t.closeClick || t.nextClick && o.group.length > 1) && o.inner.css("cursor", "pointer").bind("click.fb", function(e) {
                $(e.target).is("a") || $(e.target).parent().is("a") || (e.preventDefault(), o[t.closeClick ? "close": "next"]())
            }), t.closeBtn && $(t.tpl.closeBtn).appendTo(o.skin).bind("click.fb", function(t) {
                t.preventDefault(), o.close()
            }), t.arrows && o.group.length > 1 && ((t.loop || t.index > 0) && $(t.tpl.prev).appendTo(o.outer).bind("click.fb", o.prev), (t.loop || t.index < o.group.length - 1) && $(t.tpl.next).appendTo(o.outer).bind("click.fb", o.next)), o.trigger("afterShow"), t.loop || t.index !== t.group.length - 1 ? o.opts.autoPlay&&!o.player.isActive && (o.opts.autoPlay=!1, o.play()) : o.play(!1))
        },
        _afterZoomOut: function(t) {
            t = t || o.current, $(".fancybox-wrap").trigger("onReset").remove(), $.extend(o, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            }), o.trigger("afterClose", t)
        }
    }), o.transitions = {
        getOrigPosition: function() {
            var t = o.current, e = t.element, i = t.orig, n = {}, a = 50, s = 50, r = t.hPadding, l = t.wPadding, d = o.getViewport();
            return !i && t.isDom && e.is(":visible") && (i = e.find("img:first"), i.length || (i = e)), c(i) ? (n = i.offset(), i.is("img") && (a = i.outerWidth(), s = i.outerHeight())) : (n.top = d.y + (d.h - s) * t.topRatio, n.left = d.x + (d.w - a) * t.leftRatio), ("fixed" === o.wrap.css("position") || t.locked) && (n.top -= d.y, n.left -= d.x), n = {
                top: m(n.top - r * t.topRatio),
                left: m(n.left - l * t.leftRatio),
                width: m(a + l),
                height: m(s + r)
            }
        },
        step: function(t, e) {
            var i, n, a, s = e.prop, r = o.current, l = r.wrapSpace, d = r.skinSpace;
            ("width" === s || "height" === s) && (i = e.end === e.start ? 1 : (t - e.start) / (e.end - e.start), o.isClosing && (i = 1 - i), n = "width" === s ? r.wPadding : r.hPadding, a = t - n, o.skin[s](p("width" === s ? a : a - l * i)), o.inner[s](p("width" === s ? a : a - l * i - d * i)))
        },
        zoomIn: function() {
            var t = o.current, e = t.pos, i = t.openEffect, n = "elastic" === i, a = $.extend({
                opacity: 1
            }, e);
            delete a.position, n ? (e = this.getOrigPosition(), t.openOpacity && (e.opacity = .1)) : "fade" === i && (e.opacity = .1), o.wrap.css(e).animate(a, {
                duration: "none" === i ? 0: t.openSpeed,
                easing: t.openEasing,
                step: n ? this.step: null,
                complete: o._afterZoomIn
            })
        },
        zoomOut: function() {
            var t = o.current, e = t.closeEffect, i = "elastic" === e, n = {
                opacity: .1
            };
            i && (n = this.getOrigPosition(), t.closeOpacity && (n.opacity = .1)), o.wrap.animate(n, {
                duration: "none" === e ? 0: t.closeSpeed,
                easing: t.closeEasing,
                step: i ? this.step: null,
                complete: o._afterZoomOut
            })
        },
        changeIn: function() {
            var t = o.current, e = t.nextEffect, i = t.pos, n = {
                opacity: 1
            }, a = o.direction, s = 200, r;
            i.opacity = .1, "elastic" === e && (r = "down" === a || "up" === a ? "top" : "left", "down" === a || "right" === a ? (i[r] = m(p(i[r]) - s), n[r] = "+=" + s + "px") : (i[r] = m(p(i[r]) + s), n[r] = "-=" + s + "px")), "none" === e ? o._afterZoomIn() : o.wrap.css(i).animate(n, {
                duration: t.nextSpeed,
                easing: t.nextEasing,
                complete: o._afterZoomIn
            })
        },
        changeOut: function() {
            var t = o.previous, e = t.prevEffect, i = {
                opacity: .1
            }, n = o.direction, a = 200;
            "elastic" === e && (i["down" === n || "up" === n ? "top": "left"] = ("up" === n || "left" === n ? "-" : "+") + "=" + a + "px"), t.wrap.animate(i, {
                duration: "none" === e ? 0: t.prevSpeed,
                easing: t.prevEasing,
                complete: function() {
                    $(this).trigger("onReset").remove()
                }
            })
        }
    }, o.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !d,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: $("html"),
        create: function(t) {
            t = $.extend({}, this.defaults, t), this.overlay && this.close(), this.overlay = $('<div class="fancybox-overlay"></div>').appendTo(o.coming ? o.coming.parent : t.parent), this.fixed=!1, t.fixed && o.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed=!0)
        },
        open: function(t) {
            var e = this;
            t = $.extend({}, this.defaults, t), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(t), this.fixed || (a.bind("resize.overlay", $.proxy(this.update, this)), this.update()), t.closeClick && this.overlay.bind("click.overlay", function(t) {
                return $(t.target).hasClass("fancybox-overlay") ? (o.isActive ? o.close() : e.close(), !1) : void 0
            }), this.overlay.css(t.css).show()
        },
        close: function() {
            var t, e;
            a.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && ($(".fancybox-margin").removeClass("fancybox-margin"), t = a.scrollTop(), e = a.scrollLeft(), this.el.removeClass("fancybox-lock"), a.scrollTop(t).scrollLeft(e)), $(".fancybox-overlay").remove().hide(), $.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function() {
            var t = "100%", i;
            this.overlay.width(t).height("100%"), r ? (i = Math.max(e.documentElement.offsetWidth, e.body.offsetWidth), s.width() > i && (t = s.width())) : s.width() > a.width() && (t = s.width()), this.overlay.width(t).height(s.height())
        },
        onReady: function(t, e) {
            var i = this.overlay;
            $(".fancybox-overlay").stop(!0, !0), i || this.create(t), t.locked && this.fixed && e.fixed && (i || (this.margin = s.height() > a.height() ? $("html").css("margin-right").replace("px", "") : !1), e.locked = this.overlay.append(e.wrap), e.fixed=!1), t.showEarly===!0 && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(t, e) {
            var i, n;
            e.locked && (this.margin!==!1 && ($("*").filter(function() {
                return "fixed" === $(this).css("position")&&!$(this).hasClass("fancybox-overlay")&&!$(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), i = a.scrollTop(), n = a.scrollLeft(), this.el.addClass("fancybox-lock"), a.scrollTop(i).scrollLeft(n)), this.open(t)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(t) {
            this.overlay&&!o.coming && this.overlay.fadeOut(t.speedOut, $.proxy(this.close, this))
        }
    }, o.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(t) {
            var e = o.current, i = e.title, n = t.type, a, s;
            if ($.isFunction(i) && (i = i.call(e.element, e)), h(i) && "" !== $.trim(i)) {
                switch (a = $('<div class="fancybox-title fancybox-title-' + n + '-wrap">' + i + "</div>"), n) {
                case"inside":
                    s = o.skin;
                    break;
                case"outside":
                    s = o.wrap;
                    break;
                case"over":
                    s = o.inner;
                    break;
                default:
                    s = o.skin, a.appendTo("body"), r && a.width(a.width()), a.wrapInner('<span class="child"></span>'), o.current.margin[2] += Math.abs(p(a.css("margin-bottom")))
                }
                a["top" === t.position ? "prependTo": "appendTo"](s)
            }
        }
    }, $.fn.fancybox = function(t) {
        var e, i = $(this), n = this.selector || "", a = function(a) {
            var s = $(this).blur(), r = e, l, d;
            a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || s.is(".fancybox-wrap") || (l = t.groupAttr || "data-fancybox-group", d = s.attr(l), d || (l = "rel", d = s.get(0)[l]), d && "" !== d && "nofollow" !== d && (s = n.length ? $(n) : i, s = s.filter("[" + l + '="' + d + '"]'), r = s.index(this)), t.index = r, o.open(s, t)!==!1 && a.preventDefault())
        };
        return t = t || {}, e = t.index || 0, n && t.live!==!1 ? s.undelegate(n, "click.fb-start").delegate(n + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", a) : i.unbind("click.fb-start").bind("click.fb-start", a), this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, s.ready(function() {
        var e, a;
        $.scrollbarWidth === i && ($.scrollbarWidth = function() {
            var t = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), e = t.children(), i = e.innerWidth() - e.height(99).innerWidth();
            return t.remove(), i
        }), $.support.fixedPosition === i && ($.support.fixedPosition = function() {
            var t = $('<div style="position:fixed;top:20px;"></div>').appendTo("body"), e = 20 === t[0].offsetTop || 15 === t[0].offsetTop;
            return t.remove(), e
        }()), $.extend(o.defaults, {
            scrollbarWidth: $.scrollbarWidth(),
            fixed: $.support.fixedPosition,
            parent: $("body")
        }), e = $(t).width(), n.addClass("fancybox-lock-test"), a = $(t).width(), n.removeClass("fancybox-lock-test"), $("<style type='text/css'>.fancybox-margin{margin-right:" + (a - e) + "px;}</style>").appendTo("head")
    })
}(window, document, jQuery), function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function($) {
    "use strict";
    function t(t) {
        return !t.nodeName||-1 !== $.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
    }
    function e(t) {
        return $.isFunction(t) || $.isPlainObject(t) ? t : {
            top: t,
            left: t
        }
    }
    var i = $.scrollTo = function(t, e, i) {
        return $(window).scrollTo(t, e, i)
    };
    return i.defaults = {
        axis: "xy",
        duration: 0,
        limit: !0
    }, $.fn.scrollTo = function(n, a, s) {
        "object" == typeof a && (s = a, a = 0), "function" == typeof s && (s = {
            onAfter: s
        }), "max" === n && (n = 9e9), s = $.extend({}, i.defaults, s), a = a || s.duration;
        var o = s.queue && s.axis.length > 1;
        return o && (a/=2), s.offset = e(s.offset), s.over = e(s.over), this.each(function() {
            function r(t) {
                var e = $.extend({}, s, {
                    queue: !0,
                    duration: a,
                    complete: t && function() {
                        t.call(d, h, s)
                    }
                });
                c.animate(u, e)
            }
            if (null !== n) {
                var l = t(this), d = l ? this.contentWindow || window: this, c = $(d), h = n, u = {}, f;
                switch (typeof h) {
                case"number":
                case"string":
                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(h)) {
                        h = e(h);
                        break
                    }
                    if (h = l ? $(h) : $(h, d), !h.length)
                        return;
                case"object":
                    (h.is || h.style) && (f = (h = $(h)).offset())
                }
                var p = $.isFunction(s.offset) && s.offset(d, h) || s.offset;
                $.each(s.axis.split(""), function(t, e) {
                    var n = "x" === e ? "Left": "Top", a = n.toLowerCase(), m = "scroll" + n, g = c[m](), v = i.max(d, e);
                    if (f)
                        u[m] = f[a] + (l ? 0 : g - c.offset()[a]), s.margin && (u[m] -= parseInt(h.css("margin" + n), 10) || 0, u[m] -= parseInt(h.css("border" + n + "Width"), 10) || 0), u[m] += p[a] || 0, s.over[a] && (u[m] += h["x" === e ? "width": "height"]() * s.over[a]);
                    else {
                        var _ = h[a];
                        u[m] = _.slice && "%" === _.slice( - 1) ? parseFloat(_) / 100 * v : _
                    }
                    s.limit && /^\d+$/.test(u[m]) && (u[m] = u[m] <= 0 ? 0 : Math.min(u[m], v)), !t && s.axis.length > 1 && (g === u[m] ? u = {} : o && (r(s.onAfterFirst), u = {}))
                }), r(s.onAfter)
            }
        })
    }, i.max = function(e, i) {
        var n = "x" === i ? "Width": "Height", a = "scroll" + n;
        if (!t(e))
            return e[a] - $(e)[n.toLowerCase()]();
        var s = "client" + n, o = e.ownerDocument || e.document, r = o.documentElement, l = o.body;
        return Math.max(r[a], l[a]) - Math.min(r[s], l[s])
    }, $.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = {
        get: function(t) {
            return $(t.elem)[t.prop]()
        },
        set: function(t) {
            var e = this.get(t);
            if (t.options.interrupt && t._last && t._last !== e)
                return $(t.elem).stop();
            var i = Math.round(t.now);
            e !== i && ($(t.elem)[t.prop](i), t._last = this.get(t))
        }
    }, i
}), $(function() {
    $("#form1").submit(function() {
        return $("#form1").hide(), $(".loader").append($(".bar")), $(".bar").css({
            display: "block"
        }), $.get("mail.php", {
            name: $("#TxtName").val(),
            email: $("#TxtEmail").val(),
            phone: $("#TxtPhone").val(),
            comment: $("#TxtMessage").val()
        }, function(t) {
            $(".bar").css({
                display: "none"
            }), $(".loader").append(t)
        }), !1
    }), $("a.scroll, a#logo").click(function(t) {
        $.scrollTo(this.hash || 0, 1500), t.preventDefault()
    }), $("#backToTheTut").hover(function() {
        $(this).stop().animate({
            left: - 20
        }, "slow")
    }, function() {
        $(this).stop().animate({
            left: - 410
        }, "slow")
    }), setTimeout(function() {
        $("#backToTheTut").animate({
            left: - 410
        }, "slow")
    }, 2e3)
}), $(document).ready(function() {
    $("a.fancy").fancybox({
        openEffect: "elastic",
        closeEffect: "elastic",
        helpers: {
            overlay: {
                locked: !1
            }
        }
    }), $(".toggle").click(function() {
        $("#header #nav").slideToggle("fast").toggleClass("open")
    }), $("#header #nav li a").click(function() {
        $("#header #nav.open").slideToggle("fast").toggleClass("open")
    })
}), $(function() {
    $("#form1").validate({
        rules: {
            TxtName: {
                required: !0,
                minlength: 2
            },
            TxtEmail: {
                required: !0,
                email: !0
            },
            TxtMessage: {
                required: !0,
                minlength: 2
            }
        },
        messages: {
            TxtName: "Please enter your name",
            TxtEmail: "Please enter a valid email address",
            TxtMessage: "Please enter your message"
        }
    })
}), $(document).foundation();

