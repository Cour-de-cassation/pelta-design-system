/// <reference types="react" />
import { displayModeType } from "./types";
export { useDisplayMode, DisplayModeContext };
declare const DisplayModeContext: import("react").Context<{
    displayMode: displayModeType;
    setDisplayMode: (displayMode: displayModeType) => void;
}>;
declare const useDisplayMode: () => {
    displayMode: displayModeType;
    setDisplayMode: (displayMode: displayModeType) => void;
};
