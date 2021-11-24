"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPreviousMonthDate_1 = require("./getPreviousMonthDate");
describe('getPreviousMonthDate', () => {
    it('should get the previous month if we are in the middle of the year', () => {
        const date = new Date(2021, 2, 14);
        const previousMonthDate = (0, getPreviousMonthDate_1.getPreviousMonthDate)(date);
        expect(previousMonthDate.getMonth()).toBe(1);
        expect(previousMonthDate.getFullYear()).toBe(2021);
    });
    it('should get the previous month if we are at the beginning of the year', () => {
        const date = new Date(2021, 0, 2);
        const previousMonthDate = (0, getPreviousMonthDate_1.getPreviousMonthDate)(date);
        expect(previousMonthDate.getMonth()).toBe(11);
        expect(previousMonthDate.getFullYear()).toBe(2020);
    });
});
//# sourceMappingURL=getPreviousMonthDate.spec.js.map