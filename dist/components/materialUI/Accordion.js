"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const theme_1 = require("../../theme");
function Accordion(props) {
    const theme = (0, theme_1.useCustomTheme)();
    return (react_1.default.createElement(core_1.Accordion, { onChange: (_event, expanded) => props.onChange(expanded), style: props.style },
        react_1.default.createElement(core_1.AccordionSummary, { style: props.headerStyle }, props.header),
        react_1.default.createElement(core_1.AccordionDetails, null, props.body)));
}
exports.Accordion = Accordion;
//# sourceMappingURL=Accordion.js.map