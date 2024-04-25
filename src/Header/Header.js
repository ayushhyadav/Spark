import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Header.css";



function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
    className={`header-head ${isScrolled ? "scrolled" : ""}`}
    style={{  width: "100%", zIndex: "1" }}
    >
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Sparke</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul class="dropdown-menu open-auto" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="/AllProducts">All Products</a></li>
                  <li><a class="dropdown-item" href="/CellPhones">Cell Phones</a></li>
                  <li><a class="dropdown-item" href="/Speakerhead">Speakers & Headphones</a></li>
                  <li><a class="dropdown-item" href="/Laptoptabs">Laptops & Tablets</a></li>
                  <li><a class="dropdown-item" href="/SpecialOffers">Special Offers</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/help">Help</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <div class="d-flex">
              <div className="header-3">
                <a className="Header-a">
                  <i class="fa-solid fa-circle-user"></i>
                  <span>Log In</span></a>
              </div>
              <div class="dropdown shopping">
                <button class=" dropdown-toggle d-flex" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                  <a class="d-flex shopping-list align-items-center" href="#"> <img src="assets/down-arrow.png" alt="" /><img src="assets/shopping-bag.png" alt="" /></a>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <li><button class="dropdown-item" type="button">My Orders</button></li>
                  <li><button class="dropdown-item" type="button">My Addresses</button></li>
                  <li><button class="dropdown-item" type="button">My Account</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
