"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const theme_1 = require("../../theme");
function Accordion(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const accordionClasses = buildAccordionClasses(theme);
    const accordionHeaderClasses = buildAccordionHeaderClasses();
    return (react_1.default.createElement(material_1.Accordion, { classes: accordionClasses, onChange: (_event, expanded) => props.onChange(expanded), style: props.style },
        react_1.default.createElement(material_1.AccordionSummary, { classes: {
                content: accordionHeaderClasses.content,
                expanded: accordionHeaderClasses.expanded,
            }, style: props.headerStyle }, props.header),
        react_1.default.createElement(material_1.AccordionDetails, null, props.body)));
}
exports.Accordion = Accordion;
function buildAccordionClasses(theme) {
    return (0, styles_1.makeStyles)({
        rounded: {
            backgroundColor: theme.colors.default.background,
            borderRadius: theme.shape.borderRadius.m,
            "&:first-child": {
                borderRadius: theme.shape.borderRadius.m,
            },
            "&:last-child": {
                borderRadius: theme.shape.borderRadius.m,
            },
        },
    })();
}
function buildAccordionHeaderClasses() {
    return (0, styles_1.makeStyles)({
        content: {
            margin: 0,
            "&$expanded": {
                margin: "0",
            },
        },
        expanded: {},
    })();
}
//# sourceMappingURL=Accordion.js.map