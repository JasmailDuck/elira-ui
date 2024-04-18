"use client";
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { twMerge } from "tailwind-merge";
import { EliraThemeContext } from "../Providers";
import { IAvatar, IAvatarFallBack, IAvatarImage } from "./types";

// Avatar
export const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & IAvatar
>(({ className, avatarVariant, ...props }, ref) => {
  const AvatarVariant =
    React.useContext(EliraThemeContext).avatar?.avatarType[avatarVariant];

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={twMerge(AvatarVariant, className)}
      {...props}
    />
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;

// Avatar Image
export const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & IAvatarImage
>(({ className, imageVariant, ...props }, ref) => {
  const AvatarImageVariant =
    React.useContext(EliraThemeContext).avatar?.avatarImageType[
      imageVariant
    ];
  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={twMerge(AvatarImageVariant, className)}
      {...props}
    />
  );
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

// Avatar Fallback
export const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & IAvatarFallBack
>(({ className, fallbackVariant, ...props }, ref) => {
  const AvatarFallBackVariant =
    React.useContext(EliraThemeContext).avatar?.avatarFallBackType[
      fallbackVariant
    ];

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={twMerge(AvatarFallBackVariant, className)}
      {...props}
    />
  );
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
