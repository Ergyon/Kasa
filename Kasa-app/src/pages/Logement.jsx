import { useParams } from 'react-router-dom'
import Error from '../components/Error'
import HousingInfos from '../components/HousingInfos'
import SliderCover from '../components/SliderCover'
import datas from '../data/datas.json'

const Logement = () => {
  const { id } = useParams()
  const logement = datas.find((item) => item.id === id)

  if (!logement) return <Error />

  return (
    <div className="housing">
      <SliderCover pictures={logement.pictures} />
      <HousingInfos
        title={logement.title}
        location={logement.location}
        host={logement.host}
        rating={logement.rating}
        tags={logement.tags}
        description={logement.description}
        equipments={logement.equipments}
      />
    </div>
  )
}

export default Logement
