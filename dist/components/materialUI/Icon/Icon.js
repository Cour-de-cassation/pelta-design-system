"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const react_1 = __importDefault(require("react"));
const icons_material_1 = require("@mui/icons-material");
const Tooltip_1 = require("../Tooltip");
const svgIcons_1 = require("./svgIcons");
const materialIconMapping = {
    addPerson: icons_material_1.PersonAddRounded,
    admin: icons_material_1.SupervisorAccountRounded,
    arrowDown: icons_material_1.ExpandMoreRounded,
    arrowLeft: icons_material_1.ChevronLeftRounded,
    arrowRight: icons_material_1.ChevronRightRounded,
    arrowUp: icons_material_1.ExpandLessRounded,
    assigned: icons_material_1.HowToRegRounded,
    assignment: icons_material_1.AssignmentIndRounded,
    bank: icons_material_1.AccountBalanceRounded,
    book: icons_material_1.BookRounded,
    bug: icons_material_1.BugReportRounded,
    cake: icons_material_1.CakeRounded,
    car: icons_material_1.DirectionsCarRounded,
    check: icons_material_1.DoneRounded,
    checkBox: icons_material_1.CheckBoxRounded,
    child: icons_material_1.ChildCareRounded,
    city: icons_material_1.LocationCityRounded,
    clock: icons_material_1.AlarmOnRounded,
    close: icons_material_1.CloseRounded,
    cloud: icons_material_1.CloudRounded,
    copy: icons_material_1.FileCopyOutlined,
    delete: icons_material_1.DeleteRounded,
    deleteOutline: icons_material_1.DeleteOutlineRounded,
    discussion: icons_material_1.QuestionAnswerRounded,
    doubleArrow: icons_material_1.SettingsEthernetRounded,
    doubleCheck: icons_material_1.DoneAllRounded,
    edit: icons_material_1.EditRounded,
    edited: icons_material_1.BorderColorRounded,
    email: icons_material_1.EmailRounded,
    error: icons_material_1.ErrorRounded,
    eye: icons_material_1.VisibilityRounded,
    export: icons_material_1.GetAppRounded,
    find: icons_material_1.FindInPageRounded,
    forbidden: icons_material_1.BlockRounded,
    heart: icons_material_1.FavoriteRounded,
    help: icons_material_1.HelpOutline,
    home: icons_material_1.HomeRounded,
    human: icons_material_1.AccessibilityNewRounded,
    key: icons_material_1.VpnKeyRounded,
    location: icons_material_1.RoomRounded,
    lightBulb: icons_material_1.EmojiObjectsRounded,
    link: icons_material_1.Link,
    lock: icons_material_1.LockRounded,
    login: icons_material_1.ExitToAppRounded,
    logout: icons_material_1.PowerSettingsNewRounded,
    mail: icons_material_1.MailRounded,
    map: icons_material_1.MapRounded,
    minus: icons_material_1.RemoveCircleRounded,
    moreHoriz: icons_material_1.MoreHorizRounded,
    moreVert: icons_material_1.MoreVertRounded,
    pencil: icons_material_1.EditRounded,
    person: icons_material_1.PersonRounded,
    phone: icons_material_1.PhoneRounded,
    playlistPlay: icons_material_1.PlaylistPlayRounded,
    playlistCheck: icons_material_1.PlaylistAddCheckRounded,
    plus: icons_material_1.AddCircleRounded,
    publish: icons_material_1.PublishRounded,
    puzzle: icons_material_1.ExtensionRounded,
    redo: icons_material_1.RedoRounded,
    restore: icons_material_1.RestorePageRounded,
    reset: icons_material_1.LoopRounded,
    search: icons_material_1.SearchRounded,
    send: icons_material_1.SendRounded,
    settings: icons_material_1.SettingsRounded,
    statistics: icons_material_1.BarChart,
    stop: icons_material_1.BlockRounded,
    store: icons_material_1.StoreRounded,
    turnRight: icons_material_1.SubdirectoryArrowRightRounded,
    undo: icons_material_1.UndoRounded,
    unlink: icons_material_1.LinkOff,
    unlock: icons_material_1.LockOpenRounded,
    update: icons_material_1.UpdateRounded,
    waiting: icons_material_1.HourglassEmptyRounded,
    warning: icons_material_1.ReportProblemRounded,
    web: icons_material_1.PublicRounded,
    work: icons_material_1.BusinessCenterRounded,
};
const svgIconMapping = {
    judge: svgIcons_1.Judge,
    meditation: svgIcons_1.Meditation,
    scissors: svgIcons_1.Scissors,
};
const iconMapping = Object.assign(Object.assign({}, materialIconMapping), svgIconMapping);
function Icon(props) {
    const IconComponent = iconMapping[props.iconName];
    if (props.hint) {
        return (react_1.default.createElement(Tooltip_1.Tooltip, { title: props.hint },
            react_1.default.createElement(IconComponent, { style: props.style })));
    }
    return react_1.default.createElement(IconComponent, { style: props.style });
}
exports.Icon = Icon;
//# sourceMappingURL=Icon.js.map