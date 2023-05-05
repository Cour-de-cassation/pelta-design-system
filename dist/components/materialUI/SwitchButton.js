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
    return (react_1.default.createElement(core_1.Switch, { disabled: props.disabled, checked: props.checked, color: props.color, onChange: props.onChange }));
}
exports.SwitchButton = SwitchButton;
//# sourceMappingURL=SwitchButton.js.map