"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeNumberOfPages = void 0;
function computeNumberOfPages(resultsCount, rowPerPage) {
    return Math.floor(resultsCount / rowPerPage) + (resultsCount % rowPerPage > 0 ? 1 : 0);
}
exports.computeNumberOfPages = computeNumberOfPages;
//# sourceMappingURL=computeNumberOfPages.js.map