import styles from '../styles/NotFound.module.scss';
import React from 'react';

export default function NotFound() {

	React.useEffect(() => {
		window.location.href = '/';
	}, []);

	return (
		<div className={styles.container} />
	);
}