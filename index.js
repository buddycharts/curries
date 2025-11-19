const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());

// Serve curry images WITHOUT public folder
app.use("/curry", express.static(path.join(__dirname, "curry")));

const data = require("./curry.json");

app.get("/", (req, res) => {
  res.send("Curry API Running Successfully!");
});

app.get("/curries", (req, res) => {
  res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on ${port}`));
