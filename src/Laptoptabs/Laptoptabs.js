import React from 'react'
import "./Laptoptabs.css"

function Laptoptabs() {
  return (
    <div>
      <div className='container'>
        <h1 style={{
          paddingTop:'80px'
        }} className='prodect-heading'>Laptops & Tablets</h1>
        <div className="row mb-5">
          <div className="col-md-4">
            <div className="items-prodects">
              <span class="badge bg-secondary position-absolute">NEW</span>
              <img src="assets/img17.webp" width={"500px"} alt="" />
              <p>Ove Laptop 16", 512GB</p>
              <span>$2000.00</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="items-prodects">
              <img src="assets/img14.webp" width={"500px"} alt="" />
              <p>Ove Laptop 14", 512GB</p>
              <span>$1600.00</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="items-prodects">
              <img src="assets/img17.webp" width={"500px"} alt="" />
              <p>PJX Gaming Laptop 15.6" 512GB</p>
              <s>$1,800.00</s>&nbsp;<span>$1,350.00</span>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-4">
            <div className="items-prodects">
              <span class="badge bg-secondary position-absolute">NEW</span>
              <img src="assets/img5.webp" width={"500px"} alt="" />
              <p>Ove Tablet FD Plus 12.3" , 64GB</p>
              <s>$900</s>&nbsp; <span>$675.00</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="items-prodects">
              <img src="assets/img5.webp" width={"500px"} alt="" />
              <p>HERA 5G Tablet 10.1" 64GB</p>
              <span>$600.00</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="items-prodects">
              <img src="assets/img5.webp" width={"500px"} alt="" />
              <p>HERA Tablet Pro 12.3" 128GB</p>
              <span>$675.00</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Laptoptabs
