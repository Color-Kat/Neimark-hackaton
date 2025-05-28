'use client';
import { ROUTES } from "@/shared/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { FaCamera, FaListUl, FaUser } from "react-icons/fa6";
import { twJoin } from "tailwind-merge";

import './Navigation.scss';

type NavLinkItem = {
    title: string,
    link: string,
    component: (props: {isActive: boolean}) => ReactNode;
}

export function Navigation() {
    const pathname = usePathname();

    const navItems: NavLinkItem[] = [
        {
            title: "История",
            link : ROUTES.HISTORY,
            component: () => <FaListUl className="size-6" />
        },
        {
            title: "Сканнер",
            link : ROUTES.SCANNER,
            component: ({isActive}) => <FaCamera className="size-10" />
        },
        {
            title: "Профиль",
            link : ROUTES.HOME,
            component: () => <FaUser className="size-6" />
        }
    ];

    const centerIndex = Math.floor(navItems.length / 2);

    const getActiveIndex = useCallback(() => {
        const index = navItems.findIndex((item) => item.link == pathname);
        return index !== -1 ? index : null;
    }, [navItems, pathname]);
    const [active, setActive] = useState<null | number>(getActiveIndex());

    useEffect(() => {
        setActive(getActiveIndex());
    }, [navItems, pathname]);

    return (
        <nav className={twJoin(
            "bottom-navigation h-[70px]",
            "fixed bottom-3 left-4 right-4 bg-white h-16",
            "rounded-3xl shadow-2xl/80 drop-shadow-2xl",
            // "flex items-center justify-between",
        )}>
            {/* Liquid effect */}
            <div className="liquid-wrapper z-10 pointer-events-none">
                <div className="liquid-container">
                    <div className={twJoin(
                        "liquid liquid-1 relative",
                        "mx-auto rounded-full shadow-xl",
                        "ease-in-out transition-all duration-400 shadow-3xl will-change-transform",
                        active == 1
                            ? "size-[109px] -translate-y-26"
                            // ? "size-24 -translate-y-22"
                            : "size-32 -translate-y-4"
                    )}></div>

                    <div className="absolute inset-0 overflow-hidden">
                        <div className="liquid liquid-2 w-64 h-1/2 mx-auto"></div>
                    </div>
                </div>

                <svg>
                    <filter id="liquid-svg">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10"/>
                        <feColorMatrix values="
                            1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            0 0 0 20 -10
                            "
                        />
                    </filter>
                </svg>
            </div>

            {/* Links */}
            <ul className="relative w-full h-full flex items-center justify-around gap-3 z-20">
                {navItems.map((item, i) => (
                    <li
                        key={i}
                        className="w-16 cursor-pointer"
                    >
                        <Link
                            prefetch={true}
                            href={item.link}
                            onNavigate={(e) => {
                                if (pathname === item.link) {
                                    e.preventDefault(); // Предотвращаем действие, если уже на странице
                                }
                            }}
                            className="flex flex-col justify-center items-center text-center pt-5 text-accent-green"
                        >
                            <span className={twJoin(
                                "will-change-transform select-none",
                                (i == centerIndex) ? "duration-500" : "duration-200",
                                (active == i && active !== centerIndex) && "-translate-y-2 drop-shadow-2xl drop-shadow-primary-dark",
                                (active == i && active === centerIndex) && "-translate-y-20"
                            )}>
                                {item.component({isActive: active == i})}
                            </span>

                            <span className={twJoin(
                                "will-change-transform select-none duration-300 text-primary-dark",
                                i === centerIndex ? "text-lg" : "text-xs",
                                active == i
                                    ? (active !== centerIndex
                                            ? "-translate-y-1.5 opacity-100"
                                            : "-translate-y-16 font-bold opacity-100"
                                    )
                                    : "opacity-0 translate-y-5"
                            )}>
                                {item.title}
                            </span>

                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
