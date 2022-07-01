import React, {useState} from 'react';
import ArrowUp from '../icons/arrowUp';
import AnimateHeight from '../utils/animateHeight';
import {COLOR_PRIMARY, COLOR_WHITE} from '../layout/constants';
import {useSelector} from 'react-redux';

const AdaptiveMenu = ({title, children}) => {
    const [open, setOpen] = useState(false);
    const {theme} = useSelector(({theme}) => ({theme}));
    const isDark = theme === 'dark';

    return (
        <div className="py-7 border-b-[1px] border-primary border-opacity-10">
            <div className="flex items-center" onClick={() => setOpen((prev) => !prev)}>
                <div
                    className={`mr-5 md:hidden transition-transform ${
                        open ? 'rotate-180' : 'rotate-0'
                    }`}
                >
                    <ArrowUp fill={theme === 'dark' ? COLOR_WHITE : COLOR_PRIMARY} />
                </div>
                <div className="font-medium md:text-lg lg:text-xl">{title}</div>
            </div>
            <AnimateHeight open={open}>
                <div className="pt-5 grid max-w-[285px] grid-cols-3 gap-x-10 gap-y-4">
                    {children}
                </div>
            </AnimateHeight>
        </div>
    );
};

export default AdaptiveMenu;
