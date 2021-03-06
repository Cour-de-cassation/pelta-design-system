"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getNextMonthDate_1 = require("./getNextMonthDate");
describe('getNextMonthDate', () => {
    it.skip('should get the next month if we are in the middle of the year', () => {
        const date = new Date(2021, 2, 14);
        const nextMonthDate = (0, getNextMonthDate_1.getNextMonthDate)(date);
        expect(nextMonthDate.getMonth()).toBe(3);
        expect(nextMonthDate.getFullYear()).toBe(2021);
    });
    it('should get the next month if we are at the end of the year', () => {
        const date = new Date(2021, 11, 2);
        const nextMonthDate = (0, getNextMonthDate_1.getNextMonthDate)(date);
        expect(nextMonthDate.getMonth()).toBe(0);
        expect(nextMonthDate.getFullYear()).toBe(2022);
    });
});
//# sourceMappingURL=getNextMonthDate.spec.js.map