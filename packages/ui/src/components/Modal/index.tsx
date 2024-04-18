"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { IModalContent, IModalOverlay } from "./types";
import { EliraThemeContext } from "../Providers";
import { twMerge } from "tailwind-merge";

export const Modal = DialogPrimitive.Root;

export const ModalTrigger = DialogPrimitive.Trigger;

export const ModalPortal = DialogPrimitive.Portal;

export const ModalClose = DialogPrimitive.Close;

export const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> & IModalOverlay
>(({ className, variant, ...props }, ref) => {
  const ELIRA_MODAL_OVERLAY_CLASS =
    React.useContext(EliraThemeContext).modal?.modalOverlayVariants
      .variant[variant];

  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={ELIRA_MODAL_OVERLAY_CLASS}
      {...props}
    />
  );
});
ModalOverlay.displayName = DialogPrimitive.Overlay.displayName;

export const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & IModalContent
>(({ className, variant, modalOverlayVariant, children, ...props }, ref) => {
  const ELIRA_MODAL_CONTENT_CLASS =
    React.useContext(EliraThemeContext).modal?.modalContentVariants
      .variant[variant];
  return (
    <ModalPortal>
      <ModalOverlay variant={modalOverlayVariant} />
      <DialogPrimitive.Content
        ref={ref}
        className={twMerge(ELIRA_MODAL_CONTENT_CLASS, className)}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </ModalPortal>
  );
});
ModalContent.displayName = DialogPrimitive.Content.displayName;
