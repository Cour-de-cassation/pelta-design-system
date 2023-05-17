import React, { ReactElement } from "react";
export { OptionButton };
declare function OptionButton<T extends string>(props: {
    items: Array<{
        icon?: ReactElement;
        text: string;
        value: T;
        isDisabled?: boolean;
    }>;
    onSelect: (value: T) => void;
    onClose?: () => void;
}): React.JSX.Element;
