import headlineCover from '../assets/img/headline-cover.png'

const Headline = () => {
  return (
    <div
      className="headline"
      style={{ backgroundImage: `url(${headlineCover})` }}>
      <h1 className="headline__title">Chez vous, et partout ailleurs</h1>
    </div>
  )
}

export default Headline
