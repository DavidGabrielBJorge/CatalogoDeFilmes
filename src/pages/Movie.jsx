import { useState, useEffect } from "react"

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  console.log(moviesUrl, apiKey);
    return <div>Movie</div>
    
  }
  
  export default Movie