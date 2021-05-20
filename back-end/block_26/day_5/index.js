const express = require("express");
const fs = require("fs");
const app = express();

// const recipes = [
//   {
//     id:12345,
//     name:'farofa de bacon',
//     ingredientes:['farofa', 'bacon']
//   },
//   {
//     id:12346,
//     name:'ovo mexido',
//     ingredientes:['ovo']
//   }
// ];

const getRecipes = () => JSON.parse(fs.readFileSync("./recipes.json", "utf8"));
const updateRecipes = (recipes) =>
  fs.writeFileSync("./recipes.json", JSON.stringify(recipes));

app.delete("/recipe/:id", (req, res) => {
  try {
    const recipes = getRecipes();

    const id = parseInt(req.params.id, 10);
    if (recipes.find((recipe) => recipe.id === id)) {
      const deleteIndex = recipes.findIndex((recipe) => recipe.id === id);
      const deletedArray = recipes.splice(deleteIndex, 1)[0];

      updateRecipes(recipes);

      res.status(200).send(deletedArray);
    } else {
      res.status(404).send({ message: "recipe not found" });
    }
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

app.post("/recipe/new", (_req, res) => {
  try {
    const recipes = getRecipes();

    const newRecipe = {
      id: 12346,
      name: "ovo mexido",
      ingredientes: ["ovo"],
    };

    if (recipes.find((recipe) => recipe.id === newRecipe.id)) {
      return res.status(500).send({ message: "recipe already added" });
    }

    recipes.push(newRecipe);

    updateRecipes(recipes);

    res.status(200).send({ addedRecipe: newRecipe });
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

app.listen(3000, () => {
  console.log("Rodando na porta 3000");
});
