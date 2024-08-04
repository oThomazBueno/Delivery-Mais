import './footer.css';

function Footer() {

    const ano = new Date().getFullYear();

    return <div className="footer row border-top mt-5">
        <div className="col-12 mt-4 ms-3">
            <p className="copyright">
                Copyright © {ano} Thomaz Bueno - Todos os Direitos Reservados
            </p>
        </div>
    </div>
}

export default Footer;