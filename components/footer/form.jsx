import React from 'react';
import Lock from '../icons/lock';
import {useSelector} from 'react-redux';
import {COLOR_PRIMARY, COLOR_WHITE} from '../layout/constants';
import Button from '../button/buttonFlat';

const Form = () => {
    const {theme} = useSelector(({theme}) => ({theme}));
    const isDark = theme === 'dark';

    return (
        <div>
            <div className="font-medium md:text-lg lg:text-xl pt-7 mb-5 lg:mb-7 md:pt-0">
                Join the Newsletter
            </div>
            <form action="/order" method="post" className="w-full md:w-72">
                <input
                    className="block mb-4 pb-2 outline-0 border-b border-primary border-opacity-50 bg-transparent w-full dark:border-white"
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                <input
                    className="block mb-4 pb-2 outline-0 border-b border-primary border-opacity-50 bg-transparent w-full dark:border-white"
                    type="text"
                    name="email"
                    placeholder="E-mail"
                />
                <div className="flex items-center justify-between">
                    <Button type="submit">Join</Button>
                    <div className="flex items-center">
                        <div className="mr-1">
                            <Lock fill={isDark ? COLOR_WHITE : COLOR_PRIMARY} />
                        </div>
                        <span className="text-[10px]">No spam. Only value.</span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
