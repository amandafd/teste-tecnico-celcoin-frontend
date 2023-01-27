const PacienteAtualicoes = (props) => {
    return (
        <section>
        <p>PACIENTE</p>
        <p>{props.nome}</p>
        <p>{props.completouCancelou} O TESTE: <span>{props.teste}</span></p>
        <p>REALIZADO EM: {props.data}</p>
    </section>
    )
    
}

export default PacienteAtualicoes;