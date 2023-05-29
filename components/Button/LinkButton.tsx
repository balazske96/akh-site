import styles from './LinkButton.module.scss';
import clsx from 'clsx';
import { HTMLProps } from 'react';

interface LinkButtonProps extends HTMLProps<HTMLAnchorElement> {
	color?: 'black' | 'white';
}

export default function LinkButton({
	color = 'white',
	...rest
}: LinkButtonProps) {
	const className = clsx({
		[rest.className as string]: !!rest.className,
		[styles.container]: true,
		[styles.black]: color === 'black',
		[styles.white]: color === 'white',
	});

	return (
		<a {...rest} className={className} rel="noreferrer">
			{rest.children}
		</a>
	);
}
