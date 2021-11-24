"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importDefault(require("react"));
const ComponentsList_1 = require("./ComponentsList");
function Header(props) {
    const styles = buildStyles();
    return (react_1.default.createElement("div", { style: Object.assign(Object.assign({}, styles.mainContainer), props.style) },
        react_1.default.createElement("div", { style: styles.leftContainer },
            react_1.default.createElement(ComponentsList_1.ComponentsList, { components: props.leftHeaderComponents, spaceBetweenComponents: props.spaceBetweenComponents })),
        react_1.default.createElement("div", { style: styles.rightContainer },
            react_1.default.createElement(ComponentsList_1.ComponentsList, { components: props.rightHeaderComponents, spaceBetweenComponents: props.spaceBetweenComponents }))));
    function buildStyles() {
        const { left, right } = buildHeaderSized();
        return {
            mainContainer: {
                display: "flex",
            },
            leftContainer: {
                display: "flex",
                alignItems: "center",
                width: `${left}%`,
            },
            rightContainer: {
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                width: `${right}%`,
            },
        };
    }
    function buildHeaderSized() {
        switch (props.variant) {
            case "classic":
                return { left: 50, right: 50 };
            case "mainLeft":
                return { left: 92, right: 8 };
            case "mainRight":
                return { left: 8, right: 92 };
        }
    }
}
exports.Header = Header;
//# sourceMappingURL=Header.js.map