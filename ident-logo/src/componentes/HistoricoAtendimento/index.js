import './HistoricoAtendimento.css';
import { Icon } from '@iconify/react';
import PacienteHistorico from '../PacienteHistorico';

const HistoricoAtendimento = () => {
    return (
        <div>
            <h3 className='tituloHistorico'>Histórico de atendimentos</h3>
            <div>
                <div>
                    <img src="/imagens/bg-historico-1.png" alt="Imagem de fundo" className="fundoHistorico" />
                    <Icon icon="uil:brain" width="60.1" />
                </div>
                <PacienteHistorico nome="Renata Augusto Ferreira" teste="TDAH CAB ADHD" data="20/10/2023"/>
            </div>
            <div>
                <div>
                    <img src="/imagens/bg-historico-1.png" alt="Imagem de fundo" className="fundoHistorico" />
                    <Icon icon="uil:cell" width="60.6" />
                </div>
                <PacienteHistorico nome="Renata Augusto Ferreira" teste="Autismo" data="20/09/2023"/>
            </div>
            <div>
                <div>
                    <img src="/imagens/bg-historico-1.png" alt="Imagem de fundo" className="fundoHistorico" />
                    <Icon icon="uil:brain" width="60.1" />
                </div>
                <PacienteHistorico nome="Renata Augusto Ferreira" teste="TDAH CAB ADHD" data="20/10/2023"/>
            </div>
            <div>
                <div>
                    <img src="/imagens/bg-historico-1.png" alt="Imagem de fundo" className="fundoHistorico" />
                    <Icon icon="uil:cell" width="60.6" />
                </div>
                <PacienteHistorico nome="Renata Augusto Ferreira" teste="Autismo" data="20/09/2023"/>
            </div>
        </div>
    )
}

export default HistoricoAtendimento;