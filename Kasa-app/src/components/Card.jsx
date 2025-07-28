import { Link } from 'react-router-dom'

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/Logement/${id}`} className="card">
      <img src={cover} alt={title} className="card__image" />
      <h2 className="card__title">{title}</h2>
    </Link>
  )
}

export default Card
