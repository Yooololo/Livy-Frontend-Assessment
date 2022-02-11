import React from "react";
import "../Sass/Styles/Pages.scss";

export default function Pages({ gnomesPerPage, gnomes = [], paginado }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(gnomes.length / gnomesPerPage); i++) {
    pageNumbers.push(i);
  }

  const btns = document.getElementsByClassName("pagesbuttons");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  return (
    <nav className="pagesorder">
      <ul className="pagespages">
        <li className="pagespage" key={1}>
          <button
            className="pagesbuttons active"
            onClick={() => paginado(1)}
            id="1"
          >
            1
          </button>
        </li>
        {pageNumbers &&
          pageNumbers.map((number) =>
            number === 1 ? (
              ""
            ) : (
              <li className="pagespage" key={number}>
                <button
                  className="pagesbuttons"
                  onClick={() => paginado(number)}
                >
                  {number}
                </button>
              </li>
            )
          )}
      </ul>
    </nav>
  );
}
