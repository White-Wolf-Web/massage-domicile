// data/carouselData.ts

export type CarouselItem = {
	id: number;
	name: string;
	text: string;
	imageSrc: string;
	stars: number;
	description: string;
	job: string;
};

const sliderData: CarouselItem[] = [
	{
		text: "",
		imageSrc: "/images/fabienne-Anneet.webp",
		stars: 5,
		id: 1,
		name: "Fabienne Anneet",
		description: "Sans aucun doute l'une des expériences qui m'a mise sur le bon chemin. J'y ai reçu l'aide adéquate pour mettre des mots et faire éclater des évidences sur des signaux et des symptômes physiques. J'y suis allée plusieurs fois pour des séances de shiatsu et à chaque fois, la même richesse ! Merci !",
		job: "Employée Administrative",
	},
	{
		text: "",
		imageSrc: "/images/CarolineB.webp",
		stars: 5,
		id: 2,
		name: "Caroline Baïni",
		description: "Je recommande 🤗 Personne à l'écoute, comprendre et aide à débloquer notre nous intérieur et ce qui nous empêche d'avancer. Il a le côté Professionnel mais surtout humain ce qu'il faut pour pourvoir aider correctement le patient.",
		job: "Nutrithérapeute",
	},
	{
		text: "",
		imageSrc: "/images/lea.webp",
		stars: 5,
		id: 3,
		name: "Léa De Saedeleer",
		description: "J y suis allé plus d une fois, toujours reçue avec bienveillance . C est endroit rempli de sérénité. Le praticien Stéphane, est accueillant, à l écoute. Tout est douceur. Quand on ressort de chez lui, on se sent calme. Ce n'est que du bonheur. Du bien être. On se sent bien.",
		job: "Etudiante",
	},

	{
		text: "  ",
		imageSrc: "/images/laura.webp",
		stars: 5,
		id: 4,
		name: "Darquennes Laura",
		description: "Je recommande 🤗 Personne à l'écoute, comprendre et aide à débloquer notre nous intérieur et ce qui nous empêche d'avancer. Il a le côté Professionnel mais surtout humain ce qu'il faut pour pourvoir aider correctement le patient.",
		job: "",
	},
	{
		text: "",
		imageSrc: "/images/brigitteBlairon.webp",
		stars: 5,
		id: 5,
		name: "Brigitte Blairon",
		description: "Il y a des personnes qui ont une grande pratique, mais pour certains aussi un don qu'ils partagent dans leur travaille, merci Stéphane pour cela",
		job: "Retraitrée",
	},
	{
		text: "",
		imageSrc: "/images/daniela.webp",
		stars: 5,
		id: 6,
		name: "Daniela Ploscariu",
		description: "C'était une expérience incroyable avec un résultat excellent les jours qui ont suivi.. j ai adoré.",
		job: "Gérante Horeca",
	},

	{
		text: "",
		imageSrc: "/images/Joris.webp",
		stars: 5,
		id: 7,
		name: "Joris Vander Cammen",
		description: "Zeer aangename sfeer en professionele massage.",
		job: "Project Engineer",
	},
	{
		text: "",
		imageSrc: "/images/bb.webp",
		stars: 5,
		id: 8,
		name: "Brigitte Baleine",
		description: "Incontestablement entre de bonnes mains. On y entre un poids sur les épaules. On en sort apaisé. A fréquenter les yeux fermés.",
		job: "Psychologue",
	},
];

export default sliderData;
