"use client";
import {
  Badge,
  Button,
  EliraThemeProvider,
  Layout,
  Modal,
  ModalContent,
  ModalTrigger,
  Tooltip,
} from "@elira-ui/ui/index";

export default function Home() {
  return (
    <EliraThemeProvider
      theme={{
        tooltip: {
          className:
            " animate-tooltip-open-top data-[state=closed]:animate-tooltip-close-top bg-white text-black px-3 py-1 rounded-lg border ",
        },
        button: {
          buttonTypes: {
            normal:
              " border  rounded-lg px-3 py-1 font-bold hover:bg-black hover:border hover:border-white hover:text-white transition-all",
          },
          buttonSizes: {
            lg: "h-[40px]",
          },
        },
        layout: {
          default:
            " h-dvh flex flex-col items-center gap-10 p-5 bg-neutral-300 ",
        },
        badge: {
          badgeSizeVariants: {
            normal: " rounded-full px-2 py-1",
          },
          badgeVariants: {
            red: " bg-red-600",
          },

          
        },
        modal: {
          modalContentVariants: {
            default: " bg-white   "
          },
          modalOverlayVariants: {
            default : "bg-black/50 fixed top-0 right-0 left-0 bottom-0 inset-0 h-screen w-screen flex items-center justify-center",
          }
        }
      }}
    >
      <Layout variant="default">
        <Tooltip className=" " message=" A tooltip appeared">
          This is a tooltip
        </Tooltip>

        <Button variant="" size="lg">
          This is a button
        </Button>
        <Tooltip className=" " message="A tooltip appeared">
          <Button variant="normal" size="lg">
            This is a button with tooltip
          </Button>
        </Tooltip>

        <Badge size="normal" variant="red">
          Badge
        </Badge>


        <Modal overlayVariant="default">
          <ModalTrigger>Lol</ModalTrigger>
          <ModalContent contentVariant="default">Lol Again</ModalContent>
        </Modal>
      </Layout>
    </EliraThemeProvider>
  );
}
