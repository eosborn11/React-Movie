import {useEffect} from 'react';
import './App.css';

const
// API Key 1dc19b08

const API_URL = 'http://http://www.omdbapi.com?apikey=1dc19b08';

function App() {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  }

  useEffect(() => {
    searchMovies(`spiderman`);
  }, []);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
