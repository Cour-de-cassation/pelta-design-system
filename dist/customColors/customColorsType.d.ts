import { colorType, shadeColorType } from "../types";
export type { customColorsType };
declare type customColorsType = {
    alert: shadeColorType;
    background: colorType;
    badge: {
        type1: {
            backgroundColor: colorType;
            color: shadeColorType;
        };
    };
    default: shadeColorType;
    disabled: {
        background: shadeColorType;
        color: colorType;
    };
    document: colorType;
    dropdown: {
        border: colorType;
    };
    error: shadeColorType;
    icon: colorType;
    primary: shadeColorType;
    line: {
        level1: colorType;
        level2: shadeColorType;
    };
    warning: shadeColorType;
    success: shadeColorType;
};
