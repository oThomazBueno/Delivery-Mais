import Banner from "../../components/banner/banner";
import Navbar from "../../components/navbar/navbar";
import Produto from "../../components/produto/lista/produto";
import './cardapio.css';

function Cardapio() {
    return <div className="container-fluid mt-page">
        <Navbar />
        <div className="row col-lg-8 offset-lg-2">
            <div className="col-12">
                <img className="img-cardapio img-fluid rounded" src="https://s2-techtudo.glbimg.com/do-yezjlT1ghgZJmbN15fvyTtmc=/0x0:1920x1001/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/r/k/Jmrq3JTVWsqoVBuuxU9g/ifood-loop.png" alt="" />
            </div>

            <div className="col-12 mt-5">
                <h1>Black Dog Tatuapé</h1>
                <span className="d-block">R. Coelho Lisboa, 363 - Cidade Mãe do Céu - São Paulo - SP</span>
                <span className="d-inline-block"><i class="fa-solid fa-star d-inline-block"></i> 4.0</span>
                <span className="ms-4">18 Avaliações</span>
            </div>

            <div className="col-12 mt-4">
                <span className="me-3"><b>Taxa de Entrega: </b>R$ 5,00</span>
                <span><b>Pedido Mínimo: </b> R$ 50,00</span>
            </div>
        </div>

        {
            [1, 2, 3].map(destaque => {
                return <div className="row mt-5 col-lg-8 offset-lg-2">
                    <h3>Destaques</h3>
                    {
                        [1, 2, 3, 4].map(produto => {
                            return <Produto url_imagem="https://querouai.com.br/gestao/img/produtos/11_664_20220912145657.jpeg"
                                            nome="Pizza Calabresa"
                                            ingredientes="Molho de Tomate, Catupiry (Queijo vegano à base de cajú), Abobrinha amassada na lenha, parmesão vegano e orégano "
                                            preco="R$ 45,00"/>
                        })
                    }
                </div>
                
                
            })
        }
    </div>
}

export default Cardapio;