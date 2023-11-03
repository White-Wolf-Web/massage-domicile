import { FacebookButton, PinterestButton, InstagramButton  } from '../socialNetwork/SocialButtons';
import styles from "./SocialButton.module.css";

export default function SocialNetwork () {
    return (
<div className={styles.socialNetworkSection}>

<FacebookButton /> <InstagramButton /> <PinterestButton /> 
</div>)
}