var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Language;
(function (Language) {
    Language["np"] = "np";
    Language["en"] = "en";
})(Language || (Language = {}));

var yearMonthDaysMapping = [
    [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
    [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
    [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
    [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
    [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
    [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
];

var monthDaysMappings = yearMonthDaysMapping.map(function (yearMappings) {
    var daySum = 0;
    return yearMappings.map(function (monthDays) {
        var monthPassedDays = [monthDays, daySum];
        daySum += monthDays;
        return monthPassedDays;
    });
}, []);

var daysPassed = 0;

var yearDaysMapping = yearMonthDaysMapping.map(function (yearMappings) {
    var daysInYear = yearMappings.reduce(function (acc, x) { return acc + x; }, 0);
    var yearDaysPassed = [daysInYear, daysPassed];
    daysPassed += daysInYear;
    return yearDaysPassed;
});

var MAX_DAY = 33238;
if (daysPassed !== MAX_DAY) {
    throw new Error('Invalid constant initialization for Nepali Date.');
}

var MIN_DAY = 1;

function getYearIndex(year) {
    return year - EPOCH_YEAR;
}

function getYearFromIndex(yearIndex) {
    return yearIndex + EPOCH_YEAR;
}

var EPOCH_YEAR = 2000;

var COMPLETED_DAYS = 1;

var TOTAL_DAYS = 0;

function mod(m, val) {
    while (val < 0) {
        val += m;
    }
    return val % m;
}

var formatObj = {
    en: {
        day: {
            short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        },
        month: {
            short: ['Bai', 'Jes', 'Asa', 'Shr', 'Bhd', 'Asw', 'Kar', 'Man', 'Pou', 'Mag', 'Fal', 'Cha'],
            long: [
                'Baisakh',
                'Jestha',
                'Asar',
                'Shrawan',
                'Bhadra',
                'Aswin',
                'Kartik',
                'Mangsir',
                'Poush',
                'Magh',
                'Falgun',
                'Chaitra'
            ]
        },
        date: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    },
    np: {
        day: {
            short: ['आइत', 'सोम', 'मंगल', 'बुध', 'बिहि', 'शुक्र', 'शनि'],
            long: ['आइतबार', 'सोमबार', 'मंगलबार', 'बुधबार', 'बिहिबार', 'शुक्रबार', 'शनिबार']
        },
        month: {
            short: ['बै', 'जे', 'अ', 'श्रा', 'भा', 'आ', 'का', 'मं', 'पौ', 'मा', 'फा', 'चै'],
            long: [
                'बैशाख',
                'जेठ',
                'असार',
                'श्रावण',
                'भाद्र',
                'आश्विन',
                'कार्तिक',
                'मंसिर',
                'पौष',
                'माघ',
                'फाल्गुण',
                'चैत्र'
            ]
        },
        date: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९']
    }
};

var beginEnglish = {
    year: 1943,
    month: 3,
    date: 13,
    day: 3
};
function findPassedDays(year, month, date) {
    try {
        var yearIndex = getYearIndex(year);
        var pastYearDays = yearDaysMapping[yearIndex][COMPLETED_DAYS];
        var extraMonth = mod(12, month);
        var extraYear = Math.floor(month / 12);
        var pastMonthDays = yearDaysMapping[yearIndex + extraYear][COMPLETED_DAYS] -
        pastYearDays +
        monthDaysMappings[yearIndex + extraYear][extraMonth][COMPLETED_DAYS];
        var daysPassed_1 = pastYearDays + pastMonthDays + date;
        if (daysPassed_1 < MIN_DAY || daysPassed_1 > MAX_DAY) {
            throw new Error();
        }
        return daysPassed_1;
    }
    catch (_a) {
        throw new Error("The date doesn't fall within 2000/01/01 - 2090/12/30");
    }
}
function mapDaysToDate(daysPassed) {
    if (daysPassed < MIN_DAY || daysPassed > MAX_DAY) {
        throw new Error("The epoch difference is not within the boundaries ".concat(MIN_DAY, " - ").concat(MAX_DAY));
    }
    var yearIndex = yearDaysMapping.findIndex(function (year) {
        return daysPassed > year[COMPLETED_DAYS] && daysPassed <= year[COMPLETED_DAYS] + year[TOTAL_DAYS];
    });
    var monthRemainder = daysPassed - yearDaysMapping[yearIndex][COMPLETED_DAYS];
    var monthIndex = monthDaysMappings[yearIndex].findIndex(function (month) {
        return monthRemainder > month[COMPLETED_DAYS] &&
        monthRemainder <= month[COMPLETED_DAYS] + month[TOTAL_DAYS];
    });
    var date = monthRemainder - monthDaysMappings[yearIndex][monthIndex][COMPLETED_DAYS];
    return {
        year: getYearFromIndex(yearIndex),
        month: monthIndex,
        date: date
    };
}
function findPassedDaysAD(year, month, date) {
    var timeDiff = Math.abs(Date.UTC(year, month, date) - Date.UTC(beginEnglish.year, beginEnglish.month, beginEnglish.date));
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
}
function mapDaysToDateAD(daysPassed) {
    var mappedDate = new Date(Date.UTC(1943, 3, 13 + daysPassed));
    return {
        year: mappedDate.getUTCFullYear(),
        month: mappedDate.getUTCMonth(),
        date: mappedDate.getUTCDate(),
        day: mappedDate.getUTCDay()
    };
}
function convertToAD(bsDateObject) {
    try {
        var daysPassed_2 = findPassedDays(bsDateObject.year, bsDateObject.month, bsDateObject.date);
        var BS = mapDaysToDate(daysPassed_2);
        var AD = mapDaysToDateAD(daysPassed_2);
        return {
            AD: AD,
            BS: __assign(__assign({}, BS), { day: AD.day })
        };
    }
    catch (_a) {
        throw new Error("The date doesn't fall within 2000/01/01 - 2090/12/30");
    }
}
function convertToBS(adDateObject) {
    try {
        var daysPassed_3 = findPassedDaysAD(adDateObject.getFullYear(), adDateObject.getMonth(), adDateObject.getDate());
        var BS = mapDaysToDate(daysPassed_3);
        var AD = mapDaysToDateAD(daysPassed_3);
        return {
            AD: AD,
            BS: __assign(__assign({}, BS), { day: AD.day })
        };
    }
    catch (_a) {
        throw new Error("The date doesn't fall within 2000/01/01 - 2090/12/30");
    }
}
function mapLanguageNumber(dateNumber, language) {
    return dateNumber
        .split('')
        .map(function (num) { return formatObj[language].date[parseInt(num, 10)]; })
        .join('');
}
function format(bsDate, stringFormat, language) {
    return stringFormat
        .replace(/((\\[MDYd])|D{1,2}|M{1,4}|Y{2,4}|d{1,3})/g, function (match, _, matchedString) {
            var _a;
            switch (match) {
                case 'D':
                    return mapLanguageNumber(bsDate.date.toString(), language);
                case 'DD':
                    return mapLanguageNumber(bsDate.date.toString().padStart(2, '0'), language);
                case 'M':
                    return mapLanguageNumber((bsDate.month + 1).toString(), language);
                case 'MM':
                    return mapLanguageNumber((bsDate.month + 1).toString().padStart(2, '0'), language);
                case 'MMM':
                    return formatObj[language].month.short[bsDate.month];
                case 'MMMM':
                    return formatObj[language].month.long[bsDate.month];
                case 'YY':
                    return mapLanguageNumber(bsDate.year.toString().slice(-2), language);
                case 'YYY':
                    return mapLanguageNumber(bsDate.year.toString().slice(-3), language);
                case 'YYYY':
                    return mapLanguageNumber(bsDate.year.toString(), language);
                case 'd':
                    return mapLanguageNumber(((_a = bsDate.day) === null || _a === void 0 ? void 0 : _a.toString()) || '0', language);
                case 'dd':
                    return formatObj[language].day.short[bsDate.day || 0];
                case 'ddd':
                    return formatObj[language].day.long[bsDate.day || 0];
                default:
                    return matchedString.replace('/', '');
            }
        })
        .replace(/\\/g, '');
}
function parse(dateString) {
    var OFFICIAL_FORMAT = /(\d{4})\s*([/-]|\s+)\s*(\d{1,2})\s*([/-]|\s+)\s*(\d{1,2})/;
    var GEORGIAN_FORMAT = /(\d{1,2})\s*([/-]|\s+)\s*(\d{1,2})\s*([/-]|\s+)\s*(\d{4})/;
    var match;
    match = dateString.match(OFFICIAL_FORMAT);
    if (match !== null) {
        return {
            year: parseInt(match[1], 10),
            month: parseInt(match[3], 10) - 1,
            date: parseInt(match[5], 10)
        };
    }
    match = dateString.match(GEORGIAN_FORMAT);
    if (match !== null) {
        return {
            year: parseInt(match[5], 10),
            month: parseInt(match[3], 10) - 1,
            date: parseInt(match[1], 10)
        };
    }
    throw new Error('Invalid date format');
}

var dateSymbol = Symbol('Date');
var daySymbol = Symbol('Day');
var yearSymbol = Symbol('Year');
var monthSymbol = Symbol('MonthIndex');
var jsDateSymbol = Symbol('JsDate');
var convertToBSMethod = Symbol('convertToBS()');
var convertToADMethod = Symbol('convertToAD()');
var setAdBs = Symbol('setADBS()');
var setDayYearMonth = Symbol('setDayYearMonth()');
var NepaliDate =  (function () {
    function NepaliDate() {
        var constructorError = new Error('Invalid constructor arguments');
        if (arguments.length === 0) {
            this[convertToBSMethod](new Date());
        }
        else if (arguments.length === 1) {
            var argument = arguments[0];
            switch (typeof argument) {
                case 'number':
                    this[convertToBSMethod](new Date(argument));
                    break;
                case 'string':
                    var _a = parse(argument), date = _a.date, year = _a.year, month = _a.month;
                    this[setDayYearMonth](year, month, date);
                    this[convertToADMethod]();
                    break;
                case 'object':
                    if (argument instanceof Date) {
                        this[convertToBSMethod](argument);
                    }
                    else {
                        throw constructorError;
                    }
                    break;
                default:
                    throw constructorError;
            }
        }
        else if (arguments.length <= 3) {
            this[setDayYearMonth](arguments[0], arguments[1], arguments[2]);
            this[convertToADMethod]();
        }
        else {
            throw constructorError;
        }
    }
    NepaliDate.prototype[setDayYearMonth] = function (year, month, date, day) {
        if (month === void 0) { month = 0; }
        if (date === void 0) { date = 1; }
        if (day === void 0) { day = 0; }
        this[yearSymbol] = year;
        this[monthSymbol] = month;
        this[dateSymbol] = date;
        this[daySymbol] = day;
    };

    NepaliDate.prototype.toJsDate = function () {
        return this[jsDateSymbol];
    };

    NepaliDate.prototype.getDate = function () {
        return this[dateSymbol];
    };

    NepaliDate.prototype.getYear = function () {
        return this[yearSymbol];
    };

    NepaliDate.prototype.getDay = function () {
        return this[daySymbol];
    };

    NepaliDate.prototype.getMonth = function () {
        return this[monthSymbol];
    };

    NepaliDate.prototype.getDateObject = function () {
        return {
            BS: this.getBS(),
            AD: this.getAD()
        };
    };

    NepaliDate.prototype.getBS = function () {
        return {
            year: this[yearSymbol],
            month: this[monthSymbol],
            date: this[dateSymbol],
            day: this[daySymbol]
        };
    };

    NepaliDate.prototype.getAD = function () {
        return {
            year: this[jsDateSymbol].getFullYear(),
            month: this[jsDateSymbol].getMonth(),
            date: this[jsDateSymbol].getDate(),
            day: this[jsDateSymbol].getDay()
        };
    };

    NepaliDate.prototype.setDate = function (date) {
        var oldDate = this[dateSymbol];
        try {
            this[dateSymbol] = date;
            this[convertToADMethod]();
        }
        catch (e) {
            this[dateSymbol] = oldDate;
            throw e;
        }
    };

    NepaliDate.prototype.setMonth = function (month) {
        var oldMonth = this[monthSymbol];
        try {
            this[monthSymbol] = month;
            this[convertToADMethod]();
        }
        catch (e) {
            this[monthSymbol] = oldMonth;
            throw e;
        }
    };

    NepaliDate.prototype.setYear = function (year) {
        var oldYear = this[yearSymbol];
        try {
            this[yearSymbol] = year;
            this[convertToADMethod]();
        }
        catch (e) {
            this[yearSymbol] = oldYear;
            throw e;
        }
    };

    NepaliDate.prototype.format = function (formatString, language) {
        if (language === void 0) { language = NepaliDate.language; }
        return format(this.getBS(), formatString, language);
    };

    NepaliDate.parse = function (dateString) {
        var _a = parse(dateString), date = _a.date, year = _a.year, month = _a.month;
        return new NepaliDate(year, month, date);
    };

    NepaliDate.now = function () {
        return new NepaliDate();
    };

    NepaliDate.fromAD = function (date) {
        return new NepaliDate(date);
    };
    NepaliDate.prototype[convertToBSMethod] = function (date) {
        var _a = convertToBS(date), AD = _a.AD, BS = _a.BS;
        this[setAdBs](AD, BS);
    };
    NepaliDate.prototype[setAdBs] = function (AD, BS) {
        this[setDayYearMonth](BS.year, BS.month, BS.date, BS.day);
        this[jsDateSymbol] = new Date(AD.year, AD.month, AD.date);
    };
    NepaliDate.prototype[convertToADMethod] = function () {
        var _a = convertToAD({
            year: this[yearSymbol],
            month: this[monthSymbol],
            date: this[dateSymbol]
        }), AD = _a.AD, BS = _a.BS;
        this[setAdBs](AD, BS);
    };
    NepaliDate.prototype.valueOf = function () {
        return this[jsDateSymbol].getTime();
    };
    NepaliDate.prototype.toString = function () {
        return this.format('ddd DD, MMMM YYYY');
    };

    NepaliDate.language = Language.en;
    return NepaliDate;
}());

export { NepaliDate as default };

