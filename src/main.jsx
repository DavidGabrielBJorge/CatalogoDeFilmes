import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./index.css";
import Movie from './pages/Movie.jsx';
import Search from './pages/Search.jsx';
import Home from './pages/Home.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App></App>}>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='movie/:id' element={<Movie></Movie>}></Route>
          <Route path='search' element={<Search></Search>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
