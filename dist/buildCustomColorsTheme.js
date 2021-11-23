"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCustomColorsTheme = void 0;
const customColors_1 = require("./customColors");
const palette_1 = require("./palette");
function buildCustomColorsTheme(displayMode) {
    const customColorsMode = customColors_1.customColors[displayMode];
    return {
        alert: buildCustomColorsVariations(customColorsMode.alert),
        background: (0, palette_1.getColor)(customColorsMode.background),
        badge: {
            type1: {
                backgroundColor: (0, palette_1.getColor)(customColorsMode.badge.type1.backgroundColor),
                color: (0, palette_1.getColor)(customColorsMode.badge.type1.color),
            },
        },
        default: buildCustomColorsVariations(customColorsMode.default),
        disabled: {
            background: (0, palette_1.getShadeColor)(customColorsMode.disabled.background),
            color: (0, palette_1.getShadeColor)(customColorsMode.line.level2),
        },
        document: (0, palette_1.getColor)(customColorsMode.document),
        dropdown: {
            border: {
                default: (0, palette_1.getColor)(customColorsMode.dropdown.border),
                error: (0, palette_1.getColor)(customColorsMode.error),
            },
        },
        icon: (0, palette_1.getColor)(customColorsMode.icon),
        line: {
            level1: (0, palette_1.getColor)(customColorsMode.line.level1),
            level2: (0, palette_1.getShadeColor)(customColorsMode.line.level2),
        },
        overlay: "black",
        primary: buildCustomColorsVariations(customColorsMode.primary),
        separator: (0, palette_1.getShadeColor)(customColorsMode.line.level2),
        success: buildCustomColorsVariations(customColorsMode.success),
        warning: buildCustomColorsVariations(customColorsMode.warning),
    };
    function buildCustomColorsVariations(shadeColor) {
        return {
            background: (0, palette_1.getShadeColor)(shadeColor),
            hoveredBackground: (0, palette_1.emphasizeShadeColor)(shadeColor, displayMode),
            hoveredTextColor: displayMode === "darkMode" ? (0, palette_1.getColor)("black") : (0, palette_1.getColor)("white"),
        };
    }
}
exports.buildCustomColorsTheme = buildCustomColorsTheme;
//# sourceMappingURL=buildCustomColorsTheme.js.map