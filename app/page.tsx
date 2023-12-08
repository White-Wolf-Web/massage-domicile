import Image from "next/image";
import styles from "./page.module.css";
import MassageADomicile from "../public/femme-masse-a-domicile-souriante.webp";
import Slider from "@/components/slider/Slider";
import carouselItems from "@/data/carouselData";
import GoogleMap from "@/components/googleMap/GoogleMap";
import Footer from "@/components/footer/Footer";
import { MetadataHomePage } from "@/components/metadata/Metadata";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
	title: "Massage à domicile – Bruxelles, Nivelles, Courcelles + 40km",
	description:
		'Massages à domicile à Bruxelles – Nivelles – Courcelles & 40 km autour : Voyage des Sens, Massage Anti-Stress, Anti-Cellulite, Douceur Dorsale, Toucher Shiatsu"',
	alternates: {
		canonical: "https://massage-domicile.com/",
	},
};

export default function Home() {
	return (
		<>
			<Head>
				<meta name="google-site-verification" content="AOG_A13vVBBl08ja7Rleu_49AWbtcTraxxjAqs2fBM" />
			</Head>
			<main className={styles.main}>
				<div className={styles.description} aria-labelledby="main-heading">
					<Image
						src={MassageADomicile}
						alt="Femme souriante recevant un massage à domicile"
						placeholder="blur"
						quality={100}
						sizes="100vw"
						className={styles.imgBanniere}
						title="Ce sourire en dit long sur le massage relaxant qu'elle reçoit"
					/>
					<h1 id="main-heading">Votre Massage à Domicile Bruxelles + 40 km</h1>
					<section>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-voyage-sens-heading">
								<h2 id="massage-voyage-sens-heading">Massage &apos;Voyage des Sens&apos; - 2h</h2>{" "}
								<span className={styles.price} aria-label="Prix: 165 euros">
									165€
								</span>
							</div>
							<p>
								Ce massage doux est une invitation à un voyage intérieur, où chaque toucher est conçu afin d&apos;éveiller les sens et procurer une
								sensation de bien-être profond. Il transcende la simple relaxation physique pour toucher l&apos;âme, enveloppant le corps et l&apos;esprit
								dans une douce étreinte de sérénité. Plus qu&apos;une simple technique, c&apos;est une danse, une célébration de la sensibilité et de la
								connexion humaine. Ce massage doux est une parenthèse enchantée dans le tumulte du quotidien, une oasis de douceur au cœur de nos vies
								trépidantes.
							</p>
						</div>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-anti-stress-heading">
								<h2 id="massage-anti-stress-heading">Massage &apos;Anti-Stress&apos; - 1h30</h2>
								<span className={styles.price} aria-label="Prix: 130 euros">
									130€
								</span>
							</div>
							<p>
								Dans le tourbillon incessant de la vie moderne, le stress s&apos;infiltre souvent, s&apos;accumulant silencieusement en nos muscles, nos
								esprits et nos émotions. Le massage anti-stress est une réponse thérapeutique à cette pression omniprésente. Conçu pour dénouer les noeuds
								de tension, revitaliser l&apos;esprit fatigué et restaurer l&apos;équilibre intérieur, ce massage est une véritable bouffée d&apos;oxygène
								pour le corps et l&apos;âme. Chaque mouvement et technique utilisée vise à relâcher la pression, stimuler la circulation et promouvoir une
								relaxation profonde. Offrez-vous une pause, un moment rien qu&apos;à vous, et laissez les mains expertes chasser le stress, pour vous
								ramener à un état de sérénité et de tranquillité. Se faire masser régulièrement aide à éliminer ces tensions.
							</p>
						</div>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-anti-cellulite-heading">
								<h2 id="massage-anti-cellulite-heading">Massage &apos;Anti-Cellulite&apos; - 1h30</h2>
								<span className={styles.price} aria-label="Prix: 135 euros">
									135€
								</span>
							</div>
							<p>
								La cellulite, aussi surnommée &apos;peau d&apos;orange&apos;, est un phénomène naturel que beaucoup cherchent à atténuer. Le massage
								anti-cellulite est une réponse ciblée à cette préoccupation esthétique et bien-être. À la croisée des techniques de drainage et de la
								stimulation circulatoire, ce massage vise à déloger les dépôts de graisse, favoriser l&apos;élimination des toxines et tonifier la peau.
								Plus qu&apos;un simple geste beauté, il s&apos;agit d&apos;une démarche complète qui associe savoir-faire manuel et bienfaits
								physiologiques pour une peau plus ferme et visiblement plus lisse. Offrez-vous ce soin spécifique, et ressentez les bénéfices d&apos;une
								peau revitalisée, d&apos;un aspect plus uniforme et d&apos;une silhouette affinée. Masser ces zones adipeuses régulièrement aide à les
								raffermir.
							</p>
						</div>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-douceur-dorsale-heading">
								<h2 id="massage-douceur-dorsale-heading">&apos;Douceur Dorsale&apos; - 1h30 / 2h</h2>
								<span className={styles.price} aria-label="Prix: 130 / 165 euros">
									130€ / 165€
								</span>
							</div>
							<p>
								Le dos, cette vaste étendue de muscles, de tendons et de vertèbres, est souvent le théâtre de tensions accumulées, que ce soit par les
								postures quotidiennes, le stress ou les activités physiques. Douceur Dorsale est bien plus qu&apos;un simple massage à domicile du dos.
								C&apos;est une immersion profonde dans le bien-être, une exploration détaillée des points de tension, offrant une libération et une
								revitalisation de cette zone si cruciale de notre anatomie. Chaque pression, chaque mouvement est soigneusement étudié pour apporter le
								soulagement le plus profond, redonnant à votre dos toute sa souplesse et sa vitalité. Laissez-vous envelopper par ce soin, et redécouvrez
								le plaisir d&apos;un dos léger et détendu. Se faire masser régulièrement le dos devrait être remboursé.
							</p>
						</div>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-shiatsu-heading">
								<h2 id="massage-shiatsu-heading">&apos;Toucher Shiatsu&apos; - 1h30 / 2h</h2>
								<span className={styles.price} aria-label="Prix: 130 / 165 euros">
									130€ / 165€
								</span>
							</div>
							<p>
								Le &apos;Toucher Shiatsu&apos;, originaire du Japon, est une pratique thérapeutique ancienne qui s&apos;inscrit dans la tradition de la
								médecine orientale. Basé sur les principes de l&apos;énergie vitale qui circule dans le corps humain à travers des méridiens spécifiques,
								le Shiatsu, littéralement traduit par &apos;pression des doigts&apos;, implique l&apos;utilisation de la pression manuelle pour équilibrer
								et harmoniser ces énergies. L&apos;objectif principal du Toucher Shiatsu est de rétablir la circulation énergétique optimale, de détendre
								le corps et l&apos;esprit, et de favoriser un bien-être global. Il s&apos;agit d&apos;une approche holistique qui prend en compte
								l&apos;individu dans sa globalité, englobant l&apos;aspect physique, émotionnel, mental et spirituel. En un monde où le stress et la
								tension sont omniprésents, le Toucher Shiatsu à domicile offre une pause régénératrice, un moment de reconnexion profonde avec soi-même.
							</p>
						</div>
						<div className={styles.travel}>
							<ul>
								<li>
									Cela comprend le <strong className={styles.underline}>temps de déplacement</strong>, le{" "}
									<strong className={styles.underline}>carburant</strong>, le <strong className={styles.underline}>parking</strong>, le montage sur
									place & le <strong className={styles.underline}>soin</strong>.
								</li>
								<li>J&apos;apporte tout le matériel (table et huiles de massage).</li>
								<li>Je me déplace dans un rayon de 40 km autour de Beersel</li>
								<li>Possibilité de vous offrir un massage à domicile jusque 4h</li>
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
				<Footer />
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataHomePage) }} />
			</main>
		</>
	);
}
