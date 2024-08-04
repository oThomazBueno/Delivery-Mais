import './cadastro.css';
import Logo from '../../assets/logo.png';
import Fundo from '../../assets/fundo.png';
import { Link } from 'react-router-dom';

function Cadastro() {
    return <div className='row'>
        <div className="col-sm-6 d-flex align-items-center justify-content-center text-center">
            <form action="" className='form-cadastro mt-5'>
                <h3 className='mb-4'>Crie sua conta e faça seu pedido.</h3>
                <h6 className='mb-3'>Informe os dados abaixo</h6>

                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Nome Completo"/>
                    <label for="floatingInput">Nome Completo</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="E-mail"/>
                    <label for="floatingInput">E-mail</label>
                </div>
                
                <div className="row">
                    <div className="col-lg-6">
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Senha"/>
                            <label for="floatingPassword">Senha</label>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Confirme a Senha"/>
                            <label for="floatingPassword">Confirme a Senha</label>
                        </div>
                    </div>   
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingPassword" placeholder="Endereço"/>
                            <label for="floatingPassword">Endereço</label>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingPassword" placeholder="Compl."/>
                            <label for="floatingPassword">Compl.</label>
                        </div>
                    </div>   
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingPassword" placeholder="Bairro"/>
                            <label for="floatingPassword">Bairro</label>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div class="form-control">
                            <select name="cidades" id="cidades">
                                <option value="0000000">Cidade</option>
                                <option value="3550308">São Paulo - SP</option>
                                <option value="3509502">Campinas - SP</option>
                                <option value="3506003">Bauru - SP</option>
                            </select>
                        </div>
                    </div>   
                </div>

                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="CEP"/>
                    <label for="floatingInput">CEP</label>
                </div>

                <button className='btn btn-lg btn-danger w-100 '>Criar Conta</button>

                <div className='mt-5'>
                    <Link className='' to='/login'>Ja tenho uma conta. Fazer login!</Link>
                </div>

                <img src={Logo} alt="Logo" className='mt-5'/>
            </form>
            
            
        </div>

        <div className="col-sm-6 d-none d-sm-block px-0">
            <img src={Fundo} alt="Fundo" className='img-fundo'/>
        </div>
    </div>
}

export default Cadastro;