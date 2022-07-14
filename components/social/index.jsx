import React from 'react';
import PropTypes from 'prop-types';
import Git from '../icons/git';
import Discord from '../icons/discord';
import Twitter from '../icons/twitter';
import LinkedIn from '../icons/linkedIn';
import IconWrapper from '../icons/wrapper';
import Link from 'next/link';
import {COLOR_WHITE} from '../../app/constants';

const icons = [
    {component: Twitter, link: 'https://twitter.com/'},
    {component: Discord, link: 'https://discord.com/'},
    {component: LinkedIn, link: 'https://www.linkedin.com/'},
    {component: Git, link: 'https://github.com/'},
];

const index = ({className, fill}) => {
    const styles = `bg-primary/20 hover:bg-primary/40 dark:bg-btnBgDark/40 dark:hover:bg-btnBgDark100`;

    return (
        <div className="flex">
            {icons.map((icon, index) => {
                const Component = icon.component;
                return (
                    <Link href={icon.link} key={index}>
                        <a target="_blank" key={index} className="mr-2 last:mr-0">
                            <IconWrapper className={className ? className : styles}>
                                <Component fill={fill ? fill : COLOR_WHITE} />
                            </IconWrapper>
                        </a>
                    </Link>
                );
            })}
        </div>
    );
};

index.propTypes = {
    className: PropTypes.string,
    fill: PropTypes.string,
};

export default index;
