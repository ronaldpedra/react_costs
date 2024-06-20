import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Navbar from "./components/wraped/Navbar";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects"
import FooterItems from "./components/wraped/FooterItems";
import styles from "./css/core/App.module.css"

export default function App() {
  return (
    <>
      <Router>
        <section className={styles.section_main_container}>
          <div>
            <Header>
              <Navbar />
            </Header>
            <Main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </Main>
          </div>
          <div>
            <Footer>
              <FooterItems />
            </Footer>
          </div>
        </section>
      </Router>
    </>
  );
}
