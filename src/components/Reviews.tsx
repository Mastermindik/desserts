import "../styles/Reviews.scss"
import cloudUp from "../assets/clouds/cloud-up.png"
import cloudDown from "../assets/clouds/cloud-down.png"
import Sliders from "./Sliders"

function Reviews() {
  return (
    <section className="reviews">
      <div className="cloud-up">
        <img src={cloudUp} alt=""  className="w-full"/>
      </div>
      <div className="container 2xl:max-w-6xl">
        <h2 className=" text-xl md:text-3xl xl:text-5xl mb-20 text-center text-white" >Почитайте відгуки задоволених клієнтів</h2>
      </div>
      <Sliders />
      <div className="cloud-down mt-16 sm:mt-0">
        <img src={cloudDown} alt="" className="w-full" />
      </div>
    </section>
  )
}

export default Reviews