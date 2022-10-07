import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getActorDetailsFilm } from "components/Api/Api";


export default function Cast() {
  const { movieId } = useParams();
  const [actorsInfo, setActorsInfo] = useState([]);

  useEffect(() => {
    getActorDetailsFilm(movieId).then(data => setActorsInfo(data))
  }, [movieId]);
  
if (!actorsInfo) {
  return
  };
  
  return (
    <ul>
      {actorsInfo.map(({ original_name, character, profile_path, id }) => {
        return (
          <li key={id}>
            {profile_path ? <img style={{ width: "60px", height: "90px" }}
              src={`https://www.themoviedb.org/t/p/w500${profile_path}`}
              alt={`${original_name}`} /> : "Sorry no image"}
            <p>{original_name}</p>
            <p>{character}</p>
          </li>
        );
     })};
   </ul>
  );
};
