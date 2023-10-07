import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../Comparison/Comparison.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import Navbar from "../../Navbar";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};
const Comparison = () => {
  const [reviews, setReviews] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      let course_name = selectedCourse || searchKeyword;
      console.log(course_name);
      try {
        const response = await Axios.get("http://localhost:3001/review-name", {
          params: {
            catagoryName: course_name,
          },
        });
        console.log(response);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, [selectedCourse, searchKeyword]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = document.querySelector(
      'input[name="searchInput"]'
    ).value;
    setSearchKeyword(searchValue);
  };
  const handleCourseClick = (courseName) => {
    setSelectedCourse(courseName);
  };

  const calculateTimeDifference = (timestamp) => {
    const currentTime = new Date();
    const uploadTime = new Date(timestamp);
    const timeDifference = currentTime - uploadTime;

    const minutesAgo = Math.floor(timeDifference / (1000 * 60));
    if (minutesAgo < 1) {
      return "Just now";
    } else if (minutesAgo === 1) {
      return "1 minute ago";
    } else if (minutesAgo < 60) {
      return `${minutesAgo} minutes ago`;
    } else {
      const hoursAgo = Math.floor(minutesAgo / 60);
      if (hoursAgo === 1) {
        return "1 hour ago";
      } else if (hoursAgo < 24) {
        return `${hoursAgo} hours ago`;
      } else {
        const daysAgo = Math.floor(hoursAgo / 24);
        if (daysAgo === 1) {
          return "1 day ago";
        } else {
          return `${daysAgo} days ago`;
        }
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="comp-main-cont">
        <div className="comp-left-cont">
          <div className="list-container">
            <div className="search-box">
              <form className="example" action="" style={{ maxWidth: "380px" }}>
                <input
                  type="text"
                  placeholder="Search Course.."
                  name="searchInput"
                />
                <button type="button" onClick={handleSearch}>
                  Search
                </button>
              </form>
            </div>
            <div
              style={{
                color: "black",
                fontSize: "1.2rem",
                marginTop: "2rem",
                marginBottom: "0.5rem",
                fontWeight: "600",
              }}
            >
              Related Course
            </div>
            <div style={{ width: "20rem" }}>
              <List sx={style} component="nav" aria-label="mailbox folders">
                <ListItem
                  className="list-itm-g56"
                  button
                  onClick={() => handleCourseClick("Web Development")}
                >
                  <ListItemText primary="Web Development" />
                </ListItem>
                <Divider />
                <ListItem
                  className="list-itm-g56"
                  button
                  divider
                  onClick={() => handleCourseClick("Data Science")}
                >
                  <ListItemText primary="Data Science" />
                </ListItem>
                <ListItem
                  className="list-itm-g56"
                  button
                  onClick={() => handleCourseClick("Mobile Development")}
                >
                  <ListItemText primary="Mobile Development" />
                </ListItem>
                <Divider light />
                <ListItem
                  className="list-itm-g56"
                  button
                  onClick={() => handleCourseClick("Programming Languages")}
                >
                  <ListItemText primary="Programming Languages" />
                </ListItem>
                <Divider light />
                <ListItem
                  className="list-itm-g56"
                  button
                  onClick={() => handleCourseClick("Game Development")}
                >
                  <ListItemText primary="Game Development" />
                </ListItem>
                <Divider />
                <ListItem
                  className="list-itm-g56"
                  button
                  divider
                  onClick={() =>
                    handleCourseClick("Database Design & Development")
                  }
                >
                  <ListItemText primary="Database Design & Developement" />
                </ListItem>
                <ListItem
                  className="list-itm-g56"
                  button
                  onClick={() => handleCourseClick("Software Testing")}
                >
                  <ListItemText primary="Software Testing" />
                </ListItem>
                <Divider light />
                <ListItem
                  className="list-itm-g56"
                  button
                  onClick={() => handleCourseClick("Software Engineering")}
                >
                  <ListItemText primary="Software Engineering" />
                </ListItem>
                <Divider />
                <ListItem
                  className="list-itm-g56"
                  button
                  divider
                  onClick={() =>
                    handleCourseClick("Software Development Tools")
                  }
                >
                  <ListItemText primary="Software Development Tools" />
                </ListItem>
                <ListItem
                  className="list-itm-g56"
                  button
                  onClick={() => handleCourseClick("No-Code Development")}
                >
                  <ListItemText primary="No-Code Development" />
                </ListItem>
              </List>
            </div>
          </div>
        </div>

        <div className="comp-right-cont">
          <div className="comp-text-cont1">
            <h1>Best In Course</h1>
            <p>Compare the best course</p>
          </div>
          <div className="comp-reviews-cont">
            {reviews.map((review, index) => (
              // <div className="each-reviews" key={`${index}-${review.courseName}`}>
              //   <div className="cust-img232"><img src="https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og" alt="" /></div>
              //   <div className="cust-reviews232">
              //     <div className="cust-rev-course">{review.courseName}</div>
              //     <div className="cust-rev-reviews549">
              //       <span><Rating name="read-only" value={review.Rating} readOnly style={{ color: "green" }} /></span>
              //       <span style={{ fontWeight: "600" }}>TrustScores 4.0</span>
              //       {/* <span>3,302 reviews</span> */}
              //     </div>
              //   </div>
              // </div>
              <div
                className="rev-content"
                onClick={() =>
                  (window.location.href = review.AffiliatedLink
                    ? review.AffiliatedLink
                    : "#")
                }
                style={{ width: "100%", display: "flex", paddingTop: "20px" }}
                key={`${index}-${review.courseName}`}
              >
                <div style={{ minWidth: "74px", height: "100px" }}>
                  <img
                    src="https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og"
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div>
                  <div className="rev-icon-star">
                    <Rating
                      name="read-only"
                      value={review.Rating}
                      readOnly
                      style={{ color: "green" }}
                    />
                  </div>
                  <div className="rev-cust-cont1">
                    <span>{review.username}</span>
                    <span>reviewed</span>
                    <span>{review.platformName}</span>
                  </div>
                  <div className="rev-content1">
                    <p>{review.courseDescription}</p>
                    <div className="rev-time">
                      {calculateTimeDifference(review.TimeofUpload)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Comparison;
