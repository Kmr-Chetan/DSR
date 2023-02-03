import { NavLink, useNavigate } from "react-router-dom";
import UserEntryForm from "../dasboard/userEntryForm";

function Header() {
  const navigate = useNavigate();
  const clickHandler = (data) => {
    console.log("data");
    navigate("userForm");
  };
  return (
    <>
      <nav className="navbar  navbar-dark bg-dark justify-content-md-start">
        <NavLink className="navbar-brand text-white" to="/">
          Home
        </NavLink>
        <NavLink className="navbar-brand text-white" to="/UserEntryForm">
          DSR
        </NavLink>
        <NavLink className="navbar-brand text-white" to="/Dashboard">
          Tracker
        </NavLink>
      </nav>
    </>
  );
}

export default Header;
