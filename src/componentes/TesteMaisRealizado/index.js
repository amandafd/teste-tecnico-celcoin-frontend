import styles from './TesteMaisRealizado.module.css';
import Botao from '../Botao';
import IconeCell from '../IconeCell';

const TesteMaisRealizado = () => {
    return (
        
        <div className={styles.testeMaisRealizado}>
            
            <div className={styles.titulo}>
                <h3 className={styles.tituloTeste}>Teste mais realizado</h3>
            </div>
            <div className={styles.divTeste}>
                <div className={styles.testeDivIcone}>
                    <IconeCell width="5.8rem"/>
                </div>
                <div>
                    <p className={styles.autismo}>Autismo</p>
                    <p className={styles.licencas}>LICENÇAS DISPONÍVEIS</p>
                    <div className={styles.numeroComprar}>
                        <p className={styles.numero}>13</p>
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