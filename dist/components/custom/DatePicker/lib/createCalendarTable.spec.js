"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createCalendarTable_1 = require("./createCalendarTable");
describe('createCalendarTable', () => {
    it('should create a table for month when the 1st is a Monday', () => {
        const year = 2021;
        const month = 2;
        const calendarTable = (0, createCalendarTable_1.createCalendarTable)(year, month);
        expect(calendarTable).toEqual([
            [1, 2, 3, 4, 5, 6, 7],
            [8, 9, 10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19, 20, 21],
            [22, 23, 24, 25, 26, 27, 28],
            [29, 30, 31, undefined, undefined, undefined, undefined],
        ]);
    });
    it('should create a table for month when the 1st is not a Monday', () => {
        const year = 2021;
        const month = 3;
        const calendarTable = (0, createCalendarTable_1.createCalendarTable)(year, month);
        expect(calendarTable).toEqual([
            [undefined, undefined, undefined, 1, 2, 3, 4],
            [5, 6, 7, 8, 9, 10, 11],
            [12, 13, 14, 15, 16, 17, 18],
            [19, 20, 21, 22, 23, 24, 25],
            [26, 27, 28, 29, 30, undefined, undefined],
        ]);
    });
    it('should create a table for month when the 31st is a Sunday', () => {
        const year = 2021;
        const month = 9;
        const calendarTable = (0, createCalendarTable_1.createCalendarTable)(year, month);
        expect(calendarTable).toEqual([
            [undefined, undefined, undefined, undefined, 1, 2, 3],
            [4, 5, 6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15, 16, 17],
            [18, 19, 20, 21, 22, 23, 24],
            [25, 26, 27, 28, 29, 30, 31],
        ]);
    });
});
//# sourceMappingURL=createCalendarTable.spec.js.map