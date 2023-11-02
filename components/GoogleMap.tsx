"use client"
import LazyIframe from "./LazyIframe"; 

const GoogleMap = () => {
  return (
    <div>
      <LazyIframe
        src="https://maps.google.com/maps?q=Buizingen&t=m&z=9&output=embed&iwloc=near"
        titre="Buizingen"
        largeur="600" // Définissez la largeur souhaitée
        hauteur="450" // Définissez la hauteur souhaitée
      />
    </div>
  );
};

export default GoogleMap;
