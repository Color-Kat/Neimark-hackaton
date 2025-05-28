import { Navigation } from "@/widgets/layout/ui/Navigation";
import { FC, ReactNode } from 'react';

export const Layout: FC<{children: ReactNode}> = ({children}) => {

    return (
        <div className="relative h-screen w-screen bg-slate-200">
            <main className="h-screen w-screen overflow-x-hidden overflow-y-auto z-0">
                {children}
            </main>

            <Navigation />
        </div>
    );
}