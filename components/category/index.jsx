import React from 'react';
import PropTypes from 'prop-types';
import Topic from '../topic';
import Pointer from '../icons/pointer';
import {useSelector} from 'react-redux';
import {COLOR_PRIMARY, COLOR_WHITE} from '../../app/constants';
import Link from 'next/link';

const Category = ({name, topics}) => {
    const {theme} = useSelector(({theme}) => ({theme}));

    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex justify-between items-center mb-6 md:flex-col md:justify-start md:items-start md:grow md:mb-0 ">
                <div className="text-lg mb-1 lg:text-xl">{name}</div>
                <Link href={`/blog/${name}`}>
                    <a className="flex items-center">
                        see all&nbsp;
                        <Pointer fill={theme === 'dark' ? COLOR_WHITE : COLOR_PRIMARY} />
                    </a>
                </Link>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-x-7 lg:gap-x-20 md:gap-y-10 md:w-4/5 lg:w-3/4">
                {topics.map((topic) => (
                    <div
                        className="pb-12 mb-12 border-b border-dashed border-primary border-opacity-10 dark:border-dividerDark last:border-0 last:pb-0 last:mb-0 md:pb-0 md:mb-0 md:border-0"
                        key={topic.id}
                    >
                        <Topic {...topic} />
                    </div>
                ))}
            </div>
        </div>
    );
};

Category.propTypes = {
    name: PropTypes.string,
    topic: PropTypes.shape({
        title: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        content: PropTypes.string,
        link: PropTypes.string,
        id: PropTypes.string,
    }),
};

export default Category;
