import React from 'react';
export { Pagination };
declare function Pagination(props: {
    count?: number;
    disabled?: boolean;
    page?: number;
    onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}): React.JSX.Element;
