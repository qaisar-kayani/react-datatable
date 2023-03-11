import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

const FilterForm = ({ searchQuery, setSearchQuery, filterType, setFilterType }) => {
  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = event => {
    setFilterType(event.target.value);
  };

  return (
    <Form className="mb-3">
      <Form.Group controlId="formBasicSearch">
        <Form.Label>Search by name</Form.Label>
        <Form.Control type="text" placeholder="Enter asset name" value={searchQuery} onChange={handleSearchChange} />
      </Form.Group>

      <Form.Group controlId="formBasicFilter">
        <Form.Label>Filter by type</Form.Label>
        <Form.Control as="select" value={filterType} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="crypto">Crypto</option>
          <option value="stock">Stock</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

FilterForm.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  filterType: PropTypes.string.isRequired,
  setFilterType: PropTypes.func.isRequired,
};

export default FilterForm;
