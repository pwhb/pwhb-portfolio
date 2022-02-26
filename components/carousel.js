import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = ({ images }) => {
  const [slider, setSlider] = useState(null);

  return (
    <div>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {images.map((url, idx) => (
          <img key={idx} alt={`photo-${idx}`} src={url} className="contain" />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
