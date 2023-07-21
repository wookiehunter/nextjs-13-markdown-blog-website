import React from 'react';
import Link from 'next/link';
import matter from 'gray-matter';
import Layout from '../../../components/Layout';
import BlogList from '../../../components/BlogList';
import BlogFilters from '../../../components/BlogFiltersCategory';
import styles from '../../../styles/Blog.module.css';

function Categories({blogData}) {

	return (
		<Layout>
			<h1 className={styles.heading}>Tales from the deep...</h1>

			<hr />
			<h5 className={styles.heading}>Filter by Category or <Link href="../../blog">Back to Full List</Link></h5>
			<BlogFilters />
			<hr />

			<BlogList allBlogs={blogData} />
		</Layout>
	);
}

export default Categories;

export async function getServerSideProps(context) {

	const { req } = context;
	const passedURL = req.url;
	let filterName = passedURL.split('=');
	filterName = filterName[1];

	const webpackContext = require.context('../../../posts', true, /\.\/.*\.md$/);
	const keys = webpackContext.keys();
	const reverseKeys = keys.reverse();

	const values = reverseKeys.map(webpackContext);

	const posts = reverseKeys.map((key, index) => {
		const slug = key
			.replace(/^.*[\\\/]/, '')
			.split('.')
			.slice(0, -1)
			.join('.');

		const value = values[index];
		const document = matter(value.default);

		return {
			frontmatter: document.data,
			markdownBody: document.content,
			slug,
		};
	});

	const filteredPosts = (posts, filterName) => {
		const data = posts.filter((post) => post.frontmatter.category === filterName);
		return data;
	};

	let data = filteredPosts(posts, filterName);

	return {
		props: {
			blogData: data,
		},
	};
}
