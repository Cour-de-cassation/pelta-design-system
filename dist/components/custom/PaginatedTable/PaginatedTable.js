"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedTable = void 0;
const react_1 = __importStar(require("react"));
const Table_1 = require("../Table");
const lib_1 = require("./lib");
const PaginationFooter_1 = require("./PaginationFooter");
const ROWS_PER_PAGE = 20;
function PaginatedTable(props) {
    const [currentPage, setCurrentPage] = (0, react_1.useState)(0);
    const numberOfPages = (0, lib_1.computeNumberOfPages)(props.data.length, ROWS_PER_PAGE);
    const pagination = (0, lib_1.computePagination)(ROWS_PER_PAGE, currentPage);
    (0, react_1.useEffect)(() => {
        setCurrentPage(0);
    }, [numberOfPages]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Table_1.Table, { data: props.data, defaultOrderByProperty: props.defaultOrderByProperty, defaultOrderDirection: props.defaultOrderDirection, fields: props.fields, onOrderByPropertyChange: props.onOrderByPropertyChange, onOrderDirectionChange: props.onOrderDirectionChange, buildOptionItems: props.buildOptionItems, pagination: pagination }),
        react_1.default.createElement(PaginationFooter_1.PaginationFooter, { numberOfPages: numberOfPages, currentPage: currentPage, setCurrentPage: setCurrentPage })));
}
exports.PaginatedTable = PaginatedTable;
//# sourceMappingURL=PaginatedTable.js.map