import React from "react";
import "./Help.css";

function Help() {
  return (
    <div>
      <div  className="help">
        <div  style={{paddingTop:'90px',}} className="help1 help-c">
          <h1  className="help-head">Sparke Help Center</h1>
          <div className="help2">
            <p className="help-para">FAQ</p>
          </div>
        </div>

        <div className="help3 help-c">
          <div className="help3-sub">
            <p className="help-c-para">
              Do you provide international delivery?
            </p>
          </div>
          <div className="help3-sub">
            <p className="help-c-para1">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
        <div className="help3 help-c">
          <div className="help3-sub">
            <p className="help-c-para">How do I track my order?</p>
          </div>
          <div className="help3-sub">
            <p className="help-c-para1">
              How do I track my order? I'm a paragraph. Click here to add your
              own text and edit me. I’m a great place for you to tell a story
              and let your users know a little more about you..
            </p>
          </div>
        </div>
        <div className="help3 help-c">
          <div className="help3-sub">
            <p className="help-c-para">How do I return an item?</p>
          </div>
          <div className="help3-sub">
            <p className="help-c-para1">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p className="help-c-para1">
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
          </div>
        </div>
        <div className="help3 help-c">
          <div className="help3-sub">
            <p className="help-c-para">How can I contact your couriers?</p>
          </div>
          <div className="help3-sub">
            <p className="help-c-para1">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
        <div className="help3 help-c">
          <div className="help3-sub">
            <p className="help-c-para">What is your return policy?</p>
          </div>
          <div className="help3-sub">
            <p className="help-c-para1">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
        <div className="help3 help-c1">
          <div className="help3-sub">
            <p className="help-c-para">What are your delivery options?</p>
          </div>
          <div className="help3-sub">
            <p className="help-c-para1">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p className="help-c-para1">
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
          </div>
        </div>
      </div>
      <div className="contact">
        <h1 className="contact-head" style={{ paddingTop: "80px" }}>
          Have a question? We are happy to help.
        </h1>
        <p
          style={{
            fontWeight: "bolder",
            marginTop: "20px",
            paddingLeft: "30px",
          }}
        >
          Contact Us
        </p>

        <div className="contact-1 container">
        

          <form className="contact-form">
            <div className="form-row">
              <div className="col-sm-4">
                <label htmlFor="" className="contact-label">
                  First Name*
                </label>
                <input
                  type="text"
                  className="form-control contact-input"
                  placeholder=""
                />
              </div>
              <div className="col-sm-4">
                <label htmlFor="" className="contact-label">
                  Last Name*
                </label>
                <input
                  type="text"
                  className="form-control contact-input"
                  placeholder=""
                />
              </div>
              <div className="col-sm-4">
                <label htmlFor="" className="contact-label">
                  Email*
                </label>
                <input
                  type="email"
                  className="form-control contact-input"
                  placeholder=""
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-sm-4">
                <label htmlFor="" className="contact-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control contact-input"
                  placeholder=""
                />
              </div>
              <div className="col-sm-8">
                <label htmlFor="" className="contact-label">
                  Message
                </label>
                <input
                  type="text"
                  className="form-control contact-input"
                  placeholder=""
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-sm-4">
                <button className="form-btn">Submit</button>
              </div>
              <div className="col-sm-4">
              <p style={{paddingTop:"50px"}}>Thanks for submitting</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Help;
