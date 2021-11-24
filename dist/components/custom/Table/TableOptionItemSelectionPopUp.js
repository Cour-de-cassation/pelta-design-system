"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableOptionItemSelectionPopUp = void 0;
const react_1 = __importDefault(require("react"));
const theme_1 = require("../../../theme");
const wordings_1 = require("../../../wordings");
const materialUI_1 = require("../../materialUI");
const ButtonWithIcon_1 = require("../ButtonWithIcon");
const LabelledDropdown_1 = require("../LabelledDropdown");
const PopUp_1 = require("../PopUp");
const DROPDOWN_WIDTH = 250;
function TableOptionItemSelectionPopUp(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const styles = buildStyles(theme);
    const dropdownItems = props.items.map((text) => ({ text, value: text }));
    return (react_1.default.createElement(PopUp_1.PopUp, null,
        react_1.default.createElement("div", { style: styles.contentContainer },
            react_1.default.createElement(materialUI_1.Text, { style: styles.description }, props.description),
            react_1.default.createElement("div", { style: styles.dropdownContainer },
                react_1.default.createElement(LabelledDropdown_1.LabelledDropdown, { items: dropdownItems, label: props.dropdownLabel, onChange: props.onSelect, width: DROPDOWN_WIDTH })),
            react_1.default.createElement("div", { style: styles.cancelButtonContainer },
                react_1.default.createElement(ButtonWithIcon_1.ButtonWithIcon, { iconName: "close", onClick: props.onClose, text: wordings_1.wordings.cancel, color: "default" })))));
}
exports.TableOptionItemSelectionPopUp = TableOptionItemSelectionPopUp;
function buildStyles(theme) {
    return {
        contentContainer: {
            display: "flex",
            flexDirection: "column",
        },
        dropdownContainer: {
            display: "flex",
            justifyContent: "center",
            marginBottom: theme.spacing * 6,
        },
        cancelButtonContainer: {
            display: "flex",
            justifyContent: "flex-end",
        },
        description: {
            marginBottom: theme.spacing * 3,
        },
    };
}
//# sourceMappingURL=TableOptionItemSelectionPopUp.js.map