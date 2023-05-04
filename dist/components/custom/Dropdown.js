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
exports.Dropdown = void 0;
const react_1 = __importStar(require("react"));
const DropdownMenu_1 = require("./DropdownMenu");
function Dropdown(props) {
    const [anchorElement, setAnchorElement] = (0, react_1.useState)(undefined);
    const [selectedValue, setSelectedValue] = (0, react_1.useState)(props.defaultValue);
    const [dropdownPosition, setdDropdownPosition] = (0, react_1.useState)("bottom");
    return (react_1.default.createElement(react_1.default.Fragment, null,
        props.buildButton({
            isOpen: isOpen(),
            item: props.items.find((item) => item.value === selectedValue),
            onClick: openDropdown,
        }),
        isOpen() && (react_1.default.createElement(DropdownMenu_1.DropdownMenu, { anchorElement: anchorElement, dropdownPosition: dropdownPosition, items: props.items, onChange: handleSelection, onClose: closeDropdown, width: props.width }))));
    function isOpen() {
        return !!anchorElement;
    }
    function openDropdown(event) {
        const displayPosition = getDisplayPosition(event.currentTarget);
        setdDropdownPosition(displayPosition);
        setAnchorElement(event.currentTarget);
        function getDisplayPosition(anchorElement) {
            const { bottom: dropdownMenuVerticalPosition } = (anchorElement === null || anchorElement === void 0 ? void 0 : anchorElement.getBoundingClientRect()) || { bottom: 0 };
            const windowHeight = window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight;
            const dropdownMenuVerticalWindowPercentagePosition = (100 * dropdownMenuVerticalPosition) / windowHeight;
            return dropdownMenuVerticalWindowPercentagePosition < 75
                ? "bottom"
                : "top";
        }
    }
    function closeDropdown() {
        setAnchorElement(undefined);
        props.onClose && props.onClose();
    }
    function handleSelection(value) {
        setSelectedValue(value);
        props.onChange(value);
    }
}
exports.Dropdown = Dropdown;
//# sourceMappingURL=Dropdown.js.map