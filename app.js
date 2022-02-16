const express = require("express");
const dotenv  = require("dotenv");
const mongoose  = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
dotenv.config();

//databse connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("DB connected"))
.catch(() => console.log("Connection Error"));

//request parser
app.use(express.json());
app.use(express.urlencoded({extended: 'true'}))

//set view engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//parse cookies

app.use(cookieParser(process.env.COOKIE_PARSER))
app.listen(process.env.PORT, () => {
    console.log(`APP is runnin on port ${process.env.PORT}`);
})