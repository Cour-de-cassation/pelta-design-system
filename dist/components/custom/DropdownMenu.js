"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownMenu = void 0;
const react_1 = __importDefault(require("react"));
const theme_1 = require("../../theme");
const materialUI_1 = require("../materialUI");
const ComponentsList_1 = require("./ComponentsList");
function DropdownMenu(props) {
    const theme = (0, theme_1.useCustomTheme)();
    return (react_1.default.createElement(materialUI_1.Menu, { anchorElement: props.anchorElement, dropdownPosition: props.dropdownPosition, items: props.items.map(({ icon, text, value, isDisabled }) => ({
            element: icon ? (react_1.default.createElement(ComponentsList_1.ComponentsList, { components: [
                    icon,
                    react_1.default.createElement(ItemText, { isDisabled: isDisabled }, text),
                ], spaceBetweenComponents: theme.spacing })) : (react_1.default.createElement(ItemText, { isDisabled: isDisabled }, text)),
            value,
            isDisabled,
        })), onChange: props.onChange, onClose: props.onClose, width: props.width }));
}
exports.DropdownMenu = DropdownMenu;
function ItemText(props) {
    const styles = buildStyles();
    return (react_1.default.createElement(materialUI_1.Text, { variant: "h3", style: styles.itemText }, props.children));
}
function buildStyles() {
    return {
        itemText: {
            whiteSpace: "normal",
            color: "inherit",
        },
    };
}
//# sourceMappingURL=DropdownMenu.js.map