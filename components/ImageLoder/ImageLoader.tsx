import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import styles from './ImageLoader.module.scss';

export interface ImageLoaderProps {
	percentage: number;
}

export default function ImageLoader({ percentage }: ImageLoaderProps) {
	return (
		<div className={styles.imageLoaderContainer}>
			<CircularProgressbar
				value={percentage}
				background
				backgroundPadding={6}
				text={`${Math.floor(percentage)}%`}
				styles={buildStyles({
					textColor: '#d9d9d9',
					pathColor: '#d9d9d9',
					pathTransitionDuration: 0.2,
					backgroundColor: '#252525',
					trailColor: 'transparent',
				})}
			/>
		</div>
	);
}
