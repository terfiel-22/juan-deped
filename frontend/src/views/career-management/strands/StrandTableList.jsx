import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    Typography,
    Paper,
    TableRow,
    TablePagination,
} from '@mui/material';
import useTablePagination from '../../../hooks/ui/useTablePagination';
import useEnhancedTableSearch from '../../../hooks/ui/useEnhancedTableSearch';
import useEnhancedTableSelect from '../../../hooks/ui/useEnhancedTableSelect';
import useEnhancedTableSort from '../../../hooks/ui/useEnhancedTableSort';
import useTableDenseToggle from '../../../hooks/ui/useTableDenseToggle';
import EnhancedTableToolbar from '../../../components/shared/EnhancedTableToolbar';
import EnhancedTableHead from '../../../components/shared/EnhancedTableHead';
import { useEffect, useState } from 'react';
import TableDenseToggle from '../../../components/shared/TableDenseToggle';
import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox';
import { selectStrands, setStrands } from '../../../store/career/CareerSlice';
import useFetchAndDispatch from '../../../hooks/shared/useFetchAndDispatch';

const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Strand',
    },
    {
        id: 'track',
        numeric: false,
        disablePadding: false,
        label: 'Track',
    }
];

const StrandTableList = () => {
    /** Fetch Strands */
    const { data } = useFetchAndDispatch({
        url: "/strands", setter: setStrands, selector: selectStrands
    });
    const [rows, setRows] = useState(data);
    useEffect(() => {
        setRows(data)
    }, [data])

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
    const FIELD_NAME = 'name';
    const SEARCH_FIELD = 'Strand'
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
                <Box>
                    <EnhancedTableToolbar
                        numSelected={selected.length}
                        search={search}
                        handleSearch={handleSearch}
                        searchField={SEARCH_FIELD}
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
                                    {stableSort(pageData, getComparator()).map((strand, index) => {
                                        const isItemSelected = isSelected(strand[FIELD_NAME]);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                onClick={() => handleClick(strand[FIELD_NAME])}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={strand._id}
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
                                                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                        {strand.name}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                        {strand.track}
                                                    </Typography>
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
        </Box>
    );
}

export default StrandTableList