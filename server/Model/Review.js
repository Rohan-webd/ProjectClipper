const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
    username: {
        type : String,
        required : true
    },
    emailId: {
        type : String,
        required : true
    },
    Rating: {
        type : Number
    },
    catagoryName : String,
    courseDescription: String,
    courseName: String,
    platformName: String,
    courseURL: String,
    purchaseDate: Date,
    TimeofUpload: Date,
    AffiliatedLink: String
});
const Review = mongoose.model("reviews", reviewSchema);
module.exports = Review;