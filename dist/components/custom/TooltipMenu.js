"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipMenu = void 0;
const react_1 = __importDefault(require("react"));
const theme_1 = require("../../theme");
const constants_1 = require("../materialUI/constants");
function TooltipMenu(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const styles = buildStyles();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        props.shouldCloseWhenClickedAway && (react_1.default.createElement("div", { onClick: props.onClose, style: styles.overlay })),
        react_1.default.createElement("div", { style: styles.tooltipMenu },
            react_1.default.createElement("div", { style: styles.tooltipMenuContent }, props.children))));
    function buildStyles() {
        return {
            overlay: {
                backgroundColor: theme.colors.overlay,
                opacity: 0.2,
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
            },
            tooltipMenuContent: {
                padding: `${theme.spacing * 2}px`,
            },
            tooltipMenu: Object.assign({ boxShadow: theme.boxShadow.minor.out, backgroundColor: theme.colors.background, borderRadius: theme.shape.borderRadius.xxs, position: "absolute", width: props.width, zIndex: constants_1.zIndices.tooltipMenu }, props.rectPosition),
        };
    }
}
exports.TooltipMenu = TooltipMenu;
//# sourceMappingURL=TooltipMenu.js.map