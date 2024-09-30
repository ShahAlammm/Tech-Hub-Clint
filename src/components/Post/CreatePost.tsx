"use client";
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from '@nextui-org/divider';
import FormInput from '../form/FormInput';
import FormContainer from '../form/FormContainer';
import { Avatar } from '@nextui-org/avatar';
import { Input } from '@nextui-org/input';
const CreatePost = () => {
    return (
        <Card className="w-full mb-2 bg-default-100">
            <CardHeader className="flex gap-3">
                <Avatar isBordered color="default" className="cursor-pointer" name="John Doe" />
                <div className="w-full">
                    <input
                        type="text"
                        placeholder="What's on your mind?"
                        disabled
                        className="cursor-pointer z-0 w-full bg-default-200 border-default-200 hover:bg-default-300 rounded-3xl px-4 py-2 outline-none"
                    />
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>Make beautiful websites regardless of your design experience.</p>
            </CardBody>
        </Card>
    );
};

export default CreatePost;