
function Portfolio() {
  return (
    <section className="portfolio" >
      <div className="container max-w-6xl text-center mb-20">
        <h2 className="text-xl md:text-3xl xl:text-5xl m-0 mb-3">Зробили понад 3.000 замовлень за 2 роки</h2>
        <h3 className="text-sm md:text-lg xl:text-2xl m-0">Перегляньте фото реальних замовлень з нашого instagram</h3>
      </div>
      <div className="instagram flex flex-wrap gap-y-2">
        {Array.from(new Array(9)).map((_, i) => (
          <a href="https://www.instagram.com/" target="_blank" key={i} className="basis-full sm:basis-1/2 md:basis-1/3 px-1">
            <img src={`/portfolio/photo-${i}.png`} alt="" />
          </a>
        ))}
      </div>
    </section>
  )
}

export default Portfolio