import Estabelecimento from "../../components/estabelecimento/estabelecimento";
import Navbar from "../../components/navbar/navbar";
import './favoritos.css';

function Favoritos() {
    return <div className="container-fluid mt-page">
        <Navbar />

        <div className="row col-lg-8 offset-lg-2">
            <div className="row m-2">
                <h3>Meus Favoritos</h3>
            </div>
            <div className="row m-2  border-bottom">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map(estabelecimento => {
                        return <Estabelecimento url_imagem="https://logodownload.org/wp-content/uploads/2014/04/mcdonalds-logo-8.png" 
                                                                    nome="Mc Donald's"
                                                                    avaliacao="4.5"
                                                                    categoria="Pizza"
                                                                    renderRemover/>
                    })
                }
            </div>
        </div>
    </div>
}

export default Favoritos;