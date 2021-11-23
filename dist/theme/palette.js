"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShadeColor = exports.getColor = exports.emphasizeShadeColor = void 0;
const blue_1 = __importDefault(require("@material-ui/core/colors/blue"));
const blueGrey_1 = __importDefault(require("@material-ui/core/colors/blueGrey"));
const brown_1 = __importDefault(require("@material-ui/core/colors/brown"));
const cyan_1 = __importDefault(require("@material-ui/core/colors/cyan"));
const deepOrange_1 = __importDefault(require("@material-ui/core/colors/deepOrange"));
const deepPurple_1 = __importDefault(require("@material-ui/core/colors/deepPurple"));
const green_1 = __importDefault(require("@material-ui/core/colors/green"));
const grey_1 = __importDefault(require("@material-ui/core/colors/grey"));
const indigo_1 = __importDefault(require("@material-ui/core/colors/indigo"));
const lightBlue_1 = __importDefault(require("@material-ui/core/colors/lightBlue"));
const lightGreen_1 = __importDefault(require("@material-ui/core/colors/lightGreen"));
const lime_1 = __importDefault(require("@material-ui/core/colors/lime"));
const orange_1 = __importDefault(require("@material-ui/core/colors/orange"));
const pink_1 = __importDefault(require("@material-ui/core/colors/pink"));
const purple_1 = __importDefault(require("@material-ui/core/colors/purple"));
const red_1 = __importDefault(require("@material-ui/core/colors/red"));
const teal_1 = __importDefault(require("@material-ui/core/colors/teal"));
const yellow_1 = __importDefault(require("@material-ui/core/colors/yellow"));
const COLORS = {
    black: "#000000",
    white: "#FFFFFF",
};
const shadeColors = {
    blue: blue_1.default,
    blueGrey: blueGrey_1.default,
    brown: brown_1.default,
    cyan: cyan_1.default,
    deepOrange: deepOrange_1.default,
    deepPurple: deepPurple_1.default,
    green: green_1.default,
    grey: grey_1.default,
    indigo: indigo_1.default,
    lightBlue: lightBlue_1.default,
    lightGreen: lightGreen_1.default,
    lime: lime_1.default,
    orange: orange_1.default,
    pink: pink_1.default,
    purple: purple_1.default,
    red: red_1.default,
    teal: teal_1.default,
    yellow: yellow_1.default,
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