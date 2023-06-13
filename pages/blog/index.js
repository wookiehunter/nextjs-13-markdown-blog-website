import React from 'react';
import matter from 'gray-matter';

import Layout from '../../components/Layout';
import BlogList from '../../components/BlogList';

import styles from '../../styles/Blog.module.css';

const Index = props => {
	// console.log('props', props.allBlogs)
	return (
		<Layout title="Blog | MY WEBS3ITE">
			<h1 className={styles.heading}>Tales from the deep...</h1>
			<BlogList allBlogs={props.allBlogs} />
		</Layout>
	);
}

export default Index;

export async function getStaticProps() {
	const webpackContext = require.context('../../posts', true, /\.\/.*\.md$/);
	// console.log('webpackContext', webpackContext.keys())

	// the list of file names contained
	// inside the "posts" directory
	const keys = webpackContext.keys();
	// this reverses the order of the posts to show the most recent first or alphabetically descending order
	const reverseKeys = keys.reverse();
	// console.log('keys', keys)
	const values = reverseKeys.map(webpackContext);
	// console.log('values', values)

	// getting the post data from the files contained
	// in the "posts" folder
	const posts = reverseKeys.map((key, index) => {
		// dynamically creating the post slug
		// from file name
		const slug = key
			.replace(/^.*[\\\/]/, '')
			.split('.')
			.slice(0, -1)
			.join('.');

			
		// console.log('slug', slug)
		// getting the .md file value associated
		// with the current file name
		const value = values[index];
		// console.log('value', value)
		// parsing the YAML metadata and markdown body
		// contained in the .md file
		const document = matter(value.default);
		// console.log('document', document.data)
		return {
			frontmatter: document.data,
			markdownBody: document.content,
			slug,
		};
	});

	// console.log('posts', posts)

	// const sortPosts = ((posts) => {
	// 	sortedPosts = posts.reverse();
	// 	return sortedPosts;
	// });

	return {
		props: {
			allBlogs: posts,
		},
	};
}
