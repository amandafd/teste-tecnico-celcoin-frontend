import PacienteAtualicoes from '../PacienteAtualizacoes';
import styles from './AtualizacoesImportantes.module.css';

const AtualizacoesImportantes = () => {
    return (
        <div className={styles.atualizacoesImportantes}>
            <h3 className={styles.tituloAtualizacoes}>Atualizações Importantes</h3>

            <div className={styles.divAtualizacoes}>
                <div className={styles.divAtualizacao}>
                    <div className={styles.fotoPaciente}>FOTO</div>
                    <div className={styles.infoPaciente}><PacienteAtualicoes nome="Renata Augusto Ferreira" completouCancelou=" COMPLETOU" teste="TDAH CAB ADHD" data="20/10/2023" /> </div>
                </div>
                <div className={styles.divAtualizacao}>
                    <div className={styles.fotoPaciente}>FOTO</div>
                    <div className={styles.infoPaciente}><PacienteAtualicoes nome="Carlos Nobre Baccio" completouCancelou="CANCELOU" teste="TDAH CAB ADHD" data="20/10/2023" /> </div>
                </div>
                <div className={styles.divAtualizacao}>
                    <div className={styles.fotoPaciente}>FOTO</div>
                    <div className={styles.infoPaciente}><PacienteAtualicoes nome="Suelton A. Mellis" completouCancelou="CANCELOU" teste="TDAH CAB ADHD" data="20/10/2023" /> </div>
                </div>
            </div>
        </div>
    )
}

export default AtualizacoesImportantes;