"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { EliraThemeContext } from "../Providers";
import { twMerge } from "tailwind-merge";
import { IModal } from "./types";

export const ModalTrigger = DialogPrimitive.Trigger;

export const ModalPortal = DialogPrimitive.Portal;

export const ModalClose = DialogPrimitive.Close;

export const Modal = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> &
    Omit<IModal, "contentVariant">
>(({ overlayVariant, children, ...props }, ref) => {

  const CHILDREN_ARRAY = React.Children.toArray(children);
  const trigger = CHILDREN_ARRAY.find(
    (child) => React.isValidElement(child) && child.type === ModalTrigger
  );
  const content = CHILDREN_ARRAY.find(
    (child) => React.isValidElement(child) && child.type === ModalContent
  );

  return (
    <DialogPrimitive.Root {...props}>
      {trigger}
      <ModalPortal>
        <ModalOverlay overlayVariant={overlayVariant}>{content}</ModalOverlay>
      </ModalPortal>
    </DialogPrimitive.Root>
  );
});
Modal.displayName = DialogPrimitive.Root.displayName;

export const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> &
    Omit<IModal, "contentVariant">
>(({ overlayVariant, children, ...props }, ref) => {
  const ELIRA_MODAL_OVERLAY_CLASS =
    React.useContext(EliraThemeContext).modal?.modalOverlayVariants[
      overlayVariant
    ];

  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={twMerge(ELIRA_MODAL_OVERLAY_CLASS)}
      {...props}
    >
      {children}
    </DialogPrimitive.Overlay>
  );
});
ModalOverlay.displayName = DialogPrimitive.Overlay.displayName;

export const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
    Omit<IModal, "overlayVariant">
>(({ className, contentVariant, children, ...props }, ref) => {
  const ELIRA_MODAL_CONTENT_CLASS =
    React.useContext(EliraThemeContext).modal?.modalContentVariants[
      contentVariant
    ];
  return (
    <DialogPrimitive.Content
      ref={ref}
      className={twMerge(ELIRA_MODAL_CONTENT_CLASS, className)}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  );
});
ModalContent.displayName = DialogPrimitive.Content.displayName;
