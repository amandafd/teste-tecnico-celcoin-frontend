import styles from './CampoBusca.module.css';
import { Icon } from '@iconify/react';

const CampoBusca = () => {
    return (
        <div className={styles.campoBusca}>
            <input type="text" placeholder="Busca..."></input>
            <Icon icon="ic:baseline-search" width="18" className={styles.campoBusca__icone} />
        </div>
    )
}

export default CampoBusca;