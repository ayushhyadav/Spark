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
      <div className="container bg-category">
        <h1>Shop by Category</h1>
        <div className="row">
          {categories.map((category, index) => (
            <div className="col-md-4">
              <div style={{ width: '100%', maxWidth: '380px' }} className="main2-sub" key={index}>
                <img style={{ width: '100%' }} src={`assets/img${index + 1}.webp`} alt="" />
                <p className="main3-p">{category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="offer-heading d-flex justify-content-between">
              <h1>Special Offers</h1>
              <a href="/AllProducts">View All</a>
            </div>
          </div>
          {specialOffers.map((item, index) => (
            <div className="col-md-3">
              <div className="prodect-items">
                <div className="main-sub5" key={index}>
                  <a href="/SpecialOffers"  className="img-btn absolute">SALE</a>
                  <a href="/SpecialOffers">
                    <img style={{ width: '100%', marginBottom: '20px'}} src={item.img} alt="" />
                    {item.description}
                    <br />
                    <strike>{item.oldPrice}</strike>
                    {item.newPrice}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="main6">
        <div className="mainsub-6">
          <p className=" mainsub-6-para">
            Buy One and Get The Second 50% <br /> Off
          </p>
          <p className="mainsub-6-p">On All Speakers and Headphones </p>
          <a href='/Speakerhead' className="mainsub6-btn btn">Shop Now</a>
          <p className="mainsub-6-p1">Polar Turn5 Portable Speaker</p>
        </div>
      </div>
      <div className="main7">
        <div className="mainsub-6">
          <p className=" mainsub-6-para">
            Buy One and Get The Second 50% <br /> Off
          </p>
          <p className="mainsub-6-p">On All Speakers and Headphones </p>
          <a href='/Speakerhead' className="mainsub6-btn btn">Shop Now</a>
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
