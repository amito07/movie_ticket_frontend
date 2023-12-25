"use client";
import { Carousel } from "antd";
import { sliderlist } from "../utils/SliderList";
import Image from "next/image";

const CarouselComponent = () => {
  return (
    <Carousel autoplay>
      {sliderlist.map((x, index) => (
        <div>
          <Image
          key={index}
            alt="Mountains"
            layout="responsive"
            width={1500}
            height={200}
            src={x.path}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
