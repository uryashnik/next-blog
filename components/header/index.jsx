import React, {useState} from 'react';
import Link from 'next/link';
import MenuIcon from './menuIcon';
import AnimateHeight from '../utils/animateHeight';
import Tag from '../icons/tag';
import Star from '../icons/star';
import Moon from '../icons/moon';
import Search from '../icons/search';
import {useSelector} from 'react-redux';
import {COLOR_PRIMARY, COLOR_WHITE} from '../layout/constants';
import Logo from '../icons/logo';
import Button from '../button';

const Header = ({changeTheme}) => {
    const [open, setOpen] = useState(false);
    const {theme} = useSelector(({theme}) => ({theme}));
    const isDark = theme === 'dark';

    return (
        <header className="absolute top-0 w-full p-7 border-b-[1px] border-coverBrand dark:bg-contentDark">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Logo />
                <nav className="hidden justify-between items-center sm:flex ">
                    <Link href="/">
                        <a className="flex justify-between items-center mr-6 lg:mr-12 ">
                            <Tag fill={isDark ? COLOR_WHITE : COLOR_PRIMARY} />
                            <span className="ml-2 whitespace-nowrap border-b-[1px] hover:border-orange border-transparent transition-all">
                                Code-Blog
                            </span>
                        </a>
                    </Link>
                    <Link href="/test">
                        <a className="flex justify-between items-center ">
                            <Star fill={isDark ? COLOR_WHITE : COLOR_PRIMARY} />
                            <span className="ml-2 border-b-[1px] hover:border-orange border-transparent transition-all">
                                Upcoming
                            </span>
                        </a>
                    </Link>
                </nav>
                <div className="hidden justify-between items-center sm:flex">
                    <label className="hidden justify-between items-center lg:flex mr-2">
                        <Search fill={isDark ? COLOR_WHITE : COLOR_PRIMARY} />
                        <input className="ml-2 outline-0 bg-transparent" placeholder="Search" />
                    </label>
                    <Button className={'mr-2 hidden lg:inline px-9 py-2'}>Subscribe</Button>
                    <Button onClick={changeTheme} className={'flex items-center p-3 pt-[12px]'}>
                        <Moon fill={isDark ? COLOR_WHITE : COLOR_PRIMARY} />
                    </Button>
                </div>
                <MenuIcon open={open} onClick={() => setOpen((prev) => !prev)} />
            </div>
            <AnimateHeight open={open}>
                <div className="pt-4">
                    <div className="flex justify-between items-center my-2">
                        <label className="flex justify-between items-center mr-4 lg:hidden grow sm:mr-8">
                            <Search fill={isDark ? COLOR_WHITE : COLOR_PRIMARY} />
                            <input
                                className="ml-2 grow outline-0 border-b-[1px] h-[40px] border-primary border-opacity-50 bg-transparent w-full dark:border-white"
                                placeholder="Search"
                            />
                        </label>
                        <Button className={'flex lg:hidden px-9 py-2 mr-2 md:mr-0'}>
                            Subscribe
                        </Button>
                        <Button
                            onClick={changeTheme}
                            className={'flex items-center p-3 pt-[12px] sm:hidden'}
                        >
                            <Moon fill={isDark ? COLOR_WHITE : COLOR_PRIMARY} />
                        </Button>
                    </div>
                </div>
            </AnimateHeight>
        </header>
    );
};

export default Header;
