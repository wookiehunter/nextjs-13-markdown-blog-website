import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import styles from '../styles/Blog.module.css';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function truncateSummary(content) {
	return content.slice(0, 200).trimEnd();
}

function reformatDate(fullDate) {
	const date = new Date(fullDate);
	return date.toDateString().slice(4);
}

const BlogList = ({ allBlogs }) => {
	// console.log("allBlogs", allBlogs)
	return (
		<Row>
			{allBlogs &&
				allBlogs.map((post) => (
					<Col md={6} lg={4} xl={3} key={post.slug} className={styles.blog}>
						<Link
							href={{ pathname: `/blog/${post.slug}` }}
							className={styles.blog__link}
						>
							<Card className={styles.blog__card}>
								<div>
									<Image
										width={300}
										height={300}
										src={post.frontmatter.hero_image}
										alt={post.frontmatter.hero_image}
										className={styles.image}
									/>
								</div>
								{post.frontmatter.tag && (
									<div className={`tag_${post.frontmatter.category}`}>
										{post.frontmatter.category}
									</div>
								)}
								<div className={styles.blog__info}>
									<h4>{post.frontmatter.title}</h4>
									<p>{reformatDate(post.frontmatter.date)}</p>
									<p>Read time: {post.frontmatter.read} minutes</p>
									<p>{post.frontmatter.intro}</p>
								</div>
							</Card>
						</Link>
					</Col>
				))}
		</Row>
	);
};

export default BlogList;
