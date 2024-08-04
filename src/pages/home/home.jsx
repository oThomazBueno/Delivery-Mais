import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Estabelecimento from '../../components/estabelecimento/estabelecimento';
import Categoria from '../../components/categoria/categoria';
import Banner from '../../components/banner/banner';
import Hamburguer from '../../assets/cat-hamburguer.png';

function Home() {
    return <>
        <div className="container-fluid mt-page">
            <Navbar />

            <div className="row justify-content-center text-center">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(categoria => {
                        return <Categoria url_imagem={Hamburguer} nome="Lanches"/>
                    })
                }
            </div>

            <div className="row justify-content-center text-center m-2 mt-5">
                {
                    [1, 2, 3, 4].map(banner => {
                        return <Banner url_imagem="https://s2-techtudo.glbimg.com/do-yezjlT1ghgZJmbN15fvyTtmc=/0x0:1920x1001/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/r/k/Jmrq3JTVWsqoVBuuxU9g/ifood-loop.png"/>
                    })
                }
            </div>

            {
                [1, 2, 3].map(destaque => {
                    return <div className='row m-2 mt-5 border-bottom'>
                                <h4>Destaques: Entrega Grátis</h4>
                           
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8].map(estabelecimento => {
                                        return <Estabelecimento url_imagem="https://logodownload.org/wp-content/uploads/2014/04/mcdonalds-logo-8.png" 
                                                                nome="Mc Donald's"
                                                                avaliacao="4.5"
                                                                categoria="Lanches"/>
                                    })
                                }
                           </div>
                })
            }

            <Footer />
        </div>
        
    </>
}

export default Home;