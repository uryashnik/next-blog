import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Burger from './burger';
import Tag from '../icons/tag';
import Star from '../icons/star';
import Moon from '../icons/moon';
import Search from '../icons/search';
import {useSelector} from 'react-redux';
import {COLOR_PRIMARY, COLOR_WHITE} from '../layout/constants';
import Logo from '../icons/logo';
import Button from '../button';
import MobMenu from './mobMenu';

const Header = ({onChangeTheme}) => {
    const [open, setOpen] = useState(false);
    const {theme, isXl} = useSelector(({theme, isXl}) => ({theme, isXl}));
    const isDark = theme === 'dark';

    useEffect(() => {
        if (isXl) {
            setOpen(false);
        }
    }, [isXl]);

    return (
        <header className="absolute top-0 w-full p-7 bg-white shadow-lg shadow-primary/5 border-b border-primary/5 dark:bg-contentDark dark:border-dividerDark dark:shadow-dividerDark/50">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Logo />
                <nav className="hidden justify-between items-center sm:flex ">
                    <Link href="/blog">
                        <a className="flex justify-between items-center mr-6 lg:mr-12 ">
                            <Tag fill={isDark ? COLOR_WHITE : COLOR_PRIMARY} />
                            <span className="ml-2 whitespace-nowrap border-b-[1px] hover:border-orange border-transparent transition-all">
                                Code-Blog
                            </span>
                        </a>
                    </Link>
                    <Link href="/upcoming">
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
                    <Button onClick={onChangeTheme} className={'flex items-center p-3 pt-[12px]'}>
                        <Moon fill={isDark ? COLOR_WHITE : COLOR_PRIMARY} />
                    </Button>
                </div>
                <Burger open={open} onClick={() => setOpen((prev) => !prev)} />
            </div>
            <MobMenu open={open} onChangeTheme={onChangeTheme} />
        </header>
    );
};

export default Header;
