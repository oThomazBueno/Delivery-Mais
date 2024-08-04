import Navbar from "../../components/navbar/navbar";
import './perfil.css';

function Perfil() {
    return <div className="container-fluid mt-page">
        <Navbar />

        <div className="row col-lg-6 offset-lg-3">   
            <div className="row m-2">
                    <h3>Meu Perfil</h3>
            </div>
            
            <div className="row col-12">
                <div className="row m-2">
                    <div className="mb-3">
                        <label for="InputNome" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="InputNome" arial-describedby="nome" />
                    </div>

                    <div className="mb-5">
                        <label for="InputEmail" class="form-label">E-mail</label>
                        <input type="email" class="form-control" id="InputEmail" arial-describedby="email" />
                    </div>

                    <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-lg btn-danger">Salvar Dados</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Perfil;