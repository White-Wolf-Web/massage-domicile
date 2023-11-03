"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Slider.module.css";
import sliderData from "@/data/carouselData";
import leftChevron from "@/public/left-arrow.svg";
import rightChevron from "@/public/right-arrow.svg";
import star from "@/public/images/star-icon.webp";

type CarouselItem = {
	text: string;
	imageSrc: string;
	stars: number;
	id: number;
	name: string;
	description: string;
	job: string;
};

type CarouselProps = {
	items: CarouselItem[];
};

const typedSliderData: CarouselItem[] = sliderData;

const Slider = ({ items }: CarouselProps) => {
	const [sliderIndex, setSliderIndex] = useState<number>(1);
	const [animate, setAnimate] = useState(true);
	const [exit, setExit] = useState(false);

	function toggleImage(indexPayload: number) {
		setExit(true); // Commence l'animation de sortie
		setTimeout(() => {
		  setSliderIndex((state) => {
			const newIndex = indexPayload + state;
			if (newIndex > typedSliderData.length) {
			  return 1;
			} else if (newIndex < 1) {
			  return typedSliderData.length;
			} else {
			  return newIndex;
			}
		  });
		  setExit(false); // Prépare pour l'animation d'entrée
		  setAnimate(false);
		}, 1700); // Ce délai doit correspondre à la durée de votre animation de sortie
	  }
	
	  useEffect(() => {
		let intervalID: NodeJS.Timeout;
		if (!exit) {
		  setAnimate(true);
		  intervalID = setInterval(() => toggleImage(1), 6000);
		}
		return () => {
		  clearInterval(intervalID);
		};
	  }, [sliderIndex, exit]);

	const currentItem = sliderData.find((item) => item.id === sliderIndex);

	return (
		<div className={styles.sliderContainer}>
			<h3 className={styles.sliderHeading1}>Commentaires clients</h3>
			<p className={styles.indexInfo}>
				{sliderIndex} / {typedSliderData.length}
			</p>

			<div className={styles.navigationContainer}>
				<button type="button" aria-label="Image précédente" onClick={() => toggleImage(-1)} className={`${styles.navigationButton} ${styles.prevButton}`}>
					<Image src={leftChevron} alt="commentaire précedant (d'un massage à domicile) " width={24} height={24} />
				</button>
				<button type="button" aria-label="Image suivante" onClick={() => toggleImage(1)} className={`${styles.navigationButton} ${styles.nextButton}`}>
					<Image src={rightChevron} alt="commentaire suivant (d'un massage à Bruxelles) " width={24} height={24} />
				</button>
			</div>

			<div className={`${styles.slider} ${animate ? styles.sliderEnter : ""} ${exit ? styles.sliderExit : ""}`}>
				<p className={styles.imageInfo}>{currentItem?.description}</p>
				<div className={styles.contentContainer}>
					<Image
						src={currentItem?.imageSrc || "/images/placeholder.jpg"}
						alt={currentItem?.text || "Default alt text"}
						className={styles.sliderImg}
						width={60}
						height={60}
					/>
					<div className={styles.textContainer}>
						<p className={styles.name}>{currentItem?.name}</p>
						<p className={styles.job}>{currentItem?.job}</p>
					</div>
				</div>
				<div className={styles.stars}>
					{Array.from({ length: currentItem?.stars || 0 }, (_, index) => (
						<Image key={index} src={star} alt="Star" width={25} height={25} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Slider;
