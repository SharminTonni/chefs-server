const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

const chefs = require("./data/chef.json");
const recipes = require("./data/recipes.json");

app.get("/", (req, res) => {
  res.send("chef server is running");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const selectedRecipes = recipes.filter((recipe) => recipe.chef_id == id);
  res.send(selectedRecipes);
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});