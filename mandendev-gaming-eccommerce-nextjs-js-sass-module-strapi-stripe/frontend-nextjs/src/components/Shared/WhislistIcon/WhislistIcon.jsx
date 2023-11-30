import styles from './WhislistIcon.module.scss';
import { Icon } from 'semantic-ui-react';
import classNames from 'classnames';

export function WhislistIcon(props) {
	const { gameId, className } = props;
	return (
		<Icon
			name="heart"
			className={classNames(styles.whislistIcon, { [className]: className })}
		/>
	);
}
