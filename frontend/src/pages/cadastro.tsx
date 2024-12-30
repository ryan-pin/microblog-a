import LoginCadastro from "../components/Cadastro/logincadastro";
import Header from "../components/header/header";

function Cadastro() {
  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-around pt-6">
        <aside className="p-">
          <img
            src="https://docs-ds.estaleiro.serpro.gov.br/govbr-ds-site-content/home/imagens/ilustra-componentes.png"
            width={625}
          />
        </aside>
        <LoginCadastro />
      </div>
    </div>
  );
}

export default Cadastro;
