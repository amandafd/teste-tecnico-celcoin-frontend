import styles from './TesteMaisRealizado.module.css';
import Botao from '../Botao';
import IconeCell from '../IconeCell';

const TesteMaisRealizado = () => {
    return (
        
        <div className={styles.testeMaisRealizado}>
            <div className={styles.teste__titulo}>
                <h3 >Teste mais realizado</h3>
            </div>
            <div className={styles.teste__teste}>
                <div className={styles.teste__icone}>
                    <IconeCell width="5.8rem"/>
                </div>
                <div className={styles.teste__conteudo}>
                    <p className={styles.autismo}>Autismo</p>
                    <p className={styles.licencas}>LICENÇAS DISPONÍVEIS</p>
                    <div className={styles.teste__numeroBotao}>
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