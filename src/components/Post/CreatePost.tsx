"use client";
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from '@nextui-org/image';
import { Divider } from '@nextui-org/divider';
import FormInput from '../form/FormInput';
import FormContainer from '../form/FormContainer';
import { Avatar } from '@nextui-org/avatar';
const CreatePost = () => {
    return (
        <Card className="w-full mb-2">
            <CardHeader className="flex gap-3">
                <Avatar isBordered color="default" className="cursor-pointer" name="John Doe" />
                <div className="w-full">
                    <FormContainer onSubmit={() => { }}>
                        <FormInput name="post" label="Post" type="text" size='sm' variant='flat' />
                    </FormContainer>
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