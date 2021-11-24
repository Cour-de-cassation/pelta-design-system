"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDisplayedPages = exports.computeDisplayedPages = void 0;
const lodash_1 = require("lodash");
const MAX_PAGES_DISPLAYED = 7;
function computeDisplayedPages(currentPage, numberOfPages) {
    if (numberOfPages <= MAX_PAGES_DISPLAYED) {
        return generateDisplayedPages((0, lodash_1.range)(numberOfPages));
    }
    if (currentPage < 4) {
        return generateDisplayedPages([...(0, lodash_1.range)(5), undefined, numberOfPages - 1]);
    }
    if (currentPage > numberOfPages - 5) {
        return generateDisplayedPages([0, undefined, ...(0, lodash_1.range)(numberOfPages - 5, numberOfPages)]);
    }
    return generateDisplayedPages([
        0,
        undefined,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        undefined,
        numberOfPages - 1,
    ]);
}
exports.computeDisplayedPages = computeDisplayedPages;
function generateDisplayedPages(displayedPageNumbers) {
    return displayedPageNumbers.map((displayedPageNumber) => displayedPageNumber === undefined
        ? { kind: 'blank' }
        : { kind: 'page', value: displayedPageNumber });
}
exports.generateDisplayedPages = generateDisplayedPages;
//# sourceMappingURL=computeDisplayedPages.js.map