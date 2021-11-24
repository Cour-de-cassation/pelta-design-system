"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heights = void 0;
const heights = buildHeights();
exports.heights = heights;
function buildHeights() {
    const HEADER_HEIGHT = "72px";
    const ADMIN_PANEL_HEIGHT = `calc(100vh - ${HEADER_HEIGHT})`;
    return {
        header: HEADER_HEIGHT,
        adminPanel: ADMIN_PANEL_HEIGHT,
    };
}
//# sourceMappingURL=heights.js.map