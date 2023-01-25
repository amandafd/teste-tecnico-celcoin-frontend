import InformacoesGerais from '../../componentes/InformacoesGerais';
import HistoricoAtendimento from '../../componentes/HistoricoAtendimento';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div>
            <InformacoesGerais />
            <HistoricoAtendimento />
        </div>    
    )
}

export default Dashboard;

/*        <><p className="informacoesTitulo titulos">Informações gerais</p>
        <p className="historicoTitulo titulos">Histórico de atendimento</p>
        <p className="atulizacoesTitulo titulos">Atualizações importantes</p>
        <p className="testeTitulo titulos">Teste mais realizado</p></>*/