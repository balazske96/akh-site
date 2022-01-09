import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import React, { ReactElement } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import SocialMediaIconContainer from '../components/SocialMediaIconContainer';

export default function Home(): ReactElement {

	const windowSize = useWindowSize();
	const [logoSize, setLogoSize] = React.useState<number>(300);

	const onButtonClick = () => {
		window.location.href = 'https://shop.akiralyhalott.hu';
	};

	const alignLogoPictureToWindowWidth = () => {

		if (windowSize.width! < 643) {
			setLogoSize(200);
		} else {
			setLogoSize(300);
		}
	};

	React.useEffect(alignLogoPictureToWindowWidth, [windowSize]);

	return (
		<div className={styles.container}>
			<div>
				<Image src="/logo.png" alt="Logo" width={logoSize} height={logoSize} />
			</div>
			<p>Az oldal fejlesztés alatt áll...</p>
			<p>Addig ismerkedj meg velünk az alábbi felületeken</p>
			<SocialMediaIconContainer />
			<p>vagy nézz szét a webshopunkban!</p>
			<button onClick={onButtonClick}>Webshop</button>
		</div>
	);
}

