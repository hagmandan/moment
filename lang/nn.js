// moment.js language configuration
// language : norwegian nynorsk (nn)
// author : https://github.com/mechuwind

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory(window.moment); // Browser global
    }
}(function (moment) {
    return moment.lang('nn', {
        months : "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort : "jan._feb._mar._apr._mai._jun._jul._aug._sep._okt._nov._des.".split("_"),
        weekdays : "søndag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
        weekdaysShort : "sø._må._ty._on._to._fr._la.".split("_"),
        weekdaysMin : "S_M_T_O_T_F_L".split("_"),
        longDateFormat : {
            LT : "HH:mm",
            L : "DD.MM.YYYY",
            LL : "D MMMM YYYY",
            LLL : "D MMMM YYYY LT",
            LLLL : "dddd D MMMM YYYY LT"
        },
        calendar : {
            sameDay: '[I dag klokka] LT',
            nextDay: '[I morgon klokka] LT',
            nextWeek: 'dddd [klokka] LT',
            lastDay: '[I går klokka] LT',
            lastWeek: '[Føregående] dddd [klokka] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : "om %s",
            past : "for %s siden",
            s : "noen sekund",
            m : "ett minutt",
            mm : "%d minutt",
            h : "en time",
            hh : "%d timar",
            d : "en dag",
            dd : "%d dagar",
            M : "en månad",
            MM : "%d månader",
            y : "ett år",
            yy : "%d år"
        },
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));
