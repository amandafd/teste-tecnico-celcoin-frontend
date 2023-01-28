import styles from './TesteMaisRealizado.module.css';
import Botao from '../Botao';
import IconeCell from '../IconeCell';

const TesteMaisRealizado = () => {
    return (
        
        <div className={styles.testeMaisRealizado}>
            
            <div className={styles.divTitulo}>
                <h3 className={styles.tituloTeste}>Teste mais realizado</h3>
            </div>
            <div className={styles.divTeste}>
                <div className={styles.testeDivIcone}>
                    <IconeCell width="5.8rem"/>
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