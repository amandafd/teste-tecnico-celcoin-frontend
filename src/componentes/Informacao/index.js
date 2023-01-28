import styles from "./Informacao.module.css";
import { Icon } from "@iconify/react";

const Informacao = (props) => {
  return (
    <section>
      <Icon icon={props.icon} />
      {props.porcentagem}
      <p className={styles.numero}>{props.numero}</p>
      <p className={styles.nome}>{props.nome}</p>
    </section>
  );
};

export default Informacao;
