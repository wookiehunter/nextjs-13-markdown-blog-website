import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Head from 'next/head';
import Navigation from './Navigation';
import Banner from './Banner';
import { useRouter } from 'next/router';
import { initGA, logPageView } from 'utils/analytics';
import { GoogleFonts } from 'nextjs-google-fonts/GoogleFonts';

function Layout({ title, keywords, description, children, URL }) {
	const router = useRouter();
	const [isGALoaded, setIsGALoaded] = useState();

	useEffect(() => {
		if (typeof window === undefined) return;

		const handleRouteChange = (url) => {
			logPageView(url);
		};

		router.events.on('routeChangeComplete', handleRouteChange);

		return () => {
			if (typeof window === undefined) return;
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
				<link rel='icon' href='./rocket.png' type='image/svg' />

				{GoogleFonts()}
				<link
					href='https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Wallpoet&display=swap'
					rel='stylesheet'
				></link>
			</Head>
			<Container>
				<Navigation URL={URL} />
				{router.pathname === '/'}
				{children}
				<Banner />
			</Container>
		</>
	);
}

export default Layout;

Layout.defaultProps = {
	title: '',
	description:
		'',
	keywords:
		'',
};