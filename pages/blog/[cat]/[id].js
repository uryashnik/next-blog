import React from 'react';
import PropTypes from 'prop-types';
import {getDocs, collection, getDoc, doc} from 'firebase/firestore';
import db from '../../../firebase';
import Tag from '../../../components/tag';
import {useSelector} from 'react-redux';

const Post = ({cat, id, post}) => {
    const {theme} = useSelector(({theme}) => ({theme}));
    console.log('theme: ', theme);
    return (
        <div>
            <div className="text-lg lg:text-2xl font-medium mb-3 lg:mb-4">{post.title}</div>
            <div className="flex mb-4">
                {Object.keys(post.tags).map((item) => (
                    <Tag value={item} key={item} />
                ))}
            </div>
            <div className="text-sm mb-4 lg:text-base lg:mb-5">{post.content}</div>
        </div>
    );
};

export async function getStaticPaths() {
    const posts = await getDocs(collection(db, 'posts'));
    const paths = [];
    posts.forEach((item) =>
        Object.keys(item.data().tags).forEach((tag) => {
            paths.push({params: {id: item.id, cat: tag}});
        }),
    );

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const post = await getDoc(doc(db, 'posts', params.id));

    return {
        props: {id: params.id, cat: params.cat, post: post.data()},
    };
}

export default Post;
