const express = require("express");
require('dotenv').config();
const cors = require("cors");
const ConnectwithDB  = require("./Db/db.js");
const bcrypt = require('bcryptjs');
const User = require("./Model/User");
const TokenCreator = require("./Util/Token.js");
const Review = require("./Model/Review.js");
const Category = require("./Model/Category");
const Platform = require("./Model/Platform");
//Connection with Database
ConnectwithDB();


//Using Express
const app = express();
app.use(express.json());
app.use(cors());


//Listening to Server : 3001
app.listen(3001, console.log("Server running at port 3001"));

app.get("/reviews", async (req, res) => {
    try {
        // let query = {};
        // console.log(req.query.categoryName);
        // if (req.query.categoryName && req.query.categoryName.trim() !== "") {
        //     query.categoryName = new RegExp(req.query.categoryName, 'i');
        // }

        // console.log(query);
        const result = await Review.find({}).sort({ Rating: -1 });
        console.log(result);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/review-name", async (req, res) => {
    try {
        // let query = {};
        // console.log(req.query.categoryName);
        // if (req.query.categoryName && req.query.categoryName.trim() !== "") {
        //     query.categoryName = new RegExp(req.query.categoryName, 'i');
        // }
        let query = {catagoryName : req.query.catagoryName};
        console.log(query);
        const result = await Review.find(query).sort({ Rating: -1 });
        console.log(result);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/reviews", async (req, res) => {
    const currentTime = new Date();
    req.body.TimeofUpload = currentTime;
    console.log(req.body);
    const review = new Review(req.body);
    review.save();
    try {
        const result = await Review.find({});
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
    console.log(req.body);
});

app.post("/adminDelete", async function (req, res) {
    console.log(req.body.Id);
    try {
        const result = await Review.deleteOne({ _id: req.body.Id });
        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while deleting the document." });
    }
});

app.post("/updateLink", async function (req, res) {
    const { id, affiliateLink } = req.body;

    // Ensure both id and affiliateLink are provided in the request
    if (!id || !affiliateLink) {
        return res.status(400).json({ error: "Missing required data" });
    }

    try {
        const updatedReview = await Review.findByIdAndUpdate(id, { AffiliatedLink: affiliateLink }, { new: true });

        if (!updatedReview) {
            return res.status(404).json({ error: "Review not found" });
        }

        console.log("Review updated successfully:", updatedReview);
        res.status(200).json(updatedReview);
    } catch (error) {
        console.error("Error updating review:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

//User Signin + Authentication
app.post('/signin' , async (req,res)=>{
try{
const {email , password} = req.body;
console.log(email);
if(!email || !password) {
    res.status(400).json({
        Message : "Please enter Email && Password"
    })
}
else{
    const userAlreadyExists = await User.findOne({email}).select("+password");
    if(!userAlreadyExists){
        res.status(400).json({
            Message : "User Not Found"
        })
    }
    else{
        // const token = userAlreadyExists.getjwtToken();
        const isValidatedPass = await bcrypt.compare(password,userAlreadyExists.password);
        if(!isValidatedPass){
        res.status(400).json({
            message : "Invalid Credentials"
        })
        }
        else{
            const token = TokenCreator(userAlreadyExists._id);
            res.status(200).json({
                success:true,
                email : userAlreadyExists.email,
                user : token
            })
        }

    }


}
}
catch(err){
    console.log(err);
}

});


app.post("/signup" , async (req,res)=>{
    try{
        const {firstName , lastName , email , password} = req.body;
        //User Validation
          if(!email || !password) {
            res.status(200).json({
                Message : "Please Enter All Credentials"
            })
          }
          else{
        //creation of New User for our App
        const newUser = {
            name : firstName + lastName,
            email,
            password
        }

        //Mongo Db Method

        const UserCreated = await User.create(newUser);
        const token =  TokenCreator(UserCreated._id);
        if(UserCreated){
            res.status(200).json({
                success : true,
                user : token
            })
        }
    }
    }
    catch(err){
        console.log(err);
    }

});

app.post("/category" , async(req,res)=>{
    try{
        const {category} = req.body;
        const alreadyExistsCategory = await Category.findOne({name : category});
        if(alreadyExistsCategory){
            res.status(400).json({
                Message : "category already exists"
            })
        }
        else{
        const response = await Category.create({
            name : category
        });
        res.status(200).json({
            Category : response
        })
        }
    }
    catch(err){
        console.log(err);
        
    }
})

app.get("/category" , async(req,res)=>{
try{
const response = await Category.find({});
res.status(200).json({
    Categories : response
});
}
catch(err){
    console.log(err);
}
})


app.delete("/category/delete/:cat" , async(req,res)=>{
try{
const category = req.params.cat;
const document = await Category.find({name : category});
if(!document){
    res.status(400).json({
        Message : "Document Not Found"
    })
}
else{
const deletedDocument = await Category.deleteOne({name: category});
if(deletedDocument){
    res.status(200).json({
        success : true,
        DocumentDeleted : deletedDocument
    })
}
else{
    res.staus(400).json({
        Message : "couldnt Delete the Document"
    })
}
}
}
catch(err){
    console.log(err);
}
})

app.post("/platform" , async(req,res)=>{
try {
    const Alreadyplatform = await Platform.findOne({name : req.body.name});
    if(Alreadyplatform){
        res.status(400).json({
            message : "Platform already exists"
        })
    }
    else{
        const newPlatform = {
            name : req.body.name,
            url : req.body.url
        }
        const response = await Platform.create(newPlatform);
        if(response){
            res.status(200).json({
                success : true,
                Platform : response
            })
        }
        else{
            res.status(400).json({
                Message : "Error in Platform Addition"
            })
        }
    }
} catch (error) {
    console.log(error);
}
});

app.delete("/platform/:name" , async(req,res)=>{
    const name = req.params.name;
    try {
        const Alreadyplatform = await Platform.findOne({name : name});
        if(!Alreadyplatform){
            res.status(400).json({
                message : "Platform dont exist"
            })
        }
        else{
            const response = await Platform.deleteOne({name : name});
            if(response){
                res.status(200).json({
                    success : true,
                    Platform : response
                })
            }
            else{
                res.status(400).json({
                    Message : "Error in Platform Deletion"
                })
            }
        }
    } catch (error) {
        console.log(error);
    }
    });