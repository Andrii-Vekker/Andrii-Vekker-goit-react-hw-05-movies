import { getTrandingFilms } from "components/Api/Api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LinkStyled } from "./Home.styled";
import { Heder } from "./Home.styled";

const navItems = [
  { href: "/", text: "Home" },
  { href: "/movies", text: "Movies" }
];


export default function Home() {
  const [trandingFilms, setTrandingFilms] = useState([]);
  

  useEffect(() => {
getTrandingFilms().then(data => setTrandingFilms(data.results))
}, [])


  return (
  
       <ul>
        {trandingFilms.map(({ title, id }) => <li key={id}><Link >{title}</Link></li>)}
      </ul>
  
  )
}


