"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const theme_1 = require("../../theme");
function Menu(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const menuClasses = buildMenuClasses(theme);
    const menuItemClasses = buildMenuItemClasses(theme);
    const dropdownMenuConfiguration = {
        anchorOrigin: { horizontal: "left", vertical: props.dropdownPosition },
        transformOrigin: {
            horizontal: "left",
            vertical: oppositePosition(props.dropdownPosition),
        },
    };
    return (react_1.default.createElement(core_1.Menu, { anchorEl: props.anchorElement, anchorOrigin: dropdownMenuConfiguration === null || dropdownMenuConfiguration === void 0 ? void 0 : dropdownMenuConfiguration.anchorOrigin, classes: menuClasses, getContentAnchorEl: null, onClose: onClose, open: isOpen(), transformOrigin: dropdownMenuConfiguration.transformOrigin }, props.items.map(({ value, element, isDisabled }, ind) => (react_1.default.createElement(core_1.MenuItem, { disabled: isDisabled, classes: menuItemClasses, key: ind, value: value, onClick: (event) => handleSelection(event, value) }, element)))));
    function buildMenuClasses(theme) {
        return (0, core_1.makeStyles)({
            paper: {
                backgroundColor: theme.colors.background,
                maxHeight: "300px",
                width: `${props.width}px`,
            },
        })();
    }
    function buildMenuItemClasses(theme) {
        return (0, core_1.makeStyles)({
            root: {
                borderRadius: theme.shape.borderRadius.m,
                margin: theme.spacing,
                "&:hover": {
                    background: theme.colors.default.hoveredBackground,
                    borderRadius: theme.shape.borderRadius.m,
                    color: theme.colors.default.hoveredTextColor,
                },
            },
        })();
    }
    function isOpen() {
        return !!props.anchorElement;
    }
    function handleSelection(event, value) {
        props.onChange(value);
        onClose(event);
    }
    function onClose(event) {
        event.stopPropagation();
        props.onClose(event);
    }
}
exports.Menu = Menu;
function oppositePosition(position) {
    return position === "bottom" ? "top" : "bottom";
}
//# sourceMappingURL=Menu.js.map