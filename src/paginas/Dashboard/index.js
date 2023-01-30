import styles from "./Dashboard.module.css";
import InformacoesGerais from "../../componentes/InformacoesGerais";
import HistoricoAtendimento from "../../componentes/HistoricoAtendimento";
import TesteMaisRealizado from "../../componentes/TesteMaisRealizado";
import AtualizacoesImportantes from "../../componentes/AtualizacoesImportantes";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div>
        <InformacoesGerais />
      </div>
      <div className={styles.dashboard__historicoTeste}>
        <HistoricoAtendimento />
        <div>
          <TesteMaisRealizado />
        </div>
      </div>
      <div>
        <AtualizacoesImportantes />
      </div>
    </div>
  );
};

export default Dashboard;
