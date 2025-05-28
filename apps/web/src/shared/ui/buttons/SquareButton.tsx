import { Button } from "@heroui/react";
import React, {FC} from 'react';
import {twJoin} from "tailwind-merge";

export const SquareButton: FC<{
    children: React.ReactNode;
    onPress?: () => void;
    ariaLabel?: string;
}> = ({ children, ariaLabel, onPress }) => {
    return (
        <Button
            isIconOnly
            aria-label={ariaLabel}
            className={twJoin(
                "size-14 bg-white shadow-lg/50 text-accent-green rounded-3xl pointer-events-auto",
            )}
            type="button"
            onPress={onPress}
        >
            {children}
        </Button>
    );
};