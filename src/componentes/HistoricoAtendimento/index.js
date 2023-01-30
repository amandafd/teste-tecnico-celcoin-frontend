import styles from "./HistoricoAtendimento.module.css";
import PacienteHistorico from "../PacienteHistorico";
import Botao from "../Botao";
import IconeCell from "../IconeCell";
import IconeBrain from "../IconeBrain";

const HistoricoAtendimento = () => {
  return (
    <div className={styles.historicoAtendimento}>
      <div className={styles.historico__tituloDiv}>
        <h3 className={styles.historico__titulo}>Histórico de atendimentos</h3>
        <div className={styles.historico__botao}>
          <Botao nome="VER TODOS" />
        </div>
      </div>
      <div className={styles.historico__historicos}>
        <div className={styles.historico__historico}>
          <div className={styles.historico__imagemIcone}>
            <IconeBrain width="3.75rem" />
          </div>
          <PacienteHistorico
            nome="Renata Augusto Ferreira"
            teste="TDAH CAB ADHD"
            data="20/10/2023"
          />
        </div>
        <div className={styles.historico__historico}>
          <div className={styles.historico__imagemIcone}>
            <IconeCell width="3.75rem" />
          </div>
          <PacienteHistorico
            nome="Renata Augusto Ferreira"
            teste="Autismo"
            data="20/09/2023"
          />
        </div>
        <div className={styles.historico__historico}>
          <div className={styles.historico__imagemIcone}>
            <IconeBrain width="3.75rem" />
          </div>
          <PacienteHistorico
            nome="Renata Augusto Ferreira"
            teste="TDAH CAB ADHD"
            data="20/10/2023"
          />
        </div>
        <div className={styles.historico__historico}>
          <div className={styles.historico__imagemIcone}>
            <IconeCell width="3.75rem" />
          </div>
          <PacienteHistorico
            nome="Renata Augusto Ferreira"
            teste="Autismo"
            data="20/09/2023"
          />
        </div>
      </div>
    </div>
  );
};

export default HistoricoAtendimento;
