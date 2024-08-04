import './produto.css';

function Produto(props) {
    return <div className='col-12 p-3 row produto border-bottom'>
        <div className='col-3 justify-content-center d-flex'>
            <img src={props.url_imagem} alt="Foto" className='img-fluid rounded'/>
        </div>
        <div className="col-9">
            <div className='d-flex justify-content-between align-items-center'>
                <b>{props.nome}</b>
                <b>{props.preco_total}</b>
            </div>
            <div className='mb-1'>
                <span>{props.qtd} x {props.preco_unit}</span>
            </div>
            <div>
                <button className='btn btn-outline-danger'>Remover</button>
            </div>
        </div>
    </div>
}

export default Produto;