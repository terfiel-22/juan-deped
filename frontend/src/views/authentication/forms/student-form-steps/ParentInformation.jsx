import { Box } from '@mui/system'
import { Divider, Grid, Typography } from '@mui/material'
import ParentInformationForm from './components/ParentInformationForm'

const IdentificationInformation = () => {

    return (
        <Box>
            <Box my={2}>
                <Typography variant='h6'>Father's Name</Typography>
                <Grid container spacing={2}>
                    <ParentInformationForm fieldName="father" />
                </Grid>
            </Box>
            <Divider />
            <Box my={2}>
                <Typography variant='h6'>Mother's Name</Typography>
                <Grid container spacing={2}>
                    <ParentInformationForm fieldName="mother" />
                </Grid>
            </Box>
            <Divider />
            <Box my={2}>
                <Typography variant='h6'>Guardian's Name</Typography>
                <Grid container spacing={2}>
                    <ParentInformationForm fieldName="guardian" />
                </Grid>
            </Box>
        </Box>
    )
}

export default IdentificationInformation