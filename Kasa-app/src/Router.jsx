import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Logement from './pages/Logement'
import NotFound from './pages/NotFound'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Logement/:id" element={<Logement />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router
