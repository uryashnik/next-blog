import React from 'react';

const MenuIcon = ({open, onClick}) => {
    return (
        <div
            className={`flex items-center lg:hidden cursor-pointer ${open ? 'opened' : ''}`}
            onClick={onClick}
        >
            <div className={`mr-3 transition-all opacity-100 ${open ? 'opacity-0' : ''}`}>Menu</div>
            <div className="flex flex-col w-6 relative h-4">
                <span className="h-[2px] absolute left-0 transition-all top-0 w-full bg-orange"></span>
                <span className="h-[2px] absolute left-0 transition-all top-[7px] w-full bg-orange"></span>
                <span className="h-[2px] absolute left-0 transition-all top-[7px] w-full bg-orange"></span>
                <span className="h-[2px] absolute left-0 transition-all top-[14px] w-full bg-orange"></span>
            </div>
        </div>
    );
};

export default MenuIcon;
