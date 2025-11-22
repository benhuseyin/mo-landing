"use client"
import { useState, useEffect } from 'react';
import { Music, Instagram, Youtube, Facebook, Twitter, } from 'lucide-react';

import Image from 'next/image';
import Logo from '@/src/assets/icons/mo-logo.svg'

const SpotifyIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
);

export default function DJFooter() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeBar, setActiveBar] = useState(0);

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setActiveBar(prev => (prev + 1) % 12);
            }, 150);
            return () => clearInterval(interval);
        }
    }, [isPlaying]);

    const socialLinks = [
        { Icon: Instagram, href: '#', label: 'Instagram' },
        { Icon: SpotifyIcon, href: '#', label: 'Spotify' },
        { Icon: Youtube, href: '#', label: 'YouTube' },
        { Icon: Facebook, href: '#', label: 'Facebook' },
        { Icon: Twitter, href: '#', label: 'Twitter' },
    ];

    return (
        <footer className="relative bg-linear-to-b from-black via-gray-900 to-black text-white overflow-hidden">
            {/* Animated Background Waves */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 animate-pulse"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div
                            className="inline-flex items-center gap-5 cursor-pointer group"
                            onMouseEnter={() => setIsPlaying(true)}
                            onMouseLeave={() => setIsPlaying(false)}
                        >
                            <div className="relative">
                                <div className="w-16 h-16 bg-linear-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Music className="w-8 h-8" />
                                </div>
                                {isPlaying && (
                                    <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-75"></div>
                                )}
                            </div>

                            <Image src={Logo} alt="mahmut orhan logo" className='size-[150px]' />

                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Delivering electrifying beats and unforgettable performances worldwide. Stay connected for tour dates and new releases.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-purple-400 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Tour Dates', 'Music', 'Videos', 'Press Kit', 'Booking'].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-6 h-0.5 bg-linear-to-r from-purple-500 to-pink-500 transition-all duration-300"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
                        {socialLinks.map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="w-10 h-10 bg-gray-800 hover:bg-linear-to-br hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12"
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>

                </div>

                {/* Divider with Vinyl Record Animation */}
                <div className="relative flex items-center justify-center my-12">
                    <div className="absolute w-full h-px bg-linear-to-r from-transparent via-purple-500 to-transparent"></div>
                    <div className="relative px-4">
                        <div className="w-12 h-12 rounded-full border-4 border-purple-500 flex items-center justify-center hover:animate-spin cursor-pointer">
                            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                        </div>
                    </div>
                </div>

                {/* Social Links & Copyright */}
                <div className="flex flex-col md:flex-row items-center justify-end gap-6">

                    <div className="text-center md:text-right">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Mahmut Orhan. All rights reserved.
                        </p>
                        <p className="text-gray-600 text-xs mt-1">
                            Designed for the lovers of electronic music
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Glow Effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent blur-sm"></div>
        </footer>
    );
}