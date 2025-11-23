"use client"
import { useState, useRef } from 'react';

import { latestReleaseSocialMediaItems, tracks } from '../../../utils/constants';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

const LatestReleaseSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [activeTrack, setActiveTrack] = useState(0);
    const [showPlayer, setShowPlayer] = useState(false);
    const iframeRef = useRef(null);

    const handleTrackClick = (index: number) => {
        setActiveTrack(index);
        setShowPlayer(true);
    };

    const handleShowChoosenMusic = () => {
        if (showPlayer) {
            return (<iframe
                ref={iframeRef}
                src={currentSpotifyUrl}
                width="100%"
                height="100%"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="absolute inset-0 w-full h-full rounded-xl"
            />
            )
        } else {
            return (
                <div
                    className="w-full h-full flex items-center justify-center"
                    onClick={() => setShowPlayer(true)}
                >
                    <div className="text-center">
                        <div className="text-8xl font-bold text-white/10">MO</div>
                        <div className="text-amber-400/50 text-sm tracking-widest mt-2">2025</div>
                        <div className="mt-8 px-6 py-3 bg-amber-400 text-black rounded-full font-medium inline-flex items-center gap-2 hover:bg-amber-300 transition-colors">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            Listen Now
                        </div>
                    </div>
                </div>
            )
        }
    }

    const currentSpotifyUrl = `https://open.spotify.com/embed/track/${tracks[activeTrack].spotifyId}?utm_source=generator&theme=0`;

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative">
            {/* Background effects */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: 'radial-gradient(ellipse at 30% 20%, rgba(251, 191, 36, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(220, 38, 38, 0.3) 0%, transparent 50%)',
                }}
            />

            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                {/* Section Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                        <span className="text-amber-400 text-sm font-medium tracking-widest uppercase">
                            New Music
                        </span>
                        <div className="flex-1 h-px bg-linear-to-r from-amber-400/50 to-transparent" />
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-4">
                        Latest<br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-orange-500 to-red-500">
                            Releases
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-md">
                        Experience the newest sounds blending Eastern melodies with deep house rhythms
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Spotify Player & Album Art */}
                    <div className="space-y-6">
                        {/* Album Art Area */}
                        <div
                            className="relative group cursor-pointer"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className={classNames("absolute -inset-4 bg-linear-to-r from-amber-500 to-red-500 rounded-2xl blur-2xl transition-opacity duration-500", {
                                'opacity-40': isHovered,
                                'opacity-20': !isHovered
                            })} />

                            <div className="relative aspect-square rounded-xl overflow-hidden bg-linear-to-br from-amber-900 via-red-900 to-black w-full md:h-[352px]">
                                {handleShowChoosenMusic()}
                            </div>
                        </div>

                        {/* Now Playing Info */}
                        {showPlayer && (
                            <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1 items-end h-4">
                                        {[...Array(4)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-1 bg-amber-400 rounded-full"
                                                style={{
                                                    animation: `equalizer 0.5s ease-in-out infinite ${i * 0.1}s`
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Şu an çalıyor</p>
                                        <p className="text-white font-medium">
                                            {tracks[activeTrack].title}
                                            {tracks[activeTrack].featuring && (
                                                <span className="text-gray-400 font-normal"> feat. {tracks[activeTrack].featuring}</span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Streaming Platforms */}
                        <div className="flex gap-3 justify-center flex-wrap">

                            {latestReleaseSocialMediaItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={twMerge("px-4 py-2 rounded-full text-sm  transition-all border flex items-center gap-2", item.className)}
                                >
                                    {item.icon}
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Track List */}
                    <div className="space-y-4 w-full max-w-full overflow-hidden">
                        {tracks.map((track, i) => (
                            <div
                                key={i}
                                onClick={() => handleTrackClick(i)}
                                className={classNames("group p-5 rounded-xl cursor-pointer transition-all duration-300", {
                                    'bg-linear-to-r from-amber-500/20 to-transparent border-l-2 border-amber-400': activeTrack === i && showPlayer,
                                    'bg-white/5 hover:bg-white/10 border-l-2 border-transparent': !(activeTrack === i && showPlayer),
                                })}
                            >
                                <div className="flex items-center gap-4">
                                    {/* Play button / Track number */}
                                    <div className="w-10 h-10 flex items-center justify-center relative">
                                        {activeTrack === i && showPlayer ? (
                                            <div className="flex gap-0.5 items-end h-4">
                                                {[...Array(4)].map((_, j) => (
                                                    <div
                                                        key={j}
                                                        className="w-1 bg-amber-400 rounded-full"
                                                        style={{
                                                            animation: `equalizer 0.5s ease-in-out infinite ${j * 0.1}s`
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        ) : (
                                            <>
                                                <span className="text-2xl font-bold text-gray-600 group-hover:opacity-0 transition-opacity">
                                                    {String(i + 1).padStart(2, '0')}
                                                </span>
                                                <svg
                                                    className="w-6 h-6 text-amber-400 absolute opacity-0 group-hover:opacity-100 transition-opacity"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                >
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </>
                                        )}
                                    </div>

                                    {/* Track info */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors truncate">
                                            {track.title}
                                        </h3>
                                        {track.featuring && (
                                            <p className="text-sm text-gray-500 truncate">
                                                feat. {track.featuring}
                                            </p>
                                        )}
                                    </div>

                                    {/* Year badge */}
                                    <span className="text-xs text-amber-400 bg-amber-400/10 px-2 py-1 rounded shrink-0">
                                        {track.year}
                                    </span>

                                    {/* Duration */}
                                    <span className="text-sm text-gray-500 w-12 text-right shrink-0">
                                        {track.duration}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {/* View All Button */}
                        <a
                            href="https://open.spotify.com/artist/3t8WiyalpvnB9AObcMufiE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full mt-6 py-4 border border-white/20 hover:border-amber-400 rounded-xl text-gray-400 hover:text-amber-400 transition-all text-center group"
                        >
                            <span className="flex items-center justify-center gap-2">
                                See All Songs
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div >
            </div >
        </div >
    );
};
export default LatestReleaseSection;
