export interface IAvatorTheme {
  avatarType: { [key: string]: string };
  avatarImageType: { [key: string]: string };
  avatarFallBackType: { [key: string]: string };
}

export interface IAvatar {
  avatarVariant: string;
}

export interface IAvatarImage {
  imageVariant: string;
}

export interface IAvatarFallBack {
  fallbackVariant: string;
}
