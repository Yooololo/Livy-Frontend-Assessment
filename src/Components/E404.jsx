import { NavLink } from "react-router-dom";
import "../Sass/Styles/E404.scss";

export default function E404() {
  return (
    <div className="e404todo">
      <div className="e404background">
        <div className="e404container">
          <div className="e404title">Something went wrong</div>
          <NavLink to="/home">
            <button className="e404button">Return Home</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
