import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import './pagination.scss'

const Pagination = ({ propertyData, setPageArray }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const pageSize = 10;
  const pageLimit = Math.ceil(propertyData.length / pageSize);

  const pageCounter = () => {
    let arr = [];
    for (let pageNumber = 1; pageNumber < pageLimit + 1; pageNumber++) {
      arr.push(pageNumber);
    }
    return arr;
  };
  let pageArray = pageCounter();

  const paginate = (pageNumber) => {
    return propertyData.slice(
      (pageNumber - 1) * pageSize,
      pageNumber * pageSize
    );
  };

  const changePage = (increment) => {
    setSelectedPage(selectedPage + increment);
  };
  const selectPage = (event) => {
    setSelectedPage(parseInt(event.target.value));
  };

   useEffect(() => {
    setPageArray(paginate(selectedPage));
  }, [selectedPage]);

  useEffect(() => {
    changePage(1 - selectedPage);
    setPageArray(paginate(selectedPage));
  }, [propertyData]);

  return (
    <div className="pageButtons" data-testid="page-buttons">
      <Button
        aria-label="previous page"
        className="pageButtons__previous"
        variant="dark"
        data-testid="previous-page-button"
        disabled={selectedPage === 1}
        onClick={() => {
          changePage(-1);
        }}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </Button>
      <select
        className="pageButtons__indicator"
        aria-label="page dropdown selection"
        data-testid="page-number"
        value={selectedPage}
        onChange={selectPage}
      >
        {pageArray.map((pageNumber) => (
          <option key={pageNumber} value={pageNumber}>
            {pageNumber}
          </option>
        ))}
      </select>
      <Button
        aria-label="next page"
        className="pageButtons__next"
        variant="dark"
        data-testid="next-page-button"
        disabled={selectedPage === pageLimit}
        onClick={() => {
          changePage(1);
        }}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </Button>
    </div>
  );
};

export default Pagination;
