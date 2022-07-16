import React from 'react';
import PropTypes from 'prop-types';
import {collection, getDocs} from 'firebase/firestore';
import db from '../firebase';
import Announce from '../components/announce/full';

const Upcoming = ({posts}) => {
    return (
        <div>
            <h2 className='text-[30px] md:text-[36px] lg:text-[50px] leading-normal mb-8 md:mb-14'>
                I&apos;ll be posting announcements of future articles here, subscribe to interesting
                stuff!
            </h2>
            <div className='border-b border-primary/5 mb-8 md:mb-14 dark:border-white/5'></div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-16'>
                {posts.map((post) => (
                    <Announce key={post.id} {...post} />
                ))}
            </div>
        </div>
    );
};

Upcoming.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            tags: PropTypes.arrayOf(PropTypes.string),
            title: PropTypes.string,
            content: PropTypes.string,
            id: PropTypes.string,
            date: PropTypes.string,
        }),
    ),
};

export async function getServerSideProps() {
    const data = await getDocs(collection(db, 'upcoming'));
    console.log(new Date().getDate());
    const myDate = new Date().getDate();
    const posts = data.docs.map((item) => {
        const post = item.data();
        const fullDate = new Date(post.date);
        const customDate =
            fullDate.toLocaleString('en-us', {hour: 'numeric', minute: 'numeric'}) +
            ' ' +
            fullDate.getDay() +
            '.' +
            (fullDate.getMonth() + 1);
        return {...post, tags: Object.keys(post.tags), id: item.id, date: customDate.toLowerCase()};
    });

    return {
        props: {
            posts,
        },
    };
}

export default Upcoming;
