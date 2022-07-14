import React from 'react';
import Image from 'next/image';
import logo from '../../public/icons/logo.png';
import Link from 'next/link';

const Logo = () => (
    <Link href="/">
        <div className="flex align-middle cursor-pointer">
            <div className="mr-2">
                <Image src={logo} width={25} height={24} layout="fixed" />
            </div>
            <div className="text-xl text-primary dark:text-white">Matvey</div>
        </div>
    </Link>
);

export default Logo;
