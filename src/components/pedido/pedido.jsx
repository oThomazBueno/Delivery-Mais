import './pedido.css'

function Pedido(props) {
    return <div className="pedido col-sm-6 mb-4 p-1">
        <a href="#">
        <div className='row'>
            <div className="col-3">
                <img src={props.url_imagem} alt="Pedido" className='img-fluid' />
            </div>
            <div className="col-9 mt-2 ps-1">
                <span className='d-block'><b>{props.estabelecimento}</b></span>
                <span className='text-danger d-block'>Pedido Nº {props.n_pedido}</span>
                <span className='d-block'>{props.qtd} itens - {props.preco} - {props.data}</span>
                <div>
                    <i class="fa-solid fa-star d-inline-block"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
        </div>
        </a>               
    </div>
        
}

export default Pedido;