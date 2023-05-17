"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
function Pagination(props) {
    return (react_1.default.createElement(material_1.Pagination, { count: props.count, disabled: props.disabled, onChange: props.onChange, page: props.page }));
}
exports.Pagination = Pagination;
//# sourceMappingURL=Pagination.js.map