const mongoose = require("mongoose");



const connection = "mongodb+srv://devarshee:devarshee@nodeexpressprojectss.p0rkpyz.mongodb.net/task-manager?retryWrites=true&w=majority"


const connectDB = (url) => {
    mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })

}


module.exports = connectDB