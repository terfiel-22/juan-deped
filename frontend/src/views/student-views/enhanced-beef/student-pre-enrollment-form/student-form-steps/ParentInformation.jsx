import { Box } from '@mui/system'
import { Divider, Grid2, Typography } from '@mui/material'
import ParentInformationForm from './components/ParentInformationForm'

const IdentificationInformation = () => {

    return (
        <Box>
            <Box my={2}>
                <Typography variant='h6'>Father's Name</Typography>
                <Grid2 container spacing={2}>
                    <ParentInformationForm fieldName="father" />
                </Grid2>
            </Box>
            <Divider />
            <Box my={2}>
                <Typography variant='h6'>Mother's Name</Typography>
                <Grid2 container spacing={2}>
                    <ParentInformationForm fieldName="mother" />
                </Grid2>
            </Box>
            <Divider />
            <Box my={2}>
                <Typography variant='h6'>Guardian's Name</Typography>
                <Grid2 container spacing={2}>
                    <ParentInformationForm fieldName="guardian" />
                </Grid2>
            </Box>
        </Box>
    )
}

export default IdentificationInformation