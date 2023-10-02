import qoutes from "../../assets/qoutes.svg"
import { IReview } from "../../models/IReview"

type SliderItemProps = {
  review: IReview,
  index: number,
  activeSlide: number
}

function SliderItem({ review, index, activeSlide }: SliderItemProps) {
  return (
    <div className={`max-[320px]:max-w-[15rem] max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-4xl slider-item flex justify-center flex-col md:flex-row bg-white p-4 sm:p-6 md:p-8 xl:py-16 xl:px-24 gap-4 lg:gap-12 duration-300 ${index === activeSlide ? "scale-100 opacity-100" : "scale-75 opacity-10"} `}>
      <div className="content flex flex-col gap-6 basis-1/2">
        <div className="quotes">
          <img src={qoutes} alt="qoutes" />
        </div>
        <div className="short-review text-xl lg:text-3xl font-medium">
          {review.short}
        </div>
        <div className="details text-sm">
          {review.details}
        </div>
        <div className="read-more text-blue-600 text-sm underline cursor-pointer">
          Читати відгук повністю
        </div>
      </div>
      <div className="user flex flex-col items-center justify-center sm:basis-1/3 lg:basis-1/2">
        <div className="photo mb-7 flex items-center justify-center ">
          <img src={review.imgUrl} alt={review.name} className="w-1/2 md:w-3/4 xl:w-full" />
        </div>
        <div className="name text-base lg:text-xl">
          {review.name}
        </div>
        <div className="city text-gray-400">
          {review.city}
        </div>
      </div>
    </div>
  )
}

export default SliderItem