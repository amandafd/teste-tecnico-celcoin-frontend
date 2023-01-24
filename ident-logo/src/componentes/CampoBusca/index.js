import './CampoBusca.css';
import { Icon } from '@iconify/react';

const CampoBusca = () => {
    return (
        <div className='campoBusca'>
            <input type="text" placeholder="Busca..."></input>
            <Icon icon="ic:baseline-search" width="18" className='campoBusca__icone'/>
        </div>
    )
}

export default CampoBusca;