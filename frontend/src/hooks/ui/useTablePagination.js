import { useMemo, useState } from 'react';

const useTablePagination = ({ rows }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const rowsPerPageOptions = [5, 10, 25, { label: 'All', value: -1 }];
  const rowsCount = rows.length;

  const pageData = useMemo(
    () =>
      rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows,
    [rowsPerPage, page, rows],
  );

  const emptyRows = useMemo(
    () => (page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0),
    [page, rowsPerPage, rows],
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return [
    page,
    rowsPerPage,
    pageData,
    emptyRows,
    rowsPerPageOptions,
    rowsCount,
    setPage,
    handleChangePage,
    handleChangeRowsPerPage,
  ];
};

export default useTablePagination;
