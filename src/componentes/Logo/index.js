import styles from "./Logo.module.css";
import LogoVetor from "../../assets/imagens/vetor-ident-logo.png";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={LogoVetor} alt="Vetor do logo IDENTLOGO" className={styles.logoVetor} />
      <p className={styles.logoNome}>
        <span>IDENT</span>LOGO
      </p>
    </div>
  );
};

export default Logo;
