"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconDropdown = void 0;
const react_1 = __importDefault(require("react"));
const Dropdown_1 = require("./Dropdown");
const IconButton_1 = require("./IconButton");
function IconDropdown(props) {
    return (react_1.default.createElement(Dropdown_1.Dropdown, { buildButton: ({ onClick }) => (react_1.default.createElement(IconDropdownButton, { buttonSize: props.buttonSize, backgroundColor: props.backgroundColor, disabled: props.disabled, hint: props.hint, iconName: props.iconName, onClick: (event) => {
                onClick(event);
                props.onClick && props.onClick();
            } })), items: props.items, onChange: props.onChange, onClose: props.onClose, width: props.width }));
}
exports.IconDropdown = IconDropdown;
function IconDropdownButton(props) {
    return (react_1.default.createElement(IconButton_1.IconButton, { buttonSize: props.buttonSize, backgroundColor: props.backgroundColor, disabled: props.disabled, hint: props.hint, iconName: props.iconName, onClick: props.onClick }));
}
//# sourceMappingURL=IconDropdown.js.map