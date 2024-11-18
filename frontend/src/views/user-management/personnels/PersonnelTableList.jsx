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

import { selectPersonnels, setPersonnels } from '../../../store/user/UserSlice';
import useTablePagination from '../../../hooks/ui/useTablePagination';
import EnhancedTableToolbar from '../../../components/shared/EnhancedTableToolbar';
import EnhancedTableHead from '../../../components/shared/EnhancedTableHead';
import useEnhancedTableSearch from '../../../hooks/ui/useEnhancedTableSearch';
import useEnhancedTableSelect from '../../../hooks/ui/useEnhancedTableSelect';
import useEnhancedTableSort from '../../../hooks/ui/useEnhancedTableSort';
import useTableDenseToggle from '../../../hooks/ui/useTableDenseToggle';
import { useState } from 'react';
import TableDenseToggle from '../../../components/shared/TableDenseToggle';
import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox';
import { IconDotsVertical } from '@tabler/icons';
import useFetchAndDispatch from '../../../hooks/shared/useFetchAndDispatch';

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
        id: 'lName',
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
    /** Fetch Personnels */
    const { data } = useFetchAndDispatch({
        url: "/personnels", setter: setPersonnels, selector: selectPersonnels
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
    const FIELD_NAME = 'empNo';
    const SEARCH_FIELD = 'EMP No.'
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
                                    {stableSort(pageData, getComparator()).map((personnel, index) => {
                                        const isItemSelected = isSelected(personnel[FIELD_NAME]);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                onClick={() => handleClick(personnel[FIELD_NAME])}
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
                                                        {personnel.empNo}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                        {personnel.account}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                        {personnel.lName},&nbsp;{personnel.fName}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                        {personnel.position}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                        {personnel.eligibility}
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
        </Box>
    );
};

export default PersonnelTableList;
