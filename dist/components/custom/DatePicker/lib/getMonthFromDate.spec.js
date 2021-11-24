"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getMonthFromDate_1 = require("./getMonthFromDate");
describe('getMonthFromDate', () => {
    it('should get the rightly formatted month if < 10', () => {
        const date = new Date(2021, 2, 1);
        const month = (0, getMonthFromDate_1.getMonthFromDate)(date);
        expect(month).toBe('03');
    });
    it('should get the rightly formatted month if >= 10', () => {
        const date = new Date(2021, 11, 1);
        const month = (0, getMonthFromDate_1.getMonthFromDate)(date);
        expect(month).toBe('12');
    });
});
//# sourceMappingURL=getMonthFromDate.spec.js.map