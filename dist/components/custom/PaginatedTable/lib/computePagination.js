"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computePagination = void 0;
function computePagination(rowPerPage, page) {
    const start = page * rowPerPage;
    const end = start + rowPerPage;
    return { start, end };
}
exports.computePagination = computePagination;
//# sourceMappingURL=computePagination.js.map