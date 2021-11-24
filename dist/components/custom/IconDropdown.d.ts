import { ReactElement } from 'react';
import { iconNameType } from '../materialUI';
import { buttonColorType } from './Button';
export { IconDropdown };
declare function IconDropdown<T extends string>(props: {
    buttonSize?: number;
    backgroundColor?: buttonColorType;
    disabled?: boolean;
    hint: string;
    iconName: iconNameType;
    items: Array<{
        icon?: ReactElement;
        text: string;
        value: T;
        isDisabled?: boolean;
    }>;
    onChange: (value: T) => void;
    onClick?: () => void;
    onClose?: () => void;
    width?: number;
}): ReactElement;
