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
    Tooltip,
    IconButton,
} from '@mui/material';
import useTablePagination from '../../../hooks/ui/useTablePagination';
import useEnhancedTableSearch from '../../../hooks/ui/useEnhancedTableSearch';
import useEnhancedTableSort from '../../../hooks/ui/useEnhancedTableSort';
import useTableDenseToggle from '../../../hooks/ui/useTableDenseToggle';
import EnhancedTableToolbar from '../../../components/shared/EnhancedTableToolbar';
import EnhancedTableHead from '../../../components/shared/EnhancedTableHead';
import { useEffect, useState } from 'react';
import TableDenseToggle from '../../../components/shared/TableDenseToggle';
import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox';
import { selectSpecializations, setSpecializations } from '../../../store/career/CareerSlice';
import useFetchAndDispatch from '../../../hooks/shared/useFetchAndDispatch';
import { IconEye } from '@tabler/icons';

const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Specialization',
    },
    {
        id: 'strand',
        numeric: false,
        disablePadding: false,
        label: 'Strand',
    },
    {
        id: 'track',
        numeric: false,
        disablePadding: false,
        label: 'Track',
    },
    {
        id: 'action',
        numeric: false,
        disablePadding: false,
        label: 'Action',
    },
];

const SpecializationTableList = () => {
    /** Fetch Specializations */
    const { data } = useFetchAndDispatch({
        url: "/specializations", setter: setSpecializations, selector: selectSpecializations
    });
    const [rows, setRows] = useState(data);
    useEffect(() => {
        setRows(data)
    }, [data])

    // This is for pagination
    const {
        page,
        rowsPerPage,
        pageData,
        emptyRows,
        rowsPerPageOptions,
        rowsCount,
        setPage,
        handleChangePage,
        handleChangeRowsPerPage,
    } = useTablePagination({ rows });

    // This is for searching
    const FIELD_NAME = 'name';
    const SEARCH_FIELD = 'Specialization'
    const { search, handleSearch } = useEnhancedTableSearch({
        rows,
        fieldName: FIELD_NAME,
        setRows,
        setPage,
    });

    // This is for the sorting
    const { order, orderBy, getComparator, stableSort, handleRequestSort } = useEnhancedTableSort({
        fieldName: FIELD_NAME,
    });

    // This is for table density
    const { dense, handleChangeDense } = useTableDenseToggle();

    return (
        <Box>
            <Box>
                <Box>
                    <EnhancedTableToolbar
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
                                    order={order}
                                    orderBy={orderBy}
                                    onRequestSort={handleRequestSort}
                                />
                                <TableBody>
                                    {stableSort(pageData, getComparator()).map((specialization, index) => {

                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={specialization._id}
                                            >
                                                <TableCell>
                                                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                        {specialization.name}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                        {specialization.strand}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                        {specialization.track}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Tooltip title="View">
                                                        <IconButton size="small" onClick={() => { }}>
                                                            <IconEye size="1.1rem" />
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
        </Box>
    );
}

export default SpecializationTableList