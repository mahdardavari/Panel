import { FC } from "react";
import { useLocation } from "react-router-dom";

const NavBar: FC = () => {
  const location = useLocation();

  return (
    <>
      navbar
      {location.pathname === "/" ? <>user info</> : null}
    </>
  );
};

export default NavBar;
