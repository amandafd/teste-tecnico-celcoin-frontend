import styles from './PacienteHistorico.module.css';

const PacienteHistorico = (props) => {
    return (
        <section className={styles.pacienteHistorico}>
            <p className={styles.nomeHistorico}>{props.nome}</p>
            <p className={styles.testeRealizadoHistorico}>TESTE REALIZADO</p>
            <p className={styles.testeHistorico}>{props.teste}</p>
            <p className={styles.realizadoEmHistorico}>REALIZADO EM:</p>
            <p className={styles.dataHistorico}>{props.data}</p>
        </section>
    )
}

export default PacienteHistorico;