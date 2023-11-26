import styles from './Footer.module.scss';
import Link from 'next/link';
import { Container, Image, Button } from 'semantic-ui-react';

export function Footer() {
	return (
		<div className={styles.footer}>
			<Container>
				<div className={styles.columns}>
					<div>
						<Link href="/">
							<Image
								src="images/logo.png"
								alt="Mandendev Gaming"
							/>
						</Link>
					</div>

					<div>
						<ul>
							<Link href="#">Terminos y condiciones</Link>
							<Link href="#">Politica de privacidad</Link>
							<Link href="#">Contacto</Link>
							<Link href="#">Faqs</Link>
						</ul>
					</div>

					<div className={styles.social}>
						<Button
							as="a"
							href="#"
							circular
							color="facebook"
							icon="facebook"
						/>
						<Button
							as="a"
							href="#"
							circular
							color="twitter"
							icon="twitter"
						/>
						<Button
							as="a"
							href="#"
							circular
							color="instagram"
							icon="instagram"
						/>
						<Button
							as="a"
							href="#"
							circular
							color="youtube"
							icon="youtube"
						/>
					</div>
				</div>
				<div>
					<span className={styles.copyright}>
						Copiright © 2023 Gaming - Todos los derechos
						reservados
					</span>
				</div>
			</Container>
		</div>
	);
}
