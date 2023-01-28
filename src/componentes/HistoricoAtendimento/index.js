import styles from "./HistoricoAtendimento.module.css";
import bgHistorico from "../../assets/imagens/bg-historico-1.png"
import IconeCell from "../IconeCell";
import IconeBrain from "../IconeBrain";
import PacienteHistorico from "../PacienteHistorico";
import Botao from "../Botao";

const HistoricoAtendimento = () => {
  return (
    <div className={styles.historicoAtendimento}>
      <div className={styles.divTitulo}>
        <h3 className={styles.tituloHistorico}>Histórico de atendimentos</h3>
        <div className={styles.botaoHistorico}>
          <Botao nome="VER TODOS" />
        </div>
      </div>
      <div className={styles.divHistorico}>
        <div className={styles.historico}>
          <div className={styles.historicoDivImagem}>
            <img
              src={bgHistorico}
              alt="Imagem de fundo"
              className={styles.historicoImagem}
            />
            <IconeBrain width="3.75rem" />
          </div>
          <PacienteHistorico
            nome="Renata Augusto Ferreira"
            teste="TDAH CAB ADHD"
            data="20/10/2023"
          />
        </div>
        <div className={styles.historico}>
          <div className={styles.historicoDivImagem}>
            <img
              src={bgHistorico}
              alt="Imagem de fundo"
              className={styles.historicoImagem}
            />
            <IconeCell width="3.75rem" />
          </div>
          <PacienteHistorico
            nome="Renata Augusto Ferreira"
            teste="Autismo"
            data="20/09/2023"
          />
        </div>
        <div className={styles.historico}>
          <div className={styles.historicoDivImagem}>
            <img
              src={bgHistorico}
              alt="Imagem de fundo"
              className={styles.historicoImagem}
            />
            <IconeBrain width="3.75rem" />
          </div>
          <PacienteHistorico
            nome="Renata Augusto Ferreira"
            teste="TDAH CAB ADHD"
            data="20/10/2023"
          />
        </div>
        <div className={styles.historico}>
          <div className={styles.historicoDivImagem}>
            <img
              src={bgHistorico}
              alt="Imagem de fundo"
              className={styles.historicoImagem}
            />
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
