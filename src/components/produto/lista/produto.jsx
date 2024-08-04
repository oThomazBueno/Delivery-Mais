import './produto.css';

function Produto(props) {
    return <div className="produto col-lg-6 mt-5 border-bottom">
        <a href="#">
            <div className="row mb-4">
                <div className="col-3">
                    <img src={props.url_imagem} alt="Imagem" className='rounded'/>
                </div>

                <div className="col-9">
                    <span className="d-block"><b>{props.nome}</b></span>
                    <p className='d-block'>{props.ingredientes}</p>
                    <span className='text-success'>{props.preco}</span>
                </div>
            </div>
        </a>
    </div>
}

export default Produto;