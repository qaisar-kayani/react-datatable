import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap/Table';

const Table = ({ data, sortType, setSortType }) => {
  const handleSort = () => {
    setSortType(sortType === 'asc' ? 'desc' : 'asc');
  };

  return (
    <BootstrapTable striped bordered hover responsive>
      <thead>
        <tr>
          <th onClick={handleSort}>Asset</th>
          <th>Type</th>
          <th>Change</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.priceChange}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </BootstrapTable>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
};

export default Table;
