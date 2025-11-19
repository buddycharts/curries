const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

// Load your JSON file
const data = require("./curry.json");

// API route
app.get("/curries", (req, res) => {
  res.json(data);
});

app.get("/", (req, res) => {
  res.send("Curry API Running Successfully!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on ${port}`));
