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

app.delete("/recipe/:id", (req, res) => {
  const recipes = JSON.parse(fs.readFileSync("./recipes.json", "utf8"));
  const id = parseInt(req.params.id, 10);
  if (recipes.find((recipe) => recipe.id === id)) {
    const deleteIndex = recipes.findIndex((recipe) => recipe.id === id);
    const deletedArray = recipes.splice(deleteIndex, 1)[0];
    
    fs.writeFileSync("./recipes.json", JSON.stringify(recipes));
    res.status(200).send(deletedArray);
  } else {
    res.status(404).send({ message: "recipe not found" });
  }
});

app.post("/recipe/new", (_req, res) => {
  const recipes = JSON.parse(fs.readFileSync("./recipes.json", "utf8"));
  const newRecipe = {
    id: 12346,
    name: "ovo mexido",
    ingredientes: ["ovo"],
  };

  if (recipes.find((recipe) => recipe.id === newRecipe.id)) {
    return res.status(500).send({ message: "recipe already added" });
  }
  recipes.push(newRecipe);
  fs.writeFileSync("./recipes.json", JSON.stringify(recipes));
  res.status(200).send({ addedRecipe: newRecipe });
});

app.listen(3000, () => {
  console.log("Rodando na porta 3000");
});
