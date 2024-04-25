import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function Scroller() {
  const items = [
    {
      src: "assets/c837a6_98c43751ef8d4b42b95676b5f949b0e7~mv2.webp",
      title: "PJX Smartphone 10G 128GB",
      price: "$675.00"
    },
    {
      src: "assets/c837a6_fa6693c8376640c480ac169f9f56f55b~mv2.webp",
      title: "Ove Laptop 16\", 512GB",
      price: "$2,000.00"
    },
    {
      src: "assets/c837a6_0668014d3f3a4331bf93d74578294d31~mv2.webp",
      title: "Polar Turn5 Portable Speaker",
      price: "$250.00"
    },
    {
      src: "assets/c837a6_53ff9332e5124ed893f347a938f294ad~mv2.webp",
      title: "Polar 360 Mini Portable Speaker",
      price: "$120.00"
    }
  ];


  const scrollContainerRef = useRef(null);
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
    const scrollContainer = scrollContainerRef.current;
    window.addEventListener('scroll', () => {
      scrollContainer.scrollTop = window.pageYOffset;
    });
  }, []);
  return (
    <div>
      <div className="sections">
        <div className="conatiner">
          <div className="row">
            <div className="col-md-6">
              <div ref={scrollContainerRef} style={{
                width: '100%', maxWidth: '630px', height: '900px', overflowY: 'auto', scrollbarWidth: "thin", scrollbarhight: '1px', scrollbarColor: 'transparent transparent', /* For Firefox */
                WebkitOverflowScrolling: 'touch', position: 'relative'
              }} >
                <div style={{ width: '100%', padding: '30px', }} className="main-sub-con">
                  <div style={{ padding: 40, paddingLeft: 0 }} id="comp-l1c5btvt" class="" data-testid="richTextElement">
                    <h6 style={{ fontSize: '52px', fontWeight: 300, color: '#323232', fontFamily: 'sans-serif' }} class="">Premium Electronics <br class="" />
                      Selected By Experts</h6></div>
                  <p style={{ fontSize: 25, color: '' }} className="main-sub1-para2">Discover Our Collection</p>
                  <a href='/AllProducts' className="main-sub1-btn">Shop All</a>
                </div>
                <div style={{ width: '100%', }} className="left">
                  <div className="inner stiky">
                    <div className="div-arr">New Arrivals</div>
                    {items.map((item, index) => (
                      <div className="row">
                        <div className="col-md-12">
                          <div key={index} className="main-sub1-img">
                            <a className="img-btn absolute">SALE</a>
                            <img src={item.src} alt="" />
                            <div className="img-para">
                              <p>{item.title}</p>
                              <p>{item.price}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="panels" style={{ width: "100%", maxWidth: '630px', scrollSnapType: "y mandatory" }}>
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
                  <a href='/Speakerhead' className="btn main-sub3-btn">Explore</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scroller