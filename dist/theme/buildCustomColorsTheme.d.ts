import { displayModeType } from "./types";
export { buildCustomColorsTheme };
export type { customColorsThemeType };
type customColorsThemeType = ReturnType<typeof buildCustomColorsTheme>;
declare function buildCustomColorsTheme(displayMode: displayModeType): {
    alert: {
        background: string;
        hoveredBackground: string;
        hoveredTextColor: string;
    };
    background: string;
    badge: {
        type1: {
            backgroundColor: string;
            color: string;
        };
    };
    default: {
        background: string;
        hoveredBackground: string;
        hoveredTextColor: string;
    };
    disabled: {
        background: string;
        color: string;
    };
    document: string;
    dropdown: {
        border: {
            default: string;
            error: string;
        };
    };
    icon: string;
    line: {
        level1: string;
        level2: string;
    };
    overlay: string;
    primary: {
        background: string;
        hoveredBackground: string;
        hoveredTextColor: string;
    };
    separator: string;
    success: {
        background: string;
        hoveredBackground: string;
        hoveredTextColor: string;
    };
    warning: {
        background: string;
        hoveredBackground: string;
        hoveredTextColor: string;
    };
};
