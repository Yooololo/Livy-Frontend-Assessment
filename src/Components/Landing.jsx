import React from "react";
import { Link } from "react-router-dom";
// import { GiCastle } from "react-icons/gi";
import "../Sass/Styles/Landing.scss";

export default function Landing() {
  return (
    <div className="landingtodo">
      <div className="landingbackground">
        <div className="landingcontainer">
          <p className="landingtitle">Welcome to Brastlewark</p>
          <p>
            <Link to="/home">
              <button className="landingbutton">
                {/* <GiCastle /> */}
                Enter City's Gnome Census
                {/* <GiCastle /> */}
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
