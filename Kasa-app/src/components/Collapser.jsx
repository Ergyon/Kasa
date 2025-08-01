import { useState } from 'react'
import arrowUp from '../assets/img/arrow-up.png'

const Collapser = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const handleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapser-block">
      <div className="collapser" onClick={handleCollapse}>
        <h4 className="collapser__title">{title}</h4>
        <img src={arrowUp} alt="Voir plus" className={`collapser__arrow ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <div className="collapser__content">
          {Array.isArray(content) ? (
            <ul className="collapser__content__list">
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <span className="collapser__content__txt">{content}</span>
          )}
        </div>
      )}
    </div>
  )
}

export default Collapser
