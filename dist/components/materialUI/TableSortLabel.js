"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableSortLabel = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
function TableSortLabel(props) {
    return (react_1.default.createElement(core_1.TableSortLabel, { active: props.active, direction: props.direction, onClick: props.onClick }, props.children));
}
exports.TableSortLabel = TableSortLabel;
//# sourceMappingURL=TableSortLabel.js.map