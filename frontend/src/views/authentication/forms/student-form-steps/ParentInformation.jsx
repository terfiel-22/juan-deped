import { Box } from '@mui/system'
import { Grid, Typography } from '@mui/material'
import ParentInformationForm from './components/ParentInformationForm'

const IdentificationInformation = () => {

    return (
        <Box>
            <Box mb={3}>
                <Typography variant='h6'>Father's Name</Typography>
                <Grid container spacing={2}>
                    <ParentInformationForm fieldName="father" />
                </Grid>
            </Box>
            <Box mb={3}>
                <Typography variant='h6'>Mother's Name</Typography>
                <Grid container spacing={2}>
                    <ParentInformationForm fieldName="mother" />
                </Grid>
            </Box>
            <Box mb={3}>
                <Typography variant='h6'>Guardian's Name</Typography>
                <Grid container spacing={2}>
                    <ParentInformationForm fieldName="guardian" />
                </Grid>
            </Box>
        </Box>
    )
}

export default IdentificationInformation