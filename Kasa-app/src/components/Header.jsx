import { NavLink } from 'react-router-dom'
import kasa from '../assets/logos/kasa.png'

const Header = () => {
  return (
    <header>
      <div>
        <img src={kasa} alt="Kasa Logo" className="logo" />
      </div>
      <div>
        <ul className="navbar">
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/About">
            <li>À propos</li>
          </NavLink>
        </ul>
      </div>
    </header>
  )
}

export default Header
