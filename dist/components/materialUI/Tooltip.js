"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const Text_1 = require("./Text");
function Tooltip(props) {
    return (react_1.default.createElement(material_1.Tooltip, { placement: props.placement, arrow: props.arrow, title: react_1.default.createElement(Text_1.Text, null, props.title) },
        react_1.default.createElement("span", null, props.children)));
}
exports.Tooltip = Tooltip;
//# sourceMappingURL=Tooltip.js.map