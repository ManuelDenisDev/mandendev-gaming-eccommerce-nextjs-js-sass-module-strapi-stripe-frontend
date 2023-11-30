import { BasicLayout } from '../../layouts';
import { Home } from './../../components/Home';
import { Separator, BarTrust, BannerAd } from '../../components/Shared';
import { Container } from 'semantic-ui-react';

const platformsId = {
	playstation: 1,
	xbox: 3,
	nintendo: 4,
	pc: 2,
};

export default function HomePage() {
	return (
		<>
			<BasicLayout>
				<Home.BannerLastGamePublished />
				<Separator height={100} />
				<Container>
					<Home.LatestGames title="Ultimos lanzamientos" />
				</Container>
				<Separator height={100} />
				<BarTrust />
				<Separator height={100} />
				<Container>
					<Home.LatestGames
						title="PlayStation"
						limit={3}
						platformId={platformsId.playstation}
					/>
				</Container>
				<Separator height={100} />
				<BannerAd
					title="Registrate y obten los mejores precios"
					subtitle="¡Compàra con otros juegos y eliges el tuyo!"
					btnTitle="Entrar ahora"
					btnLink="/account"
					image="/images/img01.png"
				/>
				<Separator height={100} />
				<Container>
					<Home.LatestGames
						title="Xbox"
						limit={3}
						platformId={platformsId.xbox}
					/>
				</Container>
				<Separator height={100} />
			</BasicLayout>
		</>
	);
}
