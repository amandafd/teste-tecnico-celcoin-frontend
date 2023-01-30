import styles from "./AtualizacoesImportantes.module.css";
import Renata from "../../assets/imagens/renata.png";
import Carlos from "../../assets/imagens/carlos.png";
import Suelton from "../../assets/imagens/suelton.png";
import PacienteAtualicoes from "../PacienteAtualizacoes";

const AtualizacoesImportantes = () => {
  return (
    <div className={styles.atualizacoesImportantes}>
      <h3 className={styles.atualizacoes__titulo}>Atualizações Importantes</h3>
      <div className={styles.divAtualizacoes}>
        <div className={styles.divAtualizacao}>
          <div className={styles.fotoPaciente}>
            <img src={Renata} alt="Foto do usuário" />
          </div>
          <div className={styles.infoPaciente}>
            <PacienteAtualicoes
              nome="Renata Augusto Ferreira"
              color="#1EAC79"
              completouCancelou="COMPLETOU"
              teste="TDAH CAB ADHD"
              data="20/10/2023"
            />
          </div>
        </div>
        <div className={styles.divAtualizacao}>
          <div className={styles.fotoPaciente}>
            <img src={Carlos} alt="Foto do usuário" />
          </div>
          <div className={styles.infoPaciente}>
            <PacienteAtualicoes
              nome="Carlos Nobre Baccio"
              color="#EF0C35"
              completouCancelou="CANCELOU"
              teste="TDAH CAB ADHD"
              data="20/10/2023"
            />
          </div>
        </div>
        <div className={styles.divAtualizacao}>
          <div className={styles.fotoPaciente}>
            <img src={Suelton} alt="Foto do usuário" />
          </div>
          <div className={styles.infoPaciente}>
            <div className={styles.infoPaciente}>
              <PacienteAtualicoes
                nome="Suelton A. Mellis"
                color="#EF0C35"
                completouCancelou="CANCELOU"
                teste="TDAH CAB ADHD"
                data="20/10/2023"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtualizacoesImportantes;
