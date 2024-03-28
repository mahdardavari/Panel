import { Outlet } from "react-router-dom";
import Footer from "src/components/share/Footer";

const Layout = () => {
  return (
    <>
      <header>{/* <NavBar /> */}</header>

      <main id="main" className="p-4">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
