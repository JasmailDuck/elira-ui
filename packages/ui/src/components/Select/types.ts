export interface ISelectTheme {
  selectTriggerType: {
    variants: { [key: string]: string };
    icon: { [key: string]: any };
  };
  selectScrollUpButtonType: {
    variants: { [key: string]: string };
    icon: { [key: string]: any };
  };
  selectScrollDownButtonType: {
    variants: { [key: string]: string };
    icon: { [key: string]: any };
  };
  selectContentType: { [key: string]: string };
  selectViewPortType: { [key: string]: string };
  selectLabelType: { [key: string]: string };
  selectItemType: { [key: string]: string };
  selectSeparatorType: { [key: string]: string };
  selectItemIndicator: {
    variants: { [key: string]: string };
    icon: { [key: string]: any };
  };
}

export interface ISelectTrigger {
  variant: string;
  icon: string;
}
export interface ISelectItemIndicator {
  indicatorVariant: string;
  indicatorIcon: string;
}

export interface ISelectScrollUpButton {
  upVariant: string;
  upIcon: string;
}

export interface ISelectScrollDownButton {
  downVariant: string;
  downIcon: string;
}

export interface ISelectContent {
  variant: string;
}
export interface ISelectViewport {
  viewPortVariant: string;
}
export interface ISelectLabel {
  variant: string;
}
export interface ISelectItem {
  variant: string;
}
export interface ISelectSeparator {
  variant: string;
}
