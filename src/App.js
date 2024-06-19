import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import Navbar from "./components/wraped/Navbar";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects"

export default function App() {
  return (
    <>
      <Router>
        <Header>
          <Container>
            <Navbar />
          </Container>
        </Header>
        <Main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects /> } />
            </Routes>
          </Container>
        </Main>
        <Footer>
          <Container>
            <p>Footer content</p>
          </Container>
        </Footer>
      </Router>
    </>
  );
}
