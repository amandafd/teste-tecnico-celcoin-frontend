import styles from './MenuLink.module.css';
import { NavLink } from 'react-router-dom';

const MenuLink = ({children, to}) => {
    return (
        <div className={styles.divNavLink}>
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
        </div>
        
    )
}
export default MenuLink;
