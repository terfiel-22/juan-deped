import { useCallback, useEffect, useState } from 'react';

const useEnhancedTableSearch = ({ rows, fieldName, setRows, setPage }) => {
  const [search, setSearch] = useState('');

  const filteredRows = useCallback(
    (keyword) =>
      rows.filter((row) => {
        console.log('FILTERED ROWS');
        return row[fieldName].toLowerCase().includes(keyword);
      }),
    [],
  );

  useEffect(() => {
    console.log('USE EFFECT');
    console.log(rows);
    const filtered = filteredRows(search.toLowerCase());
    setRows(filtered);
    setPage(0);
  }, [search]);

  const handleSearch = useCallback((e) => {
    console.log('HANDLE SEARCH');
    const keyword = e.target.value;
    setSearch(keyword);
  }, []);

  return [search, handleSearch];
};

export default useEnhancedTableSearch;
