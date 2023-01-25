import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLateral.module.css'
import { Icon } from '@iconify/react';

const MenuLateral = () => {
    const localizacao = useLocation();

    console.log(localizacao);
    return(
        <nav className={styles.navegacao}>
            <ul>
                <li><Link to='/' className={
                    `${styles.link}
                    ${localizacao.pathname === '/' ? styles.linkDestacado : ""}
                    `}><Icon icon="typcn:home-outline" width="18" /> Dashboard</Link></li>
                <li><Link to='/pacientes' className={styles.link}><Icon icon="gridicons:product-downloadable" width="18" /> Pacientes</Link></li>
                <li><Link to='/' className={styles.link}><Icon icon="gridicons:product-downloadable" width="18" /> Testes</Link></li>
                <li><Link to='/' className={styles.link}><Icon icon="gridicons:product-downloadable" width="18" /> Configurações</Link></li>
            </ul>
        </nav>
    )
}

export default MenuLateral;