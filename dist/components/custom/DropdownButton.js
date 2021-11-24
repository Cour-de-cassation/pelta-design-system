"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownButton = void 0;
const react_1 = __importDefault(require("react"));
const theme_1 = require("../../theme");
const materialUI_1 = require("../materialUI");
const Button_1 = require("./Button");
const ComponentsList_1 = require("./ComponentsList");
const LABELLED_DROPDOWN_BORDER_THICKNESS = 2;
function DropdownButton(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const style = buildStyle(theme);
    return (react_1.default.createElement(Button_1.Button, { disabledHover: true, onClick: props.onClick, style: style.dropdown },
        react_1.default.createElement("div", { style: style.dropdownContent },
            react_1.default.createElement("div", { style: style.dropdownText }, props.item
                ? buildDropdownLabel(props.item.text, props.item.icon, true)
                : buildDropdownLabel(props.label, props.labelIcon)),
            react_1.default.createElement("div", { style: style.dropdownArrow },
                react_1.default.createElement(materialUI_1.Icon, { iconName: props.isOpen ? "arrowUp" : "arrowDown" })))));
    function buildDropdownLabel(text, icon, isItemSelected) {
        const textStyle = isItemSelected
            ? { color: theme.colors.line.level1 }
            : props.error
                ? { color: theme.colors.dropdown.border.error }
                : { color: theme.colors.line.level2 };
        return icon ? (react_1.default.createElement(ComponentsList_1.ComponentsList, { components: [icon, react_1.default.createElement(materialUI_1.Text, { style: textStyle }, text)], spaceBetweenComponents: theme.spacing })) : (react_1.default.createElement(materialUI_1.Text, { style: textStyle }, text));
    }
    function buildStyle(theme) {
        const borderColor = props.error
            ? theme.colors.dropdown.border.error
            : theme.colors.dropdown.border.default;
        return {
            dropdown: {
                backgroundColor: "transparent",
                border: `${LABELLED_DROPDOWN_BORDER_THICKNESS}px solid ${borderColor}`,
                textTransform: "none",
                width: props.width ? `${props.width - theme.spacing * 2}px` : "100%",
                padding: theme.spacing,
                borderRadius: theme.shape.borderRadius.xxs,
            },
            dropdownContent: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
            },
            dropdownText: {
                display: "flex",
                alignItems: "center",
                textAlign: "left",
                paddingLeft: theme.spacing,
            },
            dropdownArrow: {
                display: "flex",
            },
        };
    }
}
exports.DropdownButton = DropdownButton;
//# sourceMappingURL=DropdownButton.js.map