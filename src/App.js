import Header from "./components/layout/Header"
import Main from "./components/layout/Main"
import Footer from "./components/layout/Footer"
import styles from "./css/App.module.css"
import Container from "./components/layout/Container"
import { Route, Router, Routes } from "react-router-dom"
import Home from "./components/pages/Home"

export default function App() {
  return (
    <Router>
      <div className={styles.app_container}>
        <Header />
        <Routes>
          <Main>
            <Container>
              <Route path="/" element={<Home />} />
            </Container>
          </Main>
        </Routes>
        <Footer />
      </div>
    </Router>

  )
}
