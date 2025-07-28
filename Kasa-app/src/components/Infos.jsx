import dataAbout from '../data/data-about.json'
import Collapser from './Collapser'

const Infos = () => {
  return (
    <div className="infos-container">
      {dataAbout.map((item, index) => (
        <Collapser key={index} title={item.title} content={item.content} />
      ))}
    </div>
  )
}

export default Infos
