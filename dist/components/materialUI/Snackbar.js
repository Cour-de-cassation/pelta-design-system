"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snackbar = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const theme_1 = require("../../theme");
const Text_1 = require("./Text");
const Icon_1 = require("./Icon");
const DELAY_SHOW = 3 * 1000;
const MAX_WIDTH = 400;
function Snackbar(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const styles = buildStyles(theme, props.variant);
    return (react_1.default.createElement(core_1.Snackbar, { open: props.isOpen, onClose: props.onClose, autoHideDuration: props.autoHide ? DELAY_SHOW : undefined },
        react_1.default.createElement("div", { style: styles.container },
            react_1.default.createElement(Text_1.Text, { style: styles.text }, props.text),
            !props.autoHide && (react_1.default.createElement("div", { style: styles.iconContainer, onClick: props.onClose },
                react_1.default.createElement(Icon_1.Icon, { iconName: "close" }))))));
}
exports.Snackbar = Snackbar;
function buildStyles(theme, variant) {
    const backgroundColor = getBackgroundColor(theme, variant);
    return {
        container: {
            padding: `${theme.spacing * 2}px ${theme.spacing}px ${theme.spacing * 2}px ${theme.spacing * 4}px`,
            maxWidth: MAX_WIDTH,
            borderRadius: theme.shape.borderRadius.xxxs,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: backgroundColor,
        },
        text: {
            marginRight: theme.spacing * 2,
        },
        iconContainer: {
            paddingTop: "2px",
            cursor: "pointer",
        },
    };
}
function getBackgroundColor(theme, variant) {
    switch (variant) {
        case "alert":
            return theme.colors.alert.background;
        case "info":
            return theme.colors.primary.background;
        case "success":
            return theme.colors.success.background;
    }
}
//# sourceMappingURL=Snackbar.js.map