"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShadeColor = exports.getColor = exports.emphasizeShadeColor = void 0;
const colors_1 = require("@mui/material/colors");
const COLORS = {
    black: "#000000",
    white: "#FFFFFF",
};
const shadeColors = {
    blue: colors_1.blue,
    blueGrey: colors_1.blueGrey,
    brown: colors_1.brown,
    cyan: colors_1.cyan,
    deepOrange: colors_1.deepOrange,
    deepPurple: colors_1.deepPurple,
    green: colors_1.green,
    grey: colors_1.grey,
    indigo: colors_1.indigo,
    lightBlue: colors_1.lightBlue,
    lightGreen: colors_1.lightGreen,
    lime: colors_1.lime,
    orange: colors_1.orange,
    pink: colors_1.pink,
    purple: colors_1.purple,
    red: colors_1.red,
    teal: colors_1.teal,
    yellow: colors_1.yellow,
};
function emphasizeShadeColor(color, displayMode) {
    if (typeof color === "string") {
        switch (color) {
            case "black":
                return "white";
            case "white":
                return "black";
        }
    }
    else {
        const [tint] = color;
        switch (displayMode) {
            case "darkMode":
                return getShadeColor([tint, "100"]);
            case "lightMode":
                return getShadeColor([tint, "900"]);
        }
    }
}
exports.emphasizeShadeColor = emphasizeShadeColor;
function getColor(color) {
    if (typeof color === "string") {
        return COLORS[color];
    }
    else {
        return getShadeColor(color);
    }
}
exports.getColor = getColor;
function getShadeColor(shadeColor) {
    const [tint, shade] = shadeColor;
    return shadeColors[tint][shade];
}
exports.getShadeColor = getShadeColor;
//# sourceMappingURL=palette.js.map