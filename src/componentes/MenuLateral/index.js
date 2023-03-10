import styles from './MenuLateral.module.css'
import { Icon } from '@iconify/react';
import MenuLink from '../MenuLink';

const MenuLateral = () => {
    return(
        <nav className={styles.menuLNav}>
            <ul>
                <li >
                    <MenuLink  to="/">
                        <Icon icon="typcn:home-outline" width="18" /> Dashboard
                    </MenuLink>
                </li>
                <li>
                    <MenuLink to="/pacientes">
                        <Icon icon="gridicons:product-downloadable" width="18" /> Pacientes
                    </MenuLink>
                </li>
                <li>
                    <MenuLink to="/testes">
                        <Icon icon="gridicons:product-downloadable" width="18" /> Testes
                    </MenuLink>
                </li>  
                <li>
                    <MenuLink to="/configuracoes">
                        <Icon icon="gridicons:product-downloadable" width="18" /> Configurações
                    </MenuLink>

                </li>    
            </ul>
        </nav>
    )
}

export default MenuLateral;