import { useEffect, useState } from "react"
import { IReview } from "../models/IReview"
import SliderItem from "./SliderItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

function Sliders() {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    fetch("/data/reviews.json").then(data => data.json()).then(data => setReviews(data))
  }, [])

  const settings: Settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0rem",
    slidesToShow: 1,
    speed: 500,
    variableWidth: true,
    beforeChange(_, nextSlide) {
      setActiveSlide(nextSlide);
    },
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="text-black ">
      <Slider {...settings}  >
        {reviews.map((e, i) => <SliderItem key={e.id} review={e} index={i} activeSlide={activeSlide} />)}
      </Slider>
    </div>
  );
}

export default Sliders