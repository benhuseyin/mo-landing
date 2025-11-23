import Image from 'next/image';
import Logo from '@/src/assets/icons/mo-logo.svg'
import Link from 'next/link';
import { NavbarItems, socialLinks } from '../../utils/constants';
import { useTranslations } from 'next-intl';


const Footer = () => {
    const t = useTranslations('Layout.footer');

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

                        <Image src={Logo} alt="mahmut orhan logo" className='size-[150px] mx-auto md:mx-0' />

                        <p className="text-gray-400 text-sm leading-relaxed text-center sm:text-left">
                            {t('description')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-purple-400 uppercase tracking-wider text-center sm:text-left">{t('menu-title')}</h4>
                        <ul className="space-y-3">
                            {
                                NavbarItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.slug}
                                            className="text-gray-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2 group justify-center sm:justify-start"
                                        >
                                            <span className="w-0 group-hover:w-6 h-0.5 bg-linear-to-r from-purple-500 to-pink-500 transition-all duration-300"></span>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                rel="noopener noreferrer"
                                href={link.url}
                                aria-label={link.name}
                                target='_blank'
                                className="w-10 h-10 bg-gray-800 hover:bg-linear-to-br hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12"
                            >
                                <Image src={link.icon} alt={link.name} className="w-5 h-5" />
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
                            {t('right-text', { date: new Date().getFullYear() })}
                        </p>
                        <p className="text-gray-600 text-xs mt-1">
                            {t('extra-description')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Glow Effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent blur-sm"></div>
        </footer>
    );
}

export default Footer