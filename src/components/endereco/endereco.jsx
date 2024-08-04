import './endereco.css'

function Endereco() {
    return <div className="endereco col-12 pt-3 pb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
            <div>
                <span className='d-block'><b>Av. Paulista, 1500 - Ap 65</b></span>
                <small className='d-block'>Centro - São Paulo - SP</small>
                <small className='d-inline-block me-3'>CEP: 05210-000</small>
                <small className='d-inline-block text-danger'>Endereço Principal</small>
            </div>
            <div>
                <button className='btn btn-outline-danger me-3 m-2'><i class="fa-solid fa-pen"></i></button>
                <button className='btn btn-danger m-2'><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
        
    </div>
}

export default Endereco;