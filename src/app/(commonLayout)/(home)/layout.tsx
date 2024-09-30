import CreatePost from "@/src/components/Post/CreatePost";
import Calender from "@/src/components/ui/Calender";
import { ExpandableCardDemo } from "@/src/components/ui/ExpandableCard";
import { ReactNode } from "react";



const layout = ({ children, recentPosts }: { children: ReactNode, recentPosts: ReactNode }) => {
    return (
        <div className="grid lg:grid-cols-5 gap-4 px-2">

            <div className="hidden lg:block lg:col-span-1">
                <div className="sticky top-0 h-screen overflow-y-auto">
                    {children}
                </div>
            </div>

            <div className="col-span-3 lg:col-span-3 h-screen overflow-y-auto">
                <div className="recentPosts h-full overflow-y-auto hide-scrollbar z-20">
                    <CreatePost />
                    {recentPosts}
                </div>
            </div>

            <div className="hidden lg:block lg:col-span-1">
                <div className="sticky top-0 h-screen overflow-y-auto z-30">
                    <Calender />
                    <ExpandableCardDemo />
                </div>
            </div>
        </div>

    );
};

export default layout;