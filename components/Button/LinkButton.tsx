import styles from './LinkButton.module.scss';
import clsx from 'clsx';

interface LinkButtonProps {
	href: string,
	label: string,
	newTab?: boolean
	color?: 'black' | 'white'
}

export default function LinkButton({href, label, newTab = false, color = 'white'}: LinkButtonProps) {
	const className = clsx({
		[styles.container]: true,
		[styles.black]: color === 'black',
		[styles.white]: color === 'white'
	});

	return (
		<a
			className={className}
			href={href}
			target={newTab ? '_blank' : '_self'}
			rel="noreferrer"
		>
			{label}
		</a>
	);
}