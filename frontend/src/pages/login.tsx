
import Header from "../components/header/header"
import Login from "../components/header/Login/login"

function LoginPage () {
  return (
    <div>
      <Header />
        <div className="d-flex justify-content-around pt-6">
            <aside className="p-">
                <img src="https://docs-ds.estaleiro.serpro.gov.br/govbr-ds-site-content/home/imagens/ilustra-comunidade.png" width={645} />
            </aside>
            <Login />
        </div>
    </div>
  )
}

export default LoginPage