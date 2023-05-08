import "./App.css";
import Icon from "./assets/logo01.png";

import Bloco from "./components/bloco/component";
import Hero from "./components/hero/component";

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

      <footer>
        <p>
          Feito por
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
