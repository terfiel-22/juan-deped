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
  FormControlLabel,
  Typography,
  Avatar,
  Paper,
} from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from 'src/store/apps/eCommerce/EcommerceSlice';
import CustomCheckbox from '../../../forms/theme-elements/CustomCheckbox';
import CustomSwitch from '../../../forms/theme-elements/CustomSwitch';
import { IconDotsVertical } from '@tabler/icons';
import useEnhancedTableSelect from '../../../../hooks/ui/useEnhancedTableSelect';
import useEnhancedTableSearch from '../../../../hooks/ui/useEnhancedTableSearch';
import EnhancedTableToolbar from '../../../shared/EnhancedTableToolbar';
import useTablePagination from '../../../../hooks/ui/useTablePagination';
import EnhancedTableHead from '../../../shared/EnhancedTableHead';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Products',
  },
  {
    id: 'pname',
    numeric: false,
    disablePadding: false,
    label: 'Date',
  },

  {
    id: 'status',
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
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [dense, setDense] = React.useState(false);

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
  ] = useTablePagination(rows);
  const FIELD_NAME = 'title';
  const [search, handleSearch] = useEnhancedTableSearch(rows, FIELD_NAME, setRows, setPage);
  const [selected, isSelected, handleSelectAllClick, handleClick] = useEnhancedTableSelect(
    rows,
    FIELD_NAME,
  );

  // This is for the sorting
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

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
                      onClick={(event) => handleClick(event, row.title)}
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
        <Box ml={2}>
          <FormControlLabel
            control={<CustomSwitch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductTableList;
