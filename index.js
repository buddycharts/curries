const express = require("express");
const path = require("path");
const app = express();

// serve everything inside the "curry" folder
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.send("Curries API Working!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running on port " + port));
