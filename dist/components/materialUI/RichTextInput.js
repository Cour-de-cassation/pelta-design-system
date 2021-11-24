"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RichTextInput = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const theme_1 = require("../../theme");
function RichTextInput(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const inputClasses = buildInputClasses(theme);
    return (react_1.default.createElement(core_1.TextField, { id: props.name, InputProps: { classes: inputClasses }, error: props.error, helperText: props.error ? props.errorText : props.helperText, label: props.placeholder, multiline: props.multiline, onChange: onChange, rows: props.size, style: props.style, type: props.type, value: props.value, variant: "outlined" }));
    function onChange(event) {
        return props.onChange(event.target.value);
    }
    function buildInputClasses(theme) {
        return (0, core_1.makeStyles)({
            notchedOutline: {
                borderWidth: 2,
                borderColor: theme.colors.line.level2,
            },
            root: { width: props.width },
        })();
    }
}
exports.RichTextInput = RichTextInput;
//# sourceMappingURL=RichTextInput.js.map