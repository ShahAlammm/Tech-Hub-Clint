import PostCardSkeleton from "@/src/components/Post/PostCardSkeleton";


const loading = () => {
    return (
        <div className="grid grid-cols-1 gap-4">
            {[...Array(3)].map(() => (
                <PostCardSkeleton />
            ))}
        </div>
    );
};

export default loading;