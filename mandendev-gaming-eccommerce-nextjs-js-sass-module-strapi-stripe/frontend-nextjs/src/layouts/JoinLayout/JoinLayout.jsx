import Link from 'next/link';
import { useAuth } from '../../hooks';
import { useRouter } from 'next/router';
import { Icon, Image } from 'semantic-ui-react';
import styles from './JoinLayout.module.scss';

export function JoinLayout(props) {
	const { children } = props;
	const { user } = useAuth();
	const router = useRouter();

	if (user) {
		router.push('/');
		return null;
	}

	return (
		<div className={styles.contenedor}>
			<div className={styles.superiorBarra}>
				<Link href="/">
					<Image src="/images/logo.png" alt="MANDENDEV GAMING" />
				</Link>
				<Link href="/">
					<Icon name="close" />
				</Link>
			</div>
			<div className={styles.bloqueIzquierda}>{children}</div>
			<div className={styles.bloqueDerecha} />
		</div>
	);
}
