const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const axios = require("axios");
const dotenv = require("dotenv");
const router = express.Router();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

const baseurl = process.env.GOOGLE_URL;
const api_KEY = process.env.GOOGLE_API_KEY;

router.get("/api/searchByAuthor", (req, res) => {
  console.log(req);
  axios({
      method: "GET",
      url: `${baseurl}inauthor:${query}&maxResults=20&key=${api_KEY}`
    }).then(
      data => res.json(data))
});

router.get("/api/searchByTitle", (req, res) => {
  console.log(req);
  axios({
      method: "GET",
      url: `${baseurl}intitle:${query}&maxResults=20&key=${api_KEY}`
    }).then(
      data => res.json(data))
});

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
} else {
  mongoose.connect("mongodb://localhost/googlebooks", { useNewUrlParser: true, useUnifiedTopology: true });
}


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
