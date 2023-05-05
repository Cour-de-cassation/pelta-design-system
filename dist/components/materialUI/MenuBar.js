"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuBar = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const constants_1 = require("./constants");
const theme_1 = require("../../theme");
function MenuBar(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const styles = buildStyles(props.isElevated);
    return (react_1.default.createElement(core_1.AppBar, { position: "relative", style: styles.appBar, color: props.color }, props.children));
    function buildStyles(isElevated) {
        return {
            appBar: {
                zIndex: constants_1.zIndices.menuBar,
                boxShadow: isElevated ? theme.boxShadow.major.out : "none",
            },
        };
    }
}
exports.MenuBar = MenuBar;
//# sourceMappingURL=MenuBar.js.map