import styles from "@/app/page.module.css";
import { MetadataBruxelles } from "@/components/metadata/MetadataBruxelles";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Massage à domicile – Bruxelles",
	description: 'Massages à domicile à Bruxelles Voyage des Sens, Massage Anti-Stress, Anti-Cellulite, Douceur Dorsale, Toucher Shiatsu"',
	alternates: {
		canonical: "https://massage-domicile.com/bruxelles"
	},
	openGraph: {
		title: "Massage à domicile à Bruxelles Capitale",
		description: "Vous désirez recevoir un massage relaxant chez vous, nous nous déplaçons dans la capitale de Bruxelles. ",
		url: "https://massage-domicile.com/bruxelles",
		siteName: "Massage à domicile sur Bruxelles Capitale",
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

export default function Bruxelles() {
	return (
		<>
			<main className={styles.main}>
				<div className={styles.description} aria-labelledby="main-heading">
					<h1 id="main-heading">Votre Massage à Domicile Bruxelles </h1>
					<section>
						<div className={styles.serviceContainer} aria-labelledby="massage-voyage-sens-bruxelles-heading">
							<h2 id="massage-voyage-sens-bruxelles-heading">Massage &apos;Voyage des Sens&apos;</h2>
							
						</div>
						<p>
							Découvrez notre massage &apos;Voyage des Sens&apos; au cœur de Bruxelles, une expérience sensorielle unique qui vous invite à un périple intime et apaisant. Chaque geste
							est une caresse pour l&apos;âme, offrant une détente absolue et un bien-être inégalé. Laissez-vous transporter par cette symphonie de sensations, une échappée loin
							du tumulte urbain, dans un havre de paix et de sérénité.
						</p>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-douceur-dorsale-bruxelles-heading">
								<h2 id="massage-douceur-dorsale-bruxelles-heading">&apos;Douceur Dorsale&apos;</h2>
								
							</div>
							<p>
								Découvrez notre massage &apos;Douceur Dorsale&apos;, une solution ciblée pour les tensions dorsales. Chaque technique est une clé pour déverrouiller le
								bien-être de votre dos, apportant une détente profonde et un soulagement durable. Profitez d&apos;un moment de quiétude au cœur de la ville, et ressentez la légèreté et
								le confort d&apos;un dos soigné et choyé.
							</p>
						</div>
						
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-anti-cellulite-bruxelles-heading">
								<h2 id="massage-anti-cellulite-bruxelles-heading">Massage &apos;Anti-Cellulite&apos;</h2>
								
							</div>
							<p>
								Notre massage &apos;Anti-Cellulite&apos; à Bruxelles est une solution dédiée à la beauté et au bien-être. Utilisant des techniques avancées pour tonifier et lisser la
								peau, ce soin est parfait pour ceux qui cherchent à améliorer leur silhouette tout en se relaxant. Vivez l&apos;expérience d&apos;un soin esthétique alliant efficacité
								et détente au cœur de la ville.
							</p>
						</div>
						
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-shiatsu-bruxelles-heading">
								<h2 id="massage-shiatsu-bruxelles-heading">&apos;Toucher Shiatsu&apos;</h2>
								
							</div>
							<p>
								Expérimentez le &apos;Toucher Shiatsu&apos; dans notre espace dédié à Bruxelles. Ce massage traditionnel japonais, réalisé avec la précision et le soin, est une
								invitation à l&apos;équilibre et à l&apos;harmonie. Découvrez un soin ancestral adapté aux besoins contemporains, une pause régénératrice en plein cœur de la ville.
							</p>
						</div>
						<div>
							<div className={styles.serviceContainer} aria-labelledby="massage-anti-stress-bruxelles-heading">
								<h2 id="massage-anti-stress-bruxelles-heading">Massage &apos;Anti-Stress&apos;</h2>
								
							</div>
							<p>
								<strong>Notre massage &apos;Anti-Stress&apos; est votre refuge contre les pressions de la vie moderne.</strong> Conçu pour libérer les tensions et revitaliser
								l&apos;esprit, il est une oasis de calme au sein de la ville de Bruxelles. Profitez de ce moment de détente pour vous ressourcer et retrouver un équilibre intérieur, grâce
								à des techniques qui dissipent le stress et favorisent une relaxation profonde.
							</p>
						</div>
						<div className={styles.lastComment}>
                        <h2>Offrez-vous un moment de détente inoubliable avec nos massages à Bruxelles</h2>
							<p>
								S&apos;offrir 1 heure 30 de relaxation dans notre centre vous coûtera 99€. Pour une immersion totale de deux heures, le prix s&apos;élève à 129€. Si vous préférez
								profiter de ces soins sans quitter votre domicile, nous proposons un service à domicile pour un supplément de 30€, englobant les frais de transport, le carburant, et
								parfois le parking, ainsi que la mise en place nécessaire pour votre confort.
							</p>
						</div>
						
					</section>
				</div>

				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataBruxelles) }} />
			</main>
		</>
	);
}
