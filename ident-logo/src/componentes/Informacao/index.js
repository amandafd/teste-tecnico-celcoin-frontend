import './Informacao.css'

const Informacao = (props) => {
    return (
        <section className='informacao'>
            <div className='icone'>
                {props.icone}
            </div> 
            <div>
                <p>{props.porcentagem}</p>
            </div>
            <p>{props.nome}</p> 
            <p>{props.numero}</p> 
        </section>
    )
}

export default Informacao;