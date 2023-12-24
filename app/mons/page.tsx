import styles from "@/app/page.module.css";
import { MetadataMons } from "@/components/metadata/MetadataMons";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Massage à domicile – Mons & alentours",
	description: 'Massages à domicile à Mons & alentours. Voyage des Sens, Massage Anti-Stress, Anti-Cellulite, Douceur Dorsale, Toucher Shiatsu"',
	alternates: {
		canonical: "https://massage-domicile.com/mons"
	},
	openGraph: {
		title: "Massage à domicile dans la province de Mons",
		description: "Vous désirez recevoir un massage relaxant chez vous, nous nous déplaçons dans la province de Mons. ",
		url: "https://massage-domicile.com/mons",
		siteName: "Massage à domicile sur Mons",
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

export default function Mons() {
	return (
		<>
			<main className={styles.main}>
				<div className={styles.description} aria-labelledby="main-heading">
					<h1 id="main-heading">Votre Massage à Domicile Mons</h1>
					<section>
						<div className={styles.serviceContainer} aria-labelledby="massage-voyage-sens-mons-heading">
							<h2 id="massage-voyage-sens-mons-heading">Massage &apos;Voyage des Sens&apos;</h2>
						</div>
						<p>
							Notre massage &apos;Voyage des Sens&apos; vous offre une évasion sensorielle inoubliable. Conçu pour harmoniser le corps et l&apos;esprit, ce massage est une invitation à
							la relaxation profonde. Profitez d&apos;un moment unique de bien-être dans un cadre tranquille, où chaque toucher est une promesse de sérénité et de détente totale.
						</p>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-anti-stress-mons-heading">
								<h2 id="massage-anti-stress-mons-heading">Massage &apos;Anti-Stress&apos;</h2>
							</div>
							<p>
								Échappez au stress de la vie quotidienne avec notre massage &apos;Anti-Stress&apos; chez vous dans la région de Mons. Ce soin est une bulle de détente et de bien-être,
								conçu pour apaiser le corps et l&apos;esprit. Chaque mouvement est une caresse vers la tranquillité, une échappée nécessaire pour retrouver harmonie et équilibre dans
								le rythme effréné du quotidien.
							</p>
						</div>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-anti-cellulite-mons-heading">
								<h2 id="massage-anti-cellulite-mons-heading">Massage &apos;Anti-Cellulite&apos;</h2>
							</div>
							<p>
								Notre massage &apos;Anti-Cellulite&apos; est une approche complète pour améliorer l&apos;aspect de la peau et favoriser le bien-être. Ce soin combine des techniques de
								massage efficaces pour tonifier et lisser la peau, offrant un moment de détente tout en prenant soin de votre silhouette. C&apos;est une occasion idéale de se
								chouchouter dans un environnement accueillant et apaisant.
							</p>
						</div>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-douceur-dorsale-mons-heading">
								<h2 id="massage-douceur-dorsale-mons-heading">&apos;Douceur Dorsale&apos;</h2>
							</div>
							<p>
								Découvrez notre massage &apos;Douceur Dorsale&apos;, un soin spécialement conçu pour apporter détente et soulagement au dos. Ce massage est une exploration détaillée
								des zones de tension, offrant une libération et une revitalisation complète. Profitez d&apos;un moment de calme et de bien-être, et laissez-vous transporter vers un
								état de détente absolue.
							</p>
						</div>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-shiatsu-mons-heading">
								<h2 id="massage-shiatsu-mons-heading">&apos;Toucher Shiatsu&apos;</h2>
							</div>
							<p>
								Notre &apos;Toucher Shiatsu&apos; vous invite à un voyage de bien-être et d&apos;harmonie. Ce massage, enraciné dans la tradition japonaise, est une pratique holistique
								visant à rééquilibrer le flux d&apos;énergie dans le corps. C&apos;est un moment de reconnexion et de relaxation profonde, une pause rafraîchissante et régénératrice
								dans un cadre serein. Le Japon s&apos;invite à Mons.
							</p>
						</div>
						<div className={styles.travel}>
							<h2>Vivez une expérience de massage unique à Mons</h2>
							<p>
								Offrez-vous un moment de détente de 1h30 pour 99€ ou de 2h pour 129€, dans l&apos;ambiance apaisante de notre centre. Pour une expérience de confort à domicile, nous
								vous accompagnons avec un coût supplémentaire de 30€, garantissant la prise en charge de nos déplacements, du carburant, des frais de stationnement potentiels, ainsi
								que de l&apos;installation et du démontage du matériel nécessaire.
							</p>
						</div>
					</section>
				</div>

				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataMons) }} />
			</main>
		</>
	);
}
