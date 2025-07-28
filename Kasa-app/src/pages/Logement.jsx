import { useParams } from 'react-router-dom'
import Error from '../components/Error'
import SliderCover from '../components/SliderCover'
import datas from '../data/datas.json'

const Logement = () => {
  const { id } = useParams()
  const logement = datas.find((item) => item.id === id)

  if (!logement) return <Error />

  return (
    <div className="housing">
      <SliderCover pictures={logement.pictures} />
      <h3 className="housing__title">{logement.title}</h3>
      <span className="housing__location">{logement.location}</span>
    </div>
  )
}

export default Logement
