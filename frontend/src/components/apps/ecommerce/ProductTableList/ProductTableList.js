import * as React from 'react';
import { format } from 'date-fns';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  IconButton,
  Tooltip,
  Typography,
  Avatar,
  Paper,
} from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from 'src/store/apps/eCommerce/EcommerceSlice';
import CustomCheckbox from '../../../forms/theme-elements/CustomCheckbox';
import { IconDotsVertical } from '@tabler/icons';
import useEnhancedTableSelect from '../../../../hooks/ui/useEnhancedTableSelect';
import useEnhancedTableSearch from '../../../../hooks/ui/useEnhancedTableSearch';
import EnhancedTableToolbar from '../../../shared/EnhancedTableToolbar';
import useTablePagination from '../../../../hooks/ui/useTablePagination';
import EnhancedTableHead from '../../../shared/EnhancedTableHead';
import useEnhancedTableSort from '../../../../hooks/ui/useEnhancedTableSort';
import TableDenseToggle from '../../../shared/TableDenseToggle';
import useTableDenseToggle from '../../../../hooks/ui/useTableDenseToggle';

const headCells = [
  {
    id: 'title',
    numeric: false,
    disablePadding: false,
    label: 'Products',
  },
  {
    id: 'created',
    numeric: false,
    disablePadding: false,
    label: 'Date',
  },

  {
    id: 'stock',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'price',
    numeric: false,
    disablePadding: false,
    label: 'Price',
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: 'Action',
  },
];

const ProductTableList = () => {
  const dispatch = useDispatch();
  //Fetch Products
  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const getProducts = useSelector((state) => state.ecommerceReducer.products);

  const [rows, setRows] = React.useState(getProducts);

  React.useEffect(() => {
    setRows(getProducts);
  }, [getProducts]);

  // This is for pagination
  const [
    page,
    rowsPerPage,
    pageData,
    emptyRows,
    rowsPerPageOptions,
    rowsCount,
    setPage,
    handleChangePage,
    handleChangeRowsPerPage,
  ] = useTablePagination({ rows });

  // This is for searching
  const FIELD_NAME = 'title';
  const [search, handleSearch] = useEnhancedTableSearch({
    rows,
    fieldName: FIELD_NAME,
    setRows,
    setPage,
  });

  // This is for selecting
  const [selected, isSelected, handleSelectAllClick, handleClick] = useEnhancedTableSelect({
    rows,
    fieldName: FIELD_NAME,
  });

  // This is for the sorting
  const [order, orderBy, getComparator, stableSort, handleRequestSort] = useEnhancedTableSort({
    fieldName: FIELD_NAME,
  });

  // This is for table density
  const [dense, handleChangeDense] = useTableDenseToggle();

  return (
    <Box>
      <Box>
        <EnhancedTableToolbar
          numSelected={selected.length}
          search={search}
          handleSearch={handleSearch}
        />
        <Paper variant="outlined" sx={{ mx: 2, mt: 1 }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
            >
              <EnhancedTableHead
                headCells={headCells}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(pageData, getComparator(order, orderBy)).map((row, index) => {
                  const isItemSelected = isSelected(row.title);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={() => handleClick(row.title)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.title}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <CustomCheckbox
                          color="primary"
                          checked={isItemSelected}
                          inputprops={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>

                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <Avatar
                            src={row.photo}
                            alt={row.photo}
                            variant="rounded"
                            sx={{ width: 56, height: 56, borderRadius: '100%' }}
                          />
                          <Box
                            sx={{
                              ml: 2,
                            }}
                          >
                            <Typography variant="h6" fontWeight="600">
                              {row.title}
                            </Typography>
                            <Typography color="textSecondary" variant="subtitle2">
                              {row.category}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography>{format(new Date(row.created), 'E, MMM d yyyy')}</Typography>
                      </TableCell>

                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <Box
                            sx={{
                              backgroundColor: row.stock
                                ? (theme) => theme.palette.success.main
                                : (theme) => theme.palette.error.main,
                              borderRadius: '100%',
                              height: '10px',
                              width: '10px',
                            }}
                          />
                          <Typography
                            color="textSecondary"
                            variant="subtitle2"
                            sx={{
                              ml: 1,
                            }}
                          >
                            {row.stock ? 'InStock' : 'Out of Stock'}
                          </Typography>
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Typography fontWeight="500" variant="h6">
                          ${row.price}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Tooltip title="Edit">
                          <IconButton size="small">
                            <IconDotsVertical size="1.1rem" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={rowsPerPageOptions}
            component="div"
            count={rowsCount}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <TableDenseToggle dense={dense} handleChangeDense={handleChangeDense} />
      </Box>
    </Box>
  );
};

export default ProductTableList;
