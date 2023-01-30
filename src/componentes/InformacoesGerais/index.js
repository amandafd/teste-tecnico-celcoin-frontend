import Informacao from "../Informacao";
import styles from "./InformacoesGerais.module.css";
import { Icon } from "@iconify/react";

const InformacoesGerais = () => {
  return (
    <div className={styles.infoGerais}>
      <h3 className={styles.infoGerais__titulo}>Informacoes Gerais</h3>
      <div className={styles.infoGerais__todasInfo}>

        <div className={styles.infoGerais__info}>
          <div className={styles.infoGerais__iconePorcentagem}>
            <div className={styles.infoGerais__iconeAtivos}>
              <Icon icon="ion:person-outline" width="1.7rem" />
            </div>
            <div className={styles.infoGerais__porcentagemPositiva}>
              <Informacao porcentagem="+30%" />
            </div>
          </div>
          <Informacao numero="26" nome="Pacientes ativos" />
        </div>

        <div className={styles.infoGerais__info}>
          <div className={styles.infoGerais__iconePorcentagem}>
            <div className={styles.infoGerais__iconeRealizados}>
              <Icon icon="bx:test-tube" width="1.9rem" />
            </div>
            <div className={styles.infoGerais__porcentagemNegativa}>
              <Informacao porcentagem="-10%" />
            </div>
          </div>
          <Informacao numero="306" nome="Testes realizados" />
        </div>

        <div className={styles.infoGerais__info}>
          <div className={styles.infoGerais__iconePorcentagem}>
            <div className={styles.infoGerais__coneConcluidos}>
              <Icon
                icon="material-symbols:check-small-rounded"
                width="1.5rem"
                className={styles.infoGerais__iconeCheck}
              />
              <Icon
                icon="bx:test-tube"
                width="1.9rem"
                className={styles.infoGerais__iconeTube}
              />
            </div>
            <div className={styles.infoGerais__porcentagemPositiva}>
              <Informacao porcentagem="+30%" />
            </div>
          </div>
          <Informacao numero="139" nome="Testes concluídos" />
        </div>

        <div className={styles.infoGerais__info}>
          <div className={styles.infoGerais__iconePorcentagem}>
            <div className={styles.infoGerais__iconeCancelados}>
              <Icon
                icon="material-symbols:close-rounded"
                width="0.8rem"
                className={styles.infoGerais__iconeClose}
              />
              <Icon
                icon="bx:test-tube"
                width="1.9rem"
                className={styles.infoGerais__iconeTube}
              />
            </div>
            <div className={styles.infoGerais__porcentagemNegativa}>
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
