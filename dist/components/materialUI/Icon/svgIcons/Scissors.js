"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scissors = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const DEFAULT_SIZE = 24;
function Scissors(props) {
    var _a, _b, _c, _d, _e;
    return (react_1.default.createElement(material_1.SvgIcon, { style: props.style },
        react_1.default.createElement("svg", { width: ((_a = props.style) === null || _a === void 0 ? void 0 : _a.width) || DEFAULT_SIZE, height: ((_b = props.style) === null || _b === void 0 ? void 0 : _b.height) || DEFAULT_SIZE, viewBox: `0 0 ${((_c = props.style) === null || _c === void 0 ? void 0 : _c.height) || DEFAULT_SIZE} ${((_d = props.style) === null || _d === void 0 ? void 0 : _d.width) || DEFAULT_SIZE}`, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.0012 8.00016L17.5912 1.41016C18.4812 0.520165 20.0012 1.15016 20.0012 2.40016V2.41016C20.0012 2.79016 19.8512 3.15016 19.5912 3.41016L13.0012 10.0002L11.0012 8.00016ZM7.64121 6.64016C7.93121 6.02016 8.06121 5.31016 7.98121 4.55016C7.79121 2.82016 6.44121 1.35016 4.72121 1.06016C1.95121 0.580165 -0.418789 2.95016 0.0612105 5.71017C0.361211 7.43016 1.82121 8.78016 3.55121 8.97016C4.31121 9.05016 5.01121 8.92016 5.64121 8.63016L8.00121 11.0002L5.64121 13.3602C5.02121 13.0702 4.31121 12.9402 3.55121 13.0202C1.82121 13.2102 0.351211 14.5602 0.0612105 16.2802C-0.418789 19.0502 1.95121 21.4102 4.71121 20.9302C6.43121 20.6302 7.78121 19.1702 7.97121 17.4402C8.05121 16.6802 7.92121 15.9802 7.63121 15.3502L10.0012 13.0002L17.5912 20.5902C18.4812 21.4802 20.0012 20.8502 20.0012 19.5902V19.5802C20.0012 19.2102 19.8512 18.8502 19.5912 18.5802L7.64121 6.64016ZM4.00121 7.00016C2.90121 7.00016 2.00121 6.11016 2.00121 5.00016C2.00121 3.89016 2.90121 3.00016 4.00121 3.00016C5.10121 3.00016 6.00121 3.89016 6.00121 5.00016C6.00121 6.11016 5.10121 7.00016 4.00121 7.00016ZM2.00121 17.0002C2.00121 18.1102 2.90121 19.0002 4.00121 19.0002C5.10121 19.0002 6.00121 18.1102 6.00121 17.0002C6.00121 15.8902 5.10121 15.0002 4.00121 15.0002C2.90121 15.0002 2.00121 15.8902 2.00121 17.0002ZM10.0012 11.5002C9.72121 11.5002 9.50121 11.2802 9.50121 11.0002C9.50121 10.7202 9.72121 10.5002 10.0012 10.5002C10.2812 10.5002 10.5012 10.7202 10.5012 11.0002C10.5012 11.2802 10.2812 11.5002 10.0012 11.5002Z", fill: (_e = props.style) === null || _e === void 0 ? void 0 : _e.color }))));
}
exports.Scissors = Scissors;
//# sourceMappingURL=Scissors.js.map