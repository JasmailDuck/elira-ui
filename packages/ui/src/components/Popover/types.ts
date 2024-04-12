export interface IPopoverTriggerTheme {
  variant: { [key: string]: string };
}

export interface IPopoverContentTheme {
  variant: { [key: string]: string };
}

export interface IPopoverTrigger {
  variant: string;
}
export interface IPopoverContent {
  variant: string;
}

export interface IPopoverTheme {
  triggerVariant: IPopoverTriggerTheme;
  contentVariant: IPopoverContentTheme;
}
