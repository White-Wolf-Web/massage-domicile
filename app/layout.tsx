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
	title: "Massage à domicile - Bruxelles + 40km - Nivelles, Beersel ..",
	description:
		'Massage Voyage des Sens 2h 🥰 | Massage Anti-Stress 1h30 ❣️ | Massage Anti-Cellulite 1h30 💝 | Douceur Dorsale 1h30 / 2h 😍 | Toucher Shiatsu 1h30 / 2h 🫶"',
	referrer: "origin-when-cross-origin",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr">
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
