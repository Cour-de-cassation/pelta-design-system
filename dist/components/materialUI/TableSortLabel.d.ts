import { ReactNode } from 'react';
import { orderDirectionType } from '../custom';
export { TableSortLabel };
declare function TableSortLabel(props: {
    active: boolean;
    children: ReactNode;
    direction: orderDirectionType;
    onClick: () => void;
}): JSX.Element;
