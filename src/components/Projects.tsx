import { useEffect, useState } from "react"
import "../styles/Projects.scss"
import { ICake } from "../models/ICake";
import Card from "./Card";

function Projects() {
  const [cakes, setCakes] = useState<ICake[]>();

  useEffect(() => {
    fetch("/data/cakes.json").then(data => data.json()).then(data => setCakes(data))
  
  }, [])
  

  return (
    <section className="projects bg-white font-medium">
      <div className="container 2xl:max-w-6xl">
        <h2 className=" text-xl md:text-3xl xl:text-5xl mb-20 text-center" >Для будь-яких подій та дорогих вам людей</h2>
        <div className="cakes flex flex-wrap items-stretch gap-y-4">
          {cakes?.map(k => <Card descr={k.descr} imageUrl={k.imageUrl} name={k.name} price={k.price} key={k.id} />)}
        </div>
      </div>
    </section>
  )
}

export default Projects