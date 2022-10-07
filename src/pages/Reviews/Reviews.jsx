import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getRewievFilm } from "components/Api/Api";



export default function Reviews() {

  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
  getRewievFilm(movieId).then(data => setReviews(data))
  }, [movieId])
  
  if (!reviews) {
    return
  };

  return (
    <>
    <ul>
        {reviews.map(({ content, author, id }) => {
          return (
            <li key={id}>
              <h2>{`Author: ${author}`}</h2>
              <article>{content}</article>
            </li>
          );
     })}
      </ul>
      </>
  );
};
