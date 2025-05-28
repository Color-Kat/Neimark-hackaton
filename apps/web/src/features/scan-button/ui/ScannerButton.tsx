'use client';

import { useScannerButtonContext } from "@/features/scan-button/context/ScannerButtonContext";
import { ROUTES } from "@/shared/constants";
import { usePathname } from "next/navigation";
import { FC, MouseEvent } from 'react';
import { FaCamera } from "react-icons/fa6";
import { ImSpinner2 } from "react-icons/im";
import { IoMdQrScanner } from "react-icons/io";
import { twJoin } from "tailwind-merge";

import './gradient-animation.scss';

export const ScannerButton: FC<{ isActive: boolean }> = ({
    isActive
}) => {
    const pathname = usePathname()
    const {handleClick, buttonType} = useScannerButtonContext();

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        // e.preventDefault();
        if (pathname != ROUTES.SCANNER) return;

        // Handle click only if it's scanner page
        handleClick();
    }

    return (
        <button
            className={twJoin(
                isActive
                    ? "size-[110px]"
                    : "size-12",
                'relative bg-red-500/0 rounded-full transition-all duration-100',
                'flex items-center justify-center',
                'cursor-pointer active:scale-95 will-change-transform',
            )}
            onClick={onClickHandler}
            disabled={
                buttonType == 'loading'
            }
        >
            {/*<div className={twJoin(*/}
            {/*    isActive ? "opacity-100" : "opacity-0",*/}
            {/*    "transition-opacity duration-500",*/}
            {/*    "blur-lg",*/}
            {/*    "bg-conic-90 from-amber-200 via-violet-600 to-sky-900",*/}
            {/*    "absolute inset-3 animate-spin rounded-full"*/}
            {/*)}></div>*/}

            <div className="bg-white rounded-full absolute inset-0"></div>

            <FaCamera className={twJoin(
                "size-10 z-30 transition-opacity ease-in duration-200",
                isActive ? "opacity-0" : "opacity-100"
            )}/>

            <div className={twJoin(
                "transition-opacity duration-1000",
                isActive ? "opacity-100" : "opacity-0"
            )}>

                {buttonType === 'capture' && <div className={twJoin(
                    // "bg-gradient-to-br from-green-200/20 via-green-400/20 to-purple-700/20",
                    "bg-accent-green bg-capture",
                    "absolute inset-2 rounded-full z-20",
                )}></div>}

                {buttonType === 'scan' && <div className={twJoin(
                    "absolute inset-2 rounded-full",
                    "bg-accent-coral bg-scan flex-center chase",
                )}>
                    <IoMdQrScanner className={twJoin(
                        "size-12 drop-shadow-2xl drop-shadow-red-600 z-30 text-primary-white",
                    )}/>
                </div>}

                {buttonType === 'loading' && <div className={twJoin(
                    "absolute inset-2 rounded-full flex-center",
                    "bg-zinc-700"
                )}>
                    <ImSpinner2 className={twJoin(
                        "size-10 z-30 animate-spin text-white",
                    )}/>
                </div>}

                {buttonType === 'cancel' && <div className={twJoin(
                    "absolute inset-2 rounded-full flex-center",
                )}>
                    C
                </div>}
            </div>

        </button>
    );
}