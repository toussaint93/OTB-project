import "@/styles/globals.css";
import React, { useState, useEffect } from 'react';


function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [apiData, setApiData] = useState({});

  useEffect(() => { //to  run the API you have to use a useEffect. There are a couple ways to go about it. I decided that a "if" was the easies, that would then pass down to a fetch//
    if (selectedCountry) {
    
      fetch(`${selectedCountry}`) //I want my API key to go here//
        .then(response => response.json())
        .then(data => setApiData(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [selectedCountry]);

  const handleCountryClick = (country) => {  //this is listening for the countries button to be clicked. When its clicked, it will return the data//
  };

  return (
    <div className="app-container">
      <div className="button-container">
        <button onClick={() => handleCountryClick('canada')}>Canada</button>
        <button onClick={() => handleCountryClick('thailand')}>Thailand</button>
        <button onClick={() => handleCountryClick('spain')}>Spain</button>
      </div>
      <div className="info-container">
        <div className="info">{apiData.country || 'Country'}</div> 
        <div className="info">{apiData.currency|| 'Currency'}</div>
        <div className="info">{apiData.coat|| 'Coat'}</div>
        <div className="info">{apiData.flag || 'Flag'}</div>
      </div>
    </div>
  );
}

//export default App; I went back into my learnings and I saw that this was common practice. BUT since I wasnt exporting anything, I didnt know if it was necessary?//

























  
  