import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {


  const APP_ID = 'db707132';
  const APP_KEY = '6568bb4a4fed8cd474fb88ddd6b025fe';
  
  const  [recipes, setRecipes] = useState([]);


  useEffect( () => {
    getRecipes();
  },[]);


  const getRecipes =  async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return(
    <div className="App">
      <form className="search-form">
        <input  className="search-bar" type="text"/>
        <button 
         className="search-button" 
         type="submit">Search</button>
      </form>
        {recipes.map(recipe => (
          <Recipe />
        ))}
  </div>
  );
};

export default App;
