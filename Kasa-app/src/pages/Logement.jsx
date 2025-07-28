import { useParams } from 'react-router-dom'
import Error from '../components/Error'
import datas from '../data/datas.json'

const Logement = () => {
  const { id } = useParams()
  const logement = datas.find((item) => item.id === id)

  if (!logement) return <Error />

  return (
    <div className="housing">
      <img src={logement.cover} alt={logement.title} className="housing__image" />
      <h3 className="housing__title">{logement.title}</h3>
      <span className="housing__location">{logement.location}</span>
    </div>
  )
}

export default Logement
