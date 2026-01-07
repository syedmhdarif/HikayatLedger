import React from 'react';
import { SvgProps } from 'react-native-svg';
import {
  Home,
  FileText,
  Bell,
  User,
  Plus,
  Search,
  Bookmark,
  Settings,
  Undo2,
  Redo2,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  CheckSquare,
  Link,
  Image,
  Paperclip,
  MoreHorizontal,
  Heading1,
  Heading2,
  Heading3,
  Quote,
  Code,
  FileCode,
  Minus,
  IndentDecrease,
  IndentIncrease,
  Highlighter,
  Palette,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Check,
  Trash2,
  Edit3,
  Share,
  Copy,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  Menu,
  MoreVertical,
  Calendar,
  Clock,
  Star,
  Heart,
  MessageCircle,
  Send,
  Filter,
  SortAsc,
  Grid,
  Folder,
  File,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  RefreshCw,
  Download,
  Upload,
  Wifi,
  WifiOff,
  Zap,
  Moon,
  Sun,
  Globe,
  MapPin,
  Phone,
  Mail,
  Camera,
  Mic,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Maximize,
  Minimize,
  LogOut,
  LogIn,
  UserPlus,
  UserMinus,
  Users,
  Shield,
  Key,
  CreditCard,
  DollarSign,
  ShoppingCart,
  Package,
  Truck,
  Tag,
  Gift,
  Percent,
  PieChart,
  BarChart2,
  TrendingUp,
  TrendingDown,
  Activity,
  Layers,
  Layout,
  Sidebar,
  Terminal,
  Database,
  Cloud,
  CloudOff,
  Save,
  Printer,
  Archive,
  Award,
  Flag,
  Briefcase,
  Building,
  Target,
  Crosshair,
  Navigation,
  Compass,
  Map,
  Chrome,
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Type,
  Hash,
  AtSign,
  LinkIcon,
  Unlink,
  // Category icons
  Film,
  FlaskConical,
  Trophy,
  Cpu,
  Newspaper,
  Sparkles,
  BadgeCheck,
  ChartArea,
} from 'lucide-react-native';
import { Colors } from '../../../theme';

export type IconVariant = 'outline' | 'filled';

export interface IconProps extends Omit<SvgProps, 'color'> {
  size?: number;
  color?: string;
  focused?: boolean;
  variant?: IconVariant;
  strokeWidth?: number;
}

const DEFAULT_SIZE = 24;
const DEFAULT_STROKE_WIDTH = 2;
const FOCUSED_STROKE_WIDTH = 2.5;

// Helper to get stroke width based on focus state
const getStrokeWidth = (
  focused: boolean | undefined,
  variant: IconVariant | undefined,
  customStrokeWidth: number | undefined,
): number => {
  if (customStrokeWidth !== undefined) {
    return customStrokeWidth;
  }
  if (focused || variant === 'filled') {
    return FOCUSED_STROKE_WIDTH;
  }
  return DEFAULT_STROKE_WIDTH;
};

// Helper to get color
const getColor = (
  color: string | undefined,
  focused: boolean | undefined,
): string => {
  if (color) return color;
  return focused ? Colors.primary600 : Colors.grey700;
};

// Factory function to create icon components
const createIcon = (IconComponent: React.ComponentType<any>) => {
  const WrappedIcon: React.FC<IconProps> = ({
    size = DEFAULT_SIZE,
    color,
    focused = false,
    variant = 'outline',
    strokeWidth,
    ...props
  }) => {
    const resolvedColor = getColor(color, focused);
    const resolvedStrokeWidth = getStrokeWidth(focused, variant, strokeWidth);

    return (
      <IconComponent
        size={size}
        color={resolvedColor}
        strokeWidth={resolvedStrokeWidth}
        {...props}
      />
    );
  };

  return WrappedIcon;
};

// Navigation & Tab Bar Icons
export const HomeIcon = createIcon(Home);
export const NotesIcon = createIcon(FileText);
export const InboxIcon = createIcon(Bell);
export const ProfileIcon = createIcon(User);
export const SettingsIcon = createIcon(Settings);

// Common Actions
export const PlusIcon = createIcon(Plus);
export const SearchIcon = createIcon(Search);
export const BookmarkIcon = createIcon(Bookmark);
export const CloseIcon = createIcon(X);
export const CheckIcon = createIcon(Check);
export const TrashIcon = createIcon(Trash2);
export const EditIcon = createIcon(Edit3);
export const ShareIcon = createIcon(Share);
export const CopyIcon = createIcon(Copy);
export const ExternalLinkIcon = createIcon(ExternalLink);
export const RefreshIcon = createIcon(RefreshCw);
export const DownloadIcon = createIcon(Download);
export const UploadIcon = createIcon(Upload);
export const SaveIcon = createIcon(Save);
export const BadgeCheckIcon = createIcon(BadgeCheck);

// Navigation
export const ArrowLeftIcon = createIcon(ArrowLeft);
export const ArrowRightIcon = createIcon(ArrowRight);
export const ChevronDownIcon = createIcon(ChevronDown);
export const ChevronUpIcon = createIcon(ChevronUp);
export const ChevronLeftIcon = createIcon(ChevronLeft);
export const ChevronRightIcon = createIcon(ChevronRight);
export const MenuIcon = createIcon(Menu);
export const MoreHorizontalIcon = createIcon(MoreHorizontal);
export const MoreVerticalIcon = createIcon(MoreVertical);

// Editor - Text Formatting
export const UndoIcon = createIcon(Undo2);
export const RedoIcon = createIcon(Redo2);
export const BoldIcon = createIcon(Bold);
export const ItalicIcon = createIcon(Italic);
export const UnderlineIcon = createIcon(Underline);
export const StrikethroughIcon = createIcon(Strikethrough);
export const AlignLeftIcon = createIcon(AlignLeft);
export const AlignCenterIcon = createIcon(AlignCenter);
export const AlignRightIcon = createIcon(AlignRight);
export const AlignJustifyIcon = createIcon(AlignJustify);

// Editor - Lists & Structure
export const BulletListIcon = createIcon(List);
export const NumberedListIcon = createIcon(ListOrdered);
export const TaskListIcon = createIcon(CheckSquare);
export const IndentDecreaseIcon = createIcon(IndentDecrease);
export const IndentIncreaseIcon = createIcon(IndentIncrease);

// Editor - Insert
export const LinkEditIcon = createIcon(Link);
export const UnlinkEditIcon = createIcon(Unlink);
export const ImageIcon = createIcon(Image);
export const PaperclipIcon = createIcon(Paperclip);

// Editor - Headings
export const Heading1Icon = createIcon(Heading1);
export const Heading2Icon = createIcon(Heading2);
export const Heading3Icon = createIcon(Heading3);

// Editor - Block Elements
export const QuoteIcon = createIcon(Quote);
export const CodeIcon = createIcon(Code);
export const CodeBlockIcon = createIcon(FileCode);
export const HorizontalRuleIcon = createIcon(Minus);

// Editor - Styling
export const HighlighterIcon = createIcon(Highlighter);
export const PaletteIcon = createIcon(Palette);
export const TypeIcon = createIcon(Type);

// Status & Feedback
export const AlertIcon = createIcon(AlertCircle);
export const AlertTriangleIcon = createIcon(AlertTriangle);
export const InfoIcon = createIcon(Info);
export const HelpIcon = createIcon(HelpCircle);
export const ActivityIcon = createIcon(Activity);

// Media
export const CameraIcon = createIcon(Camera);
export const MicIcon = createIcon(Mic);
export const VolumeIcon = createIcon(Volume2);
export const VolumeMuteIcon = createIcon(VolumeX);
export const PlayIcon = createIcon(Play);
export const PauseIcon = createIcon(Pause);

// Communication
export const MessageIcon = createIcon(MessageCircle);
export const SendIcon = createIcon(Send);
export const MailIcon = createIcon(Mail);
export const PhoneIcon = createIcon(Phone);

// Time & Date
export const CalendarIcon = createIcon(Calendar);
export const ClockIcon = createIcon(Clock);

// Social & Engagement
export const StarIcon = createIcon(Star);
export const HeartIcon = createIcon(Heart);
export const FlagIcon = createIcon(Flag);

// Files & Organization
export const FileIcon = createIcon(File);
export const FolderIcon = createIcon(Folder);
export const ArchiveIcon = createIcon(Archive);
export const FilterIcon = createIcon(Filter);
export const SortIcon = createIcon(SortAsc);
export const GridIcon = createIcon(Grid);
export const LayersIcon = createIcon(Layers);
export const LayoutIcon = createIcon(Layout);
export const SidebarIcon = createIcon(Sidebar);

// Visibility
export const EyeIcon = createIcon(Eye);
export const EyeOffIcon = createIcon(EyeOff);
export const MaximizeIcon = createIcon(Maximize);
export const MinimizeIcon = createIcon(Minimize);

// Security & Auth
export const LockIcon = createIcon(Lock);
export const UnlockIcon = createIcon(Unlock);
export const ShieldIcon = createIcon(Shield);
export const KeyIcon = createIcon(Key);
export const LogOutIcon = createIcon(LogOut);
export const LogInIcon = createIcon(LogIn);

// Users
export const UserPlusIcon = createIcon(UserPlus);
export const UserMinusIcon = createIcon(UserMinus);
export const UsersIcon = createIcon(Users);

// Commerce & Finance
export const CreditCardIcon = createIcon(CreditCard);
export const DollarIcon = createIcon(DollarSign);
export const ShoppingCartIcon = createIcon(ShoppingCart);
export const PackageIcon = createIcon(Package);
export const TruckIcon = createIcon(Truck);
export const TagIcon = createIcon(Tag);
export const GiftIcon = createIcon(Gift);
export const PercentIcon = createIcon(Percent);
export const ChartAreaIcon = createIcon(ChartArea);

// Analytics
export const PieChartIcon = createIcon(PieChart);
export const BarChartIcon = createIcon(BarChart2);
export const TrendingUpIcon = createIcon(TrendingUp);
export const TrendingDownIcon = createIcon(TrendingDown);

// Location
export const MapPinIcon = createIcon(MapPin);
export const MapIcon = createIcon(Map);
export const CompassIcon = createIcon(Compass);
export const NavigationIcon = createIcon(Navigation);
export const GlobeIcon = createIcon(Globe);

// Tech & Dev
export const TerminalIcon = createIcon(Terminal);
export const DatabaseIcon = createIcon(Database);
export const CloudIcon = createIcon(Cloud);
export const CloudOffIcon = createIcon(CloudOff);
export const WifiIcon = createIcon(Wifi);
export const WifiOffIcon = createIcon(WifiOff);

// Theme
export const MoonIcon = createIcon(Moon);
export const SunIcon = createIcon(Sun);
export const ZapIcon = createIcon(Zap);

// Business
export const BriefcaseIcon = createIcon(Briefcase);
export const BuildingIcon = createIcon(Building);
export const TargetIcon = createIcon(Target);
export const AwardIcon = createIcon(Award);
export const CrosshairIcon = createIcon(Crosshair);
export const PrinterIcon = createIcon(Printer);

// Social Media
export const GithubIcon = createIcon(Github);
export const TwitterIcon = createIcon(Twitter);
export const LinkedinIcon = createIcon(Linkedin);
export const FacebookIcon = createIcon(Facebook);
export const InstagramIcon = createIcon(Instagram);
export const YoutubeIcon = createIcon(Youtube);
export const ChromeIcon = createIcon(Chrome);

// Misc
export const HashIcon = createIcon(Hash);
export const AtSignIcon = createIcon(AtSign);

// News Category Icons
export const FilmIcon = createIcon(Film);
export const FlaskIcon = createIcon(FlaskConical);
export const TrophyIcon = createIcon(Trophy);
export const CpuIcon = createIcon(Cpu);
export const NewspaperIcon = createIcon(Newspaper);
export const SparklesIcon = createIcon(Sparkles);

// Re-export types
export type { SvgProps };
