"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmationPopup = void 0;
const react_1 = __importDefault(require("react"));
const theme_1 = require("../../theme");
const wordings_1 = require("../../wordings");
const materialUI_1 = require("../materialUI");
const ButtonWithIcon_1 = require("./ButtonWithIcon");
const PopUp_1 = require("./PopUp");
function ConfirmationPopup(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const styles = buildStyles(theme);
    return (react_1.default.createElement(PopUp_1.PopUp, null,
        react_1.default.createElement("div", { style: styles.textContainer },
            react_1.default.createElement(materialUI_1.Text, null, props.text)),
        react_1.default.createElement("div", { style: styles.buttonContainer },
            react_1.default.createElement("div", { style: styles.confirmButtonContainer },
                react_1.default.createElement(ButtonWithIcon_1.ButtonWithIcon, { iconName: "check", onClick: props.onConfirm, text: wordings_1.wordings.confirm, color: "primary" })),
            react_1.default.createElement(ButtonWithIcon_1.ButtonWithIcon, { iconName: "close", onClick: props.onCancel, text: wordings_1.wordings.cancel, color: "default" }))));
}
exports.ConfirmationPopup = ConfirmationPopup;
function buildStyles(theme) {
    return {
        textContainer: { marginBottom: theme.spacing * 9 },
        buttonContainer: {
            display: "flex",
            justifyContent: "flex-end",
        },
        confirmButtonContainer: {
            marginRight: theme.spacing * 2,
        },
    };
}
//# sourceMappingURL=ConfirmationPopup.js.map