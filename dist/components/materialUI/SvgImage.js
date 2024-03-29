"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SvgImage = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
function SvgImage(props) {
    return react_1.default.createElement(material_1.SvgIcon, { style: props.style }, props.children);
}
exports.SvgImage = SvgImage;
//# sourceMappingURL=SvgImage.js.map