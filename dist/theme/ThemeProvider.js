"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.ThemeProvider = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const buildMuiTheme_1 = require("./buildMuiTheme");
const displayMode_1 = require("./displayMode");
const DEFAULT_DISPLAY_MODE = "darkMode";
function ThemeProvider(props) {
    const INITIAL_DISPLAY_MODE = props.initialDisplayMode || DEFAULT_DISPLAY_MODE;
    const [displayMode, setDisplayMode] = (0, react_1.useState)(INITIAL_DISPLAY_MODE);
    const theme = (0, buildMuiTheme_1.buildMuiTheme)(displayMode);
    const displayModeContext = {
        displayMode,
        setDisplayMode: setAndStoreDisplayMode,
    };
    const style = buildStyle();
    return (react_1.default.createElement(displayMode_1.DisplayModeContext.Provider, { value: displayModeContext },
        react_1.default.createElement(core_1.ThemeProvider, { theme: theme },
            react_1.default.createElement("div", { style: style }, props.children))));
    function setAndStoreDisplayMode(displayMode) {
        props.storeDisplayMode(displayMode);
        localStorage.displayModeHandler.set(displayMode);
        setDisplayMode(displayMode);
    }
    function buildStyle() {
        return {
            height: "100vh",
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
        };
    }
}
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map