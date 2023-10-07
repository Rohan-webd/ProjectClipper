import React from "react";
import "../Blog/Blog.css";
import Navbar from "../../Navbar";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="blog-main">
        <div className="blog-img">
          <img
            src="https://img.freepik.com/premium-vector/user-manual-concept-guide-book-instruction_277904-3661.jpg"
            alt=""
          />
        </div>
        <div className="blog-content">
          <h2>Reviewer's Guide</h2>
          <p>
            You are welcome to share your thoughts through a review if you've
            had a recent and genuine interaction with an online education
            platform. However, we kindly request that you refrain from writing a
            review if you have received any form of incentive from an online
            course education platform in exchange for your feedback. Incentives
            may include discounts, monetary rewards, loyalty points, gifts,
            coupons, or referral bonuses, as they can compromise the integrity
            of the review process. If you do receive such an incentive, we
            encourage you to report it to us for further investigation.
          </p>

          <p>
            Reviews serve as an invaluable means for sharing your experiences
            and providing feedback to companies, regardless of the scale of your
            interaction. Whether it's a simple phone call, an online purchase, a
            visit to a local store, or any other engagement with an online
            course education platform's products or services, your insights are
            highly valued. To maintain relevance, we kindly request that you
            focus on experiences that have occurred within the past 12 months.
            While stories from the past are interesting, they may not be as
            pertinent to student, professionals seeking current information
            about courses.
          </p>

          <p>
            It is essential to be truthful in your reviews and avoid fabricating
            experiences or writing reviews on behalf of others. If you have a
            close association with, work for, or are in direct competition with
            a particular online course education platform, we advise against
            reviewing it to maintain objectivity and fairness.
          </p>

          <p>
            Receiving incentives in exchange for writing, altering, or deleting
            a review is strictly prohibited and goes against our guidelines.
            Please retain any documentation that supports your interaction with
            an online course education platform, such as receipts, order
            confirmations, or chat screenshots, as you may be asked to verify
            your experience.
          </p>

          <p>
            We expect all our contributors to be respectful on our platform.
            Offensive, discriminatory, defamatory, or obscene content, as well
            as falsehoods, bullying, blackmail, threats, or illegal activities,
            will not be tolerated.
          </p>

          <p>
            Our platform acts as an intermediary between student, professional
            and online education platforms, which requires us to balance
            multiple responsibilities. While we aim to provide a platform for
            everyone to share their stories, we are also obligated to remove
            content that unjustly damages reputations or results in significant
            financial losses for online education platforms.
          </p>

          <p>
            Effective reviews focus on describing the events and leave readers
            to form their own conclusions. We do not engage in disputes between
            reviewers and online education platforms, as we are a consumer
            review platform, not a regulatory authority or a legal entity.
          </p>

          <p>
            Please ensure that your reviews remain relevant and free from
            promotional references, marketing material, or external links. Our
            platform is not intended for sales, discount offers, the formation
            of action groups, or meeting others for unrelated purposes. Remember
            that your reviews are public, so it's important to protect your
            sensitive personal information and that of others. Avoid including
            names, phone numbers, addresses, email addresses, or any information
            that could be used to identify or contact individuals. To avoid
            confusion, double-check the online course education platform and
            country domain you are reviewing before posting, as posting on the
            wrong profile can lead to complications. Creating a user account is
            necessary to post a review. Each user is allowed only one account,
            and it should represent a real person. Usernames, profile
            descriptions, and profile pictures must be respectful and in line
            with our guidelines.
          </p>

          <p>
            You have ownership of your reviews, granting you the ability to
            edit, update, or delete them at any time. We encourage you to update
            existing reviews with additional information regarding specific
            experiences. However, excessive reviews for a single online
            education platform are not helpful.
          </p>

          <p>
            We appreciate your assistance in protecting our platform by
            reporting problematic reviews, especially if you have supporting
            evidence. Please only flag a review if you genuinely believe there
            is an issue, and do so fairly and consistently.
          </p>

          <p>
            Flagged reviews will undergo a review process to determine if they
            violate our guidelines. If found in violation, appropriate action
            will be taken. While we value freedom of expression, there are
            certain types of content that do not align with our policies. If
            your review is flagged for rule violations, it may be temporarily
            hidden, and you may be asked to make necessary changes. We will
            provide you with the opportunity to bring your review in line with
            our guidelines.
          </p>

          <p>
            Serious misuse of our platform may result in the removal of your
            reviews and the potential blocking or deletion of your account,
            including the deletion of associated reviews. Our software
            continuously monitors for suspicious and fake reviews, removing them
            when detected.
          </p>

          <p>
            Please note that these guidelines are guiding principles, and we
            retain the final authority to interpret and apply them. We may
            update these guidelines at any time to ensure the integrity and
            functionality of our platform. Thank you for your understanding and
            cooperation.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
