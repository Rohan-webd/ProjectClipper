import React from "react";
import "../Home/Home.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Rating from "@mui/material/Rating";

import Navbar from "../../Navbar";

function Home() {

  const [value, setValue] = React.useState(2);

  return (
    <div style={{ width: "100%", height: "100%" }}>

      <Navbar />

      <div className="home-main-section">
        <div className="inreview">
          <div className="text-rev">
            <div id="tex-font-31">IN</div>
            <div id="tex-font-32">REVIEWS</div>
            <div id="tex-font-33">WE TRUST</div>
          </div>
          <div className="para-text">
            <p>
              Get the best course with great content from best platform with
              students reviews
            </p>
          </div>
        </div>

        <div className="all-reviews">
          <div className="single-reviews blur-div">
            <div className="reviews-title"> Vance- NeoBank for NRIs</div>

            <div className="reviews-stats">
              <div className="reviews-stars">
                <Rating name="read-only" value={value} readOnly style={{ color: "green" }} />
              </div>
              <div className="reviews-rat">4.7</div>{" "}
              <span> &nbsp; | &nbsp; </span>
              <div className="reviews-count">75 reviews</div>
            </div>

            <div className="review-text1">
              Monery Transfer Service - Investment
            </div>

            <div className="small-reviews">
              <div className="times">3 days</div>

              <div className="reviews-admin">
                <span>
                  <AccountCircleIcon />
                </span>

                <Rating name="read-only" value={3} readOnly style={{ color: "green" }} />
              </div>

              <div className="reviews-text">
                <span>
                  First transfer and they made me mad, worse service and{" "}
                </span>
              </div>
            </div>
          </div>

          <div className="single-reviews">
            <div className="reviews-title"> Vance- NeoBank for NRIs</div>

            <div className="reviews-stats">
              <div className="reviews-stars">
                <Rating name="read-only" value={value} readOnly style={{ color: "green" }} />
              </div>
              <div className="reviews-rat">4.7</div>{" "}
              <span> &nbsp; | &nbsp; </span>
              <div className="reviews-count">75 reviews</div>
            </div>

            <div className="review-text1">
              Monery Transfer Service - Investment
            </div>

            <div className="small-reviews">
              <div className="times">3 days</div>

              <div className="reviews-admin">
                <span>
                  <AccountCircleIcon />
                </span>

                <Rating name="read-only" value={3} readOnly style={{ color: "green" }} />
              </div>

              <div className="reviews-text">
                <span>
                  First transfer and they made me mad, worse service and{" "}
                </span>
              </div>
            </div>
          </div>

          <div className="single-reviews blur-div">
            <div className="reviews-title"> Vance- NeoBank for NRIs</div>

            <div className="reviews-stats">
              <div className="reviews-stars">
                <Rating name="read-only" value={value} readOnly style={{ color: "green" }} />
              </div>
              <div className="reviews-rat">4.7</div>{" "}
              <span> &nbsp; | &nbsp; </span>
              <div className="reviews-count">75 reviews</div>
            </div>

            <div className="review-text1">
              Monery Transfer Service - Investment
            </div>

            <div className="small-reviews">
              <div className="times">3 days</div>

              <div className="reviews-admin">
                <span>
                  <AccountCircleIcon />
                </span>

                <Rating name="read-only" value={3} readOnly style={{ color: "green" }} />
              </div>

              <div className="reviews-text">
                <span>
                  First transfer and they made me mad, worse service and{" "}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
