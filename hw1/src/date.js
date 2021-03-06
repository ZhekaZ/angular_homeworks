var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
function getDate(day, month, year) {
    var parseDate = function (day, month, year) {
        var checkMonthType = function (month) {
            var indexMonth = months.indexOf(month);
            if (indexMonth !== -1) {
                return new Date(day, indexMonth + 1, year);
            }
            else {
                throw new Error('Wrong month !!!');
            }
        };
        if (typeof month === 'string') {
            return checkMonthType(month);
        }
        if ((day > 0 && day < 32) && (year >= 1970 && year.toString().length === 4)) {
            return new Date(day, month, year);
        }
        else {
            throw new Error('Wrong date params !!!');
        }
    };
    if (Array.isArray(day)) {
        if (!Array.isArray(day[0])) {
            return parseDate(day[0], day[1], day[2]);
        }
        else {
            return day.map(function (e) { return parseDate(e[0], e[1], e[2]); });
        }
    }
    else {
        return parseDate(day, month, year);
    }
}
console.log(getDate(1, 1, 2000));
console.log(getDate(22, 08, 1994));
console.log(getDate(12, 'Apr', 1991));
console.log(getDate([3, 4, 2013]));
console.log(getDate([1, 'May', 2017]));
console.log(getDate([[4, 2, 2017], [1, 'Mar', 2017]]));
console.log(getDate([[1, 'Jan', 2017], [2, 3, 2018]]));
//# sourceMappingURL=date.js.map