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
    Tooltip,
    IconButton,
} from '@mui/material';

import { useSelector } from 'react-redux';
import useFetchPersonnels from '../../../hooks/personnel/useFetchPersonnels';
import { selectPersonnels } from '../../../store/user/UserSlice';
import useTablePagination from '../../../hooks/ui/useTablePagination';
import EnhancedTableToolbar from '../../shared/EnhancedTableToolbar';
import EnhancedTableHead from '../../shared/EnhancedTableHead';
import useEnhancedTableSearch from '../../../hooks/ui/useEnhancedTableSearch';
import useEnhancedTableSelect from '../../../hooks/ui/useEnhancedTableSelect';
import useEnhancedTableSort from '../../../hooks/ui/useEnhancedTableSort';
import useTableDenseToggle from '../../../hooks/ui/useTableDenseToggle';
import { useEffect, useState } from 'react';
import TableDenseToggle from '../../shared/TableDenseToggle';
import CustomCheckbox from '../../forms/theme-elements/CustomCheckbox';
import { IconDotsVertical } from '@tabler/icons';

const headCells = [
    {
        id: 'empNo',
        numeric: false,
        disablePadding: false,
        label: 'EMP No.',
    },
    {
        id: 'account',
        numeric: false,
        disablePadding: false,
        label: 'Account',
    },

    {
        id: 'fullName',
        numeric: false,
        disablePadding: false,
        label: 'Full Name',
    },
    {
        id: 'position',
        numeric: false,
        disablePadding: false,
        label: 'Position',
    },
    {
        id: 'eligibility',
        numeric: false,
        disablePadding: false,
        label: 'Eligibility',
    },
    {
        id: 'action',
        numeric: false,
        disablePadding: false,
        label: 'Action',
    },
];

const PersonnelTableList = () => {
    const [rows, setRows] = useState([])

    /** Fetch Personnels */
    const [error, resetError] = useFetchPersonnels();
    const personnels = useSelector(selectPersonnels);
    useEffect(() => {
        setRows(personnels)
    }, [personnels])

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
    const FIELD_NAME = 'empNo';
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
                                        {stableSort(pageData, getComparator(order, orderBy)).map((personnel, index) => {
                                            const isItemSelected = isSelected(personnel[FIELD_NAME]);
                                            const labelId = `enhanced-table-checkbox-${index}`;

                                            return (
                                                <TableRow
                                                    hover
                                                    onClick={(event) => handleClick(event, personnel._id)}
                                                    role="checkbox"
                                                    aria-checked={isItemSelected}
                                                    tabIndex={-1}
                                                    key={personnel._id}
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
            }
        </Box>
    );
};

export default PersonnelTableList;
