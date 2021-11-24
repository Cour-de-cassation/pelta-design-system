"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableFooter = void 0;
const react_1 = __importDefault(require("react"));
const theme_1 = require("../../../theme");
function TableFooter(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const footerStyles = buildStyles(theme);
    return (react_1.default.createElement("tfoot", null,
        react_1.default.createElement("tr", { style: footerStyles.footer }, props.cells.map((cell) => (react_1.default.createElement("td", { key: cell.id }, cell.content))))));
}
exports.TableFooter = TableFooter;
function buildStyles(theme) {
    return {
        footer: {
            borderTop: `1px solid ${theme.colors.line.level2}`,
        },
    };
}
//# sourceMappingURL=TableFooter.js.map