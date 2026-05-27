// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// function App() {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const debouncing = setTimeout(() => {
//       setResults(query); // Clear previous results
//     }, 3000); // Adjust the debounce delay as needed
//     return () => clearTimeout(debouncing); // Cleanup the timeout on unmount or query change
//   }, [query]);
    
//   return (
//     <>
//     <input type="text" placeholder="Search..." name="" id="" onChange={(e) => setQuery(e.target.value)} />
//     <div> Results: {results} </div>
//     </>
//   )
// }
// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
function App() {
  // const API="https://api.themoviedb.org/3/discover/movie?api_key=857696c41ec9ba15dd7185a7b50478e0&page=1"
  const API="https://api.themoviedb.org/3/discover/movie?api_key=857696c41ec9ba15dd7185a7b50478e0"
  const[page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  const handleNext = () => {
    setPage(page + 1);
  }
  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await axios.get(`${API}&page=${page}`);
        setMovies(response.data.results);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchAPI();
  }, [page]);
  return (
    <>
    <button onClick={handlePrev}>Previous</button>
    <span>Page: {page}</span>
    <button onClick={handleNext}>Next</button>
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
      {movies.map((movie) => (
        <div key={movie.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
          <h3>{movie.title}</h3>
          {movie.poster_path && (
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          )}
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
    </>
  )
}
export default App;