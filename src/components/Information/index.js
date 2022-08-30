import "./styles.css";

const Information = () => {
  return (
    <main>
      <div className="produto">
        <div className="lado-esquerdo">
          <div className="img">
            <img src="/home/images/bolsaCouroMarrom.jpg" alt="" />
          </div>
        </div>

        <div className="lado-direito">
          <h2>Bolsa Fancy Mermaid</h2>
          <p>Bolsa marrom em couro sintético.</p>
          <span>R$299,00</span>
          <a href="">Adicionar à sacola</a>
        </div>
      </div>
    </main>
  );
};

export default Information;
