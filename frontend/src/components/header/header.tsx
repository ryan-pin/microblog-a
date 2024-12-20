import { Link } from "react-router-dom";



function Header() {
  return (
    // <header className="br-header">
    //   <div className="header-title">Microblog</div>
    //   <div className="header-menu">
    //     <a className="br-item">Link de acesso 1</a>
    //     <a className="br-item">Link de acesso 2</a>
    //   </div>
    // </header>

    <header className="br-header compact">
      <div className="container-lg">
        <div className="header-top">
          <div className="header-actions">
            <div className="header-links dropdown">
              <div className="br-list">
                <a className="br-item" href="javascript:void(0)">
                  Feed
                </a>
                <a className="br-item" href="javascript:void(0)">
                  Descobrir
                </a>
                <a className="br-item" href="javascript:void(0)">
                  Amigos
                </a>
                <a className="br-item" href="javascript:void(0)">
                  Perfil
                </a>
              </div>
            </div>
            <span className="br-divider vertical mx-half mx-sm-1"></span>

            <div className="header-login">
              <div className="header-sign-in">
                <button
                  className="br-sign-in small"
                  type="button"
                  data-trigger="login"
                >
                  <i className="fas fa-user" aria-hidden="true"></i>
                  <Link to ="/login"> <span className="d-sm-inline">Entrar</span> </Link> 
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="header-menu">
            <div className="header-info">
              <div className="header-title">Microblog</div>
              <div className="header-subtitle">sua redesocial</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
