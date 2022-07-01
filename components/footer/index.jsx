import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../icons/logo';
import twitter from '../../public/icons/twitter.svg';
import discord from '../../public/icons/discord.svg';
import linkedin from '../../public/icons/linkedin.svg';
import git from '../../public/icons/git.svg';
import {useSelector} from 'react-redux';
import AdaptiveMenu from '../layout/adaptiveMenu';
import Form from './form';

const social = [twitter, discord, linkedin, git];
const topics = [
    'JavaScript',
    'Node.js',
    'SQL',
    'Java',
    'Express',
    'Database',
    'WordPress',
    'Design',
    'Front-end',
    'Postgre',
];

const getStore = ({isMobile}) => ({isMobile});

const Footer = () => {
    const {isMobile} = useSelector(getStore);
    const blockSocial = (
        <div className="flex justify-between flex-col sm:flex-row sm:items-center lg:flex-col lg:items-start">
            <Link href="/">
                <div className="mb-5 sm:mb-0 lg:mb-7">
                    <Logo />
                </div>
            </Link>
            <div className="mb-5 sm:mb-0 lg:mb-7 opacity-50">All Rights Reserve. 2022</div>
            <div className="flex">
                {social.map((image, index) => (
                    <div
                        className="flex justify-center items-center w-[30px] h-[30px] bg-[#cecece] rounded-lg mr-2 last:mr-0 hover:bg-[#848484] cursor-pointer transition-colors dark:bg-[#292929] dark:bg-opacity-60 dark:hover:bg-opacity-100"
                        key={index}
                    >
                        <Image src={image} layout="fixed" />
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <footer className="pt-5 px-7 pb-12 md:py-24 bg-coverBrand dark:bg-coverDark text-sm">
            <div className="flex flex-col justify-between max-w-7xl mx-auto md:flex-row">
                <div className="hidden lg:block">{blockSocial}</div>
                {isMobile ? (
                    <AdaptiveMenu title={'Blog topic`s'}>
                        {topics.map((topic) => {
                            return <div key={topic}>{topic}</div>;
                        })}
                    </AdaptiveMenu>
                ) : (
                    <div>
                        <div className="font-medium md:text-lg lg:text-xl sm:mb-5 lg:mb-7">
                            Blog topic`s
                        </div>
                        <div className="grid max-w-[190px] grid-cols-2 gap-x-10 gap-y-4">
                            {topics.map((topic) => {
                                return <div key={topic}>{topic}</div>;
                            })}
                        </div>
                    </div>
                )}
                {isMobile ? (
                    <AdaptiveMenu title={'Navigation'}>
                        <div>Code-Blog</div>
                        <div>Upcoming</div>
                    </AdaptiveMenu>
                ) : (
                    <div>
                        <div className="font-medium text-xl mb-7">Navigation</div>
                        <div>
                            <div className="mb-4">Code-Blog</div>
                            <div>Upcoming</div>
                        </div>
                    </div>
                )}
                <Form />
            </div>
            <div className="mt-16 lg:hidden">{blockSocial}</div>
        </footer>
    );
};

export default Footer;
