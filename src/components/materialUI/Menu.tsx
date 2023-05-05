import React, { MouseEvent, ReactElement, ReactNode } from "react";
import { Menu as MUMenu, MenuItem } from "@material-ui/core";
import { customThemeType, useCustomTheme } from "../../theme";

export { Menu };

function Menu<T extends string>(props: {
  anchorElement: Element | undefined;
  dropdownPosition: "bottom" | "top";
  items: Array<{ value: T; element: ReactNode; isDisabled?: boolean }>;
  onChange: (value: T) => void;
  onClose: (event: MouseEvent) => void;
  width?: number;
}): ReactElement {
  const theme = useCustomTheme();
  const dropdownMenuConfiguration = {
    anchorOrigin: { horizontal: "left", vertical: props.dropdownPosition },
    transformOrigin: {
      horizontal: "left",
      vertical: oppositePosition(props.dropdownPosition),
    },
  } as const;

  return (
    <MUMenu
      anchorEl={props.anchorElement}
      anchorOrigin={dropdownMenuConfiguration?.anchorOrigin}
      getContentAnchorEl={null} // To prevent materialUI to log cryptic error
      onClose={onClose}
      open={isOpen()}
      transformOrigin={dropdownMenuConfiguration.transformOrigin}
    >
      {props.items.map(({ value, element, isDisabled }, ind) => (
        <MenuItem
          disabled={isDisabled}
          key={ind}
          value={value}
          onClick={(event: MouseEvent) => handleSelection(event, value)}
        >
          {element}
        </MenuItem>
      ))}
    </MUMenu>
  );

  function isOpen() {
    return !!props.anchorElement;
  }

  function handleSelection(event: MouseEvent, value: T) {
    props.onChange(value);
    onClose(event);
  }

  function onClose(event: MouseEvent) {
    event.stopPropagation();
    props.onClose(event);
  }
}

function oppositePosition(position: "bottom" | "top") {
  return position === "bottom" ? "top" : "bottom";
}
