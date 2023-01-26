import styles from'./HistoricoAtendimento.module.css';
import { Icon } from '@iconify/react';
import PacienteHistorico from '../PacienteHistorico';

const HistoricoAtendimento = () => {
    return (
        <div className={styles.historicoAtendimento}>
            <h3 className={styles.tituloHistorico}>Histórico de atendimentos</h3>
            <div className={styles.divHistorico}>
                <div className={styles.historico}>
                    <div className={styles.historicoDivImagem}>
                        <img src="/imagens/bg-historico-1.png" alt="Imagem de fundo"  className={styles.historicoImagem} />
                        <Icon icon="uil:brain" width="60.1" className={styles.historicoIcone} />
                    </div>
                    <PacienteHistorico nome="Renata Augusto Ferreira" teste="TDAH CAB ADHD" data="20/10/2023" />
                </div >
                <div className={styles.historico}>
                    <div className={styles.historicoDivImagem}>
                        <img src="/imagens/bg-historico-1.png" alt="Imagem de fundo" className={styles.historicoImagem} />
                        <Icon icon="uil:cell" width="60.6" className={styles.historicoIcone} />
                    </div>
                    <PacienteHistorico nome="Renata Augusto Ferreira" teste="Autismo" data="20/09/2023" />
                </div>
                <div className={styles.historico}>
                    <div className={styles.historicoDivImagem}>
                        <img src="/imagens/bg-historico-1.png" alt="Imagem de fundo" className={styles.historicoImagem} />
                        <Icon icon="uil:brain" width="60.1" className={styles.historicoIcone} />
                    </div>
                    <PacienteHistorico nome="Renata Augusto Ferreira" teste="TDAH CAB ADHD" data="20/10/2023"/>
                </div>
                <div className={styles.historico}>
                    <div className={styles.historicoDivImagem}>
                        <img src="/imagens/bg-historico-1.png" alt="Imagem de fundo"  className={styles.historicoImagem}/>
                        <Icon icon="uil:cell" width="60.6" className={styles.historicoIcone} />
                    </div>
                    <PacienteHistorico nome="Renata Augusto Ferreira" teste="Autismo" data="20/09/2023"/>
                </div>
            </div>
        </div>
    )
}

export default HistoricoAtendimento;