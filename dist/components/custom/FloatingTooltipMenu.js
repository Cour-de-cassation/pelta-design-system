"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatingTooltipMenu = void 0;
const react_1 = __importDefault(require("react"));
const TooltipMenu_1 = require("./TooltipMenu");
const VERTICAL_POSITION_OFFSET = 20;
const EDGE_OFFSET = 10;
function FloatingTooltipMenu(props) {
    const displayPosition = getDisplayPosition(props.originPosition, props.width);
    const tooltipMenuRectPosition = getTooltipMenuRectPosition(displayPosition, props.originPosition, props.width);
    return (react_1.default.createElement(TooltipMenu_1.TooltipMenu, { rectPosition: tooltipMenuRectPosition, onClose: props.onClose, shouldCloseWhenClickedAway: props.shouldCloseWhenClickedAway, width: props.width }, props.children));
}
exports.FloatingTooltipMenu = FloatingTooltipMenu;
function getDisplayPosition(originPosition, width) {
    const windowSize = getWindowSize();
    const mouseVerticalWindowPercentagePosition = (100 * originPosition.y) / windowSize.height;
    const vertical = mouseVerticalWindowPercentagePosition < 65 ? "bottom" : "top";
    const horizontal = originPosition.x - width / 2 < EDGE_OFFSET
        ? "left"
        : originPosition.x + width / 2 > windowSize.width - EDGE_OFFSET
            ? "right"
            : "middle";
    return {
        vertical,
        horizontal,
    };
}
function getWindowSize() {
    const width = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    const height = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    return { width, height };
}
function getTooltipMenuRectPosition(displayPosition, originPosition, width) {
    const windowSize = getWindowSize();
    return Object.assign(Object.assign({}, getVerticalOrigin(displayPosition.vertical, windowSize.height, originPosition)), getHorizontalOrigin(displayPosition.horizontal, originPosition, width));
}
function getVerticalOrigin(vertical, windowHeight, originPosition) {
    switch (vertical) {
        case "bottom":
            return {
                top: `${originPosition.y + VERTICAL_POSITION_OFFSET}px`,
            };
        case "top":
            return {
                bottom: `${windowHeight - originPosition.y + VERTICAL_POSITION_OFFSET}px`,
            };
    }
}
function getHorizontalOrigin(horizontal, originPosition, width) {
    switch (horizontal) {
        case "left":
            return {
                left: `${EDGE_OFFSET}px`,
            };
        case "right":
            return {
                right: `${EDGE_OFFSET}px`,
            };
        case "middle":
            return { left: `${originPosition.x - width / 2}px` };
    }
}
//# sourceMappingURL=FloatingTooltipMenu.js.map