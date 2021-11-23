import { ReactNode } from "react";
import { displayModeType } from "./types";
export { ThemeProvider };
declare function ThemeProvider(props: {
    children: ReactNode;
    initialDisplayMode?: displayModeType;
    storeDisplayMode: (displayMode: displayModeType) => void;
}): JSX.Element;
