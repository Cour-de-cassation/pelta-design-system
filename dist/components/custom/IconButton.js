"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconButton = void 0;
const react_1 = __importDefault(require("react"));
const theme_1 = require("../../theme");
const materialUI_1 = require("../materialUI");
const Button_1 = require("./Button");
const ICON_BUTTON_SIZE = 40;
function IconButton(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const style = buildStyle(theme);
    return (react_1.default.createElement(Button_1.Button, { color: props.backgroundColor, disabled: props.disabled, hint: props.hint, onClick: props.onClick, style: style.button, type: props.type },
        react_1.default.createElement("div", { style: style.iconContainer },
            react_1.default.createElement(materialUI_1.Icon, { iconName: props.iconName, style: style.icon }))));
    function buildStyle(theme) {
        const buttonSize = props.buttonSize || ICON_BUTTON_SIZE;
        const color = props.color
            ? theme.colors[props.color].background
            : undefined;
        return {
            button: {
                width: buttonSize,
                minWidth: buttonSize,
                height: buttonSize,
                borderRadius: buttonSize / 2,
            },
            iconContainer: {
                display: "flex",
            },
            icon: {
                color,
            },
        };
    }
}
exports.IconButton = IconButton;
//# sourceMappingURL=IconButton.js.map