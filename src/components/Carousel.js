import React, { useState, useEffect, useRef } from "react";
import { createClient } from '@sanity/client';
import { client } from "../client";

export default function Carousel() {
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    client.fetch(`*[_type == "author"]{
      image{
        asset->{
          _id,
          url
        },
        alt
      }
    }`).then((data) => {
      setData(data);
    }).catch(console.error);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (slideRef.current && currentSlide < data.length - 1) {
        setCurrentSlide(currentSlide => currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [currentSlide, data.length]);

  return (
    <div className="carousel">
      {data.map((item, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          ref={slideRef}
        >
          <img className="new-works" src={item.image.asset.url} alt={item.image.alt} />
        </div>
      ))}
    </div>
  );
}
