import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TypeAnimation } from 'react-type-animation';
import styles from '../styles/AnimatedSplash.module.css';

function Code() {
	return (
		<Row className={styles.skills}>
			<Col className={styles.skills_group} md={6}>
				<h2>Architect</h2>
				<TypeAnimation
					cursor={false}
					sequence={[
						'ITIL v3 Expert',
						1000,
						'ITIL v4 Managing Professional',
						2000,
						'Certified Agile Service Manager',
						2000,
						'Certified Agile Process Owner',
						2000,
						'TOGAF 9.1',
						2000,
						'COBIT 5',
						2000,
						'ISO 20000 2011+',
						2000,
						'IT4IT',
						2000,
						'Agile / Scrum',
						2000,
					]}
					wrapper='p'
					repeat={Infinity}
					className={styles.skills_animation}
				/>
			</Col>
			<Col className={styles.skills_group} md={6}>
				<h2>Developer</h2>
				<TypeAnimation
					cursor={false}
					sequence={[
						'HTML5',
						1500,
						'CSS3+ / SASS',
						2000,
						'Bootstrap 4+ / TailwindCSS',
						2000,
						'JavaScript / TypeScript',
						2000,
						'NextJS / React / Vue',
						2000,
						'PHP8+ / WorkPress / Laravel',
						2000,
						'NodeJS / Express',
						2000,
						'MongoDB / MySQL / PostgreSQL',
						2000,
						'Java 8+',
						2000,
						'Firebase / GCP',
						2000,
						'Azure / AWS',
						2000,
						'Heroku / Vercel / Netlify',
						2000,
						'React Native',
						2000,
						'Jest / Cypress / Mocha / Chai',
						2000,
						'Git / GitHub / GitLab / BitBucket',
						2000,
					]}
					wrapper='p'
					repeat={Infinity}
					className={styles.skills_animation}
				/>
			</Col>
		</Row>
	);
}

export default Code;
