import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Introduction from '../components/Introduction';
import AnimatedSplash from '../components/AnimatedSplash';
import BlogList from '../components/BlogList';
import Contact from '../components/Contact';
import styles from '@/styles/Home.module.css';
import matter from 'gray-matter';

export default function Home({ latestPosts }) {
	return (
		<Layout>
			<Introduction />
			<AnimatedSplash />
			<BlogList allBlogs={latestPosts} />
			<Contact />
		</Layout>
	);
}

export async function getStaticProps() {
	// fetches all the post data from your published article folder
    const webpackContext = require.context('../posts', true, /\.\/.*\.md$/);
    // console.log('webpackContext', webpackContext.keys())

    // the list of file names contained inside the "posts" directory
    const keys = webpackContext.keys();

	// reverse the array of posts so the newest one is first
    const reverseKeys = keys.reverse();
    // console.log('keys', keys)

    const values = reverseKeys.map(webpackContext);
    // console.log('values', values)

    // getting the post data from the files contained in the "posts" folder
    const posts = reverseKeys.map((key, index) => {
        // dynamically creating the post slug from the file name
        const slug = key
            .replace(/^.*[\\\/]/, '')
            .split('.')
            .slice(0, -1)
            .join('.');

        // console.log('slug', slug)
        // getting the .md file value associated with the current file name
        const value = values[index];
        // console.log('value', value)

        // parsing the YAML metadata and markdown body contained in the .md file
        const document = matter(value.default);
        // console.log('document', document.data)

        return {
            frontmatter: document.data,
            markdownBody: document.content,
            slug,
        };
    });
    // console.log('posts', posts);

	// cut the list of posts down to the first 4 in the array e.g. the latest 4 
    const topPosts = posts.slice(0, 4);
    // console.log('topPosts', topPosts)

	// export the data for the 4 latest posts
    return {
        props: {
            latestPosts: topPosts,
        },
    };
}