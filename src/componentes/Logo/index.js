import styles from'./Logo.module.css';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src="/imagens/vetor-ident-logo.png" alt="Vetor do logo IDENTLOGO" className={styles.logo__vetor} />
            <p className={styles.logo__nome}><span >IDENT</span>LOGO</p>
        </div>
    ) 
}

export default Logo;