"use client"
import PostCard from '@/src/components/Post/PostCard';
import { getRecentPosts } from '@/src/services/RecentPosts';



const RecentPost = async () => {

    const data = await getRecentPosts();
    console.log(data)
    return (
        <div className='space-y-2'>
            {data?.map((item) => (
                <PostCard post={item} key={item?._id} />
            ))}
        </div>
    );
};

export default RecentPost;