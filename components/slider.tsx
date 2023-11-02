"use client";
import { useState, useEffect } from "react";
import styles from "../app/page.module.css";
import Image from "next/image";
import sliderData from "@/data/carouselData";
import leftChevron from "@/public/left-arrow.svg";
import rightChevron from "@/public/right-arrow.svg";
import { CarouselItem } from "@/data/carouselData";

type CarouselProps = {
	// Définition du type pour les props du composant
	items: CarouselItem[];
};

const typedSliderData: CarouselItem[] = sliderData; // Typage des données du carrousel

const Slider = ({ items }: CarouselProps) => {
	// Définition du composant Slider
	const [sliderIndex, setSliderIndex] = useState<number>(1); // État pour suivre l'index de l'image actuellement affichée

	function toggleImage(indexPayload: number) {
		// Fonction pour changer d'image dans le carrousel
		setSliderIndex((state) => {
			if (indexPayload + state > typedSliderData.length) {
				return 1;
			} else if (indexPayload + state < 1) {
				return typedSliderData.length;
			} else {
				return state + indexPayload;
			}
		});
	}

	useEffect(() => {
		// Effet pour changer d'image automatiquement toutes les 5 secondes
		const intervalID = setInterval(() => toggleImage(1), 5000);

		return () => clearInterval(intervalID); // Nettoyage de l'intervalle lors du démontage du composant
	}, []);

	const currentItem = sliderData.find((item) => item.id === sliderIndex);


	return (
		<div className={styles.sliderContainer}>
			  <h1 className={styles.sliderHeading1}>Commentaires clients</h1>
			<p className={styles.indexInfo}>
				{sliderIndex} / {typedSliderData.length}
			</p>
			<div className={styles.slider}>
    {/* Affichage de la description de l'image actuelle */}
    <p className={styles.imageInfo}>{currentItem?.description}</p>
    
    <div className={styles.contentContainer}>
        {/* Image actuelle du carrousel */}
        <Image 
            src={currentItem?.imageSrc || '/images/bb.webp'}
            alt="estate's rooms" 
            className={styles.sliderImg} 
            width={60} 
            height={60} 
        />

        <div className={styles.textContainer}>
            {/* Affichage du nom */}
            <p className={styles.name}>{currentItem?.name}</p>

            {/* Affichage du métier */}
            <p className={styles.job}>{currentItem?.job}</p>
        </div>
    </div>

    {/* Affichage des étoiles */}
    <div className={styles.stars}>
        {"★".repeat(currentItem?.stars || 0)}
    </div>
				{/* Boutons de navigation */}
				<button type="button" aria-label="Image précédente" onClick={() => toggleImage(-1)} className={`${styles.navigationButton} ${styles.prevButton}`}>
					<Image src={leftChevron} alt="previous image" width={24} height={24} />
				</button>
				<button type="button" aria-label="Image suivante" onClick={() => toggleImage(1)} className={`${styles.navigationButton} ${styles.nextButton}`}>
					<Image src={rightChevron} alt="next image" width={24} height={24} />
				</button>
			</div>
		</div>
);

};
export default Slider;
