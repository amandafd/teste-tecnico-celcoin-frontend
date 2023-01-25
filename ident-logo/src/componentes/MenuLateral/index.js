import styles from './MenuLateral.module.css'
import { Icon } from '@iconify/react';
import MenuLink from '../MenuLink';

const MenuLateral = () => {
    return(
        <nav className={styles.navegacao}>
            <ul>
                <li ><MenuLink className={styles.itemMenu} to="/">
                        <Icon icon="typcn:home-outline" width="18" /> Dashboard
                    </MenuLink></li>
                    <li className={styles.itemMenu}><MenuLink to="/pacientes">
                        <Icon icon="gridicons:product-downloadable" width="18" /> Pacientes
                    </MenuLink></li>
                <li className={styles.itemMenu}><MenuLink to="/testes">
                        <Icon icon="gridicons:product-downloadable" width="18" /> Testes
                    </MenuLink></li>
                    <li className={styles.itemMenu}><MenuLink to="/configuracoes">
                        <Icon icon="gridicons:product-downloadable" width="18" /> Configurações
                    </MenuLink></li>
            </ul>
        </nav>
    )
}

export default MenuLateral;