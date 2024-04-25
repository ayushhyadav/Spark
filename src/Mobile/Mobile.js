import React from "react";
import "./Mobile.css";


function Mobile() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
    function openNav() {
        document.getElementById("mySidenav").style.width = 100;
    }


    function closeNav() {
        document.getElementById("mySidenav").style.width = 0;
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <img src="assets/img13.webp" width={"750px"} />
                </div>
                <div className="col-md-7">
                    <div className="uppar-containt">
                        <div><b>SKU: 0001</b></div>
                        <div><b style={{ fontSize: "1.3rem" }}>PJX Smartphone 10G, 128GB</b> <br></br>
                            <b><s></s> $675</b></div>
                        <div>
                            <div><b>Color</b></div>
                            <div style={{ visibility: "hidden" }}>vdfv</div>
                            <div className="color-option">
                                <div className="option"></div> &nbsp;&nbsp; <div className="option option-a"></div>
                            </div>
                        </div>
                        <div><b>Quantity</b></div>
                        <div className="cart-quantity"></div>
                        <button className="cart-btn" onClick={() => console.log('ok')}>Add to Cart</button>
                        <div><b>I'm a product overview. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.</b></div>
                    </div>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Product Info
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <p>I'm a product detail. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.</p>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Return & Refund Policy
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <p>I'm a product detail. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.</p>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Shipping Info
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <p>I'm a product detail. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="side-bar">
                    <span className="close-btn" id="mySidenav" onClick={closeNav}> &times; </span>
                </div>
            </div>
        </div>
    )

}

export default Mobile;