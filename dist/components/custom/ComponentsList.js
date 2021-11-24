"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsList = void 0;
const react_1 = __importDefault(require("react"));
function ComponentsList(props) {
    const style = buildStyle();
    return (react_1.default.createElement("div", { style: style.container }, props.components.filter(Boolean).reduce((componentList, component, ind) => [
        ...componentList,
        react_1.default.createElement("span", { key: 2 * ind, style: style.componentContainer }, component),
        react_1.default.createElement("span", { key: 2 * ind + 1, style: style.spaceBetweenComponents }),
    ], [])));
    function buildStyle() {
        return {
            container: { display: 'flex' },
            componentContainer: { display: 'flex', alignItems: 'center' },
            spaceBetweenComponents: {
                paddingRight: props.spaceBetweenComponents,
            },
        };
    }
}
exports.ComponentsList = ComponentsList;
//# sourceMappingURL=ComponentsList.js.map