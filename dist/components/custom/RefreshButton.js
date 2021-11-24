"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshButton = void 0;
const react_1 = __importDefault(require("react"));
const wordings_1 = require("../../wordings");
const IconButton_1 = require("./IconButton");
const Loader_1 = require("./Loader");
const REFRESH_BUTTON_SIZE = 40;
function RefreshButton(props) {
    const styles = buildStyles();
    if (props.isLoading) {
        return (react_1.default.createElement("div", { style: styles.refreshLoaderContainer },
            react_1.default.createElement(Loader_1.Loader, null)));
    }
    return (react_1.default.createElement(IconButton_1.IconButton, { buttonSize: REFRESH_BUTTON_SIZE, backgroundColor: "primary", onClick: props.onClick, hint: wordings_1.wordings.refresh, iconName: "reset" }));
}
exports.RefreshButton = RefreshButton;
function buildStyles() {
    return {
        refreshLoaderContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: REFRESH_BUTTON_SIZE,
            height: REFRESH_BUTTON_SIZE,
        },
    };
}
//# sourceMappingURL=RefreshButton.js.map