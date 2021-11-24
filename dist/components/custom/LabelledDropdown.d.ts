import { ReactElement } from 'react';
export { LabelledDropdown };
declare function LabelledDropdown<T extends string>(props: {
    error?: boolean;
    defaultValue?: T;
    items: Array<{
        icon?: ReactElement;
        text: string;
        value: T;
    }>;
    label: string;
    labelIcon?: ReactElement;
    onChange: (value: T) => void;
    width?: number;
}): ReactElement;
