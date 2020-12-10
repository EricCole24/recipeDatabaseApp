import React from "react";
import { Link } from "react-router-dom";
// stateless components recieve props as first arguement
export const RecipeList = ({ recipes, onSelected }: IRecipeListProps) => (
  <ul>
    {recipes.map((recipe: { id: number; name: string }) => (
      <li key={recipe.id} style={{ listStyle: "none" }}>
        <Link to={"#"} onClick={onSelected.bind(null, recipe)}>
          {recipe.name}{" "}
        </Link>
      </li>
    ))}
  </ul>
);

interface IRecipeListProps {
  recipes: {}[];
  onSelected: Function;
}
/**
 * notes to self
 * recipe was passed to a function so its value can be used in a different place
 * onselected defined as a function so we can pass recipe to it and pass it as a prop to the function
 */
