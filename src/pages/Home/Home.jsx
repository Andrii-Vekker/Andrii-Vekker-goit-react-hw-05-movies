import { LinkStyled } from "./Home.styled";
import { Heder } from "./Home.styled";

const navItems = [
  { href: "/", text: "Home" },
  { href: "/movies", text: "Movies" }
];


export default function Home() {


  return (
    <Heder>
      <nav>
        {navItems.map(({ href, text }) => <LinkStyled to={href} key={href} end>{text}</LinkStyled>)}
      </nav>
    </Heder>
  )
}


