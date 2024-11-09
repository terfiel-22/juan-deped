import { useCallback, useState } from 'react';

const useEnhancedTableSearch = ({ rows, fieldName, setRows, setPage }) => {
  const [search, setSearch] = useState('');

  const filteredRows = useCallback(
    (keyword) =>
      rows.filter((row) => {
        return row[fieldName].toLowerCase().includes(keyword);
      }),
    [rows, fieldName],
  );

  const handleSearch = useCallback((e) => {
    console.log(rows);
    const keyword = e.target.value.toLowerCase();
    const filtered = filteredRows(keyword);
    setSearch(keyword);
    setRows(filtered);
    setPage(0);
  }, []);

  return [search, handleSearch];
};

export default useEnhancedTableSearch;
