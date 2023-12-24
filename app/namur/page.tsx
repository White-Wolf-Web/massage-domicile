import styles from "@/app/page.module.css";
import { MetadataNamur } from "@/components/metadata/MetadataNamur";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Massage à domicile – Namur & alentours",
	description: 'Massages à domicile à Namur & alentours. Voyage des Sens, Massage Anti-Stress, Anti-Cellulite, Douceur Dorsale, Toucher Shiatsu"',
	alternates: {
		canonical: "https://massage-domicile.com/namur"
	},
	openGraph: {
		title: "Massage à domicile dans la province de Namur",
		description: "Vous désirez recevoir un massage relaxant chez vous, nous nous déplaçons dans la province de Namur. ",
		url: "https://massage-domicile.com/namur",
		siteName: "Massage à domicile sur Namur",
		images: [
			{
				url: "https://scontent.fbru5-1.fna.fbcdn.net/v/t39.30808-6/302285048_520328883430641_3223806519242256093_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=783fdb&_nc_ohc=siONhKajSboAX8L1FR4&_nc_ht=scontent.fbru5-1.fna&oh=00_AfA3SHOctjkC4saNnw9GbL3l6HpQs5lSxdp-1eh2E55TSw&oe=658C89CA",
				width: 800,
				height: 600,
				alt: "Avant et après avoir recu un massage",
			},
		],
		locale: "fr-fr",
		type: "website",
	},
};

export default function Namur() {
	return (
		<>
			<main className={styles.main}>
				<div className={styles.description} aria-labelledby="main-heading">
					<h1 id="main-heading">Votre Massage à Domicile Namur</h1>
					<section>
						<div className={styles.serviceContainer} aria-labelledby="massage-voyage-sens-namur-heading">
							<h2 id="massage-voyage-sens-namur-heading">Massage &apos;Voyage des Sens&apos;</h2>
						</div>
						<p>
							Notre massage &apos;Voyage des Sens&apos; est une expérience transcendantale, conçue pour éveiller et ravir vos sens. Chaque geste est une invitation à un voyage intérieur
							de détente et de bien-être. Plongez dans un monde de relaxation où chaque toucher est un pas vers la paix intérieure et la sérénité, dans l&apos;ambiance unique de Namur.
						</p>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-anti-stress-namur-heading">
								<h2 id="massage-anti-stress-namur-heading">Massage &apos;Anti-Stress&apos;</h2>
							</div>
							<p>
								Le massage &apos;Anti-Stress&apos; est une réponse idéale à la tension et au stress de la vie moderne. Dans notre espace de bien-être, chaque technique utilisée vise à
								relâcher la pression, revitaliser l&apos;esprit et restaurer l&apos;harmonie. Offrez-vous ce moment de tranquillité, une pause bien méritée pour reconnecter avec votre
								sérénité intérieure.
							</p>
						</div>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-anti-cellulite-namur-heading">
								<h2 id="massage-anti-cellulite-namur-heading">Massage &apos;Anti-Cellulite&apos;</h2>
							</div>
							<p>
								Découvrez notre massage &apos;Anti-Cellulite&apos;, un soin ciblé pour améliorer l&apos;apparence de votre peau. Ce massage combine des techniques spécifiques pour
								raffermir et lisser la peau, tout en offrant un moment de détente profonde. C&apos;est l&apos;occasion parfaite de prendre soin de soi dans un cadre paisible et
								régénérant.
							</p>
						</div>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-douceur-dorsale-namur-heading">
								<h2 id="massage-douceur-dorsale-namur-heading">&apos;Douceur Dorsale&apos;</h2>
							</div>
							<p>
								Notre massage &apos;Douceur Dorsale&apos; offre une échappée vers la détente et le soulagement des tensions dorsales. Chaque mouvement est conçu pour apporter une
								relaxation profonde et un confort durable, dans un environnement propice à la détente. Profitez d&apos;un soin personnalisé, une véritable pause bien-être pour votre
								dos.
							</p>
						</div>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-shiatsu-namur-heading">
								<h2 id="massage-shiatsu-namur-heading">&apos;Toucher Shiatsu&apos;</h2>
							</div>
							<p>
								Notre massage &apos;Toucher Shiatsu&apos; est une expérience holistique unique. Basé sur les principes ancestraux de la médecine orientale, ce massage favorise
								l&apos;équilibre énergétique et procure un bien-être global. Dans notre havre de paix, laissez-vous transporter par cette pratique thérapeutique profonde pour une
								harmonie parfaite entre corps et esprit.
							</p>
						</div>
						<div className={styles.travel}>
							<h2>Redécouvrez le bien-être avec nos massages à Namur</h2>
							<p>
								Un voyage relaxant de 1h30 dans notre institut est proposé à 99€, tandis qu&apos;une session de 2 heures est à 129€, pour une détente prolongée. Pour ceux qui préfèrent
								bénéficier de ces soins à domicile, un supplément de 30€ est appliqué, ce qui inclut les frais de déplacement, le carburant, parfois le coût du parking, et
								l&apos;installation nécessaire pour créer un havre de paix chez vous.
							</p>
						</div>
					</section>
				</div>

				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataNamur) }} />
			</main>
		</>
	);
}
