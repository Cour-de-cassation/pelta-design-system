"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTimestampToReadableDate = void 0;
function convertTimestampToReadableDate(timestamp) {
    const date = new Date(timestamp);
    const readableDay = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    const readableMonth = date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : `${date.getMonth() + 1}`;
    const readableYear = date.getFullYear();
    return `${readableDay}/${readableMonth}/${readableYear}`;
}
exports.convertTimestampToReadableDate = convertTimestampToReadableDate;
//# sourceMappingURL=convertTimestampToReadableDate.js.map