import React from "react";

export const RecipeDetail = ({ recipe }: IRecipeDetailProp) => (
  <section>
    <div>
      {recipe ? (
        <div>
          <h2>{recipe.name}</h2>

          <h3>Ingredients</h3>
          <p>{recipe.ingredients}</p>

          <h3>Instructions</h3>
          <p>{recipe.instructions}</p>
        </div>
      ) : (
        <div>Choose a recipe from the left hand side, or create a new one</div>
      )}
    </div>
  </section>
);

interface IRecipeDetailProp {
  recipe: { name: string; ingredients: string; instructions: string };
}
