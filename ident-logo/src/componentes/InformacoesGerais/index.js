import Informacao from '../Informacao';
import './InformacoesGerais.css';
import { Icon } from '@iconify/react';

const InformacoesGerais = () => {
    return (
        <div>
            <h3 className='titulo'>Informacoes Gerais</h3>
            <Icon icon="ion:person-outline" width="40" /><Informacao porcentagem="+30%" nome="Pacientes ativos" numero="26"/>
            <Icon icon="bx:test-tube" width="40" /><Informacao porcentagem="-10%" nome="Testes realizados" numero="306"/>
            <div><Icon icon="material-symbols:check-small-rounded" width="13.19" /><Icon icon="bx:test-tube" width="40" /></div><Informacao porcentagem="+30%" nome="Testes concluídos" numero="139"/>
            <div><Icon icon="material-symbols:close-rounded" width="13.19" /><Icon icon="bx:test-tube" width="40" /></div><Informacao porcentagem="-3%" nome="Testes cancelados" numero="11"/>
        </div>
       
    )
}

export default InformacoesGerais;