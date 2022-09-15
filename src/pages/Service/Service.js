import { useSelector } from "react-redux";
import Markup from "../../components/Markup/Markup";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./Arrows";

const settings = {
  className: "center",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  dots: false,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        rows: 1,
      },
    },
  ],
};

export default function Service({ service: serviceType }) {
  const service = useSelector((state) => state.service[serviceType] || []);

  return (
    <div className="card__container">
      <Slider {...settings}>
        {service.length ? (
          service.map((item) => <Markup key={item.count} service={item} />)
        ) : (
          <div>Loading...</div>
        )}
      </Slider>
    </div>
  );
}
