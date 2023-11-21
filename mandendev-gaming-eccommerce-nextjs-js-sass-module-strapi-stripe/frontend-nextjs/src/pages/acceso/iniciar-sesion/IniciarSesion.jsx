import Link from 'next/link';
import { AccesoLayout } from '@/layouts';
import { FormularioInicioSesion } from '@/components/Autenticacion';
import styles from './IniciarSesion.module.scss';

export default function IniciarSesionPage() {
	return (
		<>
			<AccesoLayout>
				<div className={styles.iniciarSesion}>
					<h3>Iniciar Sesion</h3>

					{/* FORMULARIO LOGIN */}
					<FormularioInicioSesion />
					<div className={styles.actions}>
						<Link href="/acceso/registro">
							¿No tienes una cuenta?
						</Link>
					</div>
				</div>
			</AccesoLayout>
		</>
	);
}
