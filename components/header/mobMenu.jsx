import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import AnimateHeight from '../utils/animateHeight';
import Search from '../icons/search';
import Button from '../button';
import Moon from '../icons/moon';
import {COLOR_PRIMARY, COLOR_WHITE} from '../layout/constants';

const MobMenu = ({open, onChangeTheme, onSubscribe}) => {
    const {theme} = useSelector(({theme}) => ({theme}));
    const isDark = theme === 'dark';

    return (
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
                    <Button onClick={onSubscribe} className={'flex lg:hidden px-9 py-2 mr-2 md:mr-0'}>Subscribe</Button>
                    <Button
                        onClick={onChangeTheme}
                        className={'flex items-center p-3 pt-[12px] sm:hidden'}
                    >
                        <Moon fill={isDark ? COLOR_WHITE : COLOR_PRIMARY} />
                    </Button>
                </div>
            </div>
        </AnimateHeight>
    );
};

MobMenu.propTypes = {
    open: PropTypes.bool,
    onChangeTheme: PropTypes.func,
    onSubscribe: PropTypes.func,
};

export default MobMenu;
