function Login() {
    return (
        <div className="br-card">
          <div className="card-content">
          <div className="text-weight-semi-bold text-up-02">Crie sua conta</div>
            <div className="p-3">
              <div className="br-input input-button">
                <label htmlFor="input-text">Nome</label>
                <input
                  id="input-name"
                  type="text"
                  placeholder="Digite seu nome de usuario"
                />
              </div>
  
              <div className="br-input input-button">
                <label htmlFor="input-password">Senha</label>
                <input
                  id="input-password"
                  type="password"
                  placeholder="Digite sua senha"
                />
                <button
                  className="br-button"
                  type="button"
                  aria-label="Exibir senha"
                  role="switch"
                  aria-checked="false"
                >
                  <i className="fas fa-eye" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button className="br-button primary m-1">criar conta</button>
            </div>
          </div>
        </div>
    );
  }
  
  export default Login;
  