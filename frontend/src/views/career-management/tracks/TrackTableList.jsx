import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    Typography,
    Paper,
    Alert,
    TableRow,
    TablePagination,
} from '@mui/material';
import useFetchAndDispatch from '../../../hooks/shared/useFetchAndDispatch';
import useTablePagination from '../../../hooks/ui/useTablePagination';
import useEnhancedTableSearch from '../../../hooks/ui/useEnhancedTableSearch';
import useEnhancedTableSelect from '../../../hooks/ui/useEnhancedTableSelect';
import useEnhancedTableSort from '../../../hooks/ui/useEnhancedTableSort';
import useTableDenseToggle from '../../../hooks/ui/useTableDenseToggle';
import EnhancedTableToolbar from '../../../components/shared/EnhancedTableToolbar';
import EnhancedTableHead from '../../../components/shared/EnhancedTableHead';
import { useState } from 'react';
import TableDenseToggle from '../../../components/shared/TableDenseToggle';
import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox';
import { selectTracks, setTracks } from '../../../store/career/CareerSlice';

const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Track',
    }
];

const TrackTableList = () => {
    /** Fetch Tracks */
    const { data, error, resetError } = useFetchAndDispatch({
        url: "/tracks", setter: setTracks, selector: selectTracks
    });
    const [rows, setRows] = useState(data);

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
    const SEARCH_FIELD = 'Track'
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
            {error ?
                <Alert variant="filled" severity="error" onClose={resetError}>
                    {error}
                </Alert>
                :
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
                                        {stableSort(pageData, getComparator()).map((track, index) => {
                                            const isItemSelected = isSelected(track[FIELD_NAME]);
                                            const labelId = `enhanced-table-checkbox-${index}`;

                                            return (
                                                <TableRow
                                                    hover
                                                    onClick={() => handleClick(track[FIELD_NAME])}
                                                    role="checkbox"
                                                    aria-checked={isItemSelected}
                                                    tabIndex={-1}
                                                    key={track._id}
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
                                                            {track.name}
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
            }
        </Box>
    );
}

export default TrackTableList