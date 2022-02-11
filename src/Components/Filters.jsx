import React from "react";
import "../Sass/Styles/Filters.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  filterGnomesByProfession,
  filterGnomesByAge,
  filterGnomesByHeight,
  filterGnomesByWeight,
  getGnomes,
} from "../Actions/actions.js";

export default function Filters({ paginado }) {
  const dispatch = useDispatch();
  const gnomes = useSelector((state) => state.allGnomes);
  const gnomos = gnomes.Brastlewark;
  const profesiones = [];
  gnomos &&
    gnomos.length &&
    //eslint-disable-next-line
    gnomos.map((gnomo) => {
      //eslint-disable-next-line
      gnomo.professions.map((profesion) => {
        profesiones.push(profesion);
      });
    });

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const profesionesFiltradas = profesiones.filter(onlyUnique);

  function handleReset(e) {
    e.preventDefault();
    dispatch(getGnomes());
    dispatch(filterGnomesByProfession("All"));
    let options = document.querySelectorAll(".filtersoption");
    for (let i = 0, l = options.length; i < l; i++) {
      options[i].selected = options[i].defaultSelected;
    }
    document.getElementById("minage").value = "";
    document.getElementById("maxage").value = "";
    document.getElementById("minweight").value = "";
    document.getElementById("maxweight").value = "";
    document.getElementById("minheight").value = "";
    document.getElementById("maxheight").value = "";
    paginado(1);
  }

  function handleFilterProfession(event) {
    event.preventDefault();
    dispatch(filterGnomesByProfession(event.target.value));
    document.getElementById("minage").value = "";
    document.getElementById("maxage").value = "";
    document.getElementById("minweight").value = "";
    document.getElementById("maxweight").value = "";
    document.getElementById("minheight").value = "";
    document.getElementById("maxheight").value = "";
  }

  function handleFilterAge(event) {
    event.preventDefault();
    dispatch(filterGnomesByProfession("All"));
    let options = document.querySelectorAll(".filtersoption");
    for (let i = 0, l = options.length; i < l; i++) {
      options[i].selected = options[i].defaultSelected;
    }
    let min = document.getElementById("minage").value;
    let max = document.getElementById("maxage").value;
    dispatch(filterGnomesByAge(min, max));
    document.getElementById("minage").value = "";
    document.getElementById("maxage").value = "";
  }

  function handleFilterWeight(event) {
    event.preventDefault();
    dispatch(filterGnomesByProfession("All"));
    let options = document.querySelectorAll(".filtersoption");
    for (let i = 0, l = options.length; i < l; i++) {
      options[i].selected = options[i].defaultSelected;
    }
    let min = document.getElementById("minweight").value;
    let max = document.getElementById("maxweight").value;
    dispatch(filterGnomesByWeight(min, max));
    document.getElementById("minweight").value = "";
    document.getElementById("maxweight").value = "";
  }

  function handleFilterHeight(event) {
    event.preventDefault();
    dispatch(filterGnomesByProfession("All"));
    let options = document.querySelectorAll(".filtersoption");
    for (let i = 0, l = options.length; i < l; i++) {
      options[i].selected = options[i].defaultSelected;
    }
    let min = document.getElementById("minheight").value;
    let max = document.getElementById("maxheight").value;
    dispatch(filterGnomesByHeight(min, max));
    document.getElementById("minheight").value = "";
    document.getElementById("maxheight").value = "";
  }

  return (
    <div className="filters">
      <div className="filtersordena">
        <div className="filterseachfilter">
          <p className="filtersfilter">Filter by Profession</p>
          <select
            id="profSelect"
            className="filtersselect"
            onChange={(e) => handleFilterProfession(e)}
          >
            <option className="filtersoption" value="All">
              All
            </option>
            {profesionesFiltradas.map((profesion) => {
              return (
                <option
                  className="filtersoption"
                  key={profesion}
                  value={profesion}
                >
                  {profesion}
                </option>
              );
            })}
          </select>
        </div>
        <div className="filterseachfilter">
          <div className="filtersinputorganizer">
            <label className="filterslabel">Min:</label>
            <input type="number" id="minage" className="filtersinput" />
          </div>
          <div className="filtersinputorganizer">
            <label className="filterslabel">Max:</label>
            <input type="number" id="maxage" className="filtersinput" />
          </div>
          <button className="filtersbutton" onClick={(e) => handleFilterAge(e)}>
            Filter by Age
          </button>
        </div>
      </div>
      <div className="filterseachfilter">
        <button className="filtersreset" onClick={(e) => handleReset(e)}>
          Reload Gnomes
        </button>
      </div>
      <div className="filtersordena">
        <div className="filterseachfilter">
          <div className="filtersinputorganizer">
            <label className="filterslabel">Min:</label>
            <input type="number" id="minweight" className="filtersinput" />
          </div>
          <div className="filtersinputorganizer">
            <label className="filterslabel">Max:</label>
            <input type="number" id="maxweight" className="filtersinput" />
          </div>
          <button
            className="filtersbutton"
            onClick={(e) => handleFilterWeight(e)}
          >
            Filter by Weight (kg)
          </button>
        </div>
        <div className="filterseachfilter">
          <div className="filtersinputorganizer">
            <label className="filterslabel">Min:</label>
            <input type="number" id="minheight" className="filtersinput" />
          </div>
          <div className="filtersinputorganizer">
            <label className="filterslabel">Max:</label>
            <input type="number" id="maxheight" className="filtersinput" />
          </div>
          <button
            className="filtersbutton"
            onClick={(e) => handleFilterHeight(e)}
          >
            Filter By Height (cm)
          </button>
        </div>
      </div>
    </div>
  );
}
