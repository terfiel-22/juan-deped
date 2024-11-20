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

import { selectAuths, setAuths } from '../../../store/user/UserSlice';
import useTablePagination from '../../../hooks/ui/useTablePagination';
import EnhancedTableToolbar from '../../../components/shared/EnhancedTableToolbar';
import EnhancedTableHead from '../../../components/shared/EnhancedTableHead';
import useEnhancedTableSearch from '../../../hooks/ui/useEnhancedTableSearch';
import useEnhancedTableSort from '../../../hooks/ui/useEnhancedTableSort';
import useTableDenseToggle from '../../../hooks/ui/useTableDenseToggle';
import { useEffect, useState } from 'react';
import TableDenseToggle from '../../../components/shared/TableDenseToggle';
import { IconEye } from '@tabler/icons';
import useFetchAndDispatch from '../../../hooks/shared/useFetchAndDispatch';
import { formatDate } from '../../../utils/dateFormatter';
import useTableDialog from '../../../hooks/shared/useTableDialog';
import AccountDialog from './AccountDialog';

const headCells = [
    {
        id: 'number',
        numeric: false,
        disablePadding: false,
        label: 'No.',
    },
    {
        id: 'username',
        numeric: false,
        disablePadding: false,
        label: 'Username',
    },
    {
        id: 'email',
        numeric: false,
        disablePadding: false,
        label: 'Email',
    },
    {
        id: 'role',
        numeric: false,
        disablePadding: false,
        label: 'Role',
    },
    {
        id: 'isApproved',
        numeric: false,
        disablePadding: false,
        label: 'Is Approved',
    },
    {
        id: 'createdAt',
        numeric: false,
        disablePadding: false,
        label: 'Date Created',
    },
    {
        id: 'action',
        numeric: false,
        disablePadding: false,
        label: 'Action',
    },
];

const defaultFormData = {
    username: "",
    email: "",
    password: "",
    cpassword: "",
    role: ""
};

const AccountTableList = () => {
    /** Fetch Auths */
    const { data } = useFetchAndDispatch({
        url: "/auths", setter: setAuths, selector: selectAuths
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
    const FIELD_NAME = 'username';
    const SEARCH_FIELD = 'Username'
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

    // This is for add dialog
    const { isOpen, isFullScreen, handleOpenDialog, handleCloseDialog, selectedData, setSelectedData } = useTableDialog({ defaultFormData });

    return (
        <Box>
            <AccountDialog isOpen={isOpen} isFullScreen={isFullScreen} handleClose={handleCloseDialog} data={selectedData} />
            <Box>
                <Box>
                    <EnhancedTableToolbar
                        search={search}
                        handleSearch={handleSearch}
                        searchField={SEARCH_FIELD}
                        handleOpenDialog={handleOpenDialog}
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
                                    {stableSort(pageData, getComparator()).map((auth, index) => {
                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={auth._id}
                                            >
                                                <TableCell>
                                                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                        {index + 1}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                        {auth.username}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                        {auth.email}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                        {auth.role}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                        {auth.isApproved.toString()}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                        {formatDate(auth.createdAt)}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Tooltip title="View">
                                                        <IconButton size="small" onClick={() => setSelectedData(auth)}>
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
};

export default AccountTableList;
