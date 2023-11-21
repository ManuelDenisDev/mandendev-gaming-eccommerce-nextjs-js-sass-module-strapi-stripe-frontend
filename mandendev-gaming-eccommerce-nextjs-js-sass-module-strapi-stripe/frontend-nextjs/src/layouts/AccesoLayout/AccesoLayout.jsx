import Link from 'next/link';
import { Icon, Image } from 'semantic-ui-react';
import styles from './AccesoLayout.module.scss';

export function AccesoLayout(props) {
	const { children } = props;
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
