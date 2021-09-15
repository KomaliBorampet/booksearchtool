import { useEffect, useState } from 'react';
import './App.css';
import { SearchBox } from "./SearchBox";
import { Book } from "./Book";
import { sortAscending, sortAscString, sortDescending, sortDescString } from "./Utils";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      fetch(`https://openlibrary.org/search.json?q=${searchTerm}`)
        .then(resp => resp.json())
        .then(data => {
          setSearchResults(data.docs);
        })
    }
  }, [searchTerm])

  function onSearch(searchKeyword) {
    setSearchTerm(searchKeyword);
  }

  function sortOnChange(e) {
    const value = e.target.value;
    let results;
    if (value === "title_asc") {
      results = sortAscString(searchResults, "title");
    } else if (value === "title_desc") {
      results = sortDescString(searchResults, "title");
    } else if(value === "publish_asc") {
      results = sortAscending(searchResults, "first_publish_year");
    } else if(value === "publish_desc") {
      results = sortDescending(searchResults, "first_publish_year");
    }
    
    setSearchResults(results);
  }

  return (
    <div className="App">
      <header className="App-header">
        MY LIBRARY
        <div>
          <SearchBox onSearch={onSearch} />
        </div>
        </header>
      <div>
      
        
        <div>
          <input type="radio" name="radio" value="title_asc" onChange={sortOnChange} />Title Asc
          <input type="radio" name="radio" value="title_desc" onChange={sortOnChange} />Title desc
          <input type="radio" name="radio" value="publish_asc" onChange={sortOnChange} />Publish Asc
          <input type="radio" name="radio" value="publish_desc" onChange={sortOnChange} />Publish desc

        </div>
        {searchResults && <div> Total Results found: {searchResults.length} </div>}

        <div className="bookContainer">
          {
            searchResults ?
              searchResults.map(a =>
                <Book data={a} key={a._version} />
              ) : ""
          }
        </div>
      </div>
    </div>
  );
}

export default App;
