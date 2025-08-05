import bannerAbout from '../assets/img/banner-about.png'
import headlineCover from '../assets/img/headline-cover.png'

const Headline = () => {
  return (
    <div className="headline" style={{ backgroundImage: `url(${headlineCover})` }}>
      <h1 className="headline__title">Chez vous, partout et ailleurs</h1>
    </div>
  )
}

const BannerAbout = () => {
  return <div className="banner-about" style={{ backgroundImage: `url(${bannerAbout})` }}></div>
}

export { BannerAbout, Headline }
