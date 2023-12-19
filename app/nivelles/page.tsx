import styles from "@/app/page.module.css";
import { MetadataNivelles } from "@/components/metadata/MetadataNivelles";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Massage à domicile – Nivelles & alentours",
	description: 'Massages à domicile à Nivelles & alentours. Voyage des Sens, Massage Anti-Stress, Anti-Cellulite, Douceur Dorsale, Toucher Shiatsu"',
	alternates: {
		canonical: "https://massage-domicile.com/nivelles",
	},
};

export default function Nivelles() {
	return (
		<>
			<main className={styles.main}>
				<div className={styles.description} aria-labelledby="main-heading">
					<h1 id="main-heading">Votre Massage à Domicile Nivelles</h1>
					<section>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-voyage-sens-nivelles-heading">
								<h2 id="massage-voyage-sens-nivelles-heading">Massage &apos;Voyage des Sens&apos;</h2>
							</div>
							<p>
								Offrez-vous une expérience sensorielle unique avec notre massage &apos;Voyage des Sens&apos;. Conçu pour éveiller chaque sens, ce massage transforme le
								bien-être en art, en enveloppant le corps et l&apos;esprit dans un cocon de sérénité. C&apos;est une invitation à déconnecter du quotidien et à plonger dans un univers
								de douceur et de tranquillité, spécialement adapté à l&apos;ambiance paisible de Nivelles.
							</p>

							<div>
								<div className={styles.serviceContainer} aria-labelledby="massage-douceur-dorsale-nivelles-heading">
									<h2 id="massage-douceur-dorsale-nivelles-heading">&apos;Douceur Dorsale&apos;</h2>
								</div>
								<p>
									Redécouvrez le confort d&apos;un dos détendu avec notre massage &apos;Douceur Dorsale&apos;. Spécialement conçu pour cibler les tensions dorsales, ce
									massage apporte une relaxation profonde et un soulagement durable. Profitez d&apos;un soin sur mesure dans un cadre tranquille et apaisant, idéal pour se ressourcer
									et retrouver une mobilité tout en douceur.
								</p>
							</div>

							<div>
								<div className={styles.serviceContainer} aria-labelledby="massage-anti-cellulite-nivelles-heading">
									<h2 id="massage-anti-cellulite-nivelles-heading">Massage &apos;Anti-Cellulite&apos;</h2>
								</div>
								<p>
									À Nivelles, notre massage &apos;Anti-Cellulite&apos; est une réponse dédiée à vos besoins esthétiques et de bien-être. Cette technique spéciale aide à lisser la
									peau et à réduire l&apos;aspect de la cellulite, tout en offrant un moment de détente. Profitez d&apos;un traitement qui combine beauté et relaxation, dans un cadre
									conçu pour apporter confort et efficacité.
								</p>
							</div>

							<div>
								<div className={styles.serviceContainer} aria-labelledby="massage-shiatsu-nivelles-heading">
									<h2 id="massage-shiatsu-nivelles-heading">&apos;Toucher Shiatsu&apos;</h2>
								</div>
								<p>
									Vivez une expérience de bien-être traditionnelle avec notre &apos;Toucher Shiatsu&apos;. Ce soin ancestral japonais, adapté pour répondre aux besoins
									contemporains, offre une pause régénératrice, une reconnexion avec soi-même. Profitez de ce moment unique chez vous, qui deviendra le temps d&apos;un instant un lieu de calme et de
									ressourcement en plein cœur de Nivelles.
								</p>
							</div>
							<div>
								<div className={styles.serviceContainer} aria-labelledby="massage-anti-stress-nivelles-heading">
									<h2 id="massage-anti-stress-nivelles-heading">Massage &apos;Anti-Stress&apos;</h2>
								</div>
								<p>
									Découvrez la sérénité avec notre massage &apos;Anti-Stress&apos;. Ce soin est conçu pour alléger les charges du stress quotidien, en libérant les
									tensions et en revitalisant l&apos;esprit. Profitez d&apos;un havre de paix dans notre espace dédié, où chaque mouvement est une promesse de relaxation et de
									bien-être, offrant une échappée nécessaire du rythme rapide de la vie moderne.
								</p>
							</div>
							<div className={styles.travel}>
								<h2 className={styles.textAlignCenter}>Échappez au quotidien avec nos massages sur Nivelles et ses environs</h2>
								<p>
									Pour une détente profonde, notre massage de 1h30 est disponible pour 99€. Etendez ce plaisir à 2 heures pour seulement 129€. Si vous choisissez de recevoir ce
									massage à domicile à Nivelles & ses alentours, nous demandons un forfait de déplacement de 20€ qui prend en charge nos déplacements, le carburant, parfois le stationnement, ainsi que la
									préparation et le rangement du matériel.
								</p>
							</div>
						</div>
					</section>
				</div>

				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataNivelles) }} />
			</main>
		</>
	);
}
