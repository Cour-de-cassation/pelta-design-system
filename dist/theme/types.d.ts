export type { colorType, constantColorType, displayModeType, shadeColorType, positionType, rectPositionType, };
declare const shadeColors: readonly ["blue", "blueGrey", "brown", "cyan", "deepOrange", "deepPurple", "green", "grey", "indigo", "lightBlue", "lightGreen", "lime", "orange", "pink", "purple", "red", "teal", "yellow"];
declare const constantColors: readonly ["black", "white"];
declare type displayModeType = "lightMode" | "darkMode";
declare type constantColorType = typeof constantColors[number];
declare type shadeColorType = [typeof shadeColors[number], string];
declare type colorType = constantColorType | shadeColorType;
declare type positionType = {
    x: number;
    y: number;
};
declare type rectPositionType = {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
};
