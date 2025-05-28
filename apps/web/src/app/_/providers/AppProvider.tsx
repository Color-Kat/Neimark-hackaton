'use client';

import { queryClient } from "@/shared/api/query-client";
import { ComposeChildren } from "@/shared/lib/react";
import { HeroUIProvider } from "@heroui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";

export const AppProvider: FC<{ children?: ReactNode }> = ({
    children
}) => {
    const router = useRouter();

    return (
        <ComposeChildren>
            <HeroUIProvider navigate={router.push} children={<></>}/>
            <QueryClientProvider client={queryClient}/>
            {children}
        </ComposeChildren>
    );
}