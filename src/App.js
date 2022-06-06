import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "42e47806";
  const APP_KEY = "947d7ba2d7296c24c91212888ec46cfb";

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setData(data.hits);
      console.log(data.hits);
    };
    getRecipe();
  }, [query]);

  //Fetch Data From Api
  const userSearch = (e) => {
    setSearch(e.target.value);
  };

  const getQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const getQuery2 = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setQuery(search);
      setSearch("");
    }
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for recipe"
          value={search}
          onChange={userSearch}
          onKeyUp={getQuery2}
          className= "py-6"
        />
        <button className="btn" onClick={getQuery}>
          Search
        </button>
      </div>
      {data.map((recipe, idx) => (
        <Recipe
          key={recipe[idx]}
          name={recipe.recipe.label}
          type={recipe.recipe.mealType[0]}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredientLines}
        />
      ))}
    </div>
  );
};

export default App;
