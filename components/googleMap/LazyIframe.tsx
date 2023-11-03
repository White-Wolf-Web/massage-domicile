"use client"
import styles from "./GoogleMap.module.css"
import { useEffect, useRef, useState } from 'react';

interface PropsIframeParesseux {
  src: string;
  titre: string;
  classe?: string;
  largeur?: string;
  hauteur?: string;
}

const LazyIframe = ({ src, titre, classe, largeur, hauteur }: PropsIframeParesseux) => {
  const refIframe = useRef<HTMLIFrameElement>(null);
  const [charge, setCharge] = useState(false);

  useEffect(() => {
    const observateur = new IntersectionObserver((entrees) => {
      entrees.forEach((entree) => {
        if (entree.isIntersecting) {
          setCharge(true);
          observateur.unobserve(entree.target);
        }
      });
    });

    if (refIframe.current) {
      observateur.observe(refIframe.current);
    }

    return () => {
      observateur.disconnect();
    };
  }, []);

  return (
    <iframe
      ref={refIframe}
      className={`${styles.googleMap} ${classe}`}
      src={charge ? src : undefined}
      title={titre}
      aria-label={titre}
      width={largeur}
      height={hauteur}
    ></iframe>
  );
};

export default LazyIframe;
