import React, { ReactNode } from "react";
import { displayModeType } from "./types";
export { ThemeProvider };
declare function ThemeProvider(props: {
    defaultDisplayMode?: displayModeType;
    children: ReactNode;
}): React.JSX.Element;
