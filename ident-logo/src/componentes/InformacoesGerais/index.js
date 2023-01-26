import Informacao from '../Informacao';
import styles from'./InformacoesGerais.module.css';
import { Icon } from '@iconify/react';

const InformacoesGerais = () => {
    return (
        <div className={styles.informacoesGerais}>
            <h3 className={styles.tituloInformacoes}>Informacoes Gerais</h3>
            <div className={styles.divInformacoes}>
                <div className={styles.divInformacao}>
                    <Icon icon="ion:person-outline" width="40"  />
                    <Informacao porcentagem="+30%"  numero="26" nome="Pacientes ativos"/>
                </div>
                <div className={styles.divInformacao}>
                    <Icon icon="bx:test-tube" width="40"  />
                    <Informacao porcentagem="-10%" numero="306" nome="Testes realizados"/>
                </div>
                <div className={styles.divInformacao}>
                    <div>
                        <Icon icon="material-symbols:check-small-rounded" width="13.19"  />
                        <Icon icon="bx:test-tube" width="40"  />
                    </div>
                    <Informacao porcentagem="+30%" numero="139" nome="Testes concluídos"/>
                </div>
                <div className={styles.divInformacao}>
                    <div>
                        <Icon icon="material-symbols:close-rounded" width="13.19"  />
                        <Icon icon="bx:test-tube" width="40" />
                    </div>
                    <Informacao porcentagem="-3%" numero="11" nome="Testes cancelados"/>
                </div>
            </div>
        </div>
    )
}

export default InformacoesGerais;