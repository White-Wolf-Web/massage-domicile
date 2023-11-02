import Image from "next/image";
import styles from "./page.module.css";
import MassageADomicile from "../public/femme-masse-a-domicile-souriante.webp";
import Slider from "@/components/slider";
import carouselItems from "@/data/carouselData";
import GoogleMap from "@/components/GoogleMap";

export const metadata = {
	title: "Massage à domicile - Bruxelles + 40km - Nivelles, Beersel ..",
	description:
		'Massage Voyage des Sens 2h 🥰 | Massage Anti-Stress 1h30 ❣️ | Massage Anti-Cellulite 1h30 💝 | Douceur Dorsale 1h30 / 2h 😍 | Toucher Shiatsu 1h30 / 2h 🫶"',
	canonical: "https://massage-domicile.com/",
};

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<Image
					src={MassageADomicile}
					alt="Femme souriante recevant un massage à domicile"
					placeholder="blur"
					quality={100}
					sizes="100vw"
					className={styles.imgBanniere}
				/>
				<h1>Votre Massage à Domicile Bruxelles + 40 km</h1>
				<section>
					<div>
						<h2>Massage &apos;Voyage des Sens&apos; - 2h</h2>
						<p>
							Ce massage doux est une invitation à un voyage intérieur, où chaque toucher est conçu pour éveiller les sens et procurer une sensation de
							bien-être profond. Il transcende la simple relaxation physique pour toucher l&apos;âme, enveloppant le corps et l&apos;esprit dans une douce
							étreinte de sérénité. Plus qu&apos;une simple technique, c&apos;est une danse, une célébration de la sensibilité et de la connexion humaine.
							Ce massage doux est une parenthèse enchantée dans le tumulte du quotidien, une oasis de douceur au cœur de nos vies trépidantes.
						</p>
					</div>
					<div>
						<h2>Massage &apos;Anti-Stress&apos; - 1h30</h2>
						<p>
							Dans le tourbillon incessant de la vie moderne, le stress s&apos;infiltre souvent, s&apos;accumulant silencieusement dans nos muscles, nos
							esprits et nos émotions. Le massage anti-stress est une réponse thérapeutique à cette pression omniprésente. Conçu pour dénouer les noeuds de
							tension, revitaliser l&apos;esprit fatigué et restaurer l&apos;équilibre intérieur, ce massage est une véritable bouffée d&apos;oxygène pour
							le corps et l&apos;âme. Chaque mouvement et chaque technique utilisée vise à relâcher la pression, stimuler la circulation et promouvoir une
							relaxation profonde. Offrez-vous une pause, un moment rien qu&apos;à vous, et laissez les mains expertes chasser le stress, pour vous ramener
							à un état de sérénité et de tranquillité.
						</p>
					</div>
					<div>
						<h2>Massage &apos;Anti-Cellulite&apos; - 1h30</h2>
						<p>
							La cellulite, aussi surnommée &apos;peau d&apos;orange&apos;, est un phénomène naturel que beaucoup cherchent à atténuer. Le massage
							anti-cellulite est une réponse ciblée à cette préoccupation esthétique et bien-être. À la croisée des techniques de drainage et de la
							stimulation circulatoire, ce massage vise à déloger les dépôts de graisse, favoriser l&apos;élimination des toxines et tonifier la peau. Plus
							qu&apos;un simple geste beauté, il s&apos;agit d&apos;une démarche complète qui associe savoir-faire manuel et bienfaits physiologiques pour
							une peau plus ferme et visiblement plus lisse. Offrez-vous ce soin spécifique, et ressentez les bénéfices d&apos;une peau revitalisée,
							d&apos;un aspect plus uniforme et d&apos;une silhouette affinée.
						</p>
					</div>
					<div>
						<h2>&apos;Douceur Dorsale&apos; - 1h30 / 2h</h2>
						<p>
							Le dos, cette vaste étendue de muscles, de tendons et de vertèbres, est souvent le théâtre de tensions accumulées, que ce soit par les
							postures quotidiennes, le stress ou les activités physiques. Douceur Dorsale est bien plus qu&apos;un simple massage du dos. C&apos;est une
							immersion profonde dans le bien-être, une exploration détaillée des points de tension, offrant une libération et une revitalisation de cette
							zone si cruciale de notre anatomie. Chaque pression, chaque mouvement est soigneusement étudié pour apporter le soulagement le plus profond,
							redonnant à votre dos toute sa souplesse et sa vitalité. Laissez-vous envelopper par ce soin, et redécouvrez le plaisir d&apos;un dos léger et
							détendu.
						</p>
					</div>
					<div>
						<h2>&apos;Toucher Shiatsu&apos; - 1h30 / 2h</h2>
						<p>
							Le &apos;Toucher Shiatsu&apos;, originaire du Japon, est une pratique thérapeutique ancienne qui s&apos;inscrit dans la tradition de la
							médecine orientale. Basé sur les principes de l&apos;énergie vitale qui circule dans le corps humain à travers des méridiens spécifiques, le
							Shiatsu, littéralement traduit par &apos;pression des doigts&apos;, implique l&apos;utilisation de la pression manuelle pour équilibrer et
							harmoniser ces énergies. L&apos;objectif principal du Toucher Shiatsu est de rétablir la circulation énergétique optimale, de détendre le
							corps et l&apos;esprit, et de favoriser un bien-être global. Il s&apos;agit plus d&apos;une approche holistique qui prend en compte
							l&apos;individu dans sa globalité, englobant l&apos;aspect physique, émotionnel, mental et spirituel. Dans un monde où le stress et la tension
							sont omniprésents, le Toucher Shiatsu offre une pause régénératrice, un moment de reconnexion profonde avec soi-même.
						</p>
					</div>
					<div className={styles.travel}>
						<ul>
							<li>
								Cela comprend le <strong className={styles.underline}>temps de déplacement</strong>, le{" "}
								<strong className={styles.underline}>carburant</strong>, le <strong className={styles.underline}>parking</strong>, le montage sur place &
								le <strong className={styles.underline}>soin</strong>.
							</li>
							<li>J&apos;apporte tout le matériel (table et huiles de massage).</li>
							<li>Je me déplace dans un rayon de 40 km autour de Beersel</li>
						</ul>
					</div>
				</section>
				<div className={styles.GoogleMApContainer}>
					<GoogleMap />
				</div>
				<div>
					<Slider items={carouselItems} />
				</div>
			</div>
		</main>
	);
}
