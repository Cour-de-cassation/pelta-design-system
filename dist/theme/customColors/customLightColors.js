"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customLightColors = void 0;
const primaryColors_1 = require("./primaryColors");
const customLightColors = {
    alert: ['red', '500'],
    background: 'white',
    badge: {
        type1: { backgroundColor: 'black', color: ['grey', '100'] },
    },
    default: ['blueGrey', '200'],
    disabled: { background: ['blueGrey', '50'], color: 'white' },
    document: ['blueGrey', '50'],
    dropdown: {
        border: ['grey', '600'],
    },
    error: ['red', '500'],
    icon: 'black',
    line: { level1: 'black', level2: ['grey', '600'] },
    primary: primaryColors_1.primaryColors.lightMode,
    success: ['lightGreen', '500'],
    warning: ['orange', '500'],
};
exports.customLightColors = customLightColors;
//# sourceMappingURL=customLightColors.js.map