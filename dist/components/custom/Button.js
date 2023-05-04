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
exports.Button = void 0;
const react_1 = __importStar(require("react"));
const materialUI_1 = require("../materialUI");
const theme_1 = require("../../theme");
const BUTTON_SIZE = 40;
function Button(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const [isHovered, setIsHovered] = (0, react_1.useState)(false);
    const buttonStyles = buildButtonStyles(theme);
    const style = Object.assign(Object.assign({}, buttonStyles), props.style);
    return props.hint && !props.disabled ? (react_1.default.createElement(materialUI_1.Tooltip, { arrow: true, title: props.hint }, buildButton())) : (buildButton());
    function buildButton() {
        if (props.disabledHover || props.disabled) {
            return (react_1.default.createElement("div", { onClick: onClick, style: style }, props.children));
        }
        return (react_1.default.createElement("button", { onClick: onClick, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), style: style, type: props.type }, props.children));
    }
    function buildButtonStyles(theme) {
        var _a;
        const color = props.color || "default";
        const opacity = props.disabled ? 0.2 : 1;
        const cursor = props.disabled ? "default" : "pointer";
        const hoveredStyles = isHovered
            ? {
                backgroundColor: theme.colors[color].hoveredBackground,
                color: theme.colors[color].hoveredTextColor,
            }
            : undefined;
        return Object.assign({ borderRadius: theme.shape.borderRadius.m, backgroundColor: theme.colors[color].background, margin: 0, cursor, display: "flex", justifyContent: "center", alignItems: "center", opacity, border: "none", color: "inherit", height: `${(_a = props.height) !== null && _a !== void 0 ? _a : BUTTON_SIZE}px` }, hoveredStyles);
    }
    function onClick(event) {
        event.stopPropagation();
        !props.disabled && props.onClick && props.onClick(event);
    }
}
exports.Button = Button;
//# sourceMappingURL=Button.js.map