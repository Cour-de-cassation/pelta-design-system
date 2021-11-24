"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computePagination_1 = require("./computePagination");
describe('computePagination', () => {
    it('should return the right number with an uncomplete page', () => {
        const rowPerPage = 3;
        const lastPage = (0, computePagination_1.computePagination)(rowPerPage, 3);
        const secondPage = (0, computePagination_1.computePagination)(rowPerPage, 1);
        expect(lastPage).toEqual({ start: 9, end: 12 });
        expect(secondPage).toEqual({ start: 3, end: 6 });
    });
    it('should return the right number with no uncomplete page', () => {
        const rowPerPage = 2;
        const paginatedResult = (0, computePagination_1.computePagination)(rowPerPage, 3);
        expect(paginatedResult).toEqual({ start: 6, end: 8 });
    });
});
//# sourceMappingURL=computePagination.spec.js.map