import { colorType, displayModeType, shadeColorType } from "./types";
export { emphasizeShadeColor, getColor, getShadeColor };
declare function emphasizeShadeColor(color: colorType, displayMode: displayModeType): string;
declare function getColor(color: colorType): string;
declare function getShadeColor(shadeColor: shadeColorType): string;
