import Image from 'next/image';
import Link from 'next/link';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import styles from '../../styles/Blog.module.css';
import { globSync } from 'glob';
import Layout from '../../components/Layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function reformatDate(fullDate) {
	const date = new Date(fullDate);
	return date.toDateString().slice(4);
}

export default function BlogTemplate({ frontmatter, markdownBody }) {
	return (
		<Layout title={`${frontmatter.title} | StevenGodson.com`} description={frontmatter.intro} keywords={frontmatter.keywords}>
			<Row className={styles.blog}>
				<Col className={styles.back} xs={12}>
					<Link className={styles.back__link} href='/blog'>
						Back to List
					</Link>
				</Col>
				<Col md={4} className={styles.blog__hero}>
					<Image
						width='300'
						height='300'
						src={frontmatter.hero_image}
						alt={`blog_hero_${frontmatter.title}`}
						className={styles.blog__heroImage}
					/>
				</Col>
				<Col md={8} className={styles.blog__info}>
					<h1>{frontmatter.title}</h1>
					<p>First posted: {reformatDate(frontmatter.date)}</p>
					<p>Read time: {frontmatter.read} minutes</p>
					<p>Written By: {frontmatter.author}</p>
				</Col>
				<Col className={styles.blog__body}>
					<ReactMarkdown>{markdownBody}</ReactMarkdown>
				</Col>
				<Col className={styles.back} xs={12}>
					<Link className={styles.back__link} href='/blog'>
						Back to List
					</Link>
				</Col>
			</Row>
		</Layout>
	);
}

export async function getStaticProps(context) {
	const { slug } = context.params;
	const content = await import(`../../posts/${slug}.md`);
	const data = matter(content.default);
	return {
		props: {
			frontmatter: data.data,
			markdownBody: data.content,
		},
	};
}

export async function getStaticPaths() {
	const blogs = globSync(`posts/*.md`);
	const blogSlugs = blogs.map((file) =>
		file.split('/')[1].replace(/ /g, '-').slice(0, -3).trim(),
	);
	// creating a path for each of the `slug` parameter
	const paths = blogSlugs.map((slug) => {
		return { params: { slug: slug } };
	});
	return {
		paths,
		fallback: false,
	};
}
