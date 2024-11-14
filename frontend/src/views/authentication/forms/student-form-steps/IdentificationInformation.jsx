import { FormControlLabel, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CustomCheckbox from '../../../../components/forms/theme-elements/CustomCheckbox'

const IdentificationInformation = () => {
    return (
        <Box pt={3}>
            <Typography variant="h5">Terms and condition</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
                Sard about this site or you have been to it, but you cannot figure out what it is or
                what it can do. MTA web directory isSard about this site or you have been to it, but
                you cannot figure out what it is or what it can do. MTA web directory is
            </Typography>
            <FormControlLabel
                control={<CustomCheckbox defaultChecked />}
                label="Agree with terms?"
            />
        </Box>
    )
}

export default IdentificationInformation