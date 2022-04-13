import { useState } from "react";
import Slider from "react-slick";
import ProductCard from "./Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCarousel = () => {
  const [slides, setSlides] = useState([
    {
      img: "https://dummyimage.com/600x400/000/7CFC00",
    },
    {
      img: "https://dummyimage.com/600x400/000/ccccc",
    },
    {
      img: "https://dummyimage.com/600x400/000/dddddd",
    },
    {
      img: "https://dummyimage.com/600x400/000/fff",
    },
    {
      img: "https://dummyimage.com/600x400/000/B22222",
    },
    {
      img: "https://dummyimage.com/600x400/000/7CFC00",
    },
    {
      img: "https://dummyimage.com/600x400/000/ccccc",
    },
    {
      img: "https://dummyimage.com/600x400/000/dddddd",
    },
    {
      img: "https://dummyimage.com/600x400/000/B22222",
    },
    {
      img: "https://dummyimage.com/600x400/000/7CFC00",
    },
  ]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div>
      <h2>Products</h2>
      <Slider {...settings}>
        {slides.map((slide, index) => {
          return (
            <div key={index}>
              <ProductCard imgSrc={slide.img} value={index} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default ProductCarousel;
