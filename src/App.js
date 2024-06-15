import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styles from "./css/App.module.css"

import Header from "./components/layout/Header"
import Main from "./components/layout/Main"
import Footer from "./components/layout/Footer"
import Container from "./components/layout/Container"

import Home from "./components/pages/Home"
import Projects from "./components/pages/Projects"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"

export default function App() {
  return (
    <div className={styles.app_container}>
      <Router>
        <Header />
        <Main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/company" element={<Company />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
        </Main>
        <Footer />
      </Router>
    </div>
  )
}
