import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import Logement from './pages/Logement'
import NotFound from './pages/NotFound'
import './style/style.css'

const App = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Logement/:id" element={<Logement />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
