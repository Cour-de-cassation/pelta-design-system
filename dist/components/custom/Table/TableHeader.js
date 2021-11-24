"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_ORDER_DIRECTION = exports.TableHeader = void 0;
const react_1 = __importDefault(require("react"));
const theme_1 = require("../../../theme");
const materialUI_1 = require("../../materialUI");
const DEFAULT_ORDER_DIRECTION = "asc";
exports.DEFAULT_ORDER_DIRECTION = DEFAULT_ORDER_DIRECTION;
function TableHeader(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const styles = buildStyles(theme);
    return (react_1.default.createElement("thead", null,
        react_1.default.createElement("tr", { style: styles.header },
            props.cells.map((cell) => (react_1.default.createElement("td", { style: props.fieldCellStyles[cell.id] }, cell.canBeSorted ? (react_1.default.createElement(materialUI_1.TableSortLabel, { direction: props.orderDirection, active: props.orderByProperty === cell.id, onClick: onOrderByPropertyClickBuilder(cell.id) }, renderCellTitle(cell))) : (renderCellTitle(cell))))),
            !!props.optionCellStyle && react_1.default.createElement("td", { style: props.optionCellStyle }))));
    function onOrderByPropertyClickBuilder(newOrderByProperty) {
        const onOrderByPropertyClick = () => {
            if (newOrderByProperty === props.orderByProperty) {
                props.setOrderDirection(props.orderDirection === "asc" ? "desc" : "asc");
            }
            else {
                props.setOrderDirection(DEFAULT_ORDER_DIRECTION);
                props.setOrderByProperty(newOrderByProperty);
            }
        };
        return onOrderByPropertyClick;
    }
    function renderCellTitle(cell) {
        if (cell.tooltipText) {
            return (react_1.default.createElement(materialUI_1.Tooltip, { title: cell.tooltipText },
                react_1.default.createElement(materialUI_1.Text, { variant: "h3" }, cell.title)));
        }
        return react_1.default.createElement(materialUI_1.Text, { variant: "h3" }, cell.title);
    }
}
exports.TableHeader = TableHeader;
function buildStyles(theme) {
    return {
        header: {
            top: 0,
            position: "sticky",
            backgroundColor: theme.colors.background,
        },
    };
}
//# sourceMappingURL=TableHeader.js.map