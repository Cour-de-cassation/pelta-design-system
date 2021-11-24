export { computeDisplayedPages, generateDisplayedPages };
declare function computeDisplayedPages(currentPage: number, numberOfPages: number): ({
    readonly kind: "blank";
    readonly value?: undefined;
} | {
    readonly kind: "page";
    readonly value: number;
})[];
declare function generateDisplayedPages(displayedPageNumbers: Array<number | undefined>): ({
    readonly kind: "blank";
    readonly value?: undefined;
} | {
    readonly kind: "page";
    readonly value: number;
})[];
