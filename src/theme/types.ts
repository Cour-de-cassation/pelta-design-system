export type { colorType, constantColorType, displayModeType, shadeColorType };

const shadeColors = [
  "blue",
  "blueGrey",
  "brown",
  "cyan",
  "deepOrange",
  "deepPurple",
  "green",
  "grey",
  "indigo",
  "lightBlue",
  "lightGreen",
  "lime",
  "orange",
  "pink",
  "purple",
  "red",
  "teal",
  "yellow",
] as const;

const constantColors = ["black", "white"] as const;

type displayModeType = "lightMode" | "darkMode";

type constantColorType = typeof constantColors[number];

type shadeColorType = [typeof shadeColors[number], string];

type colorType = constantColorType | shadeColorType;
