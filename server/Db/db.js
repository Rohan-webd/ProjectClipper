const mongoose = require('mongoose');
const ConnectwithDb = () => {

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(console.log('DB GOT CONNECTED')
).catch( error =>{
    console.log('DB CONNECTION ISSUES');
    console.log(error);
    process.exit(1);
})

};

module.exports = ConnectwithDb;