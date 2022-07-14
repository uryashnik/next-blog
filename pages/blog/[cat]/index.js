import React from 'react';
import db from '../../../firebase';
import {collection, getDocs, where, query} from 'firebase/firestore';
import Topic from '../../../components/topic';

const Catalog = ({posts, category}) => (
    <div className="mx-auto lg:w-5/6">
        <div className="mb-14 lg:mb-28 text-3xl md:text-5xl">{category}</div>
        <div>
            {posts.map((post) => (
                <div className="mb-10" key={post.id}>
                    <Topic
                        {...post}
                        tags={Object.keys(post.tags)}
                        link={`/blog/${category}/${post.id}`}
                    />
                </div>
            ))}
        </div>
    </div>
);

export default Catalog;

export async function getStaticPaths() {
    const data = await getDocs(collection(db, 'categories'));
    const paths = data.docs.map((doc) => ({params: {cat: doc.data().name}}));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const q = query(collection(db, 'posts'), where('tags.' + params.cat, '==', true));
    const searched = await getDocs(q);
    const posts = searched.docs.map((doc) => ({id: doc.id, ...doc.data()}));

    return {
        props: {posts, category: params.cat},
    };
}
