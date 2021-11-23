"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDisplayMode = exports.ThemeProvider = exports.useCustomTheme = exports.typography = exports.getColor = exports.emphasizeShadeColor = void 0;
const ThemeProvider_1 = require("./ThemeProvider");
Object.defineProperty(exports, "ThemeProvider", { enumerable: true, get: function () { return ThemeProvider_1.ThemeProvider; } });
const displayMode_1 = require("./displayMode");
Object.defineProperty(exports, "useDisplayMode", { enumerable: true, get: function () { return displayMode_1.useDisplayMode; } });
const palette_1 = require("./palette");
Object.defineProperty(exports, "emphasizeShadeColor", { enumerable: true, get: function () { return palette_1.emphasizeShadeColor; } });
Object.defineProperty(exports, "getColor", { enumerable: true, get: function () { return palette_1.getColor; } });
const typography_1 = require("./typography");
Object.defineProperty(exports, "typography", { enumerable: true, get: function () { return typography_1.typography; } });
const theme_1 = require("./theme");
Object.defineProperty(exports, "useCustomTheme", { enumerable: true, get: function () { return theme_1.useCustomTheme; } });
//# sourceMappingURL=index.js.map