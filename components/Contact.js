import React from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
	FaTwitter,
	FaGithub,
	FaInstagram,
	FaEnvelope,
	FaWhatsappSquare,
	FaLinkedin,
} from 'react-icons/fa';
import styles from '../styles/Contact.module.css';

function Contact() {
	return (
		<Row className={styles.contacts}>
			<Col xs={4} className={styles.contact}>
				<Link
					href=''
					className={styles.icon}
				>
					<FaTwitter />
				</Link>
			</Col>
			<Col xs={4} className={styles.contact}>
				<Link
					href=''
					className={styles.icon}
				>
					<FaGithub />
				</Link>
			</Col>
			<Col xs={4} className={styles.contact}>
				<Link
					href=''
					className={styles.icon}
				>
					<FaLinkedin />
				</Link>
			</Col>
		</Row>
	);
}

export default Contact;
