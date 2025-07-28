import datas from '../data/datas.json'
import Card from './Card'

const Carousel = () => {
  return (
    <section className="carousel">
      {datas.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          cover={item.cover}
        />
      ))}
    </section>
  )
}

export default Carousel
