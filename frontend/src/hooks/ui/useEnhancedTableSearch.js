import { useCallback, useState } from 'react';

const useEnhancedTableSearch = (rows, fieldName, setRows) => {
  const [search, setSearch] = useState('');

  const filteredRows = useCallback(
    (keyword) =>
      rows.filter((row) => {
        return row[fieldName].toLowerCase().includes(keyword);
      }),
    [rows, fieldName],
  );

  const handleSearch = useCallback((e) => {
    const keyword = e.target.value.toLowerCase();
    const rows = filteredRows(keyword);
    setSearch(keyword);
    setRows(rows);
  }, []);

  return [search, handleSearch];
};

export default useEnhancedTableSearch;
