"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextMonthDate = void 0;
function getNextMonthDate(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const nextMonthDate = new Date();
    if (month === 11) {
        nextMonthDate.setFullYear(year + 1);
        nextMonthDate.setMonth(0);
    }
    else {
        nextMonthDate.setMonth(month + 1);
    }
    return nextMonthDate;
}
exports.getNextMonthDate = getNextMonthDate;
//# sourceMappingURL=getNextMonthDate.js.map