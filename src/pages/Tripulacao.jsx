
import { Link } from 'react-router-dom';


const Tripulacao = () => {
  return (
    <header>
      <div className="cabecalho-header">
        <div className="img">
          <img src="/public/imgs/barco1.png" alt="" />
        </div>
        <div className="texto">
          <h1>
            Luxo
          </h1>
          <h2>
            Aluguel de Iates
          </h2>
        </div>
      </div>

      <nav className='navbar'>
        <ul>
        <li><Link to="/">Página Inicial</Link></li>
          <li><Link to="/Aluguel">Aluguel de Iates</Link></li>
          <li><Link to="/Destinos">Destinos</Link></li>
          <li><Link to="/Tripulacao">Tripulação</Link></li>
          <li><Link to="/Contato">Contato</Link></li>
        </ul>
      </nav>
    </header>

  );
};

export default Tripulacao;
