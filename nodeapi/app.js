const express = require("express");
const app = express();
const morgan = require("morgan");

const PostRoutes = require('./routes/Post');

app.use(morgan("dev"));
app.use("/", PostRoutes); 


const port = 3000;

app.listen(port, () => {
    console.log('API tranning port at:', port
    )});
    