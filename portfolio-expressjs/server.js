const express = require("express");
const path = require("path");
const app = express();
const port = 7500;

app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.get("/", (_, res) => res.redirect("/bio"));

const pages = [
  { id: "bio", name: "Bio" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
  { id: "contact", name: "Contact" },
];

pages.forEach(({ id }) =>
  app.get("/" + id, (_, res) => res.render(id, { activePage: id, pages }))
);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
