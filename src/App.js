import React, { useState } from 'react';
import './App.css';

function App() {
  const initialDictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = () => {
    const word = searchTerm.trim().toLowerCase();
    const foundWord = initialDictionary.find(entry => entry.word.toLowerCase() === word);

    if (foundWord) {
      setSearchResult(foundWord.meaning);
    } else {
      setSearchResult('Word not found in the dictionary.');
    }
  };

  return (
    <div className="App">
      <h1>XDictionary</h1>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter a word"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="search-result">
        {searchResult && <p>{searchResult}</p>}
      </div>
    </div>
  );
}

export default App;
