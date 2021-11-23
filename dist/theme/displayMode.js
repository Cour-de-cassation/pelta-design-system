"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayModeContext = exports.useDisplayMode = void 0;
const react_1 = require("react");
const DisplayModeContext = (0, react_1.createContext)({
    displayMode: "darkMode",
    setDisplayMode: () => null,
});
exports.DisplayModeContext = DisplayModeContext;
const useDisplayMode = () => {
    return (0, react_1.useContext)(DisplayModeContext);
};
exports.useDisplayMode = useDisplayMode;
//# sourceMappingURL=displayMode.js.map