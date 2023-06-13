import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Introduction from '../components/Introduction';
import AnimatedSplash from '../components/AnimatedSplash';
import BlogList from '../components/BlogList';
import Contact from '../components/Contact';
import styles from '@/styles/Home.module.css';

export default function Home({ props }) {
	return (
		<Layout>
			<Introduction />
			<AnimatedSplash />
			<Contact />
		</Layout>
	);
}
