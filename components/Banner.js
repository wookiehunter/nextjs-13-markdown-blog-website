import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from '../styles/Banner.module.css';

function Banner() {

	const [props, api] = useSpring(
		() => ({
			from: { opacity: 0 },
			to: { opacity: 1 },
			loop: false,
			delay: 3000,
		}),
		[],
	);

	return (
		<animated.div style={props} className={styles.bannerContainer}>
			<h1>YOUR NAME / WEBSITE</h1>
		</animated.div>
	);
}

export default Banner;
