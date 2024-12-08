import { Box } from '@mui/system'
import { Divider, Typography } from '@mui/material'
import ParentGuardianInformationFormComponent from './component/ParentGuardianInformationFormComponent'


const ParentGuardianInformationForm = ({ errors, formData, handleNestedChange }) => {
    return (
        <Box>
            <Box my={2}>
                <Typography variant='h6'>Father's Information</Typography>
                <ParentGuardianInformationFormComponent fieldName="father" {...{ errors, formData, handleNestedChange }} />
            </Box>
            <Divider />
            <Box my={2}>
                <Typography variant='h6'>Mother's Information</Typography>
                <ParentGuardianInformationFormComponent fieldName="mother" {...{ errors, formData, handleNestedChange }} />
            </Box>
            <Divider />
            <Box my={2}>
                <Typography variant='h6'>Guardian's Information</Typography>
                <ParentGuardianInformationFormComponent fieldName="guardian" {...{ errors, formData, handleNestedChange }} />
            </Box>
        </Box>
    )
}

export default ParentGuardianInformationForm