import Cast from "pages/Cast/Cast";
import Home from "pages/Home/Home";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Movies from "pages/Movies/Movies";
import Reviews from "pages/Reviews/Reviews";
import { Routes, Route } from "react-router-dom";


export const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies" element={<MovieDetails/>} />
        <Route path="/movies" element={<Cast/>} />
        <Route path="/movies" element={<Reviews/>} />
</Routes>
    
  );
};
