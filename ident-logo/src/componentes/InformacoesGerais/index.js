import Informacao from '../Informacao';
import './InformacoesGerais.css';
import { Icon } from '@iconify/react';

const InformacoesGerais = () => {
    return (
        <div>
            <h3 className='tituloInformacoes'>Informacoes Gerais</h3>
            <div>
                <div>
                    <Icon icon="ion:person-outline" width="40" className='' />
                    <Informacao porcentagem="+30%"  numero="26" nome="Pacientes ativos"/>
                </div>
                <div>
                    <Icon icon="bx:test-tube" width="40" className='' />
                    <Informacao porcentagem="-10%" numero="306" nome="Testes realizados"/>
                </div>
                <div>
                    <div>
                        <Icon icon="material-symbols:check-small-rounded" width="13.19" className='' />
                        <Icon icon="bx:test-tube" width="40" className='' />
                    </div>
                    <Informacao porcentagem="+30%" numero="139" nome="Testes concluídos"/>
                </div>
                <div>
                    <div>
                        <Icon icon="material-symbols:close-rounded" width="13.19" className='' />
                        <Icon icon="bx:test-tube" width="40" className=''/>
                    </div>
                    <Informacao porcentagem="-3%" numero="11" nome="Testes cancelados"/>
                </div>
            </div>
        </div>
       
    )
}

export default InformacoesGerais;