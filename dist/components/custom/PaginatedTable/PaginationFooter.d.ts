/// <reference types="react" />
export { PaginationFooter };
declare function PaginationFooter(props: {
    currentPage: number;
    numberOfPages: number;
    setCurrentPage: (currentPage: number) => void;
}): JSX.Element;
