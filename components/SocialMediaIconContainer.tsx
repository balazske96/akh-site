import { ReactElement } from "react";
import styles from './SocialMediaIconContainer.module.scss';

enum SocialMedia {
    Facebook = 'facebook',
    Instagram = 'instagram',
    Twitter = 'facebook',
    Youtube = 'youtube'
}


export default function SocialMediaIconContainer(): ReactElement {

    const onSocialIconClick = (socialMediaName: SocialMedia) => {
        let newLocation: string;
        const urlPath = 'akiralyhalott'
        switch(socialMediaName) {
           
            case SocialMedia.Instagram:
                newLocation = `https://instagram.com/${urlPath}`
                break;
            case SocialMedia.Twitter:
                newLocation = `https://twitter.com/${urlPath}`
                break;
            case SocialMedia.Facebook:
                newLocation = `https://facebook.com/${urlPath}`
                break;
            case SocialMedia.Youtube:
                newLocation = `https://youtube.com/c/${urlPath}`
                break;
            default:
                newLocation = `https://facebook.com/${urlPath}`
                break;
        }
        window.location.href = newLocation;
    }



    return (
        <div className={styles.container}>
            <img className={styles.twitterIcon} src="/social/twitter.png" onClick={()=>onSocialIconClick(SocialMedia.Twitter)}/>
            <img className={styles.facebookIcon} src="/social/facebook.png" onClick={()=>onSocialIconClick(SocialMedia.Facebook)}/>
            <img className={styles.instagramIcon} src="/social/instagram.png" onClick={()=>onSocialIconClick(SocialMedia.Instagram)}/>
            <img className={styles.youtubeIcon} src="/social/youtube.png" onClick={()=>onSocialIconClick(SocialMedia.Youtube)}/>
        </div>
    )
}