"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionButton = void 0;
const react_1 = __importDefault(require("react"));
const wordings_1 = require("../../../wordings");
const IconDropdown_1 = require("../IconDropdown");
function OptionButton(props) {
    return (react_1.default.createElement(IconDropdown_1.IconDropdown, { onClose: props.onClose, hint: wordings_1.wordings.moreOptions, items: props.items, iconName: "moreVert", onChange: props.onSelect }));
}
exports.OptionButton = OptionButton;
//# sourceMappingURL=OptionButton.js.map