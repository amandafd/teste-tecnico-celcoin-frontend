import CampoBusca from '../CampoBusca';
import styles from "./BarraSuperior.module.css";
import { Icon } from '@iconify/react';
import fotoFelipe from'../../assets/imagens/felipe.png';
import squareIcon from '../../assets/imagens/squaresIcon.png';

const BarraSuperior = () => {
    return (
        <div className={styles.barra}>
            <CampoBusca />
            <div className={styles.barra__opcoes}>
                <Icon icon="material-symbols:settings" className={styles.barra__iconeSettings} width="1.25rem"/>
                <div className={styles.barra__iconeNotification}>
                    <Icon icon="zondicons:notification" className={styles.barra__iconeNotificationSino} width="1rem"/>
                    <Icon icon="material-symbols:circle" className={styles.barra__iconeNotificationCirculo} width="0.38rem" />
                </div>
                <div className={styles.barra__olaUsuario}>
                    <p className={styles.barra__olaUsuarioTexto}>Olá, <span>Felipe</span></p>
                    <img src={fotoFelipe} alt="Foto do usuário" className={styles.barra__olaUsuarioFoto}/>
                </div>
                <img src={squareIcon} alt="Icone quadrado" className={styles.barra__squareIcon} width="1.25rem" />
            </div>
            
        </div>
    )
}

export default BarraSuperior;