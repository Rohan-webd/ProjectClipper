const mongoose = require("mongoose");
const PlatformSchema = new mongoose.Schema({
   name :{
    type:String,
    required:true
   },
   url : {
    type : String,
    required: true
   }
});
const Platform = mongoose.model("platform", PlatformSchema);
module.exports = Platform;