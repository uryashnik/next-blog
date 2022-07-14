import {useSelector} from 'react-redux';
import {COLOR_ORANGE} from '../app/constants';
import Announce from '../components/announce';
import Link from 'next/link';
import Button from '../components/button';
import Pointer from '../components/icons/pointer';
import Category from '../components/category';
import {collection, getDocs, limit, query, where} from 'firebase/firestore';
import db from '../firebase';
import Social from '../components/social';

async function fetchCategoryDocs(name) {
    const documents = await getDocs(
        query(collection(db, 'posts'), where(`tags.${name}`, '==', true), limit(2)),
    );
    return postParser(documents.docs, name);
}

const postParser = (array, category) => {
    return {
        category,
        data: array.map((doc) => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
                link: `/blog/${category}/${doc.id}`,
                tags: Object.keys(data.tags),
            };
        }),
    };
};

export default function Home({posts, categories}) {
    const {theme, isXl} = useSelector(({theme, isXl}) => ({theme, isXl}));
    const isDark = theme === 'dark';

    return (
        <div>
            <div className="flex flex-col md:flex-row pb-9 md:pb-16 border-b border-primary border-opacity-10 dark:border-dividerDark">
                <div className="mb-8 md:mb-0 md:mr-14 lg:mr-24">
                    <div className="text-[30px] md:text-[36px] lg:text-[50px] mb-4 md:mb-12 xl:mb-20 leading-relaxed">
                        Sup! Here you can find a lot of interesting things about :{' '}
                        <span className="text-orange">
                            Database.&nbsp;<span className="animate-cursor">|</span>
                        </span>
                    </div>
                    <Social
                        className="bg-orange/10 hover:bg-orange/25 dark:bg-orange/5 dark:hover:bg-orange/20"
                        fill={COLOR_ORANGE}
                    />
                </div>
                <div className="shrink-0 w-full md:w-60 xl:w-80">
                    <div className="flex items-center justify-between pb-5 border-b border-dashed border-primary border-opacity-10 dark:border-dividerDark">
                        <div className="text-xl">Upcoming</div>
                        <Link href="/upcoming">
                            <a className="flex items-center text-orange cursor-pointer">
                                All&nbsp;
                                <Pointer fill={COLOR_ORANGE} />
                            </a>
                        </Link>
                    </div>
                    <Announce
                        date="8:00 p.m., 14.01"
                        text="An Interactive Guide to CSS Transitions"
                    />
                    <Announce
                        date="11:00 a.m., 19.01"
                        text="Introducing “Shadow Palette Generator”"
                    />
                </div>
            </div>
            <div className="py-6 mb-6 md:mb-12 md:py-14 border-b border-primary border-opacity-10 dark:border-dividerDark">
                {categories.map((category) => (
                    <Link href={`/blog/${category}`} key={category}>
                        <Button className="mr-2.5 my-2.5 lg:mr-4 last:mr-0 px-7 py-2">
                            {category}
                        </Button>
                    </Link>
                ))}
            </div>
            {Object.keys(posts).map((cat) => (
                <div
                    key={cat}
                    className="pb-12 mb-12 border-b border-primary border-opacity-10 dark:border-dividerDark last:pb-0 last:mb-0 last:border-0"
                >
                    <Category name={cat} topics={posts[cat]} />
                </div>
            ))}
        </div>
    );
}

export async function getStaticProps() {
    const posts = {};
    const tags = await getDocs(collection(db, 'categories'));
    const categories = tags.docs.map((tag) => tag.data().name);
    await Promise.all(categories.slice(0, 2).map((category) => fetchCategoryDocs(category))).then(
        (results) => {
            results.forEach((item) => (posts[item.category] = item.data));
        },
    );
    return {
        props: {posts, categories},
    };
}
