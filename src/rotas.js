import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Sidebar from './components/sidebar/sidebar';
import Busca from './pages/busca/busca';
import Favoritos from './pages/favoritos/favoritos';
import Perfil from './pages/perfil/perfil';
import Enderecos from './pages/enderecos/lista/enderecos';
import Pedidos from './pages/pedidos/pedidos';
import Cardapio from './pages/cardapio/cardapio';
import Login from './pages/login/login';
import Cadastro from './pages/cadastro/cadastro';

function Rotas() {
    return <>
        <Sidebar />
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/busca' element={<Busca />} />
                <Route exact path='/favoritos' element={<Favoritos />} />
                <Route exact path='/perfil' element={<Perfil />} />
                <Route exact path='/enderecos' element={<Enderecos />} />
                <Route exact path='/pedidos' element={<Pedidos />} />
                <Route exact path='/cardapio' element={<Cardapio />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/cadastro' element={<Cadastro />} />
                
            </Routes>
        </BrowserRouter>
    </>
}

export default Rotas;