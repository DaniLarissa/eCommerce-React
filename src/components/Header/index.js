import "./styles.css";

import "https://kit.fontawesome.com/23a17b8438.js";

const Header = () => {
  return (
    <header>
      <div class="container">
        <div class="logo">
          <img src="/home/images/logo-at-2.png" />
        </div>
        <div class="menu">
          <nav>
            <a href="/index.html">Mermaid</a>
            <a href="#">Básico</a>
            <a href="#">Promoções</a>
            <a href="/cadastro/CadastroCliente.html">Login</a>
          </nav>
        </div>

        <div class="sacola">
          <button>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <button>
            <i class="fa-solid fa-bag-shopping"></i>
          </button>
        </div>

        <div class="sociais">
          <button>
            <i class="fa-brands fa-instagram"></i>
          </button>
          <button>
            <i class="fa-brands fa-facebook"></i>
          </button>
          <button>
            <i class="fa-brands fa-youtube"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
