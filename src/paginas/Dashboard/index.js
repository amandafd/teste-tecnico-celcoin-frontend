import InformacoesGerais from "../../componentes/InformacoesGerais";
import HistoricoAtendimento from "../../componentes/HistoricoAtendimento";
import TesteMaisRealizado from "../../componentes/TesteMaisRealizado";
import styles from "./Dashboard.module.css";
import AtualizacoesImportantes from "../../componentes/AtualizacoesImportantes";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div>
        <InformacoesGerais />
      </div>
      <div className={styles.dashboard__historicoTeste}>
        <HistoricoAtendimento />
        <div className={styles.testeMaisRealizadoDash}>
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

/*        <><p className='informacoesTitulo titulos">Informações gerais</p>
        <p className="historicoTitulo titulos">Histórico de atendimento</p>
        <p className="atulizacoesTitulo titulos">Atualizações importantes</p>
        <p className="testeTitulo titulos">Teste mais realizado</p></>*/
