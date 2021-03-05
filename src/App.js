import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import Footer from "./footer";

const App = () => {
  const APP_ID = "06330bc2";
  const APP_KEY = "579bb9d3332b91f10ae0f5f1ddd1d3b2";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );

      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };

    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <div className="banner-text">
        <h1 id="home">Recipe Home</h1>
      </div>
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
