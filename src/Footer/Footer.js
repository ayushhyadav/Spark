import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer1 col-span-12">
          <div className="footer2 col-span-4">
            <div className="footer2-sub">
              <div className="footer2-sub2">
                <p className="footer2-p footer-p1">
                  Subscribe to Our Newsletter
                </p>
                <p className="footer2-p footer-p2">
                  Sigh up to receive updates on new products and special offers
                </p>
              </div>
            </div>
          </div>
          <div className="footer3 col-span-8">
            <div className="footer3-sub">
              <p className="footer3-label" htmlFor="">
                Email Address*
              </p>
              <input type="text" className="footer3-input" />
              <button className="footer3-btn">Subscribe</button>
            </div>
            <p className="footer3-p">Thanks for Subscribing!</p>
          </div>
        </div>
        <div className="footer4  grid-cols-5">
          <div className="footer4-sub spark">
            <div className="footer4-sub2 ">
              <div className="footer-4-div ">
                <i class="fa-solid fa-square"></i>&nbsp; &nbsp;
                <a className="footer4-a">Sparke</a>
                <img src="" alt="" />
              </div>
              <p className="footer-4-p footer-4-p1">
                Have a question about a product or order?
              </p>
              <a className="footer-4-p footer-4-a">Help Center</a>
            </div>
          </div>
          <div className="footer4-sub ">
            <div className="footer4-sub2 ">
              <div className="footer-4-div ">
                <p className="footer-4-p " id="shop">Shop</p>
                <br />
              </div>
              <a className="anker footer-4-p  footer-4-a">All Products</a>
              <br />
              <a className="footer-4-p footer-4-a">Cell Phones</a>
              <br />
              <a className="footer-4-p footer-4-a">Speakers & Headphones</a>
              <br />
              <a className="footer-4-p footer-4-a">Laptops & Tablets</a>
              <br />
              <a className="footer-4-p footer-4-a">Special Offers</a>
            </div>
          </div>
          <div className="footer4-sub spark">
            <div className="footer4-sub2">
              <div className="footer-4-div">
                <p className="footer-4-p ">Policy</p>
                <br />
              </div>
              <a className="anker footer-4-p  footer-4-a">Terms & Condition</a>
              <br />
              <a className="footer-4-p footer-4-a">Privacy Policy</a>
              <br />
              <a className="footer-4-p footer-4-a">Shipping Policy</a>
              <br />
              <a className="footer-4-p footer-4-a">Refund Policy</a>
              <br />
              <a className="footer-4-p footer-4-a">Cookies Policy</a>
            </div>
          </div>
          <div className="footer4-sub">
            <div className="footer4-sub2">
              <div className="footer-4-div">
                <p className="footer-4-p ">Follow Us</p>
                <br />
              </div>
              <a className="anker footer-4-p  footer-4-a">Facebook</a>
              <br />
              <a className="footer-4-p footer-4-a">Instagran</a>
              <br />
            </div>
          </div>
          <div className="footer4-sub sub-contact">
            <div className="footer4-sub2">
              <div className="footer-4-div">
                <p className="footer-4-p ">Contact</p>
                <br />
              </div>
              <p className=" footer-4-p  footer-4-a">info@mysite.com</p>

              <p className="footer-4-p footer-4-a footer4-para">123-456-7890</p>

              <p className="footer-4-p footer-4-a footer4-para">
                500 Terry Francois Streets SF,CA 94158
              </p>

              <p className="footer-ed-p">© 2023 by Sparke.<br/> Proudly created with <a className="footer-end-a">Editor X</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
