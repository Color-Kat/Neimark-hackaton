import { Card, CardBody } from "@heroui/card";
import Image from "next/image";
import React, { FC, ReactNode } from 'react';

import warningIcon from './warning.png';

type ErrorModalProps = {
    title: string;
    message: string;
    button?: ReactNode;
    icon?: ReactNode;
}

export const ErrorCard: FC<ErrorModalProps> = ({
    icon,
    title,
    message,
    button
}) => {
    return (
        <Card className="mx-4 w-full py-3 px-2 max-w-sm rounded-3xl" >
            <CardBody className="flex items-center leading-6">
                <Image
                    src={warningIcon}
                    alt="Error Icon"
                    width={50}
                    height={50}
                />

                <h4 className="text-accent-coral coral font-extrabold text-base mt-4">
                    {title}
                </h4>

                <p className="text-[#27272A] mt-1">
                    {message}
                </p>
            </CardBody>
        </Card>
    );
}