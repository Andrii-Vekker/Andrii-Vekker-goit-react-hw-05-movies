import { Link, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFilmById } from "components/Api/Api";


export default function MovieDetails() {

  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  useEffect(() => {
 getFilmById(movieId).then(data => setMovieInfo(data))
  }, [movieId])
  
  if (!movieInfo) {
   return
  };
  const { poster_path, original_title, release_date, vote_average, overview, genres } = movieInfo;
  const date = release_date.slice(0, 4);
  const score = (vote_average * 10).toFixed();
  const filmGenres = genres.map(({ name }) => name);
  const space = filmGenres.join(" ").split();
  return (
     <>
    <main>
      <section  style={{display:"flex"}}>
        {poster_path ? <img style={{width:"200px", height:"300px"}} src={`https://www.themoviedb.org/t/p/w500${poster_path}`} alt={`${original_title}`} /> : null}
        <ul>
          <li><h2>{`${original_title} (${date})`}</h2></li>
           <li>{`User Score ${score}%`}</li>
          <li><h3>Overwiev</h3></li>
           <li>{overview}</li>
          <li><h3>Genres</h3></li>
           <li>{space}</li>
        </ul>
       </section>
      <section>
        <h3>Addidition information</h3>
        <ul>
          <li>{<Link to={`/movies/${movieId}/cast`}>Cast</Link>}</li>
          <li>{<Link to={`/movies/${movieId}/review`}>Reviews</Link>}</li>
        </ul>
      </section>
      
      </main>
      <Outlet/>
      </>
  );
};
