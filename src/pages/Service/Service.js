import { useSelector } from "react-redux";
import Markup from "../../components/Markup/Markup";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./Arrows";

export default function Service({ service: serviceType }) {
  const service = useSelector((state) => state.service[serviceType] || []);

  const settings = {
    className: "center",
    // arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };

  return (
    <div className="card__container">
      <Slider {...settings}>
        {service.length ? (
          service.map((item) => <Markup key={item.count} data={item} />)
        ) : (
          <div>Loading...</div>
        )}
      </Slider>
    </div>
  );
}
