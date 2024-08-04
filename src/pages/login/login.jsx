import './login.css';
import Logo from '../../assets/logo.png';
import Fundo from '../../assets/fundo.png';
import { Link } from 'react-router-dom';

function Login() {
    return <div className='row'>
        <div className="col-sm-6 d-flex align-items-center justify-content-center text-center">
            <form action="" className='form-login mt-5'>
                <h3 className='mb-4'>Peça seu Delivery agora mesmo!</h3>
                <h6 className='mb-3'>Acesse sua conta</h6>

                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="E-mail"/>
                    <label for="floatingInput">E-mail</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Senha"/>
                    <label for="floatingPassword">Senha</label>
                </div>

                <button className='btn btn-lg btn-danger w-100 '>Acessar</button>

                <div className='mt-5'>
                    <Link className='' to='/cadastro'>Não tem uma conta? Cadastre-se agora mesmo!</Link>
                </div>

                <img src={Logo} alt="Logo" className='mt-5'/>
            </form>
            
            
        </div>

        <div className="col-sm-6 d-none d-sm-block px-0">
            <img src={Fundo} alt="Fundo" className='img-fundo'/>
        </div>
    </div>
}

export default Login;