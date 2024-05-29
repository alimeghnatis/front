import type {
  NavigationIndex, PreparedItem,
} from '../../types.js'

export interface State {
  isOpen          :boolean;
  selectedItems   :PreparedItem[];
  highlightedItems:PreparedItem[];
  currentDepth    :number;
  inputValue      :string;
  navigationIndex :NavigationIndex;
  rootItem        :PreparedItem;
  keysSoFar       :string;
}

export enum StateChangeTypes {
  FunctionCloseMenu = 'FunctionCloseMenu',
  FunctionOpenMenu = 'FunctionOpenMenu',
  FunctionReset = 'FunctionReset',
  FunctionSelectItem = 'FunctionSelectItem',
  FunctionSetHighlightedItems = 'FunctionSetHighlightedItems',
  FunctionSetInputValue = 'FunctionSetInputValue',
  FunctionToggleMenu = 'FunctionToggleMenu',
  FunctionAddKeySoFar = 'FunctionAddKeySoFar',
  FunctionClearKeysSoFar = 'FunctionClearKeysSoFar',
  ItemClick = 'ItemClick',
  ItemMouseMove = 'ItemMouseMove',
  MenuMouseLeave = 'MenuMouseLeave',
  ToggleButtonBlur = 'ToggleButtonBlur',
  ToggleButtonClick = 'ToggleButtonClick',
  ToggleButtonKeyDownArrowDown = 'ToggleButtonKeyDownArrowDown',
  ToggleButtonKeyDownArrowUp = 'ToggleButtonKeyDownArrowUp',
  ToggleButtonKeyDownArrowLeft = 'ToggleButtonKeyDownArrowLeft',
  ToggleButtonKeyDownArrowRight = 'ToggleButtonKeyDownArrowRight',
  ToggleButtonKeyDownCharacter = 'ToggleButtonKeyDownCharacter',
  ToggleButtonKeyDownEnd = 'ToggleButtonKeyDownEnd',
  ToggleButtonKeyDownEnter = 'ToggleButtonKeyDownEnter',
  ToggleButtonKeyDownEscape = 'ToggleButtonKeyDownEscape',
  ToggleButtonKeyDownHome = 'ToggleButtonKeyDownHome',
  ToggleButtonKeyDownPageDown = 'ToggleButtonKeyDownPageDown',
  ToggleButtonKeyDownPageUp = 'ToggleButtonKeyDownPageUp',
  ToggleButtonKeyDownSpaceButton = 'ToggleButtonKeyDownSpaceButton',
}

export enum OpenOnOptions {
  hover = 'hover',
  click = 'click',
}

export interface Action {
  type             :StateChangeTypes;
  level?           :number; // TODO deprecate
  depth?           :number;
  selectedItems?   :PreparedItem[];
  highlightedItems?:PreparedItem[];
  inputValue?      :string;
  index?           :number;
  item?            :PreparedItem;
  keysSoFar?       :string;
}

export interface UseNestedNavigationOptions {
  stateReducer              :(state:State, action:Action) => State
  environment               :Window | undefined;
  initialIsOpen             :boolean;
  keySearchResetMilliseconds:number;
  initialUrl                :string;
  openOn                    :OpenOnOptions;
}

export interface ToggleButtonProps {
  onClick?       :(e:React.SyntheticEvent) => void;
  onMouseEnter?  :(e:React.SyntheticEvent) => void;
  'aria-expanded':boolean;
  'aria-haspopup':string;
  ref            :React.Ref<HTMLElement>;
}

export interface MenuProps {
  onMouseLeave     :(e:React.SyntheticEvent) => void;
  role             :string;
  'aria-labelledby':string;
  ref              :React.Ref<HTMLElement>;
}

export interface ItemProps {
  onClick        :(e:React.SyntheticEvent) => void;
  onMouseMove    :(e:React.SyntheticEvent) => void;
  role           :string;
  'aria-selected':boolean;
  'aria-disabled':boolean;
  ref            :React.Ref<HTMLElement>;
}

export interface LabelProps {
  id?     :string;
  htmlFor?:string;
}

export type UseNestedNavigationReturn = State & {
  preparedRoot        :PreparedItem;
  selectItem          :(item: PreparedItem, level: number) => void;
  setHighlightedItems :(highlightedItems: PreparedItem[]) => void;
  setInputValue       :(inputValue: string) => void;
  toggleMenu          :() => void;
  openMenu            :() => void;
  closeMenu           :() => void;
  reset               :() => void;
  itemClick           :(item: PreparedItem) => void;
  itemMouseMove       :(item: PreparedItem) => void;
  menuMouseLeave      :() => void;
  toggleButtonBlur    :() => void;
  getToggleButtonProps:(props?:ToggleButtonProps) => ToggleButtonProps;
  getMenuProps        :(props?:MenuProps) => MenuProps;
  getItemProps        :(props?:ItemProps) => ItemProps;
  getLabelProps       :(props?:LabelProps) => LabelProps;
}
