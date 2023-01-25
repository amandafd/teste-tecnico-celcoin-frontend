import './Informacao.css'

const Informacao = (props) => {
    return (
        <section className='informacao'>
            <div>
                <p>{props.porcentagem}</p>
            </div>
            <p>{props.numero}</p> 
            <p>{props.nome}</p> 
        </section>
    )
}

export default Informacao;