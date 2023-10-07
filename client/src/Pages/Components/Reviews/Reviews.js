import React, { useEffect, useState } from "react";
import "../Reviews/Reviews.css";
import { useNavigate } from "react-router";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Rating from "@mui/material/Rating";

import Navbar from "../../Navbar";

import Axios from 'axios';

const Reviews = () => {
    const navigate = useNavigate();
    const [review, setReview] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3001/reviews").then((response) => {
            setReview(response.data);
        });
    },[]);
    
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
            <div className="rev-main-cont">
                <div className="rev-topbar">In Reviews We Trust</div>
                <div className="rev-mainsection">

                    {/* <div className="rev-content">
                        <div className="rev-icon-star">
                            <AccountCircleIcon />
                            <Rating
                                name="read-only"
                                value={3}
                                readOnly
                                style={{ color: "green" }}
                            />
                        </div>
                        <div className="rev-cust-cont1">
                            <span>Maikon Lima</span>
                            <span>reviewed</span>
                            <span>Freecash.com</span>
                        </div>
                        <div className="rev-content1">
                            <p>
                                "Freecash really does provide opportunities for us to make extra
                                income. And you really get paid, i hope it stays that ways!"
                            </p>
                        </div>
                    </div> */}

                    {review.map((item , id) => {
                        return (
                            // AffiliatedLink
                            <div className="rev-content" onClick={() => (window.location.href = item.AffiliatedLink ? item.AffiliatedLink : '#')} key={id}>
                                <div className="rev-icon-star">
                                    {/* <AccountCircleIcon /> */}
                                    <img src="https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og" alt="" style={{width:"65px", height:"65px"}}/>
                                    <Rating
                                        name="read-only"
                                        size="large" 
                                        value={item.Rating}
                                        readOnly
                                        style={{ color: "green", position:"relative", bottom:"0.7rem" }}
                                    />
                                </div>
                                <div className="rev-cust-cont1">
                                    <span>{item.username}</span>
                                    <span>reviewed</span>
                                    <span>{item.platformName}</span>
                                </div>
                                <div className="rev-content1"
                                    style={{
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        maxWidth: '100%',
                                        maxHeight: '100%'
                                    }}>
                                    <p>
                                        {item.courseDescription}
                                    </p>
                                    <div className="rev-time">
                                        {calculateTimeDifference(item.TimeofUpload)}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </>
    );
};

export default Reviews;
