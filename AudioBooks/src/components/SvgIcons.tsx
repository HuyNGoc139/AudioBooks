import TwoStepVerifyIcon from '@src/assets/icons/2step-verify.svg';
import AddPhotoIcon from '@src/assets/icons/add_photo.svg';
import AppIcon from '@src/assets/icons/app-icon.svg';
import ArrowBackIcon from '@src/assets/icons/arrow-back.svg';
import ArrowDownIcon from '@src/assets/icons/arrow-down.svg';
import ArrowLeftIcon from '@src/assets/icons/arrow-left.svg';
import ArrowUpIcon from '@src/assets/icons/arrow-up.svg';
import CategoryIcon from '@src/assets/icons/category.svg';
import CheckIcon from '@src/assets/icons/check.svg';
import CloseIcon from '@src/assets/icons/close.svg';
import ControlOutlineIcon from '@src/assets/icons/control-outline.svg';
import DashboardIcon from '@src/assets/icons/dashboard.svg';
import DeleteIcon from '@src/assets/icons/delete.svg';
import DeviceIcon from '@src/assets/icons/device.svg';
import DrawerIcon from '@src/assets/icons/drawer.svg';
import EditOutlineIcon from '@src/assets/icons/edit-outline.svg';
import EditIcon from '@src/assets/icons/edit.svg';
import ExportIcon from '@src/assets/icons/export.svg';
import EyeOffIcon from '@src/assets/icons/eye-off.svg';
import EyeIcon from '@src/assets/icons/eye.svg';
import FileHistoryIcon from '@src/assets/icons/file-history.svg';
import FileIcon from '@src/assets/icons/file.svg';
import FilterIcon from '@src/assets/icons/filter.svg';
import LanguageIcon from '@src/assets/icons/language.svg';
import LENZTextIcon from '@src/assets/icons/lenz.svg';
import LightBulbIcon from '@src/assets/icons/light-bulb.svg';
import LockIcon from '@src/assets/icons/lock.svg';
import LoginIcon from '@src/assets/icons/login.svg';
import LogoutIcon from '@src/assets/icons/logout.svg';
import MaintenanceIcon from '@src/assets/icons/maintenance.svg';
import MapIcon from '@src/assets/icons/map.svg';
import NetworkIcon from '@src/assets/icons/network.svg';
import NotificationOutlineIcon from '@src/assets/icons/notification-outline.svg';
import OtherCategoryIcon from '@src/assets/icons/other-category.svg';
import PointIcon from '@src/assets/icons/point.svg';
import ProjectIcon from '@src/assets/icons/project.svg';
import QrScanIcon from '@src/assets/icons/qr-scan.svg';
import ReportViewIcon from '@src/assets/icons/report-view.svg';
import RouteIcon from '@src/assets/icons/route.svg';
import ScheduleIcon from '@src/assets/icons/schedule.svg';
import SearchIcon from '@src/assets/icons/search.svg';
import SensorIcon from '@src/assets/icons/sensor.svg';
import SmartLampPostIcon from '@src/assets/icons/smart-lamp-post.svg';
import SortIcon from '@src/assets/icons/sort.svg';
import TakePictureIcon from '@src/assets/icons/take_picture.svg';
import UserOutlineIcon from '@src/assets/icons/user-outline.svg';
import WarningIcon from '@src/assets/icons/warning.svg';
import ZoomInIcon from '@src/assets/icons/zoom_in.svg';
import ZoomOutIcon from '@src/assets/icons/zoom_out.svg';
import React from 'react';
import {SvgProps} from 'react-native-svg';

export const iconsMap = {
  '2step-verify': TwoStepVerifyIcon,
  app: AppIcon,
  drawer: DrawerIcon,
  'eye-off': EyeOffIcon,
  eye: EyeIcon,
  language: LanguageIcon,
  'lenz-text': LENZTextIcon,
  login: LoginIcon,
  logout: LogoutIcon,
  'notification-outline': NotificationOutlineIcon,
  'user-outline': UserOutlineIcon,
  close: CloseIcon,
  dashboard: DashboardIcon,
  device: DeviceIcon,
  file: FileIcon,
  maintenance: MaintenanceIcon,
  map: MapIcon,
  project: ProjectIcon,
  edit: EditIcon,
  lock: LockIcon,
  check: CheckIcon,
  'arrow-back': ArrowBackIcon,
  'arrow-up': ArrowUpIcon,
  'arrow-down': ArrowDownIcon,
  category: CategoryIcon,
  'qr-scan': QrScanIcon,
  'arrow-left': ArrowLeftIcon,
  'light-bulb': LightBulbIcon,
  'file-history': FileHistoryIcon,
  export: ExportIcon,
  network: NetworkIcon,
  schedule: ScheduleIcon,
  sensor: SensorIcon,
  'smart-lamp-post': SmartLampPostIcon,
  'report-view': ReportViewIcon,
  'control-outline': ControlOutlineIcon,
  'other-category': OtherCategoryIcon,
  search: SearchIcon,
  route: RouteIcon,
  point: PointIcon,
  warning: WarningIcon,
  'edit-outline': EditOutlineIcon,
  'add-photo': AddPhotoIcon,
  'take-picture': TakePictureIcon,
  filter: FilterIcon,
  sort: SortIcon,
  'delete-avatar': DeleteIcon,
  'zoom-in': ZoomInIcon,
  'zoom-out': ZoomOutIcon,
};

type TIconProps = {
  name: keyof typeof iconsMap;
} & SvgProps;

export type TIconNames = keyof typeof iconsMap;

export const SvgIcon = ({name, ...props}: TIconProps) => {
  const IconComponent = iconsMap[name];

  return <IconComponent {...props} />;
};
