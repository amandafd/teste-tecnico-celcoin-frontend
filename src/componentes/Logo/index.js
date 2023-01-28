import styles from'./Logo.module.css';
import VetorLogo from "../../assets/imagens/vetor-ident-logo.png"

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={VetorLogo} alt="Vetor do logo IDENTLOGO" className={styles.logo__vetor} />
            <p className={styles.logo__nome}><span >IDENT</span>LOGO</p>
        </div>
    ) 
}

export default Logo;