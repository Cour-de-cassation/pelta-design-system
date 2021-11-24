"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableBody = void 0;
const react_1 = __importDefault(require("react"));
const TableRow_1 = require("./TableRow");
function TableBody(props) {
    const sortedData = paginateData(sortData(props.data));
    const { onRowClick } = props;
    return (react_1.default.createElement("tbody", null, sortedData.map((row) => (react_1.default.createElement(TableRow_1.TableRow, { fields: props.fields, isHighlighted: !!props.isRowHighlighted && props.isRowHighlighted(row), isMinored: !!props.isRowMinored && props.isRowMinored(row), onRowClick: onRowClick ? () => onRowClick(row) : undefined, optionCellStyle: props.optionCellStyle, buildOptionItems: props.buildOptionItems, row: row })))));
    function paginateData(data) {
        if (!props.pagination) {
            return data;
        }
        return data.slice(props.pagination.start, props.pagination.end);
    }
    function sortData(data) {
        const orderByField = props.fields.find((field) => field.id === props.orderByProperty);
        if (!orderByField) {
            return data;
        }
        return data.sort((dataA, dataB) => {
            const propertyA = orderByField.getSortingValue
                ? orderByField.getSortingValue(dataA)
                : orderByField.extractor(dataA);
            const propertyB = orderByField.getSortingValue
                ? orderByField.getSortingValue(dataB)
                : orderByField.extractor(dataB);
            if (propertyA === propertyB) {
                return 0;
            }
            else if (propertyA < propertyB) {
                return props.orderDirection === "asc" ? -1 : 1;
            }
            else {
                return props.orderDirection === "asc" ? 1 : -1;
            }
        });
    }
}
exports.TableBody = TableBody;
//# sourceMappingURL=TableBody.js.map