import React, { FC, ReactNode } from 'react';
import { twMerge } from "tailwind-merge";

type BgBlurProps = {
    children: ReactNode;
    className?: string;
}

export const BgBlur: FC<BgBlurProps> = ({
    children,
    className
}) => {


    return (
        <div className={twMerge(
            "size-full flex-center backdrop-blur-md",
            className
        )}>
            {children}
        </div>
    );
}