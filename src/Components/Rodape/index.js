import "./Rodape.css";



const Rodape = () => {
  return (
    <div className="footer">
      <div className="redes">
        <div>
          <a href="youtube.com" target="_blank">
            <img src="./images/yt.svg" alt="" />
          </a>
        </div>
        <div>
          <a href="twitter.com" target="_blank">
            <img src="./images/tw.svg" alt="" />
          </a>
        </div>
        <div>
          <a href="instagram.com" target="_blank">
            <img src="./images/ig.svg" alt="" />
          </a>
        </div>
      </div>
      <div>
          <img className="marvel" src="./images/logo_marvel.svg" alt="" />
      </div>
      <div>
          <p className="texto">Desenvolvido por Caio.</p>
          
      </div>
    </div>
  );
};

export default Rodape;
