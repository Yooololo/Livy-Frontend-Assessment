import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { GiCastle } from "react-icons/gi";
import "../Sass/Styles/Landing.scss";
import { getGnomes } from "../Actions/actions.js";
import { useDispatch } from "react-redux";

export default function Landing() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGnomes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="landingtodo">
      <div className="landingbackground">
        <div className="landingcontainer">
          <p className="landingtitle">Welcome to Brastlewark</p>
          <p>
            <Link to="/home">
              <button className="landingbutton">
                <GiCastle /> Enter City's Gnome Census <GiCastle />
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
