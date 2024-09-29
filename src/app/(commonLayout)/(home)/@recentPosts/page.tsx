import PostCardSkeleton from '@/src/components/Post/PostCardSkeleton';
import React from 'react';

const RecentPost = () => {
    return (
        <div>
            {[...Array(3)].map(() => (
                <PostCardSkeleton />
            ))}
        </div>
    );
};

export default RecentPost;