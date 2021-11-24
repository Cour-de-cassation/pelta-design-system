"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computeNumberOfPages_1 = require("./computeNumberOfPages");
describe('computeNumberOfPages', () => {
    it('should return the right number with an uncomplete page', () => {
        const resultsCount = 10;
        const rowPerPage = 3;
        const numberOfPages = (0, computeNumberOfPages_1.computeNumberOfPages)(resultsCount, rowPerPage);
        expect(numberOfPages).toBe(4);
    });
    it('should return the right number with no uncomplete page', () => {
        const resultsCount = 12;
        const rowPerPage = 2;
        const numberOfPages = (0, computeNumberOfPages_1.computeNumberOfPages)(resultsCount, rowPerPage);
        expect(numberOfPages).toBe(6);
    });
});
//# sourceMappingURL=computeNumberOfPages.spec.js.map