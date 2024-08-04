import Endereco from "../../../components/endereco/endereco";
import Navbar from "../../../components/navbar/navbar";
import './enderecos.css';

function Enderecos() {
    return <div className="container-fluid mt-page">
        <Navbar />
        <div className="row col-lg-6 offset-3">
            <div className="col-12 d-flex justify-content-between align-items-center mt-4">
                    <h3>Meus Endereços</h3>
                    <button className="btn btn-sm btn-outline-danger"><i class="fa-solid fa-plus"></i></button>
            </div>
            
            <div className="row mt-5">
                {
                    [1, 2, 3, 4].map(endereco => {
                        return <Endereco />
                    })
                }
            </div>
        </div>
        
        
    </div>
}

export default Enderecos;