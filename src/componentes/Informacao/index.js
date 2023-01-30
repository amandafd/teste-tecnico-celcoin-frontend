import styles from "./Informacao.module.css";
import { Icon } from "@iconify/react";

const Informacao = (props) => {
  return (
    <><section><p className={styles.info__porcentagem}>{props.porcentagem}</p></section>
    <section>
      <Icon icon={props.icon} />
      <p className={styles.info__numero}>{props.numero}</p>
      <p className={styles.info__nome}>{props.nome}</p>
    </section></>
    
  );
};

export default Informacao;
