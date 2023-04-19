"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = void 0;
const react_1 = __importDefault(require("react"));
const theme_1 = require("../../theme");
function TextInput(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const styles = buildStyles(theme);
    return (react_1.default.createElement("input", { name: props.name, placeholder: props.placeholder, value: props.value, onChange: onChange, style: styles.input }));
    function onChange(event) {
        return props.onChange(event.target.value);
    }
}
exports.TextInput = TextInput;
function buildStyles(theme) {
    return {
        input: Object.assign({ width: "100%", boxSizing: "border-box", padding: theme.spacing, backgroundColor: "transparent", border: "none", color: theme.colors.line.level1, borderBottom: `${theme.colors.line.level2} 2px solid`, textAlign: "right" }, theme_1.typography.body1.normal),
    };
}
//# sourceMappingURL=TextInput.js.map