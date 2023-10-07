import React from "react";
import "../About/About.css";
import aboutImg from "../Assets/about-us.png";

import Navbar from "../../Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-main">
        <div className="about-sub-div about-img-text">
          <img src={aboutImg} alt="" />
        </div>
        <div className="about-text">
          <h2>ABOUT US</h2>
          <p    style={{fontSize:"26px"}}>
            Welcome to CourseClipper, the ultimate destination for discerning learners and professionals
            seeking the ideal educational experience. Our mission is to provide a platform where students and
            professionals can find unbiased and informative reviews of various courses from different online
            education providers
          </p>
        </div>
        <div className="about-img-text">
          <div className="img-box">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="text-box">
            <p>In this dynamic realm of online education, the multitude of options can often leave you feeling
              lost amidst a sea of choices. With prominent platforms such as Coursera, Pluralsight, Alison,
              Khan Academy, Codecademy, FutureLearn, edX, Udacity, Skillshare, Educative, Cloud Guru,
              Digital Cloud Training, and Learn.Cantrill and many more clamoring for your attention, making
              an informed decision can be a daunting task.At CourseClipper, we are dedicated to delivering authentic, impartial evaluations of courses
              spanning a wide spectrum of subjects and platforms. Our vibrant community of students and
              professionals generously shares their genuine experiences, empowering you to make
              well-informed choices.
            </p>
          </div>
        </div>

        <div className="about-img-text">
          <div className="text-box">
            <p>
              Gone are the days of tirelessly scouring the internet for elusive course reviews or blindly
              following recommendations. Our platform is your trusted companion, streamlining your
              decision-making process and saving you precious time and resources.
              CourseClipper is more than just a review platform; it's a sanctuary of trust and collaboration. We
              unite students and professionals to foster confidence and inspire synergy in the pursuit of
              educational excellence. Free and accessible to all, our foundation is built upon unwavering
              transparency.
            </p>
          </div>
          <div className="img-box">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>

        <div className="about-img-text">
          <div className="img-box">
            <img
              src="https://plus.unsplash.com/premium_photo-1663047308908-f6e112c17daf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="text-box">
            <p>
              By utilizing CourseClipper, you not only gain access to rich insights that aid in choosing the
              perfect course but also contribute to a collective pool of knowledge. The more students and
              professionals engage with our platform and share their valuable opinions, the more profound our
              insights become. Together, we elevate the standards of online education worldwide. We are
              constantly updating our platform to provide you with the latest information and reviews, and we welcome
              your feedback and suggestions.
              Join us in revolutionizing the way you embark on your educational journey. Experience the
              CourseClipper advantage, where trust is the currency, and collaboration is the key to success.
              Say goodbye to uncertainty and hello to a future where every course choice is a well-informed
              one.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
