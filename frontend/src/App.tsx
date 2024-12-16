import Cadastro from "./pages/cadastro"
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginPage from "./pages/login";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
