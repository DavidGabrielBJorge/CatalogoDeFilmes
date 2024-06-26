import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import './MovieGrid.css';
const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [bestMovies, setBestMovies] = useState([]);

  const getBestMovies = async (url) =>{
    const res = await fetch(url);
    const data = await res.json();

    setBestMovies(data.results);
  }

  useEffect(() => {
    const bestRatedUrl = `${moviesUrl}top_rated?${apiKey}`;
    getBestMovies(bestRatedUrl);
  }, [])
  return <div className="container">
    <h2 className="title">Best movies of all time:</h2>
    <div className="movies-container">
      {bestMovies.length==0 && <p>Loading....</p>}
      {bestMovies.length>0 && bestMovies.map((movie)=> <MovieCard key={movie.id} movie = {movie}/> )}
    </div>
  </div>
  
}

export default Home