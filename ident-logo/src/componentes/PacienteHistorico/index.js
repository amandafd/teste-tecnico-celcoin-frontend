const PacienteHistorico = (props) => {
    return (
        <section>
            <p>{props.nome}</p>
            <p>TESTE REALIZADO</p>
            <p>{props.teste}</p>
            <p>REALIZADO EM:</p>
            <p>{props.data}</p>
        </section>
    )
}

export default PacienteHistorico;