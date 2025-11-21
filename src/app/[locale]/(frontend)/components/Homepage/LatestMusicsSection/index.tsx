"use client"
import { useState, useRef } from 'react';

const LatestReleaseSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [activeTrack, setActiveTrack] = useState(0);
    const [showPlayer, setShowPlayer] = useState(false);
    const iframeRef = useRef(null);

    const tracks = [
        {
            title: "Şaşkın",
            featuring: "John Cala Remix",
            year: "2025",
            duration: "3:01",
            spotifyId: "1ZVVDHCn3vGg6DLDMhE5FO",
            cover: "https://i.scdn.co/image/ab67616d0000b273"
        },
        {
            title: "Şaşkın",
            featuring: "",
            year: "2025",
            duration: "2:27",
            spotifyId: "19ueEPBwOhHPqX6VPnn9g8",
            cover: null
        },
        {
            title: "Maldad Pura",
            featuring: "Jasiel Nuñez",
            year: "2024",
            duration: "2:38",
            spotifyId: "2DlC8rbljmNHJMteSMWJWa",
            cover: null
        },
    ];

    const handleTrackClick = (index: number) => {
        setActiveTrack(index);
        setShowPlayer(true);
    };

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
                        <div className="flex-1 h-px bg-gradient-to-r from-amber-400/50 to-transparent" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-4">
                        Latest<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
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
                            <div className={`absolute -inset-4 bg-gradient-to-r from-amber-500 to-red-500 rounded-2xl blur-2xl transition-opacity duration-500 ${isHovered ? 'opacity-40' : 'opacity-20'}`} />

                            <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-amber-900 via-red-900 to-black w-full h-[352px]">
                                {showPlayer ? (
                                    <iframe
                                        ref={iframeRef}
                                        src={currentSpotifyUrl}
                                        width="100%"
                                        height="100%"
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full rounded-xl"
                                    />
                                ) : (
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
                                )}
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
                            <a
                                href={`https://open.spotify.com/track/${tracks[activeTrack].spotifyId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 rounded-full text-sm text-green-400 hover:text-green-300 transition-all border border-green-500/30 flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                </svg>
                                Spotify
                            </a>
                            <a
                                href="#"
                                className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm text-gray-400 hover:text-white transition-all border border-white/10"
                            >
                                Apple Music
                            </a>
                            <a
                                href="#"
                                className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm text-gray-400 hover:text-white transition-all border border-white/10"
                            >
                                YouTube
                            </a>
                        </div>
                    </div>

                    {/* Track List */}
                    <div className="space-y-4">
                        {tracks.map((track, i) => (
                            <div
                                key={i}
                                onClick={() => handleTrackClick(i)}
                                className={`group p-5 rounded-xl cursor-pointer transition-all duration-300 ${activeTrack === i && showPlayer
                                    ? 'bg-gradient-to-r from-amber-500/20 to-transparent border-l-2 border-amber-400'
                                    : 'bg-white/5 hover:bg-white/10 border-l-2 border-transparent'
                                    }`}
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
                                    <span className="text-xs text-amber-400 bg-amber-400/10 px-2 py-1 rounded flex-shrink-0">
                                        {track.year}
                                    </span>

                                    {/* Duration */}
                                    <span className="text-sm text-gray-500 w-12 text-right flex-shrink-0">
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
                                Tüm Şarkıları Gör
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes equalizer {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }
      `}</style>
        </div>
    );
};

export default LatestReleaseSection;