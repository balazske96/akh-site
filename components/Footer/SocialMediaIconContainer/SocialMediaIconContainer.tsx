import { ReactElement } from 'react';
import styles from './SocialMediaIconContainer.module.scss';
import socialMediaAccounts from '../../../content/social_media_accounts.json';
import { SocialMediaAccount } from '../../../types';
import clsx from 'clsx';
import Link from 'next/link';

export default function SocialMediaIconContainer(): ReactElement {
	return (
		<div className={styles.container}>
			{socialMediaAccounts.map((account: SocialMediaAccount) => (
				<Link
					key={account.name}
					href={account.account_url}
					target="_blank"
				>
					<img
						key={account.name}
						alt={account.image_alt}
						src={account.image_src}
						className={clsx({
							[styles.invertColor]:
								account.name === 'instagram' ||
								account.name === 'tiktok' ||
								account.name === 'youtube',
						})}
					/>
				</Link>
			))}
		</div>
	);
}
