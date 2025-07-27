import { NavLink } from 'react-router-dom'
import kasa from '../assets/logos/kasa.png'

const Header = () => {
  return (
    <>
      <div>
        <img src={kasa} alt="Kasa Logo" />
      </div>
      <div>
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/About">
            <li>À propos</li>
          </NavLink>
        </ul>
      </div>
    </>
  )
}

export default Header
