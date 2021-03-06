"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCalendarTable = void 0;
const lodash_1 = require("lodash");
const ONE_DAY = 24 * 3600 * 1000;
function createCalendarTable(year, month) {
    const calendarTable = [];
    const daysOfMonth = [];
    // Create the array of the days of the month
    const currentDateInMonth = new Date(year, month, 1, 12, 0, 0);
    do {
        daysOfMonth.push(new Date(currentDateInMonth));
        currentDateInMonth.setTime(currentDateInMonth.getTime() + ONE_DAY);
    } while (currentDateInMonth.getMonth() === month);
    // Dispatch the days of the month in table starting on Monday
    let week = [];
    daysOfMonth.forEach((dayOfMonth) => {
        if (dayOfMonth.getDay() === 1) {
            if (week.length > 0) {
                calendarTable.push(week);
            }
            week = [dayOfMonth.getDate()];
        }
        else {
            week.push(dayOfMonth.getDate());
        }
    });
    if (week.length > 0) {
        calendarTable.push(week);
    }
    // Complete the first week with potential blank spaces
    const firstWeekEmptyDays = 7 - calendarTable[0].length;
    calendarTable[0] = [...(0, lodash_1.range)(firstWeekEmptyDays).map(() => undefined), ...calendarTable[0]];
    // Complete the last week with potential blank spaces
    const lastWeekIndex = calendarTable.length - 1;
    const lastWeekEmptyDays = 7 - calendarTable[lastWeekIndex].length;
    calendarTable[lastWeekIndex] = [...calendarTable[lastWeekIndex], ...(0, lodash_1.range)(lastWeekEmptyDays).map(() => undefined)];
    return calendarTable;
}
exports.createCalendarTable = createCalendarTable;
//# sourceMappingURL=createCalendarTable.js.map