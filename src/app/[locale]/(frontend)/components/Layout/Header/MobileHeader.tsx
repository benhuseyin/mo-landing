'use client'

import { useState } from "react";
import classNames from "classnames";

import Image from "next/image";
import Link from "next/link";

import useScroll from "../../../utils/hooks/useScroll";

import Logo from '@/src/assets/icons/mo-logo.svg';
import HamburgerMenuIcon from '@/src/assets/icons/menu.svg';
import CloseMenuIcon from '@/src/assets/icons/x.svg';
import { NavbarItems } from "../../../utils/constants";

const MobileHedaer = () => {
    const [isShowMenu, setIsShowMenu] = useState(false)
    const { isScrolled } = useScroll();

    const handleToggleMenu = () => {
        setIsShowMenu(!isShowMenu)
    }

    return (
        <header
            className={classNames(
                'fixed md:hidden top-0 left-1/2 -translate-x-1/2 w-[370px] max-w-6xl z-50',
                {
                    'backdrop-blur-md shadow-lg border-b border-white/20 top-5 rounded-full animate-fade-in-down': isScrolled,
                    'bg-transparent animate-fade-in': !isScrolled,
                }
            )}
        >
            <div className="flex justify-between items-center px-8 py-6">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Mahmut Orhan Logo"
                        className="h-10 w-auto"
                        priority
                    />
                </Link>

                <Image src={HamburgerMenuIcon} alt="hamburger-icon" className={classNames("w-6 h-6 invert animate-fade-in", {
                    'hidden': isShowMenu
                })} onClick={handleToggleMenu} />
                <Image src={CloseMenuIcon} alt="close-icon" className={classNames("w-6 h-6 invert hidden", {
                    '!flex animate-fade-in': isShowMenu
                })} onClick={handleToggleMenu} />


                {/* Navigation */}
                <nav aria-label="Main Navigation" className="hidden">
                    <ul className="gap-8 text-white uppercase tracking-wide hidden">
                        {NavbarItems.map((item, key) => (
                            <li key={key}>
                                <Link href={item.slug}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default MobileHedaer;