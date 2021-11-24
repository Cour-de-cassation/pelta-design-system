"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioButton = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
function RadioButton(props) {
    const styles = buildStyles();
    return (react_1.default.createElement("div", { style: styles.container },
        react_1.default.createElement(core_1.FormControlLabel, { onClick: props.onClick, value: props.label, control: react_1.default.createElement(core_1.Radio, { checked: props.isChecked, color: "default" }), label: props.label })));
}
exports.RadioButton = RadioButton;
function buildStyles() {
    return {
        container: {
            display: 'flex',
            flex: 1,
            alignItems: 'center',
        },
    };
}
//# sourceMappingURL=RadioButton.js.map