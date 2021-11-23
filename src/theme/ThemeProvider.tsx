import React, { ReactNode, useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import { displayModeType } from "./types";
import { buildMuiTheme } from "./buildMuiTheme";
import { DisplayModeContext } from "./displayMode";

export { ThemeProvider };

const DEFAULT_DISPLAY_MODE = "darkMode";

function ThemeProvider(props: {
  children: ReactNode;
  initialDisplayMode?: displayModeType;
  storeDisplayMode: (displayMode: displayModeType) => void;
}) {
  const INITIAL_DISPLAY_MODE = props.initialDisplayMode || DEFAULT_DISPLAY_MODE;
  const [displayMode, setDisplayMode] =
    useState<displayModeType>(INITIAL_DISPLAY_MODE);
  const theme = buildMuiTheme(displayMode);
  const displayModeContext = {
    displayMode,
    setDisplayMode: setAndStoreDisplayMode,
  };
  const style = buildStyle();

  return (
    <DisplayModeContext.Provider value={displayModeContext}>
      <MuiThemeProvider theme={theme}>
        <div style={style}>{props.children}</div>
      </MuiThemeProvider>
    </DisplayModeContext.Provider>
  );

  function setAndStoreDisplayMode(displayMode: displayModeType) {
    props.storeDisplayMode(displayMode);
    localStorage.displayModeHandler.set(displayMode);
    setDisplayMode(displayMode);
  }

  function buildStyle() {
    return {
      height: "100vh",
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
    };
  }
}
