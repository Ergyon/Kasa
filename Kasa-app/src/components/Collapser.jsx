import { useState } from 'react'
import arrowUp from '../assets/img/arrow-up.png'

const Collapser = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const handleCollapse = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsVisible(true)
      setIsOpen(true)
    }
  }

  const handleAnimation = () => {
    if (!isOpen) {
      setIsVisible(false)
    }
  }

  return (
    <div className="collapser-block">
      <div className="collapser" onClick={handleCollapse}>
        <h4 className="collapser__title">{title}</h4>
        <img src={arrowUp} alt="Voir plus" className={`collapser__arrow ${isOpen ? 'open' : ''}`} />
      </div>
      {isVisible && (
        <div className={`collapser__content ${isOpen ? 'open' : 'close'}`} onAnimationEnd={handleAnimation}>
          <span className="collapser__content__txt">{content}</span>
        </div>
      )}
    </div>
  )
}

export default Collapser
