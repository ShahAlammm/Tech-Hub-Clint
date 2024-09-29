/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";
import { useFormStatus } from "react-dom";

const ActionSubmitButton = ({ children }: any) => {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} variant="faded">
            {pending ? <Spinner size="sm" /> : children}
        </Button>
    );
};

export default ActionSubmitButton;