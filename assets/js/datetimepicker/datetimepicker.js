! function(e, t) {
    "use strict";
    if ("function" == typeof define && define.amd) define(["jquery", "moment"], t);
    else if ("object" == typeof exports) t(require("jquery"), require("moment"));
    else {
        if (!jQuery) throw new Error("bootstrap-datetimepicker requires jQuery to be loaded first");
        if (!moment) throw new Error("bootstrap-datetimepicker requires moment.js to be loaded first");
        t(e.jQuery, moment)
    }
}(this, function(e, t) {
    "use strict";
    if ("undefined" == typeof t) throw new Error("momentjs is required");
    var i = 0,
        o = function(o, a) {
            var n, s = e.fn.datetimepicker.defaults,
                d = {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-angle-up",
                    down: "fa fa-angle-down"
                },
                r = this,
                c = !1,
                p = function() {
                    var n, c, p = !1;
                    if (r.options = e.extend({}, s, a), r.options.icons = e.extend({}, d, r.options.icons), r.element = e(o), m(), !r.options.pickTime && !r.options.pickDate) throw new Error("Must choose at least one picker");
                    if (r.id = i++, t.locale(r.options.language), r.date = t(), r.unset = !1, r.isInput = r.element.is("input"), r.component = !1, r.element.hasClass("input-group") && (r.component = r.element.find(0 === r.element.find(".datepickerbutton").size() ? '[class^="input-group-"]' : ".datepickerbutton")), r.format = r.options.format, n = t().localeData(), r.format || (r.format = r.options.pickDate ? n.longDateFormat("L") : "", r.options.pickDate && r.options.pickTime && (r.format += " "), r.format += r.options.pickTime ? n.longDateFormat("LT") : "", r.options.useSeconds && (-1 !== n.longDateFormat("LT").indexOf(" A") ? r.format = r.format.split(" A")[0] + ":ss A" : r.format += ":ss")), r.use24hours = r.format.toLowerCase().indexOf("a") < 0 && r.format.indexOf("h") < 0, r.component && (p = r.component.find("span")), r.options.pickTime && p && p.addClass(r.options.icons.time), r.options.pickDate && p && (p.removeClass(r.options.icons.time), p.addClass(r.options.icons.date)), r.options.widgetParent = "string" == typeof r.options.widgetParent && r.options.widgetParent || r.element.parents().filter(function() {
                            return "scroll" === e(this).css("overflow-y")
                        }).get(0) || "body", r.widget = e(B()).appendTo(r.options.widgetParent), r.minViewMode = r.options.minViewMode || 0, "string" == typeof r.minViewMode) switch (r.minViewMode) {
                        case "months":
                            r.minViewMode = 1;
                            break;
                        case "years":
                            r.minViewMode = 2;
                            break;
                        default:
                            r.minViewMode = 0
                    }
                    if (r.viewMode = r.options.viewMode || 0, "string" == typeof r.viewMode) switch (r.viewMode) {
                        case "months":
                            r.viewMode = 1;
                            break;
                        case "years":
                            r.viewMode = 2;
                            break;
                        default:
                            r.viewMode = 0
                    }
                    r.viewMode = Math.max(r.viewMode, r.minViewMode), r.options.disabledDates = U(r.options.disabledDates), r.options.enabledDates = U(r.options.enabledDates), r.startViewMode = r.viewMode, r.setMinDate(r.options.minDate), r.setMaxDate(r.options.maxDate), g(), k(), b(), y(), D(), w(), q(), l().prop("disabled") || I(), "" !== r.options.defaultDate && "" === l().val() && r.setValue(r.options.defaultDate), 1 !== r.options.minuteStepping && (c = r.options.minuteStepping, r.date.minutes(Math.round(r.date.minutes() / c) * c % 60).seconds(0))
                },
                l = function() {
                    var e;
                    if (r.isInput) return r.element;
                    if (e = r.element.find(".datepickerinput"), 0 === e.size()) e = r.element.find("input");
                    else if (!e.is("input")) throw new Error('CSS class "datepickerinput" cannot be applied to non input element');
                    return e
                },
                m = function() {
                    var e;
                    e = r.element.is("input") ? r.element.data() : r.element.find("input").data(), void 0 !== e.dateFormat && (r.options.format = e.dateFormat), void 0 !== e.datePickdate && (r.options.pickDate = e.datePickdate), void 0 !== e.datePicktime && (r.options.pickTime = e.datePicktime), void 0 !== e.dateUseminutes && (r.options.useMinutes = e.dateUseminutes), void 0 !== e.dateUseseconds && (r.options.useSeconds = e.dateUseseconds), void 0 !== e.dateUsecurrent && (r.options.useCurrent = e.dateUsecurrent), void 0 !== e.calendarWeeks && (r.options.calendarWeeks = e.calendarWeeks), void 0 !== e.dateMinutestepping && (r.options.minuteStepping = e.dateMinutestepping), void 0 !== e.dateMindate && (r.options.minDate = e.dateMindate), void 0 !== e.dateMaxdate && (r.options.maxDate = e.dateMaxdate), void 0 !== e.dateShowtoday && (r.options.showToday = e.dateShowtoday), void 0 !== e.dateCollapse && (r.options.collapse = e.dateCollapse), void 0 !== e.dateLanguage && (r.options.language = e.dateLanguage), void 0 !== e.dateDefaultdate && (r.options.defaultDate = e.dateDefaultdate), void 0 !== e.dateDisableddates && (r.options.disabledDates = e.dateDisableddates), void 0 !== e.dateEnableddates && (r.options.enabledDates = e.dateEnableddates), void 0 !== e.dateIcons && (r.options.icons = e.dateIcons), void 0 !== e.dateUsestrict && (r.options.useStrict = e.dateUsestrict), void 0 !== e.dateDirection && (r.options.direction = e.dateDirection), void 0 !== e.dateSidebyside && (r.options.sideBySide = e.dateSidebyside), void 0 !== e.dateDaysofweekdisabled && (r.options.daysOfWeekDisabled = e.dateDaysofweekdisabled)
                },
                u = function() {
                    var t, i = "absolute",
                        o = r.component ? r.component.offset() : r.element.offset(),
                        a = e(window);
                    r.width = r.component ? r.component.outerWidth() : r.element.outerWidth(), o.top = o.top + r.element.outerHeight(), "up" === r.options.direction ? t = "top" : "bottom" === r.options.direction ? t = "bottom" : "auto" === r.options.direction && (t = o.top + r.widget.height() > a.height() + a.scrollTop() && r.widget.height() + r.element.outerHeight() < o.top ? "top" : "bottom"), "top" === t ? (o.bottom = a.height() - o.top + r.element.outerHeight() + 3, r.widget.addClass("top").removeClass("bottom")) : (o.top += 1, r.widget.addClass("bottom").removeClass("top")), void 0 !== r.options.width && r.widget.width(r.options.width), "left" === r.options.orientation && (r.widget.addClass("left-oriented"), o.left = o.left - r.widget.width() + 20), Y() && (i = "fixed", o.top -= a.scrollTop(), o.left -= a.scrollLeft()), a.width() < o.left + r.widget.outerWidth() ? (o.right = a.width() - o.left - r.width, o.left = "auto", r.widget.addClass("pull-right")) : (o.right = "auto", r.widget.removeClass("pull-right")), r.widget.css("top" === t ? {
                        position: i,
                        bottom: o.bottom,
                        top: "auto",
                        left: o.left,
                        right: o.right
                    } : {
                        position: i,
                        top: o.top,
                        bottom: "auto",
                        left: o.left,
                        right: o.right
                    })
                },
                f = function(e, i) {
                    (!t(r.date).isSame(t(e)) || c) && (c = !1, r.element.trigger({
                        type: "dp.change",
                        date: t(r.date),
                        oldDate: t(e)
                    }), "change" !== i && r.element.change())
                },
                h = function(e) {
                    c = !0, r.element.trigger({
                        type: "dp.error",
                        date: t(e, r.format, r.options.useStrict)
                    })
                },
                w = function(e) {
                    t.locale(r.options.language);
                    var i = e;
                    i || (i = l().val(), i && (r.date = t(i, r.format, r.options.useStrict)), r.date || (r.date = t())), r.viewDate = t(r.date).startOf("month"), v(), M()
                },
                g = function() {
                    t.locale(r.options.language);
                    var i, o = e("<tr>"),
                        a = t.weekdaysMin();
                    if (r.options.calendarWeeks === !0 && o.append('<th class="cw">#</th>'), 0 === t().localeData()._week.dow)
                        for (i = 0; 7 > i; i++) o.append('<th class="dow">' + a[i] + "</th>");
                    else
                        for (i = 1; 8 > i; i++) o.append(7 === i ? '<th class="dow">' + a[0] + "</th>" : '<th class="dow">' + a[i] + "</th>");
                    r.widget.find(".datepicker-days thead").append(o)
                },
                k = function() {
                    t.locale(r.options.language);
                    var e, i = "",
                        o = t.monthsShort();
                    for (e = 0; 12 > e; e++) i += '<span class="month">' + o[e] + "</span>";
                    r.widget.find(".datepicker-months td").append(i)
                },
                v = function() {
                    if (r.options.pickDate) {
                        t.locale(r.options.language);
                        var i, o, a, n, s, d, c, p, l, m = r.viewDate.year(),
                            u = r.viewDate.month(),
                            f = r.options.minDate.year(),
                            h = r.options.minDate.month(),
                            w = r.options.maxDate.year(),
                            g = r.options.maxDate.month(),
                            k = [],
                            v = t.months();
                        for (r.widget.find(".datepicker-days").find(".disabled").removeClass("disabled"), r.widget.find(".datepicker-months").find(".disabled").removeClass("disabled"), r.widget.find(".datepicker-years").find(".disabled").removeClass("disabled"), r.widget.find(".datepicker-days th:eq(1)").text(v[u] + " " + m), o = t(r.viewDate, r.format, r.options.useStrict).subtract(1, "months"), c = o.daysInMonth(), o.date(c).startOf("week"), (m === f && h >= u || f > m) && r.widget.find(".datepicker-days th:eq(0)").addClass("disabled"), (m === w && u >= g || m > w) && r.widget.find(".datepicker-days th:eq(2)").addClass("disabled"), a = t(o).add(42, "d"); o.isBefore(a);) {
                            if (o.weekday() === t().startOf("week").weekday() && (n = e("<tr>"), k.push(n), r.options.calendarWeeks === !0 && n.append('<td class="cw">' + o.week() + "</td>")), s = "", o.year() < m || o.year() === m && o.month() < u ? s += " old" : (o.year() > m || o.year() === m && o.month() > u) && (s += " new"), o.isSame(t({
                                    y: r.date.year(),
                                    M: r.date.month(),
                                    d: r.date.date()
                                })) && (s += " active"), (j(o, "day") || !L(o)) && (s += " disabled"), r.options.showToday === !0 && o.isSame(t(), "day") && (s += " today"), r.options.daysOfWeekDisabled)
                                for (d = 0; d < r.options.daysOfWeekDisabled.length; d++)
                                    if (o.day() === r.options.daysOfWeekDisabled[d]) {
                                        s += " disabled";
                                        break
                                    }
                            n.append('<td class="day' + s + '">' + o.date() + "</td>"), i = o.date(), o.add(1, "d"), i === o.date() && o.add(1, "d")
                        }
                        for (r.widget.find(".datepicker-days tbody").empty().append(k), l = r.date.year(), v = r.widget.find(".datepicker-months").find("th:eq(1)").text(m).end().find("span").removeClass("active"), l === m && v.eq(r.date.month()).addClass("active"), f > m - 1 && r.widget.find(".datepicker-months th:eq(0)").addClass("disabled"), m + 1 > w && r.widget.find(".datepicker-months th:eq(2)").addClass("disabled"), d = 0; 12 > d; d++) m === f && h > d || f > m ? e(v[d]).addClass("disabled") : (m === w && d > g || m > w) && e(v[d]).addClass("disabled");
                        for (k = "", m = 10 * parseInt(m / 10, 10), p = r.widget.find(".datepicker-years").find("th:eq(1)").text(m + "-" + (m + 9)).parents("table").find("td"), r.widget.find(".datepicker-years").find("th").removeClass("disabled"), f > m && r.widget.find(".datepicker-years").find("th:eq(0)").addClass("disabled"), m + 9 > w && r.widget.find(".datepicker-years").find("th:eq(2)").addClass("disabled"), m -= 1, d = -1; 11 > d; d++) k += '<span class="year' + (-1 === d || 10 === d ? " old" : "") + (l === m ? " active" : "") + (f > m || m > w ? " disabled" : "") + '">' + m + "</span>", m += 1;
                        p.html(k)
                    }
                },
                b = function() {
                    t.locale(r.options.language);
                    var e, i, o, a = r.widget.find(".timepicker .timepicker-hours table"),
                        n = "";
                    if (a.parent().hide(), r.use24hours)
                        for (e = 0, i = 0; 6 > i; i += 1) {
                            for (n += "<tr>", o = 0; 4 > o; o += 1) n += '<td class="hour">' + N(e.toString()) + "</td>", e++;
                            n += "</tr>"
                        } else
                            for (e = 1, i = 0; 3 > i; i += 1) {
                                for (n += "<tr>", o = 0; 4 > o; o += 1) n += '<td class="hour">' + N(e.toString()) + "</td>", e++;
                                n += "</tr>"
                            }
                    a.html(n)
                },
                y = function() {
                    var e, t, i = r.widget.find(".timepicker .timepicker-minutes table"),
                        o = "",
                        a = 0,
                        n = r.options.minuteStepping;
                    for (i.parent().hide(), 1 === n && (n = 5), e = 0; e < Math.ceil(60 / n / 4); e++) {
                        for (o += "<tr>", t = 0; 4 > t; t += 1) 60 > a ? (o += '<td class="minute">' + N(a.toString()) + "</td>", a += n) : o += "<td></td>";
                        o += "</tr>"
                    }
                    i.html(o)
                },
                D = function() {
                    var e, t, i = r.widget.find(".timepicker .timepicker-seconds table"),
                        o = "",
                        a = 0;
                    for (i.parent().hide(), e = 0; 3 > e; e++) {
                        for (o += "<tr>", t = 0; 4 > t; t += 1) o += '<td class="second">' + N(a.toString()) + "</td>", a += 5;
                        o += "</tr>"
                    }
                    i.html(o)
                },
                M = function() {
                    if (r.date) {
                        var e = r.widget.find(".timepicker span[data-time-component]"),
                            t = r.date.hours(),
                            i = r.date.format("A");
                        r.use24hours || (0 === t ? t = 12 : 12 !== t && (t %= 12), r.widget.find(".timepicker [data-action=togglePeriod]").text(i)), e.filter("[data-time-component=hours]").text(N(t)), e.filter("[data-time-component=minutes]").text(N(r.date.minutes())), e.filter("[data-time-component=seconds]").text(N(r.date.second()))
                    }
                },
                S = function(i) {
                    i.stopPropagation(), i.preventDefault(), r.unset = !1;
                    var o, a, n, s, d = e(i.target).closest("span, td, th"),
                        c = t(r.date);
                    if (1 === d.length && !d.is(".disabled")) switch (d[0].nodeName.toLowerCase()) {
                        case "th":
                            switch (d[0].className) {
                                case "picker-switch":
                                    q(1);
                                    break;
                                case "prev":
                                case "next":
                                    n = z.modes[r.viewMode].navStep, "prev" === d[0].className && (n = -1 * n), r.viewDate.add(n, z.modes[r.viewMode].navFnc), v()
                            }
                            break;
                        case "span":
                            d.is(".month") ? (o = d.parent().find("span").index(d), r.viewDate.month(o)) : (a = parseInt(d.text(), 10) || 0, r.viewDate.year(a)), r.viewMode === r.minViewMode && (r.date = t({
                                y: r.viewDate.year(),
                                M: r.viewDate.month(),
                                d: r.viewDate.date(),
                                h: r.date.hours(),
                                m: r.date.minutes(),
                                s: r.date.seconds()
                            }), E(), f(c, i.type)), q(-1), v();
                            break;
                        case "td":
                            d.is(".day") && (s = parseInt(d.text(), 10) || 1, o = r.viewDate.month(), a = r.viewDate.year(), d.is(".old") ? 0 === o ? (o = 11, a -= 1) : o -= 1 : d.is(".new") && (11 === o ? (o = 0, a += 1) : o += 1), r.date = t({
                                y: a,
                                M: o,
                                d: s,
                                h: r.date.hours(),
                                m: r.date.minutes(),
                                s: r.date.seconds()
                            }), r.viewDate = t({
                                y: a,
                                M: o,
                                d: Math.min(28, s)
                            }), v(), E(), f(c, i.type))
                    }
                },
                x = {
                    incrementHours: function() {
                        F("add", "hours", 1)
                    },
                    incrementMinutes: function() {
                        F("add", "minutes", r.options.minuteStepping)
                    },
                    incrementSeconds: function() {
                        F("add", "seconds", 1)
                    },
                    decrementHours: function() {
                        F("subtract", "hours", 1)
                    },
                    decrementMinutes: function() {
                        F("subtract", "minutes", r.options.minuteStepping)
                    },
                    decrementSeconds: function() {
                        F("subtract", "seconds", 1)
                    },
                    togglePeriod: function() {
                        var e = r.date.hours();
                        e >= 12 ? e -= 12 : e += 12, r.date.hours(e)
                    },
                    showPicker: function() {
                        r.widget.find(".timepicker > div:not(.timepicker-picker)").hide(), r.widget.find(".timepicker .timepicker-picker").show()
                    },
                    showHours: function() {
                        r.widget.find(".timepicker .timepicker-picker").hide(), r.widget.find(".timepicker .timepicker-hours").show()
                    },
                    showMinutes: function() {
                        r.widget.find(".timepicker .timepicker-picker").hide(), r.widget.find(".timepicker .timepicker-minutes").show()
                    },
                    showSeconds: function() {
                        r.widget.find(".timepicker .timepicker-picker").hide(), r.widget.find(".timepicker .timepicker-seconds").show()
                    },
                    selectHour: function(t) {
                        var i = parseInt(e(t.target).text(), 10);
                        r.use24hours || (r.date.hours() >= 12 ? 12 !== i && (i += 12) : 12 === i && (i = 0)), r.date.hours(i), x.showPicker.call(r)
                    },
                    selectMinute: function(t) {
                        r.date.minutes(parseInt(e(t.target).text(), 10)), x.showPicker.call(r)
                    },
                    selectSecond: function(t) {
                        r.date.seconds(parseInt(e(t.target).text(), 10)), x.showPicker.call(r)
                    }
                },
                C = function(i) {
                    var o = t(r.date),
                        a = e(i.currentTarget).data("action"),
                        n = x[a].apply(r, arguments);
                    return T(i), r.date || (r.date = t({
                        y: 1970
                    })), E(), M(), f(o, i.type), n
                },
                T = function(e) {
                    e.stopPropagation(), e.preventDefault()
                },
                P = function(e) {
                    27 === e.keyCode && r.hide()
                },
                V = function(i) {
                    t.locale(r.options.language);
                    var o = e(i.target),
                        a = t(r.date),
                        n = t(o.val(), r.format, r.options.useStrict);
                    n.isValid() && !j(n) && L(n) ? (w(), r.setValue(n), f(a, i.type), E()) : (r.viewDate = a, r.unset = !0, f(a, i.type), h(n))
                },
                q = function(e) {
                    e && (r.viewMode = Math.max(r.minViewMode, Math.min(2, r.viewMode + e))), r.widget.find(".datepicker > div").hide().filter(".datepicker-" + z.modes[r.viewMode].clsName).show()
                },
                I = function() {
                    var t, i, o, a, n;
                    r.widget.on("click", ".datepicker *", e.proxy(S, this)), r.widget.on("click", "[data-action]", e.proxy(C, this)), r.widget.on("mousedown", e.proxy(T, this)), r.element.on("keydown", e.proxy(P, this)), r.options.pickDate && r.options.pickTime && r.widget.on("click.togglePicker", ".accordion-toggle", function(s) {
                        if (s.stopPropagation(), t = e(this), i = t.closest("ul"), o = i.find(".in"), a = i.find(".collapse:not(.in)"), o && o.length) {
                            if (n = o.data("collapse"), n && n.transitioning) return;
                            o.collapse("hide"), a.collapse("show"), t.find("span").toggleClass(r.options.icons.time + " " + r.options.icons.date), r.component && r.component.find("span").toggleClass(r.options.icons.time + " " + r.options.icons.date)
                        }
                    }), r.isInput ? r.element.on({
                        click: e.proxy(r.show, this),
                        focus: e.proxy(r.show, this),
                        change: e.proxy(V, this),
                        blur: e.proxy(r.hide, this)
                    }) : (r.element.on({
                        change: e.proxy(V, this)
                    }, "input"), r.component ? (r.component.on("click", e.proxy(r.show, this)), r.component.on("mousedown", e.proxy(T, this))) : r.element.on("click", e.proxy(r.show, this)))
                },
                W = function() {
                    e(window).on("resize.datetimepicker" + r.id, e.proxy(u, this)), r.isInput || e(document).on("mousedown.datetimepicker" + r.id, e.proxy(r.hide, this))
                },
                H = function() {
                    r.widget.off("click", ".datepicker *", r.click), r.widget.off("click", "[data-action]"), r.widget.off("mousedown", r.stopEvent), r.options.pickDate && r.options.pickTime && r.widget.off("click.togglePicker"), r.isInput ? r.element.off({
                        focus: r.show,
                        change: V,
                        click: r.show,
                        blur: r.hide
                    }) : (r.element.off({
                        change: V
                    }, "input"), r.component ? (r.component.off("click", r.show), r.component.off("mousedown", r.stopEvent)) : r.element.off("click", r.show))
                },
                O = function() {
                    e(window).off("resize.datetimepicker" + r.id), r.isInput || e(document).off("mousedown.datetimepicker" + r.id)
                },
                Y = function() {
                    if (r.element) {
                        var t, i = r.element.parents(),
                            o = !1;
                        for (t = 0; t < i.length; t++)
                            if ("fixed" === e(i[t]).css("position")) {
                                o = !0;
                                break
                            }
                        return o
                    }
                    return !1
                },
                E = function() {
                    t.locale(r.options.language);
                    var e = "";
                    r.unset || (e = t(r.date).format(r.format)), l().val(e), r.element.data("date", e), r.options.pickTime || r.hide()
                },
                F = function(e, i, o) {
                    t.locale(r.options.language);
                    var a;
                    return "add" === e ? (a = t(r.date), 23 === a.hours() && a.add(o, i), a.add(o, i)) : a = t(r.date).subtract(o, i), j(t(a.subtract(o, i))) || j(a) ? void h(a.format(r.format)) : ("add" === e ? r.date.add(o, i) : r.date.subtract(o, i), void(r.unset = !1))
                },
                j = function(e, i) {
                    t.locale(r.options.language);
                    var o = t(r.options.maxDate, r.format, r.options.useStrict),
                        a = t(r.options.minDate, r.format, r.options.useStrict);
                    return i && (o = o.endOf(i), a = a.startOf(i)), e.isAfter(o) || e.isBefore(a) ? !0 : r.options.disabledDates === !1 ? !1 : r.options.disabledDates[e.format("YYYY-MM-DD")] === !0
                },
                L = function(e) {
                    return t.locale(r.options.language), r.options.enabledDates === !1 ? !0 : r.options.enabledDates[e.format("YYYY-MM-DD")] === !0
                },
                U = function(e) {
                    var i, o = {},
                        a = 0;
                    for (i = 0; i < e.length; i++) n = t.isMoment(e[i]) || e[i] instanceof Date ? t(e[i]) : t(e[i], r.format, r.options.useStrict), n.isValid() && (o[n.format("YYYY-MM-DD")] = !0, a++);
                    return a > 0 ? o : !1
                },
                N = function(e) {
                    return e = e.toString(), e.length >= 2 ? e : "0" + e
                },
                B = function() {
                    var e = '<thead><tr><th class="prev">&lsaquo;</th><th colspan="' + (r.options.calendarWeeks ? "6" : "5") + '" class="picker-switch"></th><th class="next">&rsaquo;</th></tr></thead>',
                        t = '<tbody><tr><td colspan="' + (r.options.calendarWeeks ? "8" : "7") + '"></td></tr></tbody>',
                        i = '<div class="datepicker-days"><table class="table-condensed">' + e + '<tbody></tbody></table></div><div class="datepicker-months"><table class="table-condensed">' + e + t + '</table></div><div class="datepicker-years"><table class="table-condensed">' + e + t + "</table></div>",
                        o = "";
                    return r.options.pickDate && r.options.pickTime ? (o = '<div class="bootstrap-datetimepicker-widget' + (r.options.sideBySide ? " timepicker-sbs" : "") + (r.use24hours ? " usetwentyfour" : "") + ' dropdown-menu" style="z-index:9999 !important;">', o += r.options.sideBySide ? '<div class="row"><div class="col-sm-6 datepicker">' + i + '</div><div class="col-sm-6 timepicker">' + A.getTemplate() + "</div></div>" : '<ul class="list-unstyled"><li' + (r.options.collapse ? ' class="collapse in"' : "") + '><div class="datepicker">' + i + '</div></li><li class="picker-switch accordion-toggle"><a class="btn" style="width:100%"><span class="' + r.options.icons.time + '"></span></a></li><li' + (r.options.collapse ? ' class="collapse"' : "") + '><div class="timepicker">' + A.getTemplate() + "</div></li></ul>", o += "</div>") : r.options.pickTime ? '<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="timepicker">' + A.getTemplate() + "</div></div>" : '<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="datepicker">' + i + "</div></div>"
                },
                z = {
                    modes: [{
                        clsName: "days",
                        navFnc: "month",
                        navStep: 1
                    }, {
                        clsName: "months",
                        navFnc: "year",
                        navStep: 1
                    }, {
                        clsName: "years",
                        navFnc: "year",
                        navStep: 10
                    }]
                },
                A = {
                    hourTemplate: '<span data-action="showHours"   data-time-component="hours"   class="timepicker-hour"></span>',
                    minuteTemplate: '<span data-action="showMinutes" data-time-component="minutes" class="timepicker-minute"></span>',
                    secondTemplate: '<span data-action="showSeconds"  data-time-component="seconds" class="timepicker-second"></span>'
                };
            A.getTemplate = function() {
                return '<div class="timepicker-picker"><table class="table-condensed"><tr><td><a href="#" class="btn" data-action="incrementHours"><span class="' + r.options.icons.up + '"></span></a></td><td class="separator"></td><td>' + (r.options.useMinutes ? '<a href="#" class="btn" data-action="incrementMinutes"><span class="' + r.options.icons.up + '"></span></a>' : "") + "</td>" + (r.options.useSeconds ? '<td class="separator"></td><td><a href="#" class="btn" data-action="incrementSeconds"><span class="' + r.options.icons.up + '"></span></a></td>' : "") + (r.use24hours ? "" : '<td class="separator"></td>') + "</tr><tr><td>" + A.hourTemplate + '</td> <td class="separator">:</td><td>' + (r.options.useMinutes ? A.minuteTemplate : '<span class="timepicker-minute">00</span>') + "</td> " + (r.options.useSeconds ? '<td class="separator">:</td><td>' + A.secondTemplate + "</td>" : "") + (r.use24hours ? "" : '<td class="separator"></td><td><button type="button" class="btn btn-primary" data-action="togglePeriod"></button></td>') + '</tr><tr><td><a href="#" class="btn" data-action="decrementHours"><span class="' + r.options.icons.down + '"></span></a></td><td class="separator"></td><td>' + (r.options.useMinutes ? '<a href="#" class="btn" data-action="decrementMinutes"><span class="' + r.options.icons.down + '"></span></a>' : "") + "</td>" + (r.options.useSeconds ? '<td class="separator"></td><td><a href="#" class="btn" data-action="decrementSeconds"><span class="' + r.options.icons.down + '"></span></a></td>' : "") + (r.use24hours ? "" : '<td class="separator"></td>') + '</tr></table></div><div class="timepicker-hours" data-action="selectHour"><table class="table-condensed"></table></div><div class="timepicker-minutes" data-action="selectMinute"><table class="table-condensed"></table></div>' + (r.options.useSeconds ? '<div class="timepicker-seconds" data-action="selectSecond"><table class="table-condensed"></table></div>' : "")
            }, r.destroy = function() {
                H(), O(), r.widget.remove(), r.element.removeData("DateTimePicker"), r.component && r.component.removeData("DateTimePicker")
            }, r.show = function(e) {
                if (!l().prop("disabled")) {
                    if (r.options.useCurrent && "" === l().val()) {
                        if (1 !== r.options.minuteStepping) {
                            var i = t(),
                                o = r.options.minuteStepping;
                            i.minutes(Math.round(i.minutes() / o) * o % 60).seconds(0), r.setValue(i.format(r.format))
                        } else r.setValue(t().format(r.format));
                        f("", e.type)
                    }
                    e && "click" === e.type && r.isInput && r.widget.hasClass("picker-open") || (r.widget.hasClass("picker-open") ? (r.widget.hide(), r.widget.removeClass("picker-open")) : (r.widget.show(), r.widget.addClass("picker-open")), r.height = r.component ? r.component.outerHeight() : r.element.outerHeight(), u(), r.element.trigger({
                        type: "dp.show",
                        date: t(r.date)
                    }), W(), e && T(e))
                }
            }, r.disable = function() {
                var e = l();
                e.prop("disabled") || (e.prop("disabled", !0), H())
            }, r.enable = function() {
                var e = l();
                e.prop("disabled") && (e.prop("disabled", !1), I())
            }, r.hide = function() {
                var e, i, o = r.widget.find(".collapse");
                for (e = 0; e < o.length; e++)
                    if (i = o.eq(e).data("collapse"), i && i.transitioning) return;
                r.widget.hide(), r.widget.removeClass("picker-open"), r.viewMode = r.startViewMode, q(), r.element.trigger({
                    type: "dp.hide",
                    date: t(r.date)
                }), O()
            }, r.setValue = function(e) {
                t.locale(r.options.language), e ? r.unset = !1 : (r.unset = !0, E()), e = t.isMoment(e) ? e.locale(r.options.language) : e instanceof Date ? t(e) : t(e, r.format, r.options.useStrict), e.isValid() ? (r.date = e, E(), r.viewDate = t({
                    y: r.date.year(),
                    M: r.date.month()
                }), v(), M()) : h(e)
            }, r.getDate = function() {
                return r.unset ? null : t(r.date)
            }, r.setDate = function(e) {
                var i = t(r.date);
                r.setValue(e ? e : null), f(i, "function")
            }, r.setDisabledDates = function(e) {
                r.options.disabledDates = U(e), r.viewDate && w()
            }, r.setEnabledDates = function(e) {
                r.options.enabledDates = U(e), r.viewDate && w()
            }, r.setMaxDate = function(e) {
                void 0 !== e && (r.options.maxDate = t.isMoment(e) || e instanceof Date ? t(e) : t(e, r.format, r.options.useStrict), r.viewDate && w())
            }, r.setMinDate = function(e) {
                void 0 !== e && (r.options.minDate = t.isMoment(e) || e instanceof Date ? t(e) : t(e, r.format, r.options.useStrict), r.viewDate && w())
            }, p()
        };
    e.fn.datetimepicker = function(t) {
        return this.each(function() {
            var i = e(this),
                a = i.data("DateTimePicker");
            a || i.data("DateTimePicker", new o(this, t))
        })
    }, e.fn.datetimepicker.defaults = {
        format: !1,
        pickDate: !0,
        pickTime: !0,
        useMinutes: !0,
        useSeconds: !1,
        useCurrent: !0,
        calendarWeeks: !1,
        minuteStepping: 1,
        minDate: t({
            y: 1900
        }),
        maxDate: t().add(100, "y"),
        showToday: !0,
        collapse: !0,
        language: t.locale(),
        defaultDate: "",
        disabledDates: !1,
        enabledDates: !1,
        icons: {},
        useStrict: !1,
        direction: "auto",
        sideBySide: !1,
        daysOfWeekDisabled: [],
        widgetParent: !1
    }
});