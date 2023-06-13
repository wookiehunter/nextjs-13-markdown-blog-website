import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSpring, animated } from '@react-spring/web';
import styles from '../styles/Layout.module.css';
import {
	Nav,
	Navbar,
	NavItem,
	NavLink,
	NavDropdown,
	Container,
	Dropdown,
} from 'react-bootstrap';

export default function Header({ URL }) {
	const router = useRouter();

	const nav1 = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		// loop: true,
		delay: 1000,
	});
	const nav2 = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		// loop: true,
		delay: 1500,
	});

	return (
		<Navbar className={styles.bg}>
			<Nav>
				<Link
					href='/'
					className={router.pathname == '/' ? 'active' : 'inactive'}
					aria-label='Home'
				>
					<animated.div style={nav1}>Home</animated.div>
				</Link>

				<Link
					href='/blog'
					aria-label='Blog'
					className={router.pathname == '/blog' ? 'active' : 'inactive'}
				>
					<animated.div style={nav2}>Blog</animated.div>
				</Link>
			</Nav>
		</Navbar>
	);
}
