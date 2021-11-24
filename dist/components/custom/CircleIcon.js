"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleIcon = void 0;
const react_1 = __importDefault(require("react"));
const materialUI_1 = require("../materialUI");
const theme_1 = require("../../theme");
function CircleIcon(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const styles = buildStyles(theme);
    return (react_1.default.createElement("div", { style: styles.iconContainer },
        react_1.default.createElement(materialUI_1.Icon, { hint: props.hint, iconName: props.iconName, style: styles.icon })));
    function buildStyles(theme) {
        return {
            iconContainer: {
                width: props.iconSize,
                height: props.iconSize,
                borderRadius: props.iconSize / 2,
                backgroundColor: props.backgroundColor,
                opacity: props.isDisabled ? 0.5 : 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            },
            icon: {
                color: theme.colors.icon,
                fontSize: (props.iconSize * 2) / 3,
            },
        };
    }
}
exports.CircleIcon = CircleIcon;
//# sourceMappingURL=CircleIcon.js.map