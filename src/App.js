import React from 'react';
import './App.css';

const App = () => {


  const APP_ID = 'db707132';
  const APP_KEY = '6568bb4a4fed8cd474fb88ddd6b025fe';
  
  const exampleReq = 
   `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  
  return(
    <div className="App">
      <form className="search-form">
        <input  className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <h1>Hello React</h1>
    </div>

  );

}

export default App;
