"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
const react_1 = __importDefault(require("react"));
const DEFAULT_SIZE = 15;
function Loader(props) {
    const styles = buildStyles();
    return react_1.default.createElement("div", { className: "loader", style: styles.loader });
    function buildStyles() {
        const size = props.size || DEFAULT_SIZE;
        return {
            loader: {
                borderColor: "inherit",
                border: "2px solid",
                borderTop: "2px solid transparent",
                width: `${size}px`,
                height: `${size}px`,
            },
        };
    }
}
exports.Loader = Loader;
//# sourceMappingURL=Loader.js.map