import styles from "@/app/page.module.css";
import { MetadataCourcelles } from "@/components/metadata/MetadataCourcelles";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Massage à domicile – Courcelles & alentours",
	description: 'Massages à domicile à Courcelles & alentours. Voyage des Sens, Massage Anti-Stress, Anti-Cellulite, Douceur Dorsale, Toucher Shiatsu"',
	alternates: {
		canonical: "https://massage-domicile.com/courcelles"
	},
	openGraph: {
		title: "Massage à domicile à Courcelles",
		description: "Vous désirez recevoir un massage relaxant chez vous, nous nous déplaçons dans la province de Namur. ",
		url: "https://massage-domicile.com/courcelles",
		siteName: "Massage à domicile sur Courcelles",
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

export default function Courcelles() {
	return (
		<>
			<main className={styles.main}>
				<div className={styles.description} aria-labelledby="main-heading">
					<h1 id="main-heading">Votre Massage à Domicile Courcelles</h1>
					<section>
						<div className={styles.serviceContainer} aria-labelledby="massage-voyage-sens-courcelles-heading">
							<h2 id="massage-voyage-sens-courcelles-heading">Massage Voyage des &apos;Sens&apos;</h2>
						</div>
						<p>
							Profitez d&apos;une expérience unique à Courcelles avec notre massage &apos;Voyage des Sens&apos;. Ce soin est une célébration du bien-être, où chaque mouvement est une
							invitation à la détente. Dans le cadre serein de Courcelles (trazegnies), ce massage est une parenthèse de tranquillité, une évasion du quotidien pour retrouver harmonie et
							paix intérieure.
						</p>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-douceur-dorsale-courcelles-heading">
								<h2 id="massage-douceur-dorsale-courcelles-heading">&apos;Douceur Dorsale&apos; </h2>
							</div>
							<p>
								Découvrez le soin &apos;Douceur Dorsale&apos; dans notre espace à Courcelles (Trazegnies), un massage qui cible spécifiquement les tensions du dos. Cette approche
								délicate et approfondie procure une relaxation immédiate et un soulagement durable, dans un cadre qui invite au bien-être et à la détente. C&apos;est un moment de soin
								pour votre dos, une pause bien méritée dans votre routine.
							</p>
						</div>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-anti-cellulite-courcelles-heading">
								<h2 id="massage-anti-cellulite-courcelles-heading">Massage &apos;Anti-Cellulite&apos; </h2>
							</div>
							<p>
								Notre massage &apos;Anti-Cellulite&apos; allie beauté et bien-être. Ce soin cible spécifiquement la cellulite, offrant une approche globale pour tonifier et lisser la
								peau. Dans notre espace dédié, profitez d&apos;un moment de détente tout en prenant soin de votre corps, dans un environnement qui inspire la tranquillité et la
								relaxation.
							</p>
						</div>

						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-shiatsu-courcelles-heading">
								<h2 id="massage-shiatsu-courcelles-heading">&apos;Toucher Shiatsu&apos;</h2>
							</div>
							<p>
								Expérimentez le pouvoir apaisant du &apos;Toucher Shiatsu&apos; dans notre établissement à Trazegnies. Ce massage traditionnel japonais, adapté à vos besoins, est une
								invitation à l&apos;équilibre et à l&apos;harmonie. C&apos;est une occasion unique de se reconnecter avec soi-même, de retrouver un bien-être profond dans un espace qui
								respire le calme et la sérénité.
							</p>
						</div>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-anti-stress-courcelles-heading">
								<h2 id="massage-anti-stress-courcelles-heading">Massage &apos;Anti-Stress&apos;</h2>
							</div>
							<p>
								Notre massage &apos;Anti-Stress&apos; est une véritable oasis. Conçu pour apaiser les tensions et revigorer l&apos;esprit, ce soin est une réponse idéale au stress
								quotidien. Chaque geste est pensé pour vous offrir une relaxation profonde et un retour à l&apos;équilibre, dans un environnement qui favorise le lâcher-prise et la
								sérénité.
							</p>
						</div>
						<div className={styles.travel}>
							<h2>Redécouvrez le bien-être avec nos massages à Courcelles</h2>
							<p>
								Dans le sanctuaire de notre établissement situé à Trazegnies, vous pourrez vous offrir un massage de 1h30 à 99€. Prolongez cette évasion avec un massage de 2 heures
								pour 129€. Si vous optez pour la sérénité de votre propre &apos;chez vous&apos;, une indemnité de déplacement de 15€ sera ajoutée, incluant les frais de voyage, le
								carburant, et le stationnement quand nécessaire, en plus de l&apos;installation et du désassemblage du matériel.
							</p>
						</div>
					</section>
				</div>

				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataCourcelles) }} />
			</main>
		</>
	);
}
