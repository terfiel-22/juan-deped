import { Box } from '@mui/system'
import React from 'react'
import CustomFormLabel from '../../../../components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '../../../../components/forms/theme-elements/CustomTextField'
import { Grid } from '@mui/material'

const PersonalInformation = () => {
    return (
        <Box>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} lg={3}>
                    <CustomFormLabel htmlFor="fname">First Name</CustomFormLabel>
                    <CustomTextField
                        id="fname"
                        placeholder="Enter text"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={3}>
                    <CustomFormLabel htmlFor="mname">Middle Name</CustomFormLabel>
                    <CustomTextField
                        id="mname"
                        placeholder="Enter text"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={3}>

                    <CustomFormLabel htmlFor="lname">Last Name</CustomFormLabel>
                    <CustomTextField
                        id="lname"
                        placeholder="Enter text"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={3}>
                    <CustomFormLabel htmlFor="xname">Extension Name</CustomFormLabel>
                    <CustomTextField
                        id="xname"
                        placeholder="Enter text"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="bdate">Birthdate</CustomFormLabel>
                    <CustomTextField
                        id="bdate"
                        placeholder="Enter text"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="gender">Gender</CustomFormLabel>
                    <CustomTextField
                        id="gender"
                        placeholder="Enter text"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="mobile">Mobile No.</CustomFormLabel>
                    <CustomTextField
                        id="mobile"
                        placeholder="Enter text"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                    <CustomTextField
                        id="email"
                        placeholder="Enter text"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
                    <CustomTextField
                        id="password"
                        placeholder="Enter text"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="cpassword">Confirm Password</CustomFormLabel>
                    <CustomTextField
                        id="cpassword"
                        placeholder="Enter text"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default PersonalInformation