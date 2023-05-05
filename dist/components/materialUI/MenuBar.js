"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuBar = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const constants_1 = require("./constants");
const theme_1 = require("../../theme");
function MenuBar(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const styles = buildStyles();
    const classes = buildClasses(theme, props.isElevated);
    return (react_1.default.createElement(material_1.AppBar, { classes: classes, position: "relative", style: styles.appBar, color: props.color }, props.children));
    function buildStyles() {
        return {
            appBar: {
                zIndex: constants_1.zIndices.menuBar,
            },
        };
    }
}
exports.MenuBar = MenuBar;
function buildClasses(theme, isElevated) {
    return (0, styles_1.makeStyles)({
        root: {
            boxShadow: isElevated ? theme.boxShadow.major.out : "none",
        },
    })();
}
//# sourceMappingURL=MenuBar.js.map