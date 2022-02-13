const express = require("express");
const app = express();
const port = 7500;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("index.html");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
