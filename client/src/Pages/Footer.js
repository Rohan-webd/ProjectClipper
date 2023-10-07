import React from "react";
import "../App.css";

function Footer() {
    return (
        <div className="Main">
            <div className="footer-main">
                <div>
                    <p className="footer-p">
                        Copyright &#169; {new Date().getFullYear()} CourseClipper-All rights reserved.
                    </p>
                </div>
                <div>
                    <p className="footer-p">
                        Powered by Kronoryx Technology Pvt. Ltd.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;