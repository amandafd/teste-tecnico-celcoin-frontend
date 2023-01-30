import styles from "./AtualizacoesImportantes.module.css";
import PacienteAtualicoes from "../PacienteAtualizacoes";
import Renata from "../../assets/imagens/renata.png";
import Carlos from "../../assets/imagens/carlos.png";
import Suelton from "../../assets/imagens/suelton.png";


const AtualizacoesImportantes = () => {
  return (
    <div className={styles.atualizacoesImportantes}>
      <h3 className={styles.atualizacoes__titulo}>Atualizações Importantes</h3>
      <div className={styles.atualizacoes__atualizacoes}>
        <div className={styles.atualizacoes__atualizacao}>
          <div className={styles.atualizacoes__atualizacoes__fotoPaciente}>
            <img src={Renata} alt="Foto do usuário" />
          </div>
          <div className={styles.atualizacoes__atualizacoes__infoPaciente}>
            <PacienteAtualicoes
              nome="Renata Augusto Ferreira"
              color="#1EAC79"
              completouCancelou="COMPLETOU"
              teste="TDAH CAB ADHD"
              data="20/10/2023"
            />
          </div>
        </div>
        <div className={styles.atualizacoes__atualizacao}>
          <div className={styles.atualizacoes__fotoPaciente}>
            <img src={Carlos} alt="Foto do usuário" />
          </div>
          <div className={styles.atualizacoes__infoPaciente}>
            <PacienteAtualicoes
              nome="Carlos Nobre Baccio"
              color="#EF0C35"
              completouCancelou="CANCELOU"
              teste="TDAH CAB ADHD"
              data="20/10/2023"
            />
          </div>
        </div>
        <div className={styles.atualizacoes__atualizacao}>
          <div className={styles.atualizacoes__fotoPaciente}>
            <img src={Suelton} alt="Foto do usuário" />
          </div>
          <div className={styles.atualizacoes__infoPaciente}>
            <div className={styles.atualizacoes__infoPaciente}>
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
