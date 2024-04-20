import styles from "@/app/page.module.css";
import { MetadataHalle } from "@/components/metadata/MetadataHalle";
import { Metadata } from "next";
import GoogleMap from "@/components/googleMap/GoogleMap";

export const metadata: Metadata = {
	title: "Massage à domicile – Halle & alentours",
	description: 'Massages à domicile à Halle & alentours. Voyage des Sens, Massage Anti-Stress, Anti-Cellulite, Douceur Dorsale, Toucher Shiatsu"',
	alternates: {
		canonical: "https://massage-domicile.com/halle"
	},
	openGraph: {
		title: "Massage à domicile dans la province de Hal",
		description: "Vous désirez recevoir un massage relaxant chez vous, nous nous déplaçons dans la province de Halle. ",
		url: "https://massage-domicile.com/halle",
		siteName: "Massage à domicile sur Halle",
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

export default function Halle() {
	return (
		<>
			<main className={styles.main}>
				<div className={styles.description} aria-labelledby="main-heading">
					<h1 id="main-heading">Votre Massage à Domicile Halle</h1>
					<section>
						<div className={styles.serviceContainer} aria-labelledby="massage-voyage-sens-hal-heading">
							<h2 id="massage-voyage-sens-hal-heading">Massage &apos;Voyage des Sens&apos;</h2>
						</div>
						<p>
							Notre massage &apos;Voyage des Sens&apos; est une expérience sensorielle unique, conçue pour transporter vos sens dans un monde de détente et de bien-être. Dans le cadre
							paisible de votre foyer, ce massage est une invitation à s&apos;évader du quotidien, à se laisser envelopper dans une atmosphère de tranquillité et de sérénité.
						</p>

						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-douceur-dorsale-hal-heading">
								<h2 id="massage-douceur-dorsale-hal-heading">&apos;Douceur Dorsale&apos;</h2>
							</div>
							<p>
								Notre massage &apos;Douceur Dorsale&apos; est une <strong>solution idéale</strong> pour ceux qui ressentent des tensions dans le dos. Ce soin est une exploration approfondie des points
								de tension, offrant un soulagement et une relaxation inégalés. Profitez d&apos;un moment de détente dans un cadre serein, une expérience de soin personnalisée pour
								votre dos.
							</p>
						</div>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-anti-cellulite-hal-heading">
								<h2 id="massage-anti-cellulite-hal-heading">Massage &apos;Anti-Cellulite&apos;</h2>
							</div>
							<p>
								Découvrez le massage &apos;Anti-Cellulite&apos; à Halle (Buizingen), un soin ciblé pour réduire l&apos;apparence de la cellulite et améliorer la qualité de votre peau.
								Ce traitement combine des techniques efficaces pour raffermir et lisser la peau, tout en vous offrant un moment de détente et de soin personnel. C&apos;est une
								expérience de beauté et de bien-être dans un cadre relaxant.
							</p>
						</div>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-shiatsu-hal-heading">
								<h2 id="massage-shiatsu-hal-heading">&apos;Toucher Shiatsu&apos; </h2>
							</div>
							<p>
								Offrez-vous une expérience unique de &apos;Toucher Shiatsu&apos; à Buizingen. Ce massage, ancré dans la tradition japonaise, est une pratique holistique qui vise à
								rétablir l&apos;équilibre énergétique du corps. Dans notre espace paisible, chaque séance est une opportunité pour se ressourcer, se détendre et retrouver harmonie
								entre corps et esprit.
							</p>
						</div>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-anti-stress-hal-heading">
								<h2 id="massage-anti-stress-hal-heading">Massage &apos;Anti-Stress&apos;</h2>
							</div>
							<p>
								Notre massage &apos;Anti-Stress&apos; est un havre de paix <strong>pour ceux qui cherchent à échapper au stress quotidien.</strong> Ce soin offre un moment de détente profonde, une
								pause pour rééquilibrer l&apos;esprit et apaiser le corps. Chaque geste est une caresse vers la tranquillité, un chemin vers un état de relaxation et de bien-être
								total.
							</p>
						</div>
						<div className={styles.travel}>
							<h2>Profitez d&apos;une expérience de massage exceptionnelle à Halle</h2>
							<p>
								Découvrez la quintessence de la relaxation avec un massage de 1 h 30 pour 99€, ou laissez-vous tenter par une session étendue de 2 h à 129€. Pour ceux qui souhaitent
								une expérience à domicile, nous proposons nos services avec un frais additionnel de 25€, qui couvre les coûts de déplacement, y compris le carburant, le stationnement
								éventuel, ainsi que l&apos;agencement nécessaire pour votre bien-être.
							</p>
						</div>
					</section>
					<div className={styles.GoogleMApContainer}>
						<GoogleMap />
					</div>
				</div>

				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataHalle) }} />
			</main>
		</>
	);
}
