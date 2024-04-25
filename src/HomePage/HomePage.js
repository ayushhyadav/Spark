import React from "react";
import "./HomePage.css";
import Scroller from "./Scroller";

function HomePage() {
  const categories = ["Cell Phones", "Speakers & Headphones", "Laptops & Tablets"];

  const specialOffers = [
    {
      img: "assets/img8.webp",
      description: "PJX Gaming Laptop 15.6\", 512GB",
      oldPrice: "$1800.00",
      newPrice: "$1,350.00"
    },
    {
      img: "assets/img5.webp",
      description: "Ove Tablet FD plus 12.3\",64GB",
      oldPrice: "$900.00",
      newPrice: "$675.00"
    },
    {
      img: "assets/img6.webp",
      description: "VOLVO Smart Home Speaker",
      oldPrice: "$550.00",
      newPrice: "$412.50"
    },
    {
      img: "assets/img7.webp",
      description: "Polar Float Wireless Speaker",
      oldPrice: "$150.00",
      newPrice: "$112.50"
    }
  ];

  const brands = ["VOLVE", "HERA", "SOVIX", "PJX", "POLAR"];

  return (
    <div>
      <Scroller />
      <div className="main2">
        <h1 className="main2-head">Shop by Category</h1>
        <div className="main3">
          {categories.map((category, index) => (
            <div style={{width:'100%',maxWidth:'35.1rem'}} className="main2-sub" key={index}>
              <img style={{width:'100%'}} src={`assets/img${index + 1}.webp`} alt="" />
              <p className="main3-p">{category}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="main4">
        <div className="main-sub4">
          <p className="main-sub4-p">Special Offers</p>
        </div>
        <div className="main-sub4">
          <button className="main-sub4-btn">View All</button>
        </div>
      </div>
      <div className="main5">
        {specialOffers.map((item, index) => (
          <div style={{width:'100%',maxWidth:'26rem', }} className="main-sub5" key={index}>
            <a className="img-btn absolute">SALE</a>
            <img style={{width:'100%'}} src={item.img} alt="" />
            <a href="">
              {item.description}
              <br />
              <strike>{item.oldPrice}</strike>
              {item.newPrice}
            </a>
          </div>
        ))}
      </div>
      <div className="main6">
        <div className="mainsub-6">
          <p className=" mainsub-6-para">
            Buy One and Get The Second 50% <br /> Off
          </p>
          <p className="mainsub-6-p">On All Speakers and Headphones </p>
          <button className="mainsub6-btn">Shop Now</button>
          <p className="mainsub-6-p1">Polar Turn5 Portable Speaker</p>
        </div>
      </div>
      <div className="main7">
        <div className="mainsub-6">
          <p className=" mainsub-6-para">
            Buy One and Get The Second 50% <br /> Off
          </p>
          <p className="mainsub-6-p">On All Speakers and Headphones </p>
          <button className="mainsub6-btn">Shop Now</button>
          <p className="mainsub-6-p1">Polar Turn5 Portable Speaker</p>
        </div>
      </div>
      <div className="main8">
        <p className="main8-para">Our Brands</p>
        <div className="main8-sub1">
          {brands.map((brand, index) => (
            <p className={`main8sub-para${index + 1}`} key={index}>{brand}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
