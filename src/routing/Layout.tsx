import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

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
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
