import React from "react";
import { Link } from "react-router-dom";
import "../Sass/Styles/About.scss";

export default function About() {
  return (
    <div className="abouttodo">
      <div className="aboutbackground">
        <div className="aboutcontainer">
          <Link to="/home" className="aboutlinkhome">
            <button className="aboutboton">Home</button>
          </Link>

          <p className="abouttitulo">
            This App was developed for specially for Livy's Frontend Code
            Assessment{" "}
          </p>
          <p className="abouttitulo">
            The source code is available on{" "}
            <a
              className="aboutlink"
              href="https://github.com/Yooololo/Livy-Frontend-Assessment"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/Yooololo/Livy-Frontend-Assessment
            </a>
          </p>
          <p className="abouttitulo">
            Github:{" "}
            <a className="aboutlink" href="https://github.com/Yooololo">
              Yooololo
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
