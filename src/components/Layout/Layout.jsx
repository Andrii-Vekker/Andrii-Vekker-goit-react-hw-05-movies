import { HederMain } from "./Layout.styled";
import { Outlet } from "react-router-dom";
import AppBar from "components/AppBar/AppBar";



export default function Layout() {
    return (
      <HederMain>
        <AppBar />
        <Outlet/>
      </HederMain>
      
    );
};


  // <div>
  //       <Heder>
  //               <nav>
  //       {navItems.map(({ href, text }) => <LinkStyled to={href} key={href} end>{text}</LinkStyled>)}
  //     </nav>
  //         </Heder>
  //       <Home />
  //       <Outlet/>
  //       </div>