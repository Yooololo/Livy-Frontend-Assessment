import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Sass/Styles/Home.scss";
import { getGnomes } from "../Actions/actions.js";
import Pages from "./Pages.jsx";
import PagesMobile from "./PagesMobile.jsx";
import Gnomes from "./Gnomes.jsx";
import SearchBar from "./SearchBar.jsx";
import Filters from "./Filters.jsx";

export default function Home() {
  let screenWidth = window.innerWidth;
  let gnomosPorPagina = screenWidth >= 1024 ? 35 : screenWidth >= 768 ? 10 : 5;
  const dispatch = useDispatch();
  const gnomes = useSelector((state) => state.gnomes);
  const [currentPage, setCurrentPage] = useState(1);
  const [gnomesPerPage, setGnomesPerPage] = useState(gnomosPorPagina); //eslint-disable-line
  const indexOfLastGnome = currentPage * gnomesPerPage;
  const indexOfFirstGnome = indexOfLastGnome - gnomesPerPage;
  const gnomos = gnomes.Brastlewark;
  let boton1 =
    gnomosPorPagina === 35
      ? document.getElementById("1")
      : document.getElementById(1);
  const currentGnomes =
    gnomes && gnomos && gnomos.length && gnomos[0]
      ? gnomes.Brastlewark.slice(indexOfFirstGnome, indexOfLastGnome)
      : gnomos === undefined &&
        gnomes.slice(indexOfFirstGnome, indexOfLastGnome);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  let id1 =
    gnomes && gnomos && gnomos.length && gnomos[0] && currentGnomes[0].id;

  if (id1 === 0) {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    gnomosPorPagina === 35 && (boton1.className += " active");
  }

  useEffect(() => {
    dispatch(getGnomes());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="hometodo">
      <div className="homebackground">
        <div className="homecontainer">
          <SearchBar />
          <Filters paginado={paginado} />
          {gnomes.Brastlewark || gnomes[0] || gnomes[0] === "" ? (
            <div className="homegnomes">
              {gnomos && gnomos.length ? (
                currentGnomes.map((gnome) => {
                  return (
                    <div className="homeeachgnome" key={gnome.id}>
                      <Link className="homelink" to={`/gnome/${gnome.id}`}>
                        <Gnomes
                          name={gnome.name}
                          image={gnome.thumbnail}
                          age={gnome.age}
                        />
                      </Link>
                    </div>
                  );
                })
              ) : gnomes && gnomes.length && gnomes[0].name ? (
                currentGnomes.map((gnome) => {
                  return (
                    <div className="homeeachgnome" key={gnome.id}>
                      <Link className="homelink" to={`/gnome/${gnome.id}`}>
                        <Gnomes
                          name={gnome.name}
                          image={gnome.thumbnail}
                          age={gnome.age}
                        />
                      </Link>
                    </div>
                  );
                })
              ) : (
                <div className="homenognomes">
                  No Gnomes match that name or id
                </div>
              )}
            </div>
          ) : (
            <div className="homenognomes">Loading...</div>
          )}
          {gnomesPerPage === 35 ? (
            <Pages
              gnomesPerPage={gnomesPerPage}
              gnomes={gnomos ? gnomos : gnomes}
              paginado={paginado}
            />
          ) : (
            <PagesMobile
              gnomesPerPage={gnomesPerPage}
              gnomes={gnomos ? gnomos : gnomes}
              paginado={paginado}
            />
          )}
        </div>
      </div>
    </div>
  );
}
