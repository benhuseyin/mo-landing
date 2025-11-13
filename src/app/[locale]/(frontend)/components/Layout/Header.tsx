import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/src/assets/icons/mo-logo.svg'
import { NavbarItems } from '../../utils/constants';

const Header = () => {
    return (
        <header className="absolute top-5 w-full">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="logo">
                    <Link href="/">
                        <Image src={Logo} alt='Mahmut Orhan Logo' className="h-8 w-auto" />
                    </Link>
                </div>

                {/* Navigation */}
                <nav aria-label="Main Navigation">
                    <ul className="flex gap-6">
                        {NavbarItems.map((item, key) => (
                            <li key={key}>
                                <Link href={item.slug}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;
