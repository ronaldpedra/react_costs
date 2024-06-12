// Recursos de Sistema
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Layout
import Header from "./components/layout/Header";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
// Pages
import Home from "./components/pages/Home";
import Projetos from "./components/pages/Projetos";
import Empresa from "./components/pages/Empresa";
import Contato from "./components/pages/Contato";
import NovoProjeto from "./components/pages/novoprojeto";

function App() {
  return (
    <Router>
      <Header />
      <Container customClass='min_height'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projetos' element={<Projetos />} />
          <Route path='/empresa' element={<Empresa />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/novoprojeto' element={<NovoProjeto />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
