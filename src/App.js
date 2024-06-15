import Header from "./components/layout/Header"
import Main from "./components/layout/Main"
import Footer from "./components/layout/Footer"
import styles from "./css/App.module.css"
import Container from "./components/layout/Container"
import { Router, Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"

export default function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Main>
      <Footer />
    </Router>
  )
}
