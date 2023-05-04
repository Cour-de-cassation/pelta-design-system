export type { colorType, constantColorType, displayModeType, shadeColorType, positionType, rectPositionType, };
declare const shadeColors: readonly ["blue", "blueGrey", "brown", "cyan", "deepOrange", "deepPurple", "green", "grey", "indigo", "lightBlue", "lightGreen", "lime", "orange", "pink", "purple", "red", "teal", "yellow"];
declare const constantColors: readonly ["black", "white"];
type displayModeType = "lightMode" | "darkMode";
type constantColorType = typeof constantColors[number];
type shadeColorType = [typeof shadeColors[number], string];
type colorType = constantColorType | shadeColorType;
type positionType = {
    x: number;
    y: number;
};
type rectPositionType = {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
};
