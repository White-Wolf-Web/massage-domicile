import styles from "./SocialButton.module.css";
import Link from "next/link";

export function FacebookButton() {
	return (
		<Link href="https://facebook.com" className={styles.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
			Facebook
		</Link>
	);
}

export function PinterestButton() {
	return (
		<Link href="https://pinterest.com" className={styles.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
			Pinterest
		</Link>
	);
}

export function InstagramButton() {
	return (
		<Link href="https://instagram.com" className={styles.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
			Instagram
		</Link>
	);
}
