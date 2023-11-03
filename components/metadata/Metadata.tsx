export const MetadataHomePage = {
	"@context": "https://schema.org",
	"@type": "HealthAndBeautyBusiness",
	name: "Massage à domicile",
	image: "https://massage-domicile.com/femme-masse-a-domicile-souriante.webp",
	"@id": "https://massage-domicile.com/",
	url: "https://massage-domicile.com/",
	telephone: "+32477131993",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Octaaf de kerchove d'exaerdestraat 193",
		addressLocality: "Buizingen",
		postalCode: "1501",
		addressCountry: "BE",
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: 50.7460655,
		longitude: 4.2607546,
	},
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			opens: "10:00",
			closes: "20:00",
		},
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: "Saturday",
			opens: "10:00",
			closes: "20:00",
		},
	],
	sameAs: ["https://www.facebook.com/massagedomicilebelgique"],
	priceRange: "$$",
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "Services de massage",
		itemListElement: [
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Massage 'Voyage des Sens' - 2h",
					description:
						"Ce massage doux est une invitation à un voyage intérieur, où chaque toucher est conçu pour éveiller les sens et procurer une sensation de bien-être profond.",
					offers: {
						"@type": "Offer",
						price: "165",
						priceCurrency: "EUR",
					},
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Massage 'Anti-Stress' - 1h30",
					description: "Conçu pour dénouer les noeuds de tension, revitaliser l'esprit fatigué et restaurer l'équilibre intérieur.",
					offers: {
						"@type": "Offer",
						price: "130",
						priceCurrency: "EUR",
					},
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Massage 'Anti-Cellulite' - 1h30",
					description:
						"À la croisée des techniques de drainage et de la stimulation circulatoire, ce massage vise à déloger les dépôts de graisse et tonifier la peau.",
					offers: {
						"@type": "Offer",
						price: "135",
						priceCurrency: "EUR",
					},
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "'Douceur Dorsale' - 1h30 / 2h",
					description: "Une exploration détaillée des points de tension du dos, offrant une libération et une revitalisation de cette zone cruciale.",
					offers: {
						"@type": "Offer",
						price: "130 / 165",
						priceCurrency: "EUR",
					},
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "'Toucher Shiatsu' - 1h30 / 2h",
					description:
						"Basé sur les principes de l'énergie vitale, le Shiatsu vise à rétablir la circulation énergétique optimale et favoriser un bien-être global.",
					offers: {
						"@type": "Offer",
						price: "130 / 165",
						priceCurrency: "EUR",
					},
				},
			},
		],
	},
	review: [
		{
			"@type": "Review",
			reviewRating: {
				"@type": "Rating",
				ratingValue: "5",
				bestRating: "5",
			},
			author: {
				"@type": "Person",
				name: "Prénom Nom",
			},
		},
	],
};
