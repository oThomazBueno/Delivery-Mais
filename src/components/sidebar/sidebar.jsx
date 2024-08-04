import { Dock } from 'react-dock';
import './sidebar.css';
import Foto from '../../assets/produto-sacola.png';
import Produto from '../produto/sacola/produto';
import { useEffect, useState } from 'react';

function Sidebar(props) {

    var [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('openSidebar', () => {
            setShow(true);
        });
    }, []);

    return <Dock position='right' isVisible={show} onVisibleChange={(visible) => {
            setShow(visible);
        }}>

        <div className="sidebar container-fluid h-100 pt-4">
            <h5>Minha Sacola</h5>
            <div className="row produtos">
                {
                    [1, 2, 3, 4, 5].map(produto => {
                        return <Produto url_imagem={Foto} nome="Pizza de Mussarela" preco_total="R$ 100,00" qtd="02" preco_unit="R$ 50,00"/>
                    })
                }
            </div>
            <div className="row align-items-end footer">

                <div className='col-12 d-flex justify-content-between align-items-center'>
                    <span>Subtotal</span>
                    <span>R$ 45,00</span>
                </div>

                <div className="col-12 d-flex justify-content-between align-items-center mt-2">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Cupom" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button class="btn btn-outline-success" type="button" id="button-addon2">Aplicar</button>
                    </div>
                    <div class="input-group justify-content-end">
                        <span className='d-inline-block text-sucess'>- R$ 0,00</span>
                    </div>
                </div>

                <div className="col-12 d-flex justify-content-between align-items-center mt-2">
                    <span>Taxa de Entrega</span>
                    <span>R$ 5,00</span>
                </div>

                <div className="col-12 d-flex justify-content-between align-items-center mt-3">
                    <b>Total: </b>
                    <span>R$ 150,00</span>
                </div>

                <button className='btn btn-lg btn-danger rounded-0 align-items-center btn-pedido'>Finalizar Pedido</button>
            </div>
        </div>
    </Dock>
}

export default Sidebar;