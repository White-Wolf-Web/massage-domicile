import Image from "next/image"
import MassageADomicile from "@/public/femme-masse-a-domicile-souriante.webp";
import styles from "@/app/page.module.css"

export default function Header() {
  return (
    <Image
						src={MassageADomicile}
						alt="Femme souriante recevant un massage à domicile"
						placeholder="blur"
						quality={100}
						sizes="100vw"
						className={styles.imgBanniere}
						title="Ce sourire en dit long sur le massage relaxant qu'elle reçoit"
					/>
  )
}
