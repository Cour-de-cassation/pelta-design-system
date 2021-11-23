import React, { CSSProperties } from "react";
import {
  AccessibilityNewRounded,
  AccountBalanceRounded,
  AddCircleRounded,
  AlarmOnRounded,
  AssignmentIndRounded,
  BlockRounded,
  BookRounded,
  BorderColorRounded,
  BugReportRounded,
  BusinessCenterRounded,
  CakeRounded,
  ChevronLeftRounded,
  ChevronRightRounded,
  ChildCareRounded,
  CloseRounded,
  CloudRounded,
  DeleteOutlineRounded,
  DeleteRounded,
  DirectionsCarRounded,
  DoneRounded,
  EditRounded,
  EmailRounded,
  EmojiObjectsRounded,
  ErrorRounded,
  ExitToAppRounded,
  ExpandLessRounded,
  ExpandMoreRounded,
  ExtensionRounded,
  FavoriteRounded,
  FileCopyOutlined,
  FindInPageRounded,
  GetAppRounded,
  HomeRounded,
  HourglassEmptyRounded,
  HowToRegRounded,
  LanguageRounded,
  Link,
  LinkOff,
  LocationCityRounded,
  LockOpenRounded,
  LockRounded,
  LoopRounded,
  MailRounded,
  MapRounded,
  MoreHorizRounded,
  MoreVertRounded,
  PersonAddRounded,
  PersonRounded,
  PhoneRounded,
  PlaylistAddCheckRounded,
  PlaylistPlayRounded,
  PowerSettingsNewRounded,
  PublishRounded,
  QuestionAnswerRounded,
  RedoRounded,
  RemoveCircleRounded,
  ReportProblemRounded,
  RestorePageRounded,
  RoomRounded,
  SearchRounded,
  SendRounded,
  SettingsEthernetRounded,
  SettingsRounded,
  StoreRounded,
  SubdirectoryArrowRightRounded,
  SupervisorAccountRounded,
  UndoRounded,
  UpdateRounded,
  VisibilityRounded,
  VpnKeyRounded,
} from "@material-ui/icons";
import { Tooltip } from "../Tooltip";
import { Judge } from "./svgIcons";

export { Icon };

export type { iconNameType };

const materialIconMapping = {
  addPerson: PersonAddRounded,
  admin: SupervisorAccountRounded,
  arrowDown: ExpandMoreRounded,
  arrowLeft: ChevronLeftRounded,
  arrowRight: ChevronRightRounded,
  arrowUp: ExpandLessRounded,
  assigned: HowToRegRounded,
  assignment: AssignmentIndRounded,
  bank: AccountBalanceRounded,
  book: BookRounded,
  bug: BugReportRounded,
  cake: CakeRounded,
  car: DirectionsCarRounded,
  check: DoneRounded,
  child: ChildCareRounded,
  city: LocationCityRounded,
  clock: AlarmOnRounded,
  close: CloseRounded,
  cloud: CloudRounded,
  copy: FileCopyOutlined,
  delete: DeleteRounded,
  deleteOutline: DeleteOutlineRounded,
  discussion: QuestionAnswerRounded,
  doubleArrow: SettingsEthernetRounded,
  edit: EditRounded,
  edited: BorderColorRounded,
  email: EmailRounded,
  error: ErrorRounded,
  eye: VisibilityRounded,
  export: GetAppRounded,
  find: FindInPageRounded,
  forbidden: BlockRounded,
  heart: FavoriteRounded,
  home: HomeRounded,
  human: AccessibilityNewRounded,
  key: VpnKeyRounded,
  location: RoomRounded,
  lightBulb: EmojiObjectsRounded,
  link: Link,
  lock: LockRounded,
  login: ExitToAppRounded,
  logout: PowerSettingsNewRounded,
  mail: MailRounded,
  map: MapRounded,
  minus: RemoveCircleRounded,
  moreHoriz: MoreHorizRounded,
  moreVert: MoreVertRounded,
  pencil: EditRounded,
  person: PersonRounded,
  phone: PhoneRounded,
  playlistPlay: PlaylistPlayRounded,
  playlistCheck: PlaylistAddCheckRounded,
  plus: AddCircleRounded,
  publish: PublishRounded,
  puzzle: ExtensionRounded,
  redo: RedoRounded,
  restore: RestorePageRounded,
  reset: LoopRounded,
  search: SearchRounded,
  send: SendRounded,
  settings: SettingsRounded,
  stop: BlockRounded,
  store: StoreRounded,
  turnRight: SubdirectoryArrowRightRounded,
  undo: UndoRounded,
  unlink: LinkOff,
  unlock: LockOpenRounded,
  update: UpdateRounded,
  waiting: HourglassEmptyRounded,
  warning: ReportProblemRounded,
  web: LanguageRounded,
  work: BusinessCenterRounded,
};

const svgIconMapping = {
  judge: Judge,
};

const iconMapping = {
  ...materialIconMapping,
  ...svgIconMapping,
};

type iconNameType = keyof typeof iconMapping;

function Icon(props: {
  iconName: iconNameType;
  hint?: string;
  style?: CSSProperties;
}) {
  const IconComponent = iconMapping[props.iconName];
  if (props.hint) {
    return (
      <Tooltip title={props.hint}>
        <IconComponent style={props.style} />
      </Tooltip>
    );
  }
  return <IconComponent style={props.style} />;
}
