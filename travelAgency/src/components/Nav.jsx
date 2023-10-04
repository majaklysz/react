import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <img className="logo" src="/images/AdobeStock_532886413.png" alt="" />
      <div className="navList">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tours">Tours</NavLink>
        <NavLink to="/aboutUs">About Us</NavLink>
      </div>
    </nav>
  );
}
