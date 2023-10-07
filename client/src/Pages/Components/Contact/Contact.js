import React from "react";
import "../Contact/Contact.css";
import Navbar from "../../Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact_us_2">
        <div className="responsive-container-block big-container">
          <div className="blueBG"></div>
          <div className="responsive-container-block container">
            <form className="form-box">
              <div className="container-block form-wrapper">
                <p className="text-blk contactus-head">Get in Touch Courseclipper</p>
                <p className="text-blk contactus-subhead">
                  courseclipper helps grow your knowledge and make the best choice bases on review
                </p>
                <div className="responsive-container-block">
                  <div
                    className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
                    id="i10mt"
                  >
                    <p className="text-blk input-title">FIRST NAME</p>
                    <input
                      className="input"
                      required
                      id="ijowk"
                      name="FirstName"
                      placeholder="Please enter first name..."
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">LAST NAME</p>
                    <input
                      className="input"
                      id="indfi"
                      name="Last Name"
                      placeholder="Please enter last name..."
                      required
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">EMAIL</p>
                    <input
                      className="input"
                      type="email"
                      id="ipmgh"
                      name="Email"
                      placeholder="Please enter email..."
                      required
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">PHONE NUMBER</p>
                    <input
                      className="input"
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      id="imgis"
                      name="PhoneNumber"
                      placeholder="Please enter phone number..."
                      required
                    />
                  </div>
                  <div
                    className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                    id="i634i"
                  >
                    <p className="text-blk input-title">
                      WHAT DO YOU HAVE IN MIND
                    </p>
                    <textarea
                      className="textinput"
                      id="i5vyy"
                      placeholder="Please enter query..."
                      defaultValue={""}
                      required
                    />
                  </div>
                </div>
                <button className="submit-btn">Submit</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
