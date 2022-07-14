import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

const AnnounceFull = ({title, date, text, tags}) => (
    <div className="p-7 md:p-10 rounded-[40px] border border-primary/5 shadow-lg dark:border-white/5 ">
        <div className="text-sm md:text-lg mb-1 text-lime-500">{date}</div>
        <div className="text-lg md:text-xl font-medium mb-1">{title}</div>
        <div className="mb-4">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="text-xs font-medium px-2 py-[2px] border rounded-lg border-primary dark:border-white mr-1 last:mr-0"
                >
                    {tag}
                </span>
            ))}
        </div>
        <div className="mb-5 line-clamp-4 text-sm md:text-lg">{text}</div>
        <Button className="py-2.5 px-7">Subscribe</Button>
    </div>
);

AnnounceFull.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    text: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
};

export default AnnounceFull;
