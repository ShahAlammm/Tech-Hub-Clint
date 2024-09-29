import CreatePost from "@/src/components/Post/CreatePost";
import Calender from "@/src/components/ui/Calender";
import { ExpandableCardDemo } from "@/src/components/ui/ExpandableCard";
import { ReactNode } from "react";


const layout = ({ children, recentPosts }: { children: ReactNode, recentPosts: ReactNode }) => {
    return (
        <div className="mt-5 flex justify-center gap-4 px-2">
            <div className="hidden lg:block left-40 fixed">
                {children}
            </div>
            <div className="">
                <CreatePost />
                {recentPosts}
            </div>
            <div className="hidden lg:block  fixed right-40">
                <Calender />
                <ExpandableCardDemo />
            </div>
        </div>
    );
};

export default layout;