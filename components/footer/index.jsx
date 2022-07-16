import React, {forwardRef} from 'react';
import Link from 'next/link';
import Logo from '../icons/logo';
import {useSelector} from 'react-redux';
import AdaptiveMenu from '../layout/adaptiveMenu';
import Form from './form';
import Social from '../social';
import SnackbarProvider from 'react-simple-snackbar';
import PropTypes from 'prop-types';

const getStore = ({isMobile}) => ({isMobile});

const Footer = forwardRef(({categories}, ref) => {
    const {isMobile} = useSelector(getStore);
    const blockSocial = (
        <div className='flex justify-between flex-col sm:flex-row sm:items-center lg:flex-col lg:items-start'>
            <Link href='/'>
                <div className='mb-5 sm:mb-0 lg:mb-7'>
                    <Logo />
                </div>
            </Link>
            <div className='mb-5 sm:mb-0 lg:mb-7 opacity-50'>All Rights Reserve. 2022</div>
            <Social />
        </div>
    );
    const links = categories.map((topic) => (
        <div key={topic}>
            <Link href={`/blog/${topic}`}>
                <a className='border-b-[1px] border-transparent hover:border-orange cursor-pointer'>
                    {topic}
                </a>
            </Link>
        </div>
    ));

    return (
        <footer className='pt-5 px-7 pb-12 md:py-24 bg-coverBrand dark:bg-coverDark text-sm'>
            <div className='flex flex-col justify-between max-w-7xl mx-auto md:flex-row'>
                <div className='hidden lg:block'>{blockSocial}</div>
                {isMobile ? (
                    <AdaptiveMenu title={'Blog topic`s'}>{links}</AdaptiveMenu>
                ) : (
                    <div>
                        <div className='font-medium md:text-lg lg:text-xl sm:mb-5 lg:mb-7'>
                            Blog topic`s
                        </div>
                        <div className='grid max-w-[190px] grid-cols-2 gap-x-10 gap-y-4'>
                            {links}
                        </div>
                    </div>
                )}
                {isMobile ? (
                    <AdaptiveMenu title={'Navigation'}>
                        <Link href='/blog'>
                            <a className='hover:cursor-pointer border-b-[1px] border-transparent hover:border-orange whitespace-nowrap'>
                                Code-Blog
                            </a>
                        </Link>
                        <Link href='/upcoming'>
                            <a className='hover:cursor-pointer border-b-[1px] border-transparent hover:border-orange'>
                                Upcoming
                            </a>
                        </Link>
                    </AdaptiveMenu>
                ) : (
                    <div>
                        <div className='font-medium text-xl sm:mb-5 mb-7'>Navigation</div>
                        <div className='mb-4'>
                            <Link href='/blog'>
                                <a className='hover:cursor-pointer border-b-[1px] border-transparent hover:border-orange whitespace-nowrap'>
                                    Code-Blog
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href='/upcoming'>
                                <a className='hover:cursor-pointer border-b-[1px] border-transparent hover:border-orange'>
                                    Upcoming
                                </a>
                            </Link>
                        </div>
                    </div>
                )}
                <SnackbarProvider>
                    <Form ref={ref} />
                </SnackbarProvider>
            </div>
            <div className='mt-16 lg:hidden'>{blockSocial}</div>
        </footer>
    );
});

Footer.displayName = 'Footer';

Footer.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string),
};

export default Footer;
