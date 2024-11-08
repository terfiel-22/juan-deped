import * as React from 'react';
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    Typography,
    Paper,
    Alert,
    TableRow,
    TablePagination,
    TableFooter,
} from '@mui/material';

import { useSelector } from 'react-redux';
import useFetchPersonnels from '../../../hooks/personnel/useFetchPersonnels';
import { selectPersonnels } from '../../../store/user/UserSlice';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';


const PersonnelTableList = () => {
    /** Fetch Personnels */
    const [error, resetError] = useFetchPersonnels();
    const rows = useSelector(selectPersonnels);

    /** Pagination */

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box>
            {error ?
                <Alert variant="filled" severity="error" onClose={resetError}>
                    {error}
                </Alert>
                :
                <Box>
                    <Paper variant="outlined" sx={{ mx: 2, mt: 1 }}>
                        <TableContainer>
                            <Table
                                sx={{ minWidth: 750 }}
                                aria-labelledby="tableTitle"
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <Typography variant="h6">EMP No.</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="h6">Account</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="h6">Full Name</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="h6">Position</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="h6">Eligibility</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="h6">Actions</Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(rowsPerPage > 0
                                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : rows).map((personnel) => (
                                            <TableRow key={personnel._id}>
                                                <TableCell>
                                                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                        {personnel.basicInformation.empNo}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                        {personnel.basicInformation.account}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                        {personnel.basicInformation.lName},&nbsp;{personnel.basicInformation.fName}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                        {personnel.basicInformation.position}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                        {personnel.basicInformation.eligibility}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    {/* ACTIONS */}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    {emptyRows > 0 && (
                                        <TableRow style={{ height: 53 * emptyRows }}>
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                            colSpan={6}
                                            count={rows.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            SelectProps={{
                                                inputprops: {
                                                    'aria-label': 'rows per page',
                                                },
                                                native: true,
                                            }}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                            ActionsComponent={TablePaginationActions}
                                        />
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>
            }
        </Box>
    );
};

export default PersonnelTableList;
