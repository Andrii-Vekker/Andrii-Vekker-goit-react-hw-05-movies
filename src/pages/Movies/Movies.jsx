import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchBox from "components/SearchBox/SearchBox";
import { getSearchFilms } from "components/Api/Api";



export default function Movies() {

  const [searchFilms, setSearchFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") ?? "";
   

  useEffect(() => {
    if (!filter) {
      return
    }
    getSearchFilms(filter).then(data => setSearchFilms(data)) 
  }, [filter]);
  
if (!searchFilms) {
    return
  }

  const changeFilter = (value) => {
setSearchParams(value !== "" ? {filter: value} : {})
  };

  return (
    <>
      <SearchBox onChange={changeFilter} />
      <ul>
        {searchFilms.map(({ title, id }) => <li key={id}><Link to={`movies/${id}`}>{title}</Link></li>)}
      </ul>
    </>
  );

};
