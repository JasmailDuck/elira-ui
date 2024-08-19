"use client";
import {
  Badge,
  Button,
  DynamicDiv,
  EliraThemeProvider,
  Layout,
  Modal,
  ModalContent,
  ModalTrigger,
  Tooltip,
} from "@elira-ui/ui/index";

import { useState } from "react";


export default function Home() {
  const [content, setContent] = useState<boolean>(false);

  const handleClick = () => {
    setContent(!content);
  };
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
            default: " bg-white   ",
          },
          modalOverlayVariants: {
            default:
              "bg-black/50 fixed top-0 right-0 left-0 bottom-0 inset-0 h-screen w-screen flex items-center justify-center",
          },
        },
        dynamicdiv: {
          default:
            "transition-all duration-500 ease-[cubic-bezier(.67,0,0,1.02)] bg-white rounded-lg absolute z-10",
        },
      }}
    >
      <Layout variant="default" className="">
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

        <button
          className=" absolute z-10 bottom-0 bg-red-500"
          onClick={handleClick}
        >
          Toggle Content
        </button>

       
          <DynamicDiv variant="default">
            {content ? (
              <p className="p-4 w-[50rem] h-[20rem] ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptas fugiat maxime officia rem quaerat nemo amet quas non
                inventore accusantium quod eos distinctio, cum ad assumenda
                corporis natus dolorum accusamus!
              </p>
            ) : (
              <p className="p-4 w-[40rem] h-[30rem] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga et
                illo adipisci minus nam quae corporis ab molestiae alias optio
                est nemo sequi, cumque eos eveniet voluptatibus necessitatibus
                totam! Unde blanditiis iure officia, assumenda autem totam dicta
                laudantium nam ipsa itaque exercitationem eveniet voluptas.
                Deserunt at nobis maiores. Veritatis soluta sapiente nemo omnis
                quos perferendis cupiditate nisi, impedit ea? Et molestiae,
                repellat minus corporis aspernatur omnis veritatis placeat
                quisquam saepe quae quos dolores sequi earum quo accusamus ab
                similique necessitatibus beatae ipsa. Odio recusandae unde
                veniam, consequatur nobis optio incidunt eligendi fugit
                repellat, qui ex autem esse sint cumque delectus!
              </p>
            )}
          </DynamicDiv>
  

        <Modal overlayVariant="default">
          <ModalTrigger>Lol</ModalTrigger>
          <ModalContent contentVariant="default">Lol Again</ModalContent>
        </Modal>
      </Layout>
    </EliraThemeProvider>
  );
}
