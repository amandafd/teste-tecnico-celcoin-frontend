import styles from './MenuLink.module.css';
import { NavLink } from 'react-router-dom';

const MenuLink = ({children, to}) => {
    return (
        <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to={to}
            end
        >
            {children}
        </NavLink>
    )
}
export default MenuLink;

/*<Icon icon="typcn:home-outline" width="18" /> Dashboard*/