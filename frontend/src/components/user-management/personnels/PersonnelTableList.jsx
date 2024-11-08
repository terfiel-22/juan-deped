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
} from '@mui/material';

import { useSelector } from 'react-redux';
import useFetchPersonnels from '../../../hooks/personnel/useFetchPersonnels';
import { selectPersonnels } from '../../../store/user/UserSlice';


const PersonnelTableList = () => {
    /** Fetch Personnels */
    const [error, resetError] = useFetchPersonnels();
    const personnels = useSelector(selectPersonnels);

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
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {personnels.map((personnel) => (
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
