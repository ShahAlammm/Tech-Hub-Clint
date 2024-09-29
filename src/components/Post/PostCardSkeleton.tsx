import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Skeleton } from "@nextui-org/skeleton";


const PostCardSkeleton = () => {
    return (
        <div className="mb-2 rounded-md bg-default-100 p-5">
            <div className="border-b border-default-200 pb-2">
                <div className="w-full flex items-center gap-3 border-b border-default-200 pb-4">
                    <div>
                        <Skeleton className="flex rounded-xl w-12 h-12" />
                    </div>
                    <div className="w-full flex flex-col gap-2 max-w-[300px] ">
                        <Skeleton className="h-3 w-3/5 rounded-lg" />
                        <Skeleton className="h-3 w-4/5 rounded-lg" />
                    </div>
                </div>
                <div className="py-4">
                    <div className="w-full items-center gap-3 border-b border-default-200 pb-4">
                        <div className="w-full flex flex-col gap-2 max-w-[600px] ">
                            <Skeleton className="h-3 w-3/5 rounded-lg" />
                            <Skeleton className="h-3 w-4/5 rounded-lg" />
                            <Skeleton className="h-3 w-full rounded-lg" />
                        </div>
                    </div>
                </div>

                <Skeleton className="rounded-lg">
                    <div className="h-64 rounded-lg bg-default-300"></div>
                </Skeleton>

                <div className="mt-4 flex justify-center items-center gap-5">
                    <Skeleton className="flex-1 rounded-md">
                        <Button>
                            Share
                        </Button>
                    </Skeleton>
                    <Skeleton className="flex-1 rounded-md">
                        <Button>
                            Share
                        </Button>
                    </Skeleton>
                </div>
            </div>
        </div>
    );
};

export default PostCardSkeleton;