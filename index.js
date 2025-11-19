const express = require("express");
const path = require("path");
const app = express();

// --- FIX CORS ISSUE ---
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});

// Serve all files in this folder (your curry folder)
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.send("Curries API Working with CORS!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running on port " + port));
