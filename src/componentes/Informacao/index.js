import styles from './Informacao.module.css';

const Informacao = (props) => {
    return (
        <section>
            <div>
                <p className={styles.porcentagem}>{props.porcentagem}</p>
            </div>
            <p>{props.numero}</p> 
            <p>{props.nome}</p> 
        </section>
    )
}

export default Informacao;