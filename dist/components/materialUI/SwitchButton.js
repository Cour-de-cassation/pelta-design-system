"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwitchButton = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const theme_1 = require("../../theme");
function SwitchButton(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const classes = buildSwitchButtonClasses(theme);
    return (react_1.default.createElement(core_1.Switch, { disabled: props.disabled, checked: props.checked, classes: Object.assign({}, classes), color: props.color, onChange: props.onChange }));
    function buildSwitchButtonClasses(theme) {
        return (0, core_1.makeStyles)({
            root: {
                width: 50,
                height: 30,
                padding: 0,
                borderRadius: theme.shape.borderRadius.m,
                border: "2px solid",
            },
            switchBase: {
                color: theme.colors.line.level1,
                position: "absolute",
                top: "-7px",
                left: "-7px",
                "&$checked": {
                    color: theme.colors.line.level1,
                },
                "&$checked + $track": {
                    backgroundColor: theme.colors.primary,
                    opacity: 1,
                },
            },
            thumb: { height: 22, width: 22 },
            checked: {},
            track: {
                backgroundColor: theme.colors.background,
            },
        })();
    }
}
exports.SwitchButton = SwitchButton;
//# sourceMappingURL=SwitchButton.js.map