import { useState } from 'react'
import arrowLeft from '../assets/img/arrow-left.png'
import arrowRight from '../assets/img/arrow-right.png'

const SliderCover = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const total = pictures.length

  const Next = () => {
    setCurrentIndex((index) => (index === total - 1 ? 0 : index + 1))
  }

  const Prev = () => {
    setCurrentIndex((index) => (index === 0 ? total - 1 : index - 1))
  }

  return (
    <div className="slider">
      <img src={pictures[currentIndex]} alt={`image ${currentIndex + 1}`} />
      {total > 1 && (
        <>
          <img src={arrowRight} alt="Suivant" onClick={Next} />
          <img src={arrowLeft} alt="Précédent" onClick={Prev} />
          <div className="counter">
            <span>
              {currentIndex + 1} / {total}
            </span>
          </div>
        </>
      )}
    </div>
  )
}

export default SliderCover
