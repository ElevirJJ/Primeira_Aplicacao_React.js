import Header from '../components/Header'

import '../style/App.css';
import '../style/Header.css';
import Footer from './Footer'
import Section from './Section';

import imagem from '../../public/imgs/barco2.png';
import barcogrande from '../../public/imgs/barcoprincipal.jpg'

function App() {
  return (
    <div className='container'>
      <Header />
      <div className="barco-grande">
        <img src={barcogrande}/>
      </div>
      <div className="caixa">
        <h4>
          Você só encontra coisas boas,<br /> se combinar luxo e paixão.
        </h4>
        <div className="tel">
          <div className="barquinho">
            <img src={imagem}/>
          </div>
          <div className="infomacao">
            <p>
              Ligue agora para agendar as ferias de <br /> <span>sua vida: (00) 40028922</span>
            </p>
          </div>
        </div>
      </div>
      <Section />
      <Footer />
    </div>
  );
}

export default App;

