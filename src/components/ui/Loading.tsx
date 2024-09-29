import { Progress } from "@nextui-org/progress";

const Loading = () => {
    return (
        <div className="h-screen bg-black/10 fixed inset-0 z-[999] backdrop-blur-md flex justify-center items-center">
            <Progress
                size="sm"
                isIndeterminate
                aria-label="Loading..."
                className="max-w-md"
            />
        </div>
    );
};

export default Loading;