import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const Pagination = ({ currentPage, itemsPerPage, totalItems, handlePrevPage, handleNextPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="d-flex justify-content-center">
      <Button variant="secondary" disabled={currentPage === 1} onClick={handlePrevPage}>
        Prev
      </Button>
      <Button className="mx-3" variant="secondary" disabled>
        {`${currentPage} / ${totalPages}`}
      </Button>
      <Button variant="secondary" disabled={currentPage === totalPages} onClick={handleNextPage}>
        Next
      </Button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
};

export default Pagination;
