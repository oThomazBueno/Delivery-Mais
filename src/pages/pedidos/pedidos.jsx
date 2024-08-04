import './pedidos.css';
import Navbar from '../../components/navbar/navbar';
import Pedido from '../../components/pedido/pedido';

function Pedidos() {
    return <div className="container-fluid mt-page">
        <Navbar />
        <div className="row col-lg-8 offset-lg-2">
            <div className="col-12 d-flex justify-content-between align-items-center mt-4">
                    <h3>Meus Pedidos</h3>
                    <button className="btn btn-sm btn-outline-danger"><i class="fa-solid fa-plus"></i></button>
            </div>
            
            <div className="row mt-5">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(pedido => {
                        return <Pedido url_imagem="https://logodownload.org/wp-content/uploads/2014/04/mcdonalds-logo-8.png"
                                       estabelecimento="McDonald's Paulista"
                                       n_pedido="52552"
                                       qtd="2"
                                       preco="R$ 85,00"
                                       data="03/08/2024" 
                                />
                    })
                }
            </div>
        </div>
        
        
    </div>
}

export default Pedidos;