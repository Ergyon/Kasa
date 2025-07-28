import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="error">
      <span className="error__404">404</span>
      <span className="error__text">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link to={'/'} className="error__backhome">
        <span>Retourner sur la page d'accueil</span>
      </Link>
    </div>
  )
}

export default Error
