import "./App.css";
import Icon from "./assets/logo01.png";
import Bloco from "./components/bloco/component";
import Hero from "./components/hero/component";
import Card from "./components/card/component";
import Shoes1 from "./assets/shoes/shoes1.svg"
import Shoes2 from "./assets/shoes/shoes2.svg"
import Shoes3 from "./assets/shoes/shoes3.svg"
import Shoes4 from "./assets/shoes/shoes4.svg"
import Shoes5 from "./assets/shoes/shoes5.svg"
import Shoes6 from "./assets/shoes/shoes6.svg"
import Shoes7 from "./assets/shoes/shoes7.svg"
import Shoes8 from "./assets/shoes/shoes8.svg"

function App() {
  return (
    <div>
      <Bloco
        nameClass="dark"
        description="Ganhe R$ 10,00 de desconto no frete"
      />
      <Bloco nameClass="light" description="JordanShoes" />
      <Hero
        title="A melhor loja de Jordan"
        description="O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan."
      />

      <div className="shoes">
        <div className="shoes__title">
          <h2>Destaques</h2>
          <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </p>
        </div>
        <div className="shoes__cards">
          <Card imagem={Shoes1}/>
          <Card imagem={Shoes2}/>
          <Card imagem={Shoes3}/>
          <Card imagem={Shoes4}/>
          <Card imagem={Shoes5}/>
          <Card imagem={Shoes6}/>
          <Card imagem={Shoes7}/>
          <Card imagem={Shoes8}/>
        </div>
      </div>
      
      <footer>
          <p> 
            Desenvolvido por
          <a
            href="https://eduardorojas.com.br"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Icon} alt="" width="130" />
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
