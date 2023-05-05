"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawer = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const theme_1 = require("../../theme");
const wordings_1 = require("../../wordings");
const __1 = require("..");
const constants_1 = require("./constants");
function Drawer(props) {
    const theme = (0, theme_1.useCustomTheme)();
    const styles = buildStyles();
    return (react_1.default.createElement(core_1.Drawer, { style: styles.drawer, anchor: "right", open: props.isOpen, onClose: props.onClose },
        react_1.default.createElement("div", { style: styles.container },
            react_1.default.createElement("div", { style: styles.header },
                react_1.default.createElement("div", null,
                    react_1.default.createElement(__1.Text, { variant: "h1" }, props.title),
                    props.subtitle && (react_1.default.createElement(__1.Text, { variant: "h3", style: styles.subtitle }, props.subtitle))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(__1.IconButton, { hint: wordings_1.wordings.cancel, onClick: props.onClose, iconName: "close" }))),
            react_1.default.createElement("div", { style: styles.content }, props.children))));
    function buildStyles() {
        return {
            drawer: {
                zIndex: constants_1.zIndices.drawer,
            },
            container: {
                paddingLeft: theme.spacing * 8,
                paddingRight: theme.spacing * 8,
                height: "inherit",
                display: "flex",
                flexDirection: "column",
            },
            subtitle: {
                display: "inherit",
            },
            content: {
                overflow: "auto",
                paddingBottom: theme.spacing * 4,
            },
            header: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: theme.spacing * 3,
                marginTop: theme.spacing * 4,
                borderBottom: "solid 1px",
                borderBottomColor: theme.colors.separator,
                width: "100%",
            },
        };
    }
}
exports.Drawer = Drawer;
//# sourceMappingURL=Drawer.js.map