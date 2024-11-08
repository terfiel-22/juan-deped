import * as React from 'react';
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    Typography,
    Avatar,
    Paper,
    Alert,
    AvatarGroup,
    Chip,
    TableRow,
} from '@mui/material';

import { useSelector } from 'react-redux';
import useFetchPersonnels from '../../../hooks/personnel/useFetchPersonnels';
import { selectPersonnels } from '../../../store/user/UserSlice';
import { basicsTableData } from '../../../views/tables/tableData';
import { Stack } from '@mui/system';


const PersonnelTableList = () => {
    /** Fetch Personnels */
    const [error, resetError] = useFetchPersonnels();
    const personnels = useSelector(selectPersonnels);

    const basics = basicsTableData;

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
                                            <Typography variant="h6">Civil Status</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="h6">Position</Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {personnels.map(({ basicInformation }) => (
                                        <TableRow key={basicInformation._id}>
                                            <TableCell>
                                                <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                    {basicInformation.empNo}
                                                </Typography>
                                            </TableCell>

                                            <TableCell>
                                                <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                    {basicInformation.account}
                                                </Typography>
                                            </TableCell>

                                            <TableCell>
                                                <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                    {basicInformation.lName}, {basicInformation.fName}
                                                </Typography>
                                            </TableCell>

                                            <TableCell>
                                                <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                    {basicInformation.civilStatus}
                                                </Typography>
                                            </TableCell>

                                            <TableCell>
                                                <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                    {basicInformation.position}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>
            }
        </Box>
    );
};

export default PersonnelTableList;
