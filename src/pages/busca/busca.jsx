import Estabelecimento from "../../components/estabelecimento/estabelecimento";
import Navbar from "../../components/navbar/navbar";
import './busca.css';

function Busca() {
    return <div className="container-fluid mt-page">
        <Navbar />

        <div className="row m-2">
            <h3>Pizza</h3>
        </div>
        <div className="row m-2  border-bottom">
            {
                [1, 2, 3, 4, 5, 6, 7, 8].map(estabelecimento => {
                    return <Estabelecimento url_imagem="https://logodownload.org/wp-content/uploads/2014/04/mcdonalds-logo-8.png" 
                                                                nome="Mc Donald's"
                                                                avaliacao="4.5"
                                                                categoria="Pizza"/>
                })
            }
        </div>
    </div>
}

export default Busca;