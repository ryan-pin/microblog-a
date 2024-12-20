import { useRef } from "react";
import axiosInstance from "../../services/axiosinstance";

function LoginCadastro() {

  const inputName = useRef()
  const inputUserName = useRef()
  const inputPassword = useRef()

  async function createUser() {
    await axiosInstance.post('/cadastrar/', {
      username: inputUserName.current.value,
      nome: inputName.current.value,
      senha: inputPassword.current.value
    })
  }

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
                placeholder="Digite seu nome"
                ref={inputName}
              />
            </div>

            <div className="br-input input-button">
              <label htmlFor="input-text">Nome de usuario</label>
              <input
                id="input-name"
                type="text"
                placeholder="Digite seu nome de usuario"
                ref={inputUserName}
              />
            </div>

            <div className="br-input input-button">
              <label htmlFor="input-password">Senha</label>
              <input
                id="input-password"
                type="password"
                placeholder="Digite sua senha"
                ref={inputPassword}
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

            <div className="br-input input-button">
              <label htmlFor="input-password">Confirme sua senha</label>
              <input
                id="input-password"
                type="password"
                placeholder="Confirme sua senha"
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
            <button className="br-button primary m-1" onClick={createUser}>criar conta</button>
          </div>
        </div>
      </div>
  );
}

export default LoginCadastro;
