"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computeDisplayedPages_1 = require("./computeDisplayedPages");
describe('computeDisplayedPages', () => {
    it('should return the right displayed pages when currentPage is the first page', () => {
        const currentPage = 0;
        const numberOfPages = 8;
        const displayedPages = (0, computeDisplayedPages_1.computeDisplayedPages)(currentPage, numberOfPages);
        expect(displayedPages).toEqual((0, computeDisplayedPages_1.generateDisplayedPages)([0, 1, 2, 3, 4, undefined, 7]));
    });
    it('should return the right displayed pages when currentPage is at the beginning', () => {
        const currentPage = 2;
        const numberOfPages = 8;
        const displayedPages = (0, computeDisplayedPages_1.computeDisplayedPages)(currentPage, numberOfPages);
        expect(displayedPages).toEqual((0, computeDisplayedPages_1.generateDisplayedPages)([0, 1, 2, 3, 4, undefined, 7]));
    });
    it('should return the right displayed pages when currentPage is at the end', () => {
        const currentPage = 4;
        const numberOfPages = 8;
        const displayedPages = (0, computeDisplayedPages_1.computeDisplayedPages)(currentPage, numberOfPages);
        expect(displayedPages).toEqual((0, computeDisplayedPages_1.generateDisplayedPages)([0, undefined, 3, 4, 5, 6, 7]));
    });
    it('should return the right displayed pages when currentPage is the last page', () => {
        const currentPage = 7;
        const numberOfPages = 8;
        const displayedPages = (0, computeDisplayedPages_1.computeDisplayedPages)(currentPage, numberOfPages);
        expect(displayedPages).toEqual((0, computeDisplayedPages_1.generateDisplayedPages)([0, undefined, 3, 4, 5, 6, 7]));
    });
    it('should return the right displayed pages when currentPage is in the middle', () => {
        const currentPage = 9;
        const numberOfPages = 20;
        const displayedPages = (0, computeDisplayedPages_1.computeDisplayedPages)(currentPage, numberOfPages);
        expect(displayedPages).toEqual((0, computeDisplayedPages_1.generateDisplayedPages)([0, undefined, 8, 9, 10, undefined, 19]));
    });
});
//# sourceMappingURL=computeDisplayedPages.spec.js.map