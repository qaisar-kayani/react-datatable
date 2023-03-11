import React, { useState, useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import Table from './components/Table';
import FilterForm from './components/FilterForm';
import Pagination from './components/Pagination';
import data from './data';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortType, setSortType] = useState('asc');

  const filteredData = useMemo(() => {
    const filtered = data.filter(
      item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filterType === 'all' || item.type === filterType)
    );
    return filtered;
  }, [data, filterType, searchQuery]);

  const sortedData = useMemo(() => {
    const isReversed = sortType === 'asc' ? 1 : -1;
    return filteredData.sort((a, b) => isReversed * a.name.localeCompare(b.name));
  }, [filteredData, sortType]);

  const currentItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return sortedData.slice(indexOfFirstItem, indexOfLastItem);
  }, [currentPage, itemsPerPage, sortedData]);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <Container>
        <FilterForm
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filterType={filterType}
          setFilterType={setFilterType}
        />
        <Table data={currentItems} sortType={sortType} setSortType={setSortType} />
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={sortedData.length}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      </Container>
    </div>
  );
};

export default App;
