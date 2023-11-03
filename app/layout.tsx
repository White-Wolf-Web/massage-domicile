import type { Metadata } from "next";
import { Inter, Montserrat, EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const garamond = EB_Garamond({
	weight: ["400", "700"],
	subsets: ["latin"],
	display: "swap",
});
export const montserrat = Montserrat({
	weight: ["400", "700"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	referrer: "origin-when-cross-origin",
  colorScheme: "light",
	themeColor: 'black',
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
		},
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
	},
	verification: {
		google: "google",
		yandex: "yandex",
		yahoo: "yahoo",
	},
	openGraph: {
		title: "Massage à domicile Bruxelles - Nivelles - Tubize - Wavre",
		description:
			"Service de massage à domicile operant dans le Brabant wallon - Bruxelles - Nivelles - Tubize - Wavre",
		url: "https://massage-domicile.com",
		siteName: "Massage à Domicile",
		images: [
			{
				url: "https://massage-domicile.com/public/femme-masse-a-domicile-souriante.webp",
				width: 1200,
				height: 400,
				alt: "Femme souriante recevant un de mes massages",
			},
		],
		locale: "fr-fr",
		type: "website",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr">
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
