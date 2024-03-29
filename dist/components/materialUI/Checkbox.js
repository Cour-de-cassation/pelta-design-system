"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const material_1 = require("@mui/material");
const react_1 = __importStar(require("react"));
function Checkbox(props) {
    const [checked, setChecked] = (0, react_1.useState)(props.defaultChecked);
    if (props.text) {
        return (react_1.default.createElement(material_1.FormControlLabel, { control: react_1.default.createElement(material_1.Checkbox, { checked: checked }), label: props.text, onChange: handleChange, style: props.style }));
    }
    else {
        return react_1.default.createElement(material_1.Checkbox, { checked: checked, onChange: handleChange, style: props.style });
    }
    function handleChange(event, checked) {
        setChecked(checked);
        props.onChange(checked);
    }
}
exports.Checkbox = Checkbox;
//# sourceMappingURL=Checkbox.js.map