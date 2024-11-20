import { useCallback, useEffect, useState } from 'react';

const useEnhancedTableSearch = ({ rows, fieldName, setRows, setPage }) => {
  const [search, setSearch] = useState('');

  const filteredRows = useCallback(
    (keyword) =>
      rows.filter((row) => {
        return row[fieldName].toLowerCase().includes(keyword);
      }),
    [],
  );

  useEffect(() => {
    const filtered = filteredRows(search.toLowerCase());
    setRows(filtered);
    setPage(0);
  }, [search]);

  const handleSearch = useCallback((e) => {
    const keyword = e.target.value;
    setSearch(keyword);
  }, []);

  return { search, handleSearch };
};

export default useEnhancedTableSearch;
