'use client'

import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/src/assets/icons/mo-logo.svg';
import { NavbarItems } from '../../utils/constants';
import useScroll from '../../utils/hooks/useScroll';
import classNames from 'classnames';

const Header = () => {
    const { isScrolled } = useScroll();

    return (
        <header
            className={classNames(
                'fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl z-50',
                {
                    'backdrop-blur-md shadow-lg border-b border-white/20 top-5 rounded-full animate-fade-in-down': isScrolled,
                    'bg-transparent animate-fade-in': !isScrolled,
                }
            )}
        >
            <div className="flex justify-between items-center px-10 py-6">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Mahmut Orhan Logo"
                        className="h-12 w-auto"
                        priority
                    />
                </Link>

                {/* Navigation */}
                <nav aria-label="Main Navigation">
                    <ul className="flex gap-8 text-white uppercase tracking-wide">
                        {NavbarItems.map((item, key) => (
                            <li key={key}>
                                <Link href={item.slug}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
