import styles from './AccesoLayout.module.scss';

export function AccesoLayout(props) {
	const { children } = props;
	return (
		<div className={styles.contenedor}>
			<div className={styles.superiorBarra}></div>
			<div>{children}</div>;
		</div>
	);
}
