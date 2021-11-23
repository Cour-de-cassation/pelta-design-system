"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCustomTheme = exports.commonTheme = exports.buildCustomTheme = void 0;
const buildCustomColorsTheme_1 = require("./buildCustomColorsTheme");
const displayMode_1 = require("./displayMode");
const typography_1 = require("./typography");
const boxShadow_1 = require("./boxShadow");
const commonTheme = {
    boxShadow: boxShadow_1.boxShadow,
    shape: { borderRadius: { xxxs: 3, xxs: 8, xs: 12, s: 16, m: 24, l: 32 } },
    spacing: 8,
    typography: typography_1.typography,
};
exports.commonTheme = commonTheme;
function useCustomTheme() {
    const { displayMode } = (0, displayMode_1.useDisplayMode)();
    return buildCustomTheme(displayMode);
}
exports.useCustomTheme = useCustomTheme;
function buildCustomTheme(displayMode) {
    const customColorsTheme = (0, buildCustomColorsTheme_1.buildCustomColorsTheme)(displayMode);
    return Object.assign(Object.assign({}, commonTheme), { colors: customColorsTheme });
}
exports.buildCustomTheme = buildCustomTheme;
//# sourceMappingURL=theme.js.map