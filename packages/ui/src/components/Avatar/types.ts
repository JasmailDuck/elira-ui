export interface IAvatorTheme {
  avatarType: { [key: string]: string };
  avatarImageType: { [key: string]: string };
  avatarFallBackType: { [key: string]: string };
}

export interface IAvatar {
  avatarVariant: string;
  avatarImageVariant: string;
  avatarFallBackVariant: string;
}
