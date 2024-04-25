import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function Scroller() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const panels = gsap.utils.toArray('.panel');

    gsap.set(panels, {
      yPercent: (i) => (i ? 100 : 0)
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.sections',
        start: 'top top',
        end: () => `+=${100 * panels.length}%`,
        pin: true,
        scrub: 1,
        markers: false
      }
    });

    panels.forEach((panel, index) => {
      if (index) {
        tl.to(
          panel,
          {
            yPercent: 0,
            ease: 'none'
          },
          '+=0.25'
        );
      }
    });
  }, []);
  return (
<div>
    <div className="sections">
      <div style={{ width: '50%', }} >
        <div className="main-sub-con">
          <p className="main-sub1-para">
            Premium Electronics Selected By Experts
          </p>
          <p className="main-sub1-para2">Discover Our Collection</p>
          <button className="main-sub1-btn">Shop All</button>
        </div>
       
      </div>
      <div className="panels" style={{ width: "50%", overflowY: "scroll", scrollSnapType: "y mandatory" }}>
        <div className="image-container" style={{ position: "relative", height: "800px", overflow: "hidden" }}>
          <img
            className="panel top-image"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "800px" }}
            src="assets/Main_Image_01.webp"
            alt=""
          />
          <img
            className="panel bottom-image"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "800px" }}
            src="assets/img12.webp"
            alt=""
          />
        </div>
        <div className="main-sub3">
          <p className="main-sub3-para">The Next Generation of Sound </p>
          <button className="main-sub3-btn">Explore</button>
        </div>
      </div>



    </div>
    <div className="div-img-main">
          <div className="div-arr">New Arrivals</div>
          <div className="main-sub1-img">
            <a className="img-btn absolute">SALE</a>
            <img src="assets/img13.webp" alt="" />
            <div className="img-para">
              <p>PJX Smartphone 10G 128GB</p>
              <p>$675.00</p>
            </div>
          </div>
          <div className="main-sub1-img">
            <a className="img-btn absolute">SALE</a>
            <img src="assets/img14.webp" alt="" />
            <div className="img-para">
              <p>Ove Laptop 16", 512GB</p>
              <p>$2,000.00</p>
            </div>
          </div>
          <div className="main-sub1-img">
            <a className="img-btn absolute">SALE</a>
            <img src="assets/img15.webp" alt="" />
            <div className="img-para">
              <p>Polar Turn5 Portable Speaker</p>
              <p>$250.00</p>
            </div>
          </div>
          <div className="main-sub1-img">
            <a className="img-btn absolute">SALE</a>
            <img src="assets/img16.webp" alt="" />
            <div className="img-para">
              <p>Polar 360 Mini Portable Speaker</p>
              <p>$120.00</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Scroller