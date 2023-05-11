"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meditation = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const DEFAULT_SIZE = 24;
function Meditation(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return (react_1.default.createElement(material_1.SvgIcon, { style: props.style },
        react_1.default.createElement("svg", { width: ((_a = props.style) === null || _a === void 0 ? void 0 : _a.width) || DEFAULT_SIZE, height: ((_b = props.style) === null || _b === void 0 ? void 0 : _b.height) || DEFAULT_SIZE, viewBox: `0 0 ${((_c = props.style) === null || _c === void 0 ? void 0 : _c.height) || DEFAULT_SIZE} ${((_d = props.style) === null || _d === void 0 ? void 0 : _d.width) || DEFAULT_SIZE}`, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("g", { clipPath: "url(#clip0_3875:24854)" },
                react_1.default.createElement("path", { d: "M14.6324 2.94054C14.6324 4.56649 13.3178 6.91892 11.6919 6.91892C10.0659 6.91892 8.75134 4.56649 8.75134 2.94054C8.75134 1.31459 10.0659 0 11.6919 0C13.3178 0 14.6324 1.31459 14.6324 2.94054Z", fill: (_e = props.style) === null || _e === void 0 ? void 0 : _e.color }),
                react_1.default.createElement("path", { d: "M16.5784 10.9406C15.8951 10.1017 15.1427 9.37516 14.4162 8.8476C13.4476 8.13841 12.5308 7.78381 11.6919 7.78381C10.853 7.78381 9.93622 8.13841 8.96757 8.8476C8.24109 9.38381 7.48866 10.1017 6.80541 10.9406C6.00109 11.9179 4.18487 14.4173 4.58271 16.4411C4.78163 17.4184 5.39568 18.7416 7.22055 19.4422C8.10271 19.7795 9.1492 19.9438 10.5243 19.9438C10.9914 19.9438 11.4065 19.7362 11.6919 19.4162C11.9773 19.7362 12.3924 19.9438 12.8595 19.9438C14.226 19.9438 15.2811 19.7881 16.1632 19.4422C17.9881 18.7416 18.6022 17.4184 18.8011 16.4411C19.1989 14.4087 17.3827 11.9179 16.5784 10.9406ZM12.8595 16.8216C12.3924 16.8216 11.9773 17.0292 11.6919 17.3492C11.4065 17.0292 10.9914 16.8216 10.5243 16.8216C7.87784 16.8216 7.69622 16.0952 7.64433 15.8357C7.62703 15.5762 7.89514 14.7892 8.55244 13.8033L8.76001 15.7579C9.04541 15.853 9.57298 15.9481 10.5243 15.9481C10.9395 15.9481 11.3373 16.0519 11.6919 16.2508C12.0465 16.0519 12.4443 15.9481 12.8595 15.9481C13.8195 15.9481 14.347 15.8443 14.6238 15.7579L14.8314 13.8033C15.4887 14.7892 15.7568 15.5676 15.7395 15.8357C15.6876 16.0952 15.506 16.8216 12.8595 16.8216Z", fill: (_f = props.style) === null || _f === void 0 ? void 0 : _f.color }),
                react_1.default.createElement("path", { d: "M19.7697 19.4941C19.5016 19.226 19.147 19.0011 18.5589 18.8281C18.0227 19.4422 17.3135 19.9265 16.4659 20.2465C15.48 20.627 14.3297 20.8 12.8508 20.8C12.4357 20.8 12.0378 20.6962 11.6832 20.4973C11.3286 20.6962 10.9308 20.8 10.5157 20.8C9.03676 20.8 7.88649 20.627 6.90054 20.2465C6.05297 19.9179 5.34378 19.4335 4.80757 18.8281C4.21946 19.0011 3.87351 19.226 3.59676 19.4941C3.21622 19.8833 3 20.3935 3 20.9298C3 21.3449 3.13838 22.3741 4.40973 23.0573C4.85946 23.2995 5.42162 23.4898 6.13946 23.6368C7.25513 23.8703 8.7427 24 10.3081 24C10.8703 24 11.3632 23.7406 11.6919 23.3341C12.0205 23.7406 12.5135 24 13.0757 24C14.6411 24 16.12 23.8703 17.2443 23.6368C17.9622 23.4898 18.5243 23.2995 18.9741 23.0573C20.2454 22.3741 20.3838 21.3362 20.3838 20.9298C20.3838 20.3935 20.1676 19.8833 19.7697 19.4941Z", fill: (_g = props.style) === null || _g === void 0 ? void 0 : _g.color })),
            react_1.default.createElement("defs", null,
                react_1.default.createElement("clipPath", { id: "clip0_3875:24854" },
                    react_1.default.createElement("rect", { width: ((_h = props.style) === null || _h === void 0 ? void 0 : _h.width) || DEFAULT_SIZE, height: ((_j = props.style) === null || _j === void 0 ? void 0 : _j.height) || DEFAULT_SIZE, fill: (_k = props.style) === null || _k === void 0 ? void 0 : _k.color }))))));
}
exports.Meditation = Meditation;
//# sourceMappingURL=Meditation.js.map