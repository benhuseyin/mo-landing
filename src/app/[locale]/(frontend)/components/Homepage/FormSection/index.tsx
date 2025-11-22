"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Music, Send, CheckCircle, AlertCircle, Calendar } from 'lucide-react';

// Zod schema
const contactSchema = z.object({
    fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
    email: z.email({ message: 'Please enter a valid email address' }),
    bday: z.string().min(1, { message: 'Please select your birthday' }),
    consent: z.boolean().refine(v => v === true, { message: 'Please accept to receive updates' })
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm = () => {

    // component body içinde:

    const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, touchedFields },
        reset,
        watch
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            fullName: '',
            email: '',
            bday: '',
            consent: false,
        }
    });

    const consentValue = watch('consent');


    const onSubmit = async (data: ContactFormValues) => {
        try {
            // simulate api call
            await new Promise((r) => setTimeout(r, 1200));
            setSubmitStatus('success');
            reset();
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (err) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 overflow-hidden relative">
            {/* Background visuals (same design) */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute w-full h-1 bg-linear-to-r from-transparent via-cyan-500 to-transparent top-1/4 animate-pulse" />
                    <div className="absolute w-full h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent top-2/4 animate-pulse animation-delay-1000" />
                    <div className="absolute w-full h-1 bg-linear-to-r from-transparent via-pink-500 to-transparent top-3/4 animate-pulse animation-delay-2000" />
                </div>

                <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-float -top-[200px] -left-[200px]" />
                <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-float-slow -bottom-[150px] -right-[150px]" />
                <div className="absolute w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[90px] animate-float-reverse top-1/3 right-1/4" />

                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="max-w-lg w-full relative z-10">
                <div className="text-center mb-8 animate-fadeIn">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-linear-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-xl rounded-full border border-cyan-500/30 mb-6 shadow-2xl shadow-cyan-500/20 relative">
                        <div className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-500/30 to-purple-500/30 animate-pulse" />
                        <Music className="w-12 h-12 text-cyan-400 animate-pulse relative z-10" />
                    </div>
                    <h1 className="text-6xl font-bold bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 tracking-tight drop-shadow-lg">
                        Join the Beat
                    </h1>
                    <p className="text-gray-400 text-lg font-light">
                        Stay connected with <span className="text-cyan-400 font-medium">Mahmut Orhan</span>
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-black/50 p-8 border border-white/10 animate-slideUp relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-linear-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl" />

                    <div className="relative z-10">
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-linear-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/50 rounded-2xl flex items-center gap-3 animate-fadeIn shadow-lg shadow-cyan-500/20">
                                <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                                <span className="text-cyan-100 text-sm">You're on the list! Get ready for exclusive updates.</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {/* Full Name */}
                            <div>
                                <label className="block text-gray-300 font-medium mb-2 text-sm">Full Name</label>
                                <input
                                    {...register('fullName')}
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                                />
                                {touchedFields.fullName && errors.fullName && (
                                    <div className="mt-2 flex items-center gap-2 text-red-400 text-sm animate-fadeIn">
                                        <AlertCircle className="w-4 h-4" />
                                        <span>{errors.fullName?.message as string}</span>
                                    </div>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-gray-300 font-medium mb-2 text-sm">Email Address</label>
                                <input
                                    {...register('email')}
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                                />
                                {touchedFields.email && errors.email && (
                                    <div className="mt-2 flex items-center gap-2 text-red-400 text-sm animate-fadeIn">
                                        <AlertCircle className="w-4 h-4" />
                                        <span>{errors.email?.message as string}</span>
                                    </div>
                                )}
                            </div>

                            {/* Birthday */}
                            <div>
                                <label className="block text-gray-300 font-medium mb-2 text-sm">Birthday</label>
                                <div className="relative">
                                    <input
                                        {...register('bday')}
                                        type="date"
                                        className="w-full px-4 py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 hover:bg-white/10 hover:border-white/30 scheme-dark cursor-pointer"
                                    />
                                </div>
                                {touchedFields.bday && errors.bday && (
                                    <div className="mt-2 flex items-center gap-2 text-red-400 text-sm animate-fadeIn">
                                        <AlertCircle className="w-4 h-4" />
                                        <span>{errors.bday?.message as string}</span>
                                    </div>
                                )}
                            </div>

                            {/* Consent */}
                            <div className="pt-2">
                                <label className="flex items-start gap-3 cursor-pointer group relative">
                                    <div className="relative flex items-center justify-center mt-0.5">
                                        <input
                                            {...register('consent')}
                                            type="checkbox"
                                            className={
                                                "w-5 h-5 bg-white/5 backdrop-blur-sm rounded outline-none transition-all cursor-pointer "
                                            }
                                        />
                                    </div>

                                    <span className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                        I would like to receive event and release information from Mahmut Orhan, and can opt out of this at any time by unsubscribing in any email I receive.
                                    </span>
                                </label>

                                {touchedFields.consent && errors.consent && (
                                    <div className="mt-2 flex items-center gap-2 text-red-400 text-sm animate-fadeIn ml-8">
                                        <AlertCircle className="w-4 h-4" />
                                        <span>{errors.consent?.message as string}</span>
                                    </div>
                                )}
                            </div>


                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full mt-6 bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold py-4 rounded-xl hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 hover:opacity-20 transition-opacity duration-300" />
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        <span>Subscribing...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        <span>Subscribe</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="text-center mt-6 text-gray-500 animate-fadeIn">
                    <p className="text-sm font-light">We respect your privacy and won't spam</p>
                </div>
            </div>

            <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%,100%{ transform: translate(0,0) scale(1); } 50% { transform: translate(30px,-30px) scale(1.1); } }
        @keyframes float-slow { 0%,100%{ transform: translate(0,0) scale(1); } 50% { transform: translate(-40px,40px) scale(1.05); } }
        @keyframes float-reverse { 0%,100%{ transform: translate(0,0) scale(1); } 50% { transform: translate(-20px,-40px) scale(1.08); } }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
        .animate-slideUp { animation: slideUp 0.9s ease-out; }
        .animate-float { animation: float 20s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 25s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 18s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        input:focus, input:hover { transform: translateY(-1px); }
        input[type="checkbox"]:checked { background-image: none; }
      `}</style>
        </div>
    );
}

export default ContactForm