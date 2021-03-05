import React from "react";
import style from "./Recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <h5>Calories - {calories}</h5>
      <ol>
        {" "}
        <h3>Ingredients</h3>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <img src={image} alt="recipes" />
    </div>
  );
};

export default Recipe;
