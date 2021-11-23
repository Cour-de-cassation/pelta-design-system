"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typography = void 0;
const fontSizes = {
    small: 12,
    medium: 16,
    large: 24,
};
const typography = {
    body1: {
        normal: { fontFamily: 'Luciole', fontSize: fontSizes.medium },
        bold: { fontFamily: 'Luciole', fontWeight: 'bold', fontSize: fontSizes.medium },
    },
    body2: {
        normal: { fontFamily: 'Courier New', fontSize: fontSizes.medium, lineHeight: '19px' },
        bold: { fontFamily: 'Courier New', fontWeight: 'bold', fontSize: fontSizes.medium },
    },
    h1: {
        normal: { fontFamily: 'Luciole', fontSize: fontSizes.large },
        bold: { fontFamily: 'Luciole', fontWeight: 'bold', fontSize: fontSizes.large },
    },
    h2: {
        normal: { fontFamily: 'Luciole', fontSize: fontSizes.medium },
        bold: { fontFamily: 'Luciole', fontWeight: 'bold', fontSize: fontSizes.medium },
    },
    h3: {
        normal: { fontFamily: 'Luciole', fontSize: fontSizes.small },
        bold: { fontFamily: 'Luciole', fontWeight: 'bold', fontSize: fontSizes.small },
    },
};
exports.typography = typography;
//# sourceMappingURL=typography.js.map