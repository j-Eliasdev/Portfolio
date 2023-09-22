import { CuboContainer } from "./components";

export default function DadoComponent() {
  return (
    <CuboContainer>
      <div className="cubo">
        <div className="cara front">
          <span className="circulo circulo1"></span>
        </div>
        <div className="cara back">
          <span className="circulo1 circulo"></span>
          <span className="circulo circulo2"></span>
        </div>
        <div className="cara right">
          <span className="circulo circulo1"></span>
          <span className="circulo circulo2"></span>
          <span className="circulo circulo3"></span>
        </div>
        <div className="cara left">
          <span className="circulo circulo1"></span>
          <span className="circulo circulo2"></span>
          <span className="circulo circulo3"></span>
          <span className="circulo circulo4"></span>
        </div>
        <div className="cara top">
          <span className="circulo circulo1"></span>
          <span className="circulo circulo2"></span>
          <span className="circulo circulo3"></span>
          <span className="circulo circulo4"></span>
          <span className="circulo circulo5"></span>
        </div>
        <div className="cara bottom">
          <span className="circulo circulo1"></span>
          <span className="circulo circulo2"></span>
          <span className="circulo circulo3"></span>
          <span className="circulo circulo4"></span>
          <span className="circulo circulo5"></span>
          <span className="circulo circulo6"></span>
        </div>
      </div>
      {/* <div className="Con-dado">
        <div className="Square front">
          <span className="dot dot1"></span>
        </div>
        <div className="Square back">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
        </div>
        <div className="Square right">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
        </div>
        <div className="Square left">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
          <span className="dot dot4"></span>
        </div>
        <div className="Square top">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
          <span className="dot dot4"></span>
          <span className="dot dot5"></span>
        </div>
        <div className="Square bottom">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
          <span className="dot dot4"></span>
          <span className="dot dot5"></span>
          <span className="dot dot6"></span>
        </div>
      </div> */}
    </CuboContainer>
  );
}
