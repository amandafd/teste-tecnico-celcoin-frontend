import CampoBusca from '../CampoBusca';
import styles from "./BarraSuperior.module.css";
import { Icon } from '@iconify/react';
import fotoFelipe from'../../assets/imagens/felipe.png';
import squareIcon from '../../assets/imagens/squaresIcon.png';

const BarraSuperior = () => {
    return (
        <div className={styles.barra}>
            <CampoBusca />
            <div className={styles.opcoes}>
                <Icon icon="material-symbols:settings" className={styles.icone__settings} width="1.25rem"/>
                <div className={styles.icone__notification}>
                    <Icon icon="zondicons:notification" className={styles.icone__notificationSino} width="1rem"/>
                    <Icon icon="material-symbols:circle" className={styles.icone__notificationCirculo} width="0.38rem" />
                </div>
                <div className={styles.olaUsuario}>
                    <p className={styles.olaUsuarioTexto}>Olá, <span>Felipe</span></p>
                    <img src={fotoFelipe} alt="Foto do usuário" className={styles.olaUsuarioFoto}/>
                </div>
                <img src={squareIcon} alt="Icone quadrado" className={styles.squareIcon} width="1.25rem" />
            </div>
            
        </div>
    )
}

export default BarraSuperior;