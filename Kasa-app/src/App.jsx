import Footer from './components/Footer'
import Header from './components/Header'
import Router from './Router'
import './style/style.css'

const App = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <Router />
      </div>
      <Footer />
    </>
  )
}

export default App
