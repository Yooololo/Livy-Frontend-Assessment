import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getGnomes,
  searchGnomeName,
  searchGnomeId,
} from "../Actions/actions.js";
import { BiSearchAlt2 } from "react-icons/bi";
import "../Sass/Styles/SearchBar.scss";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    dispatch(getGnomes());
    // eslint-disable-next-line
  }, []);

  function handleChangeName(event) {
    event.preventDefault();
    setName(event.target.value);
  }

  function handleSubmitName(event) {
    event.preventDefault();
    dispatch(searchGnomeName(name));
    document.getElementById("gname").value = "";
    setName("");
  }

  function handleChangeId(event) {
    event.preventDefault();
    setId(event.target.value);
  }

  function handleSubmitId(event) {
    event.preventDefault();
    dispatch(searchGnomeId(id));
    document.getElementById("gid").value = "";
    setId("");
  }

  return (
    <>
      <nav className="searchbarsearchbar">
        <Link className="searchbarabout" to="/about">
          About
        </Link>
        <div className="searchbarsearchbars">
          <div className="searchbarbusquedas">
            <input
              className="searchbarinput"
              id="gname"
              type="text"
              placeholder="Search Gnome by Name"
              onChange={(e) => handleChangeName(e)}
            />
            <button
              className="searchbarboton"
              type="submit"
              onClick={(e) => handleSubmitName(e)}
            >
              <BiSearchAlt2 />
            </button>
          </div>
          <div className="searchbarbusquedas">
            <input
              className="searchbarinput"
              id="gid"
              type="text"
              placeholder="Search Gnome by Id"
              onChange={(e) => handleChangeId(e)}
            />
            <button
              className="searchbarboton"
              type="submit"
              onClick={(e) => handleSubmitId(e)}
            >
              <BiSearchAlt2 />
            </button>
          </div>
        </div>
        <Link className="searchbarlanding" to="/">
          Landing
        </Link>
      </nav>
    </>
  );
}
