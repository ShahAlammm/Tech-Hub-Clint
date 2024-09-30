import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, ModalProps } from "@nextui-org/modal";
import { ChevronsRight, MessageCircle } from "lucide-react";
import { ReactNode, useState } from "react";

interface IProps {
    buttonText: string;
    image: string;
    title: string;
    children: ReactNode;
    buttonVariant?:
    | "light"
    | "solid"
    | "bordered"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined;
    buttonClassName?: string;
}
const TechModal = ({
    title,
    image,
    children,
    buttonVariant = "light",
    buttonClassName, }: IProps) => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = useState<ModalProps["scrollBehavior"]>("inside");


    return (
        <>
            <Button
                className={buttonClassName}
                variant={buttonVariant}
                onPress={onOpen}
            >
                <MessageCircle />
            </Button>
            <Modal isOpen={isOpen} size="5xl" onOpenChange={onOpenChange} scrollBehavior={scrollBehavior}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col justify-center items-center gap-1">{title}</ModalHeader>
                            <ModalBody>{children}</ModalBody>
                            <ModalFooter className="flex items-center">
                                <Avatar radius="sm" size="md" className="rounded-full" src={image || ""} />
                                <Textarea
                                    label="Description"
                                    placeholder="Enter your description"
                                    className="w-full"
                                />
                                <Button color="primary" onPress={onClose}>
                                    <ChevronsRight />
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default TechModal