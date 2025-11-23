'use client'

import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import Logo from '@/src/assets/icons/mo-logo.svg'
import HamburgerMenuIcon from '@/src/assets/icons/menu.svg'
import CloseIcon from '@/src/assets/icons/x.svg'
import { socialLinks } from "../../../utils/constants";


// Mock hook - replace with your actual useScroll hook
const useScroll = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { isScrolled };
};

// Mock navigation items - replace with your actual NavbarItems
const NavbarItems = [
    { label: "Home", href: "/" },
    { label: "Music", href: "/music" },
    { label: "Tour", href: "/tour" },
    { label: "Videos", href: "/videos" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
];

const MobileHeader = () => {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const { isScrolled } = useScroll();

    const handleToggleMenu = () => {
        setIsShowMenu(!isShowMenu);
        // Prevent body scroll when menu is open
        if (!isShowMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <Fragment>
            {/* Header Bar */}
            <header
                className={classNames(
                    'fixed md:hidden top-0 left-1/2 -translate-x-1/2 w-[370px] max-w-6xl z-50 py-2',
                    {
                        'backdrop-blur-md shadow-lg border-b border-white/20 top-5 rounded-full animate-fade-in-down': isScrolled,
                        'bg-transparent animate-fade-in': !isScrolled,
                    }
                )}
            >
                <div className="flex items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src={Logo}
                            alt="Mahmut Orhan Logo"
                            className="h-10 w-auto"
                            priority
                        />
                    </Link>

                    {/* Hamburger Button */}
                    <Image src={HamburgerMenuIcon} alt="hamburger-icon" className={classNames("w-6 h-6 invert animate-fade-in", {
                        'hidden': isShowMenu
                    })} onClick={handleToggleMenu} />
                    <Image src={CloseIcon} alt="close-icon" className={classNames("w-6 h-6 invert hidden", {
                        '!flex animate-fade-in': isShowMenu
                    })} onClick={handleToggleMenu} />
                </div>
            </header>

            {/* Full Screen Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-700 ${isShowMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                {/* Animated Background with Gradient */}
                <div className="absolute inset-0 bg-black">
                    {/* Dark grid background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

                    {/* Noise effect */}
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light pointer-events-none" />

                    {/* Glitch scanlines */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_3px] opacity-10" />

                    {/* Animated Audio Waves Effect */}
                    <div className="absolute inset-0 opacity-20">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className={`absolute bottom-0 w-full h-1 bg-gradient-to-r from-gray-500/40 via-gray-300/30 to-gray-500/40 ${isShowMenu ? 'animate-pulse' : ''
                                    }`}
                                style={{
                                    left: 0,
                                    bottom: `${i * 20}%`,
                                    animationDelay: `${i * 0.2}s`,
                                    animationDuration: '2s'
                                }}
                            />
                        ))}
                    </div>

                    {/* Vinyl Record Effect */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-gray-600/20 transition-all duration-1000 ${isShowMenu ? 'rotate-180 scale-100' : 'rotate-0 scale-50'
                        }`}>
                        <div className="absolute inset-8 rounded-full border-2 border-gray-600/10" />
                        <div className="absolute inset-16 rounded-full border-2 border-gray-600/10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black border-2 border-gray-500/30" />
                    </div>
                </div>

                {/* Menu Content */}
                <nav className="relative h-full flex flex-col justify-center items-center ">
                    <ul className="space-y-2 w-full max-w-xs mb-20">
                        {NavbarItems.map((item, index) => (
                            <li
                                key={index}
                                className={`transform transition-all duration-500 ${isShowMenu
                                    ? 'translate-x-0 opacity-100'
                                    : '-translate-x-full opacity-0'
                                    }`}
                                style={{
                                    transitionDelay: isShowMenu ? `${index * 100}ms` : '0ms'
                                }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={handleToggleMenu}
                                    className="block relative group"
                                >
                                    {/* Link */}
                                    <div className="relative overflow-hidden py-1 px-6 rounded-lg">
                                        {/* Text */}
                                        <span className="relative block text-xl font-bold text-white tracking-wide group-hover:tracking-wider transition-all duration-300">
                                            {item.label}
                                        </span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-x-2.5">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                rel="noopener noreferrer"
                                href={link.url}
                                aria-label={link.name}
                                target='_blank'
                                className="w-10 h-10 bg-gray-900 border border-gray-700 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12"
                            >
                                <Image src={link.icon} alt={link.name} className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </Fragment>
    );
};

export default MobileHeader;