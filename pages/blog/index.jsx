import React, {useState} from 'react';
import db from '../../firebase';
import {collection, getDocs, query, limit} from 'firebase/firestore';
import Topic from '../../components/topic';
import AnimateHeight from '../../components/utils/animateHeight';
import Router, {useRouter} from 'next/router';
import Button from '../../components/button/buttonFlat';

const Blog = ({posts, categories}) => {
    const router = useRouter();
    const [open, setOpen] = useState(true);
    const [filter, setFilter] = useState(null);
    const content = filter ? posts.filter((post) => post.tags[filter]) : posts;

    return (
        <div className="mx-auto lg:w-5/6">
            <div className="flex justify-between items-center">
                <div className="text-3xl md:text-5xl">Code-Blog</div>
                <div onClick={() => setOpen((prev) => !prev)}>filter</div>
            </div>
            <AnimateHeight open={open}>
                <div className="grid grid-cols-3 gap-4 md:grid-cols-4 md:gap-6 pt-6 md:pt-8 lg:pt-12 ">
                    {categories.map((name) => (
                        <label key={name} className="cursor-pointer whitespace-nowrap">
                            <input
                                className="mr-1 cursor-pointer"
                                type="radio"
                                value={name}
                                checked={filter === name}
                                onChange={(e) => setFilter(e.target.value)}
                            />
                            {name}
                        </label>
                    ))}
                </div>
            </AnimateHeight>
            <div className="my-8 md:my-10 lg:my-14 border-b border-primary/5 dark:border-dividerDark"></div>
            <div>
                {content.length ? (
                    content.map((post) => {
                        const tags = Object.keys(post.tags);
                        return (
                            <div className="mb-10" key={post.id}>
                                <Topic {...post} tags={tags} link={`/blog/${tags[0]}/${post.id}`} />
                            </div>
                        );
                    })
                ) : (
                    <div className="mb-10">'No results ...'</div>
                )}
            </div>
            <Button
                className="w-full"
                onClick={() => {
                    Router.push(
                        `/blog/?page=${router.query.page ? Number(router.query.page) + 1 : 2}`,
                        undefined,
                        {scroll: false},
                    );
                }}
            >
                Load more
            </Button>
        </div>
    );
};

Blog.propTypes = {};

export async function getServerSideProps({query: {page = 1}}) {
    const categoriesColl = await getDocs(collection(db, 'categories'));
    const categories = categoriesColl.docs.map((item) => item.data().name);
    const data = await getDocs(query(collection(db, 'posts'), limit(2 * page)));
    const posts = data.docs.map((doc) => ({id: doc.id, ...doc.data()}));

    return {
        props: {
            posts,
            categories,
        },
    };
}

export default Blog;
