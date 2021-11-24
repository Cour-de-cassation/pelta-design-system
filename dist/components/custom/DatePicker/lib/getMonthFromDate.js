"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthFromDate = void 0;
function getMonthFromDate(date) {
    const month = date.getMonth();
    if (month < 9) {
        return `0${month + 1}`;
    }
    return `${month + 1}`;
}
exports.getMonthFromDate = getMonthFromDate;
//# sourceMappingURL=getMonthFromDate.js.map