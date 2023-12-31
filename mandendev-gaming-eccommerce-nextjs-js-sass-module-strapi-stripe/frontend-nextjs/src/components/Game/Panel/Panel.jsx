import styles from './Panel.module.scss';
import { Button, Container, Icon, Image } from 'semantic-ui-react';
import { fn } from '../../../utils';
import { WhislistIcon } from '../../Shared';

export function Panel(props) {
	console.log(props);
	const { gameId, game } = props;

	const platform = game.platform.data;
	const buyPrice = fn.calcDiscounterPrice(game.price, game.discount);

	return (
		<Container className={styles.panel}>
			<div className={styles.imgContainer}>
				<Image src={game.cover.data.attributes.url} />
			</div>
			<div className={styles.actionsContainer}>
				<div>
					<h2>{game.title}</h2>
					<div className={styles.moreInfo}>
						<span>
							<Image
								src={
									platform.attributes.icon
										.data.attributes.url
								}
							/>
							{platform.attributes.title}
						</span>
						<span>
							<Icon name="check" />
							En stock
						</span>
					</div>

					<div className={styles.price}>
						{game.discount > 0 && (
							<>
								<span
									className={
										styles.originalPrice
									}>
									<Icon name="tag" />
									{game.price}
								</span>
								<span className={styles.discount}>
									-{game.discount}%
								</span>
							</>
						)}
						<span className={styles.price}>{buyPrice}</span>
					</div>
					<Button primary fluid>
						Comprar ahora
					</Button>
					<WhislistIcon gameId={gameId} className={styles.heart} />
				</div>
			</div>
		</Container>
	);
}
