// Recursos de Sistema
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Layout
import Header from "./components/layout/Header";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
// Pages
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>


          <Route to='/' element={<Home />} />

        </Routes>
      </Container>
      <Footer />
    </Router>

  );
}

export default App;
