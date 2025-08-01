import Collapser from './Collapser'

const HousingInfos = ({ title, location, host, rating, tags, description, equipments }) => {
  return (
    <>
      <div className="housing-infos">
        <div className="housing-infos__left">
          <h3 className="housing-infos__title">{title}</h3>
          <span className="housing-infos__location">{location}</span>
          <div className="housing-infos__tags">
            {tags.map((tag, index) => (
              <span key={index} className="housing-infos__tags--tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="housing-infos__right">
          <div className="housing-infos__host">
            <span className="housing-infos__host--name">{host.name}</span>
            <img src={host.picture} alt={host.name} className="housing-infos__host--img" />
          </div>
          <div className="housing-infos__rating">
            {[0, 1, 2, 3, 4].map((index) => {
              return (
                <span key={index} className={index < parseInt(rating) ? 'star-full' : 'star-empty'}>
                  ★
                </span>
              )
            })}
          </div>
        </div>
      </div>
      <div className="housing-infos__collapser">
        <Collapser title="Description" content={description} />
        <Collapser title="Équipements" content={equipments} />
      </div>
    </>
  )
}
export default HousingInfos
