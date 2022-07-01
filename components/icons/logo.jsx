import React from 'react';
import Image from 'next/image';
import logo from '../../public/icons/logo.png';

const Logo = () => (
    <div className="flex align-middle">
        <div className="mr-2">
            <Image src={logo} width={25} height={24} layout="fixed" />
        </div>
        <div className="text-xl text-primary dark:text-white">Matvey</div>
    </div>
);

export default Logo;
