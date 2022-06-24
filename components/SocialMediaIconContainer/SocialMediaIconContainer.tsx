import {ReactElement} from 'react';
import styles from './SocialMediaIconContainer.module.scss';
import socialMediaAccounts from '../../content/social_media_accounts.json';
import {SocialMediaAccount} from '../../types';
import clsx from 'clsx';


export default function SocialMediaIconContainer(): ReactElement {
	const onSocialIconClick = (socialMediaHref: string) => {
		window.location.href = socialMediaHref;
	};

	return (
		<div className={styles.container}>
			{socialMediaAccounts.map((account: SocialMediaAccount) => (
				<img
					key={account.name}
					alt={account.image_alt}
					src={account.image_src}
					className={clsx({
						[styles.invertColor]:
						account.name === 'instagram'
						|| account.name === 'tiktok'
						|| account.name === 'youtube'
					})}
					onClick={() => onSocialIconClick(account.account_url)}
				/>
			))}
		</div>
	);
}
