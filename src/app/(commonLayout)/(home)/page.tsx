import PostCard from '@/src/components/Post/PostCard';
import PostCardSkeleton from '@/src/components/Post/PostCardSkeleton';
import React from 'react';

const HomePage = () => {
    return (
        <>
            <PostCard />
            <PostCardSkeleton />
        </>
    );
};

export default HomePage;