import './estabelecimento.css';

function Estabelecimento(props) {
    return <div className='estabelecimento col-sm-6 col-md-4 col-lg-3 mb-3 p-2'>
        <a href="#">
            <div className="row">
                <div className='col-3'>
                    <img className="img-estabelecimento" src={props.url_imagem} alt="Imagem" />
                </div>

                <div className="col-7 mt-1 ps-1">
                    <span><b>{props.nome}</b></span>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className='avaliacao'>
                            <i class="fa-solid fa-star"></i>
                            <span>{props.avaliacao} - {props.categoria}</span>
                        </div>
                        
                        
                    </div>
                </div>

                <div className="col-2 d-flex justify-content-center align-items-center">
                    {
                        props.renderRemover ? <button className='btn btn-sm btn-outline-danger'><i class="fa-solid fa-trash"></i></button>
                        : null
                    }
                </div>
            </div>
        </a>
    </div>
}


export default Estabelecimento;