import styles from "./PacienteAtualizacoes.module.css";

const PacienteAtualicoes = (props) => {
  return (
    <>
      <section>
        <p className={styles.paciente}>PACIENTE</p>
        <p className={styles.nome}>{props.nome}</p>
        <p className={styles.oTeste} style={{color: props.color}} >{props.completouCancelou} O TESTE: <span className={styles.teste}>{props.teste}</span>
        </p>
        <p className={styles.paciente}>REALIZADO EM: {props.data}</p>
      </section>
    </>
  );
};

export default PacienteAtualicoes;
