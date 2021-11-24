"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelledDropdown = void 0;
const react_1 = __importDefault(require("react"));
const Dropdown_1 = require("./Dropdown");
const DropdownButton_1 = require("./DropdownButton");
function LabelledDropdown(props) {
    return (react_1.default.createElement(Dropdown_1.Dropdown, { buildButton: ({ isOpen, item, onClick }) => (react_1.default.createElement(DropdownButton_1.DropdownButton, { error: props.error, isOpen: isOpen, item: item, label: props.label, labelIcon: props.labelIcon, onClick: onClick, width: props.width })), defaultValue: props.defaultValue, items: props.items, onChange: props.onChange, width: props.width }));
}
exports.LabelledDropdown = LabelledDropdown;
//# sourceMappingURL=LabelledDropdown.js.map