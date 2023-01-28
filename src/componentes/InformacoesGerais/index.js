import Informacao from "../Informacao";
import styles from "./InformacoesGerais.module.css";
import { Icon } from "@iconify/react";

const InformacoesGerais = () => {
  return (
    <div className={styles.informacoesGerais}>
      <h3 className={styles.tituloInformacoes}>Informacoes Gerais</h3>
      <div className={styles.divTodasInformacoes}>

        <div className={styles.divInformacao}>
          <div className={styles.divIconePorcentagem}>
            <div className={styles.informacaoDivIconeAtivos}>
              <Icon icon="ion:person-outline" width="1.7rem" />
            </div>
            <div className={styles.porcentagemPositiva}>
              <Informacao porcentagem="+30%" />
            </div>
          </div>
          <Informacao numero="26" nome="Pacientes ativos" />
        </div>

        <div className={styles.divInformacao}>
          <div className={styles.divIconePorcentagem}>
            <div className={styles.informacaoDivIconeRealizados}>
              <Icon icon="bx:test-tube" width="1.9rem" />
            </div>
            <div className={styles.porcentagemNegativa}>
              <Informacao porcentagem="-10%" />
            </div>
          </div>
          <Informacao numero="306" nome="Testes realizados" />
        </div>

        <div className={styles.divInformacao}>
          <div className={styles.divIconePorcentagem}>
            <div className={styles.informacaoDivIconeConcluidos}>
              <Icon
                icon="material-symbols:check-small-rounded"
                width="1.5rem"
                className={styles.iconeCheck}
              />
              <Icon
                icon="bx:test-tube"
                width="1.9rem"
                className={styles.iconeTube}
              />
            </div>
            <div className={styles.porcentagemPositiva}>
              <Informacao porcentagem="+30%" />
            </div>
          </div>
          <Informacao numero="139" nome="Testes concluídos" />
        </div>

        <div className={styles.divInformacao}>
          <div className={styles.divIconePorcentagem}>
            <div className={styles.informacaoDivIconeCancelados}>
              <Icon
                icon="material-symbols:close-rounded"
                width="0.8rem"
                className={styles.iconeClose}
              />
              <Icon
                icon="bx:test-tube"
                width="1.9rem"
                className={styles.iconeTube}
              />
            </div>
            <div className={styles.porcentagemNegativa}>
              <Informacao porcentagem="-3%" />
            </div>
          </div>

          <Informacao numero="11" nome="Testes cancelados" />
        </div>
      </div>
    </div>
  );
};

export default InformacoesGerais;
