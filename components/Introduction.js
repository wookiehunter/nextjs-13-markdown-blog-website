import React from 'react';

import { TypeAnimation } from 'react-type-animation';

import styles from '../styles/Intro.module.css';

function Introduction() {
	return (
		<section className={styles.intro}>
			<TypeAnimation
				cursor={false}
				sequence={[
					'Welcome!',
					1000,
					'Bienvenidos!',
					2000,
					'Bienvenue!',
					2000,
					'Welkom!',
					2000,
					'Willkommen!',
					2000,
					'Benvenuti!',
					2000,
					'Velkommen!',
					2000,
					'Bem-vinda!',
					2000,
					'Croeso!',
					2000,
					'Fáilte!',
					2000,
					'Welcome!',
					2000,
				]}
				wrapper='h1'
				className={styles.intro_title}
			/>
		</section>
	);
}

export default Introduction;
