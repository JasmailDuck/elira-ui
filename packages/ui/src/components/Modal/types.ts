export interface IModalOverlayTheme {
  variant: { [key: string]: string };
}

export interface IModalContentTheme {
  variant: { [key: string]: string };
}
export interface IModalTheme {
  modalOverlayVariants: IModalOverlayTheme;
  modalContentVariants: IModalContentTheme;
}

export interface IModalOverlay {
  variant: string;
}

export interface IModalContent {
  variant: string;
  modalOverlayVariant: string;
}
