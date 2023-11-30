import styles from './Gallery.module.scss';
import { useState } from 'react';
import { Image } from 'semantic-ui-react';
import { map } from 'lodash';
import { FullModal } from '../../../Shared';
import Slider from 'react-slick';

export function Gallery(props) {
	const { screenshots } = props;
	const [show, setShow] = useState(false);

	const onOpenClose = () => setShow(prevState => !prevState);

	const screenshotsClone = [...screenshots];
	const princiaplImage = screenshotsClone.shift();

	const settings = {
		dots: true,
		dotsClass: styles.dots,
		infinite: true,
		slidersToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		customPaging: function (index) {
			return <Image src={screenshots[index].attributes.url} />;
		},
	};

	return (
		<>
			<div className={styles.gallery}>
				<div className={styles.principal}>
					<Image
						src={princiaplImage.attributes.url}
						onClick={onOpenClose}
					/>
				</div>

				<div className={styles.grid}>
					{map(screenshotsClone, screenshots => (
						<div key={screenshots.id}>
							<Image
								src={screenshots.attributes.url}
								onClick={onOpenClose}
							/>
						</div>
					))}
				</div>
			</div>

			<FullModal show={show} onClose={onOpenClose}>
				<div className={styles.carruselContainer}>
					<Slider {...settings}>
						{map(screenshots, screenshot => (
							<div key={screenshot.id}>
								<Image
									src={
										screenshot
											.attributes
											.url
									}
								/>
							</div>
						))}
					</Slider>
				</div>
			</FullModal>
		</>
	);
}
