import Logo from '../../assets/logo.png'
import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {

    function openSidebar() {
        const event = new CustomEvent('openSidebar');
        window.dispatchEvent(event);
    }

    return <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light ps-3 pe-3">
        <div className="container-fluid">
            <Link class="navbar-brand" to="/"><img src={Logo} alt="Logo" /></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="ms-auto me-auto mt-1">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Procurar um restaurante..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button class="btn btn-danger" type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass me-1"></i>Buscar</button>
                    </div>
                </div>
                <div className="mt-1">
                    <button className='btn btn-outline-danger me-3'><i className="fa-solid fa-location-dot me-1"></i>Entrega: São Paulo</button>
                    {
                    //<button className='btn btn-outline-danger me-3'><i class="fa-solid fa-right-to-bracket me-1"></i>Acessar</button>
                    }
                    <div class="btn-group">   
                        <button type="button" class="btn btn-outline-danger me-3 dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-user"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li><Link class="dropdown-item" to="/pedidos">Pedidos</Link></li>
                            <li><Link class="dropdown-item" to="/favoritos">Favoritos</Link></li>
                            <li><Link class="dropdown-item" to="/perfil">Perfil</Link></li>
                            <li><Link class="dropdown-item" to="/enderecos">Meus Endereços</Link></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><Link class="dropdown-item" to="/login">Sair</Link></li>
                        </ul>
                    </div>
                    <button onClick={openSidebar} className='btn btn-outline-danger me-3'><i class="fa-solid fa-bag-shopping me-1"></i>Sacola</button>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar;