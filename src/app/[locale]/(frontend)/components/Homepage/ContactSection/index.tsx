"use client"

import { useState } from 'react';
import { User, Settings, Globe } from 'lucide-react';

const ContactSection = () => {
    const [activeIndex, setActiveIndex] = useState<Number>(-1);

    const faqs = [
        {
            icon: <Globe className="w-6 h-6" />,
            question: "BOOKING CONTACT US, NA, SA, AU, NZ.",
            answer: "alex.becket@caa.com ",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <User className="w-6 h-6" />,
            question: "BOOKING CONTACT ROW",
            answer: "MDSmith@wmeagency.com",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Settings className="w-6 h-6" />,
            question: "MANAGEMENT",
            answer: "For brand deals you can reach us at azizfiratacar@robinmusicagency.com ",
            color: "from-orange-500 to-red-500"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
            <div className="max-w-4xl w-full">
                {/* Header with audio wave effect */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                        CONTACT
                    </h2>
                    <div className="flex justify-center gap-1 mt-6">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="w-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full animate-pulse"
                                style={{
                                    height: `${Math.random() * 40 + 10}px`,
                                    animationDelay: `${i * 0.1}s`,
                                    animationDuration: `${Math.random() * 0.5 + 0.5}s`
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl transition-all duration-300"
                        >
                            {/* Gradient border effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${faq.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />

                            <div className="relative bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
                                {/* Question button */}
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                                    className="w-full p-6 flex items-center gap-4 text-left transition-all duration-300 hover:bg-zinc-800/50"
                                >
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${faq.color} flex-shrink-0 transition-transform duration-300 ${activeIndex === index ? 'scale-110 rotate-12' : ''}`}>
                                        {faq.icon}
                                    </div>
                                    <span className="text-xl font-semibold flex-grow">{faq.question}</span>
                                    <div className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>

                                {/* Answer panel with smooth animation */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-6 pb-6 pt-2">
                                        <div className={`h-px bg-gradient-to-r ${faq.color} mb-4 opacity-50`} />
                                        <p className="text-zinc-300 leading-relaxed pl-16">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>

                                {/* Vinyl record spinning effect on active */}
                                {activeIndex === index && (
                                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full border-2 border-zinc-700 opacity-20 animate-spin" style={{ animationDuration: '3s' }}>
                                        <div className="absolute inset-2 rounded-full border-2 border-zinc-600" />
                                        <div className="absolute inset-4 rounded-full bg-zinc-500" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer beat indicator */}
                <div className="mt-12 flex justify-center gap-2">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' : 'bg-zinc-700'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContactSection