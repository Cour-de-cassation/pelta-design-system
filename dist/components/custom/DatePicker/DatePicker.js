"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePicker = void 0;
const react_1 = __importStar(require("react"));
const DropdownButton_1 = require("../DropdownButton");
const DatePickerTooltip_1 = require("./DatePickerTooltip");
const lib_1 = require("./lib");
function DatePicker(props) {
    const [tooltipMenuRectPosition, setTooltipMenuRectPosition] = (0, react_1.useState)();
    const isDatePickerOpen = !!tooltipMenuRectPosition;
    const item = props.value
        ? {
            text: (0, lib_1.convertTimestampToReadableDate)(props.value.getTime()),
            value: props.value.getTime().toString(),
        }
        : undefined;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(DropdownButton_1.DropdownButton, { isDisabled: props.isDisabled, isOpen: isDatePickerOpen, label: props.label, item: item, onClick: openToolTip, width: props.width }),
        !props.isDisabled && !!tooltipMenuRectPosition && (react_1.default.createElement(DatePickerTooltip_1.DatePickerTooltip, { computeIsDateAvailable: props.computeIsDateAvailable, value: props.value, onChange: props.onChange, rectPosition: tooltipMenuRectPosition, onClose: closeToolTip }))));
    function openToolTip(event) {
        const buttonRect = event.currentTarget.getBoundingClientRect();
        const left = props.parentRectPosition && props.parentRectPosition.left
            ? `calc(${buttonRect.left}px - ${props.parentRectPosition.left}`
            : `${buttonRect.left}px`;
        const top = props.parentRectPosition && props.parentRectPosition.top
            ? `calc(${buttonRect.top}px - ${props.parentRectPosition.top} + ${buttonRect.height}px)`
            : `${buttonRect.top + buttonRect.height}px`;
        setTooltipMenuRectPosition({
            left,
            top,
        });
    }
    function closeToolTip() {
        setTooltipMenuRectPosition(undefined);
    }
}
exports.DatePicker = DatePicker;
//# sourceMappingURL=DatePicker.js.map