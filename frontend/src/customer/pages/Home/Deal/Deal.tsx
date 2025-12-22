import React from "react";
import DealCard from "./DealCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppSelector } from "../../../../State/Store";
// import React from "react";
// import Slider from "react-slick";
const Deal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const customer = useAppSelector((state) => state.customer);
  return (
    <div className="py-5 lg:px-20">
      <div className="flex items-center justify-between">
        {/* <Slider {...settings}>

            </Slider> */}
        {/* {[1, 1, 1, 1, 1, 1, 1].map((item) => (
          <DealCard
            image="https://m.media-amazon.com/images/I/510uTHyDqGL.jpg"
            title="Asus Laptop"
            discount="20%"
            subtitle="Grab the deal now"
          />
        ))} */}
        {customer.homePageData?.deals.map((item) => (
          <DealCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Deal;
