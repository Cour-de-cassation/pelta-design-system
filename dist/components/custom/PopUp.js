"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopUp = void 0;
const react_1 = __importDefault(require("react"));
const theme_1 = require("../../theme");
const constants_1 = require("../materialUI/constants");
function PopUp(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const styles = buildStyles(theme);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: styles.overlay }),
        react_1.default.createElement("div", { style: styles.popUpContainer },
            react_1.default.createElement("div", { style: styles.popUp }, props.children))));
}
exports.PopUp = PopUp;
function buildStyles(theme) {
    return {
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: theme.colors.overlay,
            opacity: 0.5,
            zIndex: constants_1.zIndices.popUpOverlay,
        },
        popUpContainer: {
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: constants_1.zIndices.popUp,
        },
        popUp: {
            borderRadius: theme.shape.borderRadius.s,
            width: "30vw",
            backgroundColor: theme.colors.background,
            padding: `${theme.spacing * 9}px ${theme.spacing * 8}px`,
        },
    };
}
//# sourceMappingURL=PopUp.js.map