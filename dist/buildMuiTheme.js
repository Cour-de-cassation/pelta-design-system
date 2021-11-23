"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMuiTheme = void 0;
const core_1 = require("@material-ui/core");
const theme_1 = require("./theme");
function buildMuiTheme(displayMode) {
    const customTheme = (0, theme_1.buildCustomTheme)(displayMode);
    return (0, core_1.createTheme)({
        shape: { borderRadius: customTheme.shape.borderRadius.xxs },
        spacing: customTheme.spacing,
        typography: customTheme.typography,
        palette: {
            primary: {
                main: customTheme.colors.primary.background,
            },
            text: {
                primary: customTheme.colors.line.level1,
                secondary: customTheme.colors.disabled.color,
            },
            background: {
                default: customTheme.colors.background,
                paper: customTheme.colors.background,
            },
            action: {
                disabled: customTheme.colors.disabled.color,
                disabledBackground: customTheme.colors.disabled.background,
            },
            grey: {
                "300": customTheme.colors.default.background,
            },
        },
    });
}
exports.buildMuiTheme = buildMuiTheme;
//# sourceMappingURL=buildMuiTheme.js.map