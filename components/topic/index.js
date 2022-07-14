import React from 'react';
import PropTypes from 'prop-types';
import Pointer from '../icons/pointer';
import {COLOR_ORANGE} from '../../app/constants';
import Link from 'next/link';
import Tag from '../tag';

const Topic = ({title, tags, content, link}) => (
    <div>
        <div className="text-lg lg:text-2xl font-medium mb-3 lg:mb-4">{title}</div>
        <div className="flex mb-4">
            {tags.map((item) => (
                <Tag value={item} key={item} />
            ))}
        </div>
        <div className="line-clamp-3 text-sm mb-4 lg:text-base lg:mb-5">{content}</div>
        <Link href={link}>
            <a className="flex items-center text-orange">
                Read&nbsp;
                <Pointer fill={COLOR_ORANGE} />
            </a>
        </Link>
    </div>
);

Topic.propTypes = {
    title: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    content: PropTypes.string,
    link: PropTypes.string,
};

export default Topic;
