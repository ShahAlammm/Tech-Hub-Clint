"use client";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import ImageGallery from "../ui/ImageGallery";
import { format } from 'date-fns';
import { CalendarDays, ThumbsUp } from "lucide-react";
import { IUser } from "@/src/types";
import { Divider } from "@nextui-org/divider";
import CommentModal from "../Modals/CommentModal";

const ModalPostCard = ({ post }: any) => {
    const {
        title,
        description,
        _id,
        images,
        user,
        questions,
        createdAt,
    } = post || {};
    const { name, email, profilePhoto } = (user as IUser) || {};
    return (
        <div className="rounded-md  p-4 pb-2">
            <div>
                <div className="flex items-center justify-between border-b border-default-200 pb-4">
                    <div className="flex items-center gap-3">
                        <Avatar isBordered radius="sm" src={profilePhoto} />
                        <div>
                            <p>{name}</p>
                            <p className="flex items-center gap-1 text-xs">
                                <CalendarDays width={14} />
                                {format(new Date(createdAt), "dd MMM, yyyy")}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-b border-default-200 py-4">
                    <div className="mb-4 flex items-start justify-between">
                        <div>
                            <Link href={`/found-items`}>
                                <h1 className="cursor-pointer text-2xl">{title}</h1>
                            </Link>

                        </div>
                        <div>
                            <p className="flex items-center gap-1">
                                {/* <MapPin width={18} />
                                {location}, {city} */}
                            </p>
                        </div>
                    </div>
                    <p>{description}</p>
                </div>

                <ImageGallery images={images} />
                <p className="my-2 flex items-center gap-2"><ThumbsUp className="text-sm text-white bg-blue-600 p-1 rounded-full" /> <span>2</span> </p>
                <Divider />
                <div className="mt-2 flex gap-5">
                    {/* {email !== loggedInUser?.email && (
                        <>
                            {loggedInUser?.email && (
                                <ClaimRequestModal id={_id} questions={questions} />
                            )}
                            {!loggedInUser?.email && <AuthenticationModal id={_id} />}
                        </>
                    )}
                    {email !== loggedInUser?.email && (
                        <div className="w-[1px] bg-default-200" />
                    )} */}
                    {/* <Button variant="light" className="flex-1">
                        <ThumbsUp />
                    </Button>
                    <CommentModal post={post} /> */}
                </div>
            </div>
        </div>
    );
};

export default ModalPostCard;