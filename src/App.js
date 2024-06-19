import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import Navbar from "./components/wraped/Navbar";
import Home from "./components/pages/Home";

export default function App() {
  return (
    <>
      <Header>
        <Container><Navbar /></Container>
      </Header>
      <Main>

        <Router>
          <Routes>
              <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </Main>
      <Footer>
        <p>Footer content</p>
      </Footer>
    </>
  );
}
