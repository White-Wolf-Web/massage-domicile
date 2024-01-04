import styles from './Footer.module.css'; 
import SocialNetwork from '../socialNetwork/SocialNetwork';
import { BoutonCTA } from '../buttonCTA/BoutonCTA';
import LettreOr from "@/public/images/lettreOr.webp"
import Image from 'next/image';
import Link from 'next/link';

export function Footer  ()  {
    return (
        <footer className={styles.footer}>
          <div className={styles.footerTop}>
          <SocialNetwork />
          <Link href="/" >
            <Image
					src={LettreOr}
					alt="massage à domicile ecrit en lettre d'or"
					placeholder="blur"
					quality={100}
          width={300}
          height={111}
					className={styles.imgLettreOr}
          title="MAssage à domicile en 3D et Or"
				/></Link>
            
           < BoutonCTA />
          
          </div>
          <div className={styles.footerBottom}>
          <Link href={"/"} className={styles.footerTown} >Massage à Domicile: </Link>&nbsp;
          <Link href={"/bruxelles"} className={styles.footerTown} >Bruxelles,</Link>&nbsp;
          <Link href={"/charleroi"} className={styles.footerTown} >Charleroi,</Link>&nbsp;
          <Link href={"/courcelles"} className={styles.footerTown} >Courcelles,</Link>&nbsp;
          <Link href={"/halle"} className={styles.footerTown} >Hal,</Link>&nbsp;
          <Link href={"/mons"} className={styles.footerTown} >Mons,</Link>&nbsp;
          <Link href={"/namur"} className={styles.footerTown} >Namur,</Link>&nbsp;
          <Link href={"/nivelles"} className={styles.footerTown} >Nivelles ...</Link>&nbsp;
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} Massage à Domicile - Tous droits réservés.</p>
          </div>
        </footer>
      );
    };

export default Footer;






