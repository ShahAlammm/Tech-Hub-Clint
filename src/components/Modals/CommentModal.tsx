"use client";
import { Button } from "@nextui-org/button";
import TechModal from "./TechModal";
import { IUser } from "@/src/types";

import ModalPostCard from "../Post/ModalPostCard";


const CommentModal = ({ post }: any) => {
    const { name, email, profilePhoto } = (post.user as IUser) || "";
    return (
        <TechModal
            buttonClassName="flex-1"
            image={profilePhoto}
            buttonText="Claim Request"
            title={`${name}'s Post`}

        >
            <ModalPostCard post={post} />

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat itaque cumque, ipsum perferendis tempore, incidunt modi quas doloribus odio maxime accusantium officia voluptatibus quod repudiandae quisquam? Neque dolor nisi molestiae.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat itaque cumque, ipsum perferendis tempore, incidunt modi quas doloribus odio maxime accusantium officia voluptatibus quod repudiandae quisquam? Neque dolor nisi molestiae.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat itaque cumque, ipsum perferendis tempore, incidunt modi quas doloribus odio maxime accusantium officia voluptatibus quod repudiandae quisquam? Neque dolor nisi molestiae.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat itaque cumque, ipsum perferendis tempore, incidunt modi quas doloribus odio maxime accusantium officia voluptatibus quod repudiandae quisquam? Neque dolor nisi molestiae.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat itaque cumque, ipsum perferendis tempore, incidunt modi quas doloribus odio maxime accusantium officia voluptatibus quod repudiandae quisquam? Neque dolor nisi molestiae.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat itaque cumque, ipsum perferendis tempore, incidunt modi quas doloribus odio maxime accusantium officia voluptatibus quod repudiandae quisquam? Neque dolor nisi molestiae.</p>

        </TechModal>
    );
};

export default CommentModal;