import React from 'react'
import "./Speakerhead.css"

function Speakerhead(){
  return (
    <div>
      <div className='container'>
      <h1 style={{paddingTop:'80px'}} className='prodect-heading'>Speakers & Headphones</h1>
      <div className="row mb-5">
        <div className="col-md-4">
          <div className="items-prodects">
            <span class="badge bg-secondary position-absolute">NEW</span>
            <img src="assets/img6.webp" width={"500px"} alt="" />
            <p>VOLVO Smart Home Speaker</p>
            <s>$550.00</s> <span>$412.00</span>
          </div>
        </div>
        <div className="col-md-4">
          <div className="items-prodects">
            <img src="assets/img15.webp" width={"500px"} alt="" />
            <p>Polar Turn5 portable Speaker</p>
            <span>$250.00</span>
          </div>
        </div>
        <div className="col-md-4">
          <div className="items-prodects">
            <img src="assets/img7.webp" width={"500px"} alt="" />
            <p>Polar 360 Mini Portable Speaker</p>
            <span>$120.00</span>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-4">
          <div className="items-prodects">
            <span class="badge bg-secondary position-absolute">NEW</span>
            <img src="assets/img16.webp" width={"500px"} alt="" />
            <p>polar Float Wireless Speaker</p>
               <s>$150</s>&nbsp; <span>$112.00</span>
          </div>
        </div>
        <div className="col-md-4">
          <div className="items-prodects">
            <img src="assets/imghead.webp" width={"500px"} alt="" />
            <p>VOLVO Wireless Headphones</p>
              <s>$400</s><span>$300.00</span>
          </div>
        </div>
        <div className="col-md-4">
          <div className="items-prodects">
            <img src="assets/imgbuds.webp" width={"500px"} alt="" />
            <p>VOLVO Space Wireless Earbuds</p>
             <s>$250</s><span>$187.50</span>
          </div>
        </div>
      </div>
   
    </div>
    </div>
  )
}

export default Speakerhead;
