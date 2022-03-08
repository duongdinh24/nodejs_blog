const mongoose = require('mongoose');

async function connect() {
    try{
        await mongoose.connect('mongodb://192.168.1.24:27017/nodejs_blog');
        // , {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useCreateIndex: true,
        // }
        console.log("Connect successfully!!!");
    }
    catch(error){
        console.log("Connect successfuly!!!");
    }
}

module.exports = { connect };

//20:35 https://www.youtube.com/watch?v=vjf774RKrLc&t=1265s