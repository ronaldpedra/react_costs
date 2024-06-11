// Recursos de Sistema
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Layout
import Header from "./components/layout/Header";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Header />
        <Container>
          <Route to='/' 

        </Container>
        <Footer />
      </Routes>
    </Router>

  );
}

export default App;
