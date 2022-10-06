import { GlobalStyle } from "./GlobalStyle";
import Cast from "pages/Cast/Cast";
import Home from "pages/Home/Home";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Movies from "pages/Movies/Movies";
import Reviews from "pages/Reviews/Reviews";
import { Routes, Route } from "react-router-dom";
import Layout from "components/Layout/Layout";


export const App = () => {
  return (
   <div  style={{padding:"16px"}}>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="/movies" element={<Movies/>} />
        {/* <Route path="/movies" element={<MovieDetails/>} />
        <Route path="/movies" element={<Cast/>} />
        <Route path="/movies" element={<Reviews/>} /> */}
      </Route>
    </Routes>
      <GlobalStyle />
      </div>
    
  );
};
