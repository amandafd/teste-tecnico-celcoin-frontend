import styles from './TesteMaisRealizado.module.css';
import { Icon } from '@iconify/react';
import Botao from '../Botao';

const TesteMaisRealizado = () => {
    return (
        <div className={styles.testeMaisRealizado}>
            <div className={styles.divTitulo}>
                <h3 className={styles.tituloTeste}>Teste mais realizado</h3>
            </div>
            <div className={styles.divTeste}>
                <div className={styles.testeDivIcone}>
                    <Icon icon="uil:cell" width="93.43" className={styles.testeIcone} />
                </div>
                <div className={styles.infoTestes}>
                    <p>Autismo</p>
                    <p>LICENÇAS DISPONÍVEIS</p>
                    <div>
                        <p>13</p>
                        <div>
                            <Botao nome="COMPRAR MAIS" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TesteMaisRealizado;