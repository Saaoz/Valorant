const dotenv = require("dotenv");
dotenv.config();

const router = require ("./routes/index")
const express = require("express");
const PORT = 8000;
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

app.use(cors());
app.use(bodyParser.json());


// Route par défaut
app.get("/", (req, res) => {
    res.send("Welcome to Valorant Profiles API");
});

app.use("/api", router);

app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
});
