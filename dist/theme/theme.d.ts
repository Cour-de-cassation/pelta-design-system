import { customColorsThemeType } from "./buildCustomColorsTheme";
import { displayModeType } from "./types";
export { buildCustomTheme, commonTheme, useCustomTheme };
export type { customThemeType };
declare const commonTheme: {
    boxShadow: {
        minor: {
            in: string;
            out: string;
        };
        major: {
            in: string;
            out: string;
        };
    };
    shape: {
        borderRadius: {
            xxxs: number;
            xxs: number;
            xs: number;
            s: number;
            m: number;
            l: number;
        };
    };
    spacing: number;
    typography: {
        readonly body1: {
            readonly normal: {
                readonly fontFamily: "Luciole";
                readonly fontSize: number;
            };
            readonly bold: {
                readonly fontFamily: "Luciole";
                readonly fontWeight: "bold";
                readonly fontSize: number;
            };
        };
        readonly body2: {
            readonly normal: {
                readonly fontFamily: "Courier New";
                readonly fontSize: number;
                readonly lineHeight: "19px";
            };
            readonly bold: {
                readonly fontFamily: "Courier New";
                readonly fontWeight: "bold";
                readonly fontSize: number;
            };
        };
        readonly h1: {
            readonly normal: {
                readonly fontFamily: "Luciole";
                readonly fontSize: number;
            };
            readonly bold: {
                readonly fontFamily: "Luciole";
                readonly fontWeight: "bold";
                readonly fontSize: number;
            };
        };
        readonly h2: {
            readonly normal: {
                readonly fontFamily: "Luciole";
                readonly fontSize: number;
            };
            readonly bold: {
                readonly fontFamily: "Luciole";
                readonly fontWeight: "bold";
                readonly fontSize: number;
            };
        };
        readonly h3: {
            readonly normal: {
                readonly fontFamily: "Luciole";
                readonly fontSize: number;
            };
            readonly bold: {
                readonly fontFamily: "Luciole";
                readonly fontWeight: "bold";
                readonly fontSize: number;
            };
        };
    };
};
declare type customThemeType = typeof commonTheme & {
    colors: customColorsThemeType;
};
declare function useCustomTheme(): {
    colors: {
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
    boxShadow: {
        minor: {
            in: string;
            out: string;
        };
        major: {
            in: string;
            out: string;
        };
    };
    shape: {
        borderRadius: {
            xxxs: number;
            xxs: number;
            xs: number;
            s: number;
            m: number;
            l: number;
        };
    };
    spacing: number;
    typography: {
        readonly body1: {
            readonly normal: {
                readonly fontFamily: "Luciole";
                readonly fontSize: number;
            };
            readonly bold: {
                readonly fontFamily: "Luciole";
                readonly fontWeight: "bold";
                readonly fontSize: number;
            };
        };
        readonly body2: {
            readonly normal: {
                readonly fontFamily: "Courier New";
                readonly fontSize: number;
                readonly lineHeight: "19px";
            };
            readonly bold: {
                readonly fontFamily: "Courier New";
                readonly fontWeight: "bold";
                readonly fontSize: number;
            };
        };
        readonly h1: {
            readonly normal: {
                readonly fontFamily: "Luciole";
                readonly fontSize: number;
            };
            readonly bold: {
                readonly fontFamily: "Luciole";
                readonly fontWeight: "bold";
                readonly fontSize: number;
            };
        };
        readonly h2: {
            readonly normal: {
                readonly fontFamily: "Luciole";
                readonly fontSize: number;
            };
            readonly bold: {
                readonly fontFamily: "Luciole";
                readonly fontWeight: "bold";
                readonly fontSize: number;
            };
        };
        readonly h3: {
            readonly normal: {
                readonly fontFamily: "Luciole";
                readonly fontSize: number;
            };
            readonly bold: {
                readonly fontFamily: "Luciole";
                readonly fontWeight: "bold";
                readonly fontSize: number;
            };
        };
    };
};
declare function buildCustomTheme(displayMode: displayModeType): {
    colors: {
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
    boxShadow: {
        minor: {
            in: string;
            out: string;
        };
        major: {
            in: string;
            out: string;
        };
    };
    shape: {
        borderRadius: {
            xxxs: number;
            xxs: number;
            xs: number;
            s: number;
            m: number;
            l: number;
        };
    };
    spacing: number;
    typography: {
        readonly body1: {
            readonly normal: {
                readonly fontFamily: "Luciole";
                readonly fontSize: number;
            };
            readonly bold: {
                readonly fontFamily: "Luciole";
                readonly fontWeight: "bold";
                readonly fontSize: number;
            };
        };
        readonly body2: {
            readonly normal: {
                readonly fontFamily: "Courier New";
                readonly fontSize: number;
                readonly lineHeight: "19px";
            };
            readonly bold: {
                readonly fontFamily: "Courier New";
                readonly fontWeight: "bold";
                readonly fontSize: number;
            };
        };
        readonly h1: {
            readonly normal: {
                readonly fontFamily: "Luciole";
                readonly fontSize: number;
            };
            readonly bold: {
                readonly fontFamily: "Luciole";
                readonly fontWeight: "bold";
                readonly fontSize: number;
            };
        };
        readonly h2: {
            readonly normal: {
                readonly fontFamily: "Luciole";
                readonly fontSize: number;
            };
            readonly bold: {
                readonly fontFamily: "Luciole";
                readonly fontWeight: "bold";
                readonly fontSize: number;
            };
        };
        readonly h3: {
            readonly normal: {
                readonly fontFamily: "Luciole";
                readonly fontSize: number;
            };
            readonly bold: {
                readonly fontFamily: "Luciole";
                readonly fontWeight: "bold";
                readonly fontSize: number;
            };
        };
    };
};
