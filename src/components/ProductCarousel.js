import { useState, useEffect } from "react";
import { db } from "../firebase.config";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "products"), (snapshot) => {
      setProducts(snapshot.docs.map((doc) => doc.data()));
      console.log(products);
    });
  }, []);

  // const getNotes = async () => {
  //   const notesSnapshot = await getDocs(collection(db, "products"));
  //   const notesList = notesSnapshot.docs.map((doc) => doc.data());
  //   setProducts(notesList);
  // };

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
        {products.map((slide) => {
          return (
            <div key={slide.id}>
              <ProductCard imgSrc={slide.img} value={slide} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default ProductCarousel;
