import Link from 'next/link';
import { AccesoLayout } from '@/layouts';
import { FormularioRegistro } from '@/components/Autenticacion';
import styles from './registro.module.scss';

export default function RegistroPage() {
	return (
		<>
			<AccesoLayout>
				<div className={styles.registro}>
					<h3>Crear Cuenta</h3>
					{/* FORM */}
					<FormularioRegistro />
					<div className={styles.actions}>
						<Link href="/acceso/iniciar-sesion">Atras</Link>
					</div>
				</div>
			</AccesoLayout>
		</>
	);
}
