import { HederMain } from "./Layout.styled";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import { Outlet } from "react-router-dom";
import { Heder } from "pages/Home/Home.styled";
import { LinkStyled } from "pages/Home/Home.styled";

const navItems = [
  { href: "/", text: "Home" },
  { href: "/movies", text: "Movies" }
];

export default function Layout() {
    return (
      
        <>
            <Heder>
                  <nav>
        {navItems.map(({ href, text }) => <LinkStyled to={href} key={href} end>{text}</LinkStyled>)}
      </nav>
            </Heder>
        </>
    );
};
