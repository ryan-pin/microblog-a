import Cadastro from "./pages/cadastro"
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import Feed from "./pages/feed";
import ProtectedRoute from "./components/protect/protect";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/feed" element={<Feed />} /> */}
        <Route path="/feed" element={<ProtectedRoute> <Feed /> </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
