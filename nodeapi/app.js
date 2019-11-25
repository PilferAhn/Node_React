const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require('body-parser');
// import mongoose
const mongoose = require('mongoose');
// load env variables
const dotenv = require('dotenv');
dotenv.config()
 
//db connection
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
});


const PostRoutes = require('./routes/Post');

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/", PostRoutes); 


const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`API tranning port at: ${port}`
    )});
    