export { typography };
export type { typographyType };
declare const typography: {
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
declare type typographyType = keyof typeof typography;
