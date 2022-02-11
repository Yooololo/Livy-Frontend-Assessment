import React, { useState } from "react";
import "../Sass/Styles/PagesMobile.scss";

export default function PagesMobile({ gnomesPerPage, gnomes = [], paginado }) {
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = gnomesPerPage;

  const pageNumberLimit = 5;
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
    paginado(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(gnomes.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      console.log(currentPage);
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={
            currentPage === number
              ? "pagesmobilepage active"
              : "pagesmobilepage"
          }
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);
    paginado(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);
    paginado(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleFirstbtn = () => {
    setcurrentPage(1);
    paginado(1);
    setmaxPageNumberLimit(pageNumberLimit);
    setminPageNumberLimit(0);
  };

  const handleLastbtn = () => {
    setcurrentPage(Math.ceil(gnomes.length / itemsPerPage));
    paginado(Math.ceil(gnomes.length / itemsPerPage));
    setmaxPageNumberLimit(Math.ceil(gnomes.length / itemsPerPage));
    setminPageNumberLimit(
      Math.ceil(gnomes.length / itemsPerPage) - pageNumberLimit
    );
  };

  return (
    <>
      <ul className="pagesmobilepages">
        <div className="pagesmobilepagesorder">
          <li className="pagemobileprevnext">
            <button
              className={
                currentPage === pages[0]
                  ? "pagesmobileprevnextbuttons disabled"
                  : "pagesmobileprevnextbuttons"
              }
              onClick={handlePrevbtn}
              disabled={currentPage === pages[0] ? true : false}
            >
              Prev
            </button>
          </li>
          {renderPageNumbers}

          <li className="pagemobileprevnext">
            <button
              className={
                currentPage === pages[pages.length - 1]
                  ? "pagesmobileprevnextbuttons disabled"
                  : "pagesmobileprevnextbuttons"
              }
              onClick={handleNextbtn}
              disabled={currentPage === pages[pages.length - 1] ? true : false}
            >
              Next
            </button>
          </li>
        </div>

        <div className="pagesmobilepagesorder">
          <li className="pagemobileprevnext">
            <button
              className={
                currentPage === pages[0]
                  ? "pagesmobileprevnextbuttons disabled"
                  : "pagesmobileprevnextbuttons"
              }
              onClick={handleFirstbtn}
              disabled={currentPage === pages[0] ? true : false}
            >
              First
            </button>
          </li>

          <li className="pagemobileprevnext">
            <button
              className={
                currentPage === pages[pages.length - 1]
                  ? "pagesmobileprevnextbuttons disabled"
                  : "pagesmobileprevnextbuttons"
              }
              onClick={handleLastbtn}
              disabled={currentPage === pages[pages.length - 1] ? true : false}
            >
              Last
            </button>
          </li>
        </div>
      </ul>
    </>
  );
}
