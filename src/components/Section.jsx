import '../style/Section.css'

import imagem from '../../public/imgs/destino.png'
import barcodestino from '../../public/imgs/barcodestino.jpg'
import barconossafrota from '../../public/imgs/nossafrota.png'
import cards1 from '../../public/imgs/barconossafrota1.jpg'
import cards2 from '../../public/imgs/barconossafrota2.jpg'

const Section = () => {
    return (
        <div className='section'>
            <div className="section-1">
                <div className="cabecalho-1">
                    <div className="icone">
                        <img src={imagem} />
                    </div>
                    <div className="titulo">
                        <h3>
                            Destinos
                        </h3>
                    </div>
                </div>

                <div className="infomacao">
                    <h5>
                        Sou um título. Clique aqui para me editar.
                    </h5>

                    <p className='descricao'>
                        Clique aqui para adicionar seu texto e me editar. É fácil. Basta clicar em "Editar Texto" e
                        adicionar as suas vezes sobre mim e poder adicionar seu próprio conteúdo de maneira forte.
                        Sou um bom lugar para contar sua história e permitir que seus visitantes saibam um pouco mais
                        sobre você.
                    </p>

                </div>
                <div className="cards">
                    <img src={barcodestino}/>
                </div>
                
            </div>

            <div className="section-2">
                <div className="cabecalho">
                    <div className="icone">
                        <img src={barconossafrota}/>
                    </div>
                    <div className="titulo">
                        <h3>
                            Nossa Frota
                        </h3>
                    </div>
                </div>

                <div className="infomacao">
                    <h5>
                        Sou um título. Clique aqui para me editar.
                    </h5>

                    <p className='descricao'>
                        Clique aqui para adicionar seu texto e me editar. É fácil. Basta clicar em "Editar Texto" e
                        adicionar as suas vezes sobre mim e poder adicionar seu próprio conteúdo de maneira forte.
                        Sou um bom lugar para contar sua história e permitir que seus visitantes saibam um pouco mais
                        sobre você.
                    </p>
                </div>

                <div className="cardss">
                    <img src={cards2}/>
                    <img src={cards1} className='barconossafrota1'/>
                    <img src={cards1} className='barconossafrota' />
                    <img src={cards2} className='barconossafrota2'/>
                </div>
            </div>
        </div>

    )
}

export default Section
