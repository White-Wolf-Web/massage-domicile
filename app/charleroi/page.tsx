import styles from "@/app/page.module.css";
import { MetadataCharleroi } from "@/components/metadata/MetadataCharleroi";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: "Massage à domicile – Charleroi & alentours",
	description: 'Massages à domicile à Charleroi & alentours. Voyage des Sens, Massage Anti-Stress, Anti-Cellulite, Douceur Dorsale, Toucher Shiatsu"',
	alternates: {
		canonical: "https://massage-domicile.com/charleroi"},
		openGraph: {
			title: "Massage à domicile dans la province de Charleroi",
			description: "Vous désirez recevoir un massage relaxant chez vous, nous nous déplaçons dans la province de Charleroi. ",
			url: "https://massage-domicile.com/charleroi",
			siteName: "Massage à domicile sur Charleroi",
			images: [
				{
					url: "",
					width: 800,
					height: 600,
					alt: "Avant et après avoir recu un massage",
				},
			],
			locale: "fr-fr",
			type: "website",
		},
	};

export default function Charleroi() {
	return (
		<>
			<main className={styles.main}>
				<div className={styles.description} aria-labelledby="main-heading">
					<h1 id="main-heading">Votre Massage à Domicile Charleroi</h1>
					<section>
						<div className={styles.serviceContainer} aria-labelledby="massage-voyage-sens-charleroi-heading">
							<h2 id="massage-voyage-sens-charleroi-heading">Massage &apos;Voyage des Sens&apos;</h2>
							
						</div>
						<p>
							Embarquez pour un &apos;Voyage des Sens&apos; unique à Charleroi. Ce massage est une expérience immersive, alliant douceur et harmonie pour éveiller vos sens.Chez vous au calme, il offre un moment d&apos;évasion et de bien-être, une pause de pure détente où chaque toucher est un pas vers la sérénité.
						</p>
						
					
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-douceur-dorsale-charleroi-heading">
								<h2 id="massage-douceur-dorsale-charleroi-heading">&apos;Douceur Dorsale&apos;</h2>
								
							</div>
							<p>
								Le massage &apos;Douceur Dorsale&apos; à Charleroi est une véritable cure de bien-être pour votre dos. Ce soin cible les zones de tension pour apporter soulagement et détente.
								Dans notre espace calme et accueillant, redécouvrez le plaisir d&apos;un dos libéré des tensions, un soin personnalisé pour une relaxation complète et profonde.
							</p>
						</div>
                        <div>
							<div className={styles.serviceContainer} aria-labelledby="massage-anti-cellulite-charleroi-heading">
								<h2 id="massage-anti-cellulite-charleroi-heading">Massage &apos;Anti-Cellulite&apos;</h2>
								
							</div>
							<p>
								Notre massage &apos;Anti-Cellulite&apos; est une solution esthétique et relaxante. Conçu pour atténuer l&apos;aspect de la cellulite, ce soin combine des techniques
								efficaces pour une peau plus ferme et lisse. Profitez de ce moment pour prendre soin de votre corps et de votre esprit, dans un espace familier qui invite à la relaxation et au
								bien-être.
							</p>
						</div>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-shiatsu-charleroi-heading">
								<h2 id="massage-shiatsu-charleroi-heading">&apos;Toucher Shiatsu&apos;</h2>
								
							</div>
							<p>
								Profitez d&apos;une expérience unique avec notre &apos;Toucher Shiatsu&apos;. Ce massage, inspiré de la tradition japonaise, est une harmonie de pressions et de gestes qui
								rééquilibrent l&apos;énergie vitale. Dans notre havre de paix, chaque séance est une opportunité de se reconnecter avec soi-même, de retrouver un équilibre physique et
								mental. Le Japon se déplace à Charleroi.
							</p>
						</div>
                        <div>
							<div className={styles.serviceContainer} aria-labelledby="massage-anti-stress-charleroi-heading">
								<h2 id="massage-anti-stress-charleroi-heading">Massage &apos;Anti-Stress&apos;</h2>
								
							</div>
							<p>
								Découvrez notre massage &apos;Anti-Stress&apos;, une bulle de détente dans l&apos;effervescence urbaine. Ce soin vise à relâcher les tensions accumulées, apportant une
								relaxation profonde et un rééquilibrage de l&apos;esprit. C&apos;est une invitation à prendre un moment pour soi, à se déconnecter du stress quotidien pour retrouver paix et
								harmonie.
							</p>
						</div>
						<div className={styles.travel}>
							<h2>Vivez une parenthèse de bien-être avec nos massages à Charleroi</h2>
                            <p>Notre séance bien-être de 1h30 est tarifée à 99€ au sein de notre cabinet. Choisissez un intervalle plus étendu de bien-être avec une session de 2 heures pour 129€. Pour ceux qui souhaitent rester chez eux, nous ajoutons simplement 20€ d&apos;indemnité de déplacement qui comprennent le déplacement aller-retour, le carburant, et occasionnellement le parking, plus la préparation et le démontage du matériel.</p>
						</div>
					</section>
					
				</div>

				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataCharleroi) }} />
			</main>
		</>
	);
}
