import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../services/axiosinstance";

function Login() {
  const userRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pswd, setPswd] = useState("");
  const [error, setError] = useState("");


  // agora funciona :)
  async function LoginUser() {
    try{
      const response = await axiosInstance.post("/login/",{ username: user, password: pswd });

      localStorage.setItem("token", response.data.access);


      navigate("/feed");
    }
    catch (error) {
      setError("Usuário ou senha incorretos.");
      console.error(error);
    }
  }

  return (
    <div className="br-card">
      
      <div className="card-content">
        <div className="text-weight-semi-bold text-up-02">Entrar na sua conta</div>
        <div className="p-3">
          <div className="br-input input-button">
            <label htmlFor="input-text">Nome de usuario</label>
            <input
              id="input-name"
              type="text"
              placeholder="Digite seu nome de usuario"
              ref={userRef}
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
          </div>

          <div className="br-input input-button">
            <label htmlFor="input-password">Senha</label>
            <input
              id="input-password"
              type="password"
              placeholder="Digite sua senha"
              onChange={(e) => setPswd(e.target.value)}
              value={pswd}
              required
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
          <button className="br-button primary m-1" onClick={LoginUser}>
            Entrar
          </button>
          
        </div>
        <p>Não possui uma conta? <Link to="/" > <a>Criar conta</a> </Link></p> 
        
        {error && <div className="mb-3"><span className="feedback danger" role="alert"><i className="fas fa-times-circle" aria-hidden="true"></i>{error}.</span></div>}
      </div>
    </div>
  );
}

export default Login;
