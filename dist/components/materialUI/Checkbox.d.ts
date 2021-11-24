import { ReactElement, CSSProperties } from 'react';
export { Checkbox };
declare function Checkbox(props: {
    defaultChecked: boolean;
    onChange: (checked: boolean) => void;
    text?: string;
    style?: CSSProperties;
}): ReactElement;
