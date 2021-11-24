"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const react_1 = __importDefault(require("react"));
const theme_1 = require("../../theme");
function Text(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const style = buildStyle(theme);
    return react_1.default.createElement("div", { style: Object.assign(Object.assign({}, style), props.style) }, props.children);
    function buildStyle(theme) {
        const color = getTextColor(theme, props.color);
        const display = props.inline ? "inline" : "initial";
        const variantProperties = theme_1.typography[props.variant || "body1"][props.weight || "normal"];
        return Object.assign({ color,
            display }, variantProperties);
    }
}
exports.Text = Text;
function getTextColor(theme, color) {
    switch (color) {
        case "textPrimary":
            return theme.colors.line.level1;
        case "textSecondary":
            return theme.colors.line.level2;
        default:
            return "inherit";
    }
}
//# sourceMappingURL=Text.js.map