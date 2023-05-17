import React from "react";
export { PaginationFooter };
declare function PaginationFooter(props: {
    currentPage: number;
    numberOfPages: number;
    setCurrentPage: (currentPage: number) => void;
}): React.JSX.Element;
