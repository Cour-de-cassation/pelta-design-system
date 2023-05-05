"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableSortLabel = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
function TableSortLabel(props) {
    return (react_1.default.createElement(material_1.TableSortLabel, { active: props.active, direction: props.direction, onClick: props.onClick }, props.children));
}
exports.TableSortLabel = TableSortLabel;
//# sourceMappingURL=TableSortLabel.js.map