import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer>
        footer
      </footer>
    </>
  );
};

export default Layout;
