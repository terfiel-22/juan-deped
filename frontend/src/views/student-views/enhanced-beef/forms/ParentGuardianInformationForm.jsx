import { Box } from '@mui/system'
import { Divider, Grid2, Typography } from '@mui/material'
import ParentGuardianInformationFormComponent from './component/ParentGuardianInformationFormComponent'


const ParentGuardianInformationForm = ({ formData, handleNestedChange }) => {
    return (
        <Box>
            <Box my={2}>
                <Typography variant='h6'>Father's Information</Typography>
                <ParentGuardianInformationFormComponent fieldName="father" formData={formData} handleNestedChange={handleNestedChange} />
            </Box>
            <Divider />
            <Box my={2}>
                <Typography variant='h6'>Mother's Information</Typography>
                <ParentGuardianInformationFormComponent fieldName="mother" formData={formData} handleNestedChange={handleNestedChange} />
            </Box>
            <Divider />
            <Box my={2}>
                <Typography variant='h6'>Guardian's Information</Typography>
                <ParentGuardianInformationFormComponent fieldName="guardian" formData={formData} handleNestedChange={handleNestedChange} />
            </Box>
        </Box>
    )
}

export default ParentGuardianInformationForm