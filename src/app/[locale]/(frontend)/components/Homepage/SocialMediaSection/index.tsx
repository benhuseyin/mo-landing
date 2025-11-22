"use client"

import Image from 'next/image';
import { useState } from 'react';
import { Instagram, Music2, Youtube, Facebook } from 'lucide-react';

import Bg from '@/src/assets/images/mo-social-media-bg.webp'
import SectionOverlay from '../../Global/SectionOverlay';
import { socialLinks } from '../../../utils/constants';

const SocialMediaSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<Number | null>(null);

    return (
        <div className="relative w-full min-h-screen bg-black flex items-center justify-center p-8 overflow-hidden">
            <Image
                src={Bg}
                alt="Mahmut Orhan Tour Dates Section Background Image"
                fill
                className="object-cover object-center transition-all duration-300 flex"
                priority={false}
                placeholder="blur"
            />

            <SectionOverlay />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 max-w-6xl w-full">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-bold text-white mb-4 tracking-tight">
                        Connect With Me
                    </h2>
                    {/* Sound Rhythm Visualizer */}
                    <div className="flex items-center justify-center gap-1 mb-6 h-16">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="w-1 bg-linear-to-t from-purple-500 via-pink-500 to-cyan-500 rounded-full"
                                style={{
                                    animationName: 'soundWave',
                                    animationDuration: '0.8s',
                                    animationTimingFunction: 'ease-in-out',
                                    animationIterationCount: 'infinite',
                                    animationDelay: `${i * 0.05}s`,
                                    height: '8px'
                                }}
                            ></div>
                        ))}
                    </div>
                    <p className="text-white/75 text-xl">Follow the rhythm across all platforms</p>
                </div>

                {/* Social Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Card */}
                                <div className="relative bg-linear-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 transition-all duration-500 hover:scale-105 hover:border-transparent overflow-hidden">
                                    {/* Gradient Background on Hover */}
                                    <div className={`absolute inset-0 bg-linear-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                    {/* Glow Effect */}
                                    <div className={`absolute -inset-1 bg-linear-to-br ${social.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col items-center gap-4">
                                        {/* Icon Container */}
                                        <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${social.color} ${social.hoverColor} flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                                            <div className="text-white transform group-hover:scale-110 transition-transform duration-500">
                                                <IconComponent />
                                            </div>
                                        </div>

                                        {/* Platform Name */}
                                        <span className="text-white font-semibold text-lg tracking-wide group-hover:text-transparent group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
                                            {social.name}
                                        </span>
                                    </div>

                                    {/* Animated Border */}
                                    <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: '2px' }}>
                                        <div className="w-full h-full bg-black/90 rounded-2xl"></div>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* Bottom Text */}
                <div className="text-center mt-16">
                    <p className="text-white/75 text-sm uppercase tracking-widest">
                        Stay Connected • Stay Tuned
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaSection;