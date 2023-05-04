"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.Table = void 0;
const react_1 = __importStar(require("react"));
const lodash_1 = require("lodash");
const TableHeader_1 = require("./TableHeader");
const TableBody_1 = require("./TableBody");
const TableFooter_1 = require("./TableFooter");
const OPTION_CELL_WIDTH = 40;
function Table(props) {
    const [orderByProperty, setOrderByProperty] = (0, react_1.useState)(props.defaultOrderByProperty);
    const [orderDirection, setOrderDirection] = (0, react_1.useState)(props.defaultOrderDirection || TableHeader_1.DEFAULT_ORDER_DIRECTION);
    const tableStyle = buildTableStyle();
    const fieldCellStyles = buildFieldCellStyles();
    const optionCellStyle = props.buildOptionItems
        ? buildOptionCellStyle()
        : undefined;
    return (react_1.default.createElement("table", { style: tableStyle },
        renderHeader(),
        renderBody(),
        renderFooter()));
    function renderHeader() {
        return (react_1.default.createElement(TableHeader_1.TableHeader, { cells: props.fields.map(({ id, title, canBeSorted, tooltipText }) => ({
                id,
                canBeSorted,
                title,
                tooltipText,
            })), fieldCellStyles: fieldCellStyles, optionCellStyle: optionCellStyle, orderByProperty: orderByProperty, orderDirection: orderDirection, setOrderByProperty: onOrderByPropertyChange, setOrderDirection: onOrderDirectionChange }));
    }
    function onOrderByPropertyChange(newOrderByProperty) {
        setOrderByProperty(newOrderByProperty);
        props.onOrderByPropertyChange &&
            props.onOrderByPropertyChange(newOrderByProperty);
    }
    function onOrderDirectionChange(newOrderDirection) {
        setOrderDirection(newOrderDirection);
        props.onOrderDirectionChange &&
            props.onOrderDirectionChange(newOrderDirection);
    }
    function renderBody() {
        return (react_1.default.createElement(TableBody_1.TableBody, { data: props.data, fields: props.fields, isRowHighlighted: props.isRowHighlighted, isRowMinored: props.isRowMinored, orderByProperty: orderByProperty, orderDirection: orderDirection, buildOptionItems: props.buildOptionItems, optionCellStyle: optionCellStyle, pagination: props.pagination, onRowClick: props.onRowClick }));
    }
    function renderFooter() {
        if (!props.footer) {
            return;
        }
        return react_1.default.createElement(TableFooter_1.TableFooter, { cells: props.footer });
    }
    function buildFieldCellStyles() {
        const totalWidths = (0, lodash_1.sumBy)(props.fields, (field) => field.width);
        const styles = props.fields.reduce((accumulator, field) => {
            return Object.assign(Object.assign({}, accumulator), { [field.id]: {
                    width: `${(field.width / totalWidths) * 100}%`,
                } });
        }, {});
        return styles;
    }
    function buildTableStyle() {
        return {
            borderCollapse: "collapse",
            width: "100%",
        };
    }
    function buildOptionCellStyle() {
        return {
            display: "block",
            width: OPTION_CELL_WIDTH,
        };
    }
}
exports.Table = Table;
//# sourceMappingURL=Table.js.map