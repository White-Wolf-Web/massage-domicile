import styles from './Footer.module.css'; 
import SocialNetwork from '../socialNetwork/SocialNetwork';
import { BoutonCTA } from '../buttonCTA/BoutonCTA';
import LettreOr from "@/public/images/lettreOr.webp"
import Image from 'next/image';

export function Footer  ()  {
    return (
        <footer className={styles.footer}>
          <div className={styles.footerTop}>
          <SocialNetwork />
          
            <Image
					src={LettreOr}
					alt="massage à domicile ecrit en lettre d'or"
					placeholder="blur"
					quality={100}
          width={300}
          height={111}
					className={styles.imgLettreOr}
				/>
            
           < BoutonCTA />
          
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} Massage à Domicile - Tous droits réservés.</p>
          </div>
        </footer>
      );
    };

export default Footer;






