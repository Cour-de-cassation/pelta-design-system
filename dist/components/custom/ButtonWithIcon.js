"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonWithIcon = void 0;
const react_1 = __importDefault(require("react"));
const materialUI_1 = require("../materialUI");
const theme_1 = require("../../theme");
const Button_1 = require("./Button");
const Loader_1 = require("./Loader");
function ButtonWithIcon(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const styles = buildStyles(theme);
    return (react_1.default.createElement(Button_1.Button, { color: props.color, disabled: props.disabled, onClick: props.onClick, style: Object.assign(Object.assign({}, styles.button), props.style), type: props.type },
        props.isLoading ? (react_1.default.createElement(Loader_1.Loader, null)) : (react_1.default.createElement("div", { style: styles.iconContainer },
            react_1.default.createElement(materialUI_1.Icon, { iconName: props.iconName }))),
        react_1.default.createElement(materialUI_1.Text, { style: styles.buttonText }, props.text)));
    function buildStyles(theme) {
        return {
            button: {
                justifyContent: "start",
                textTransform: "none",
                padding: `${theme.spacing}px ${theme.spacing * 2}px`,
            },
            iconContainer: {
                display: "flex",
            },
            loadingWheelContainer: {
                backgroundColor: "red",
            },
            loadingWheel: {
                margin: 0,
            },
            buttonText: {
                paddingLeft: theme.spacing,
            },
        };
    }
}
exports.ButtonWithIcon = ButtonWithIcon;
//# sourceMappingURL=ButtonWithIcon.js.map