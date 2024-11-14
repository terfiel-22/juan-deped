import { Box } from '@mui/system'
import React, { useState } from 'react'
import CustomFormLabel from '../../../../components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '../../../../components/forms/theme-elements/CustomTextField'
import { FormControlLabel, Grid, RadioGroup } from '@mui/material'
import CustomRadio from '../../../../components/forms/theme-elements/CustomRadio'

const BasicInformation = () => {

    const [formFields, setFormFields] = useState({
        email: "",
        mobile: "",
        schoolYear: "",
        gradeLevelToEnroll: "11",
        withLRN: true,
        isReturnee: false,

    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormFields({
            ...formFields,
            [name]: type === 'checkbox' ? checked : (value === 'true' || value === 'false' ? value === 'true' : value)
        })

        console.log(formFields)
    }

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                    <CustomTextField
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        placeholder="Enter email"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="mobile">Mobile</CustomFormLabel>
                    <CustomTextField
                        id="mobile"
                        name="mobile"
                        onChange={handleChange}
                        placeholder="Enter mobile"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="schoolYear">School Year</CustomFormLabel>
                    <CustomTextField
                        id="schoolYear"
                        name="schoolYear"
                        onChange={handleChange}
                        placeholder="Enter school year"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="gradeLevelToEnroll">Grade Level</CustomFormLabel>
                    <RadioGroup row aria-label="gradeLevelToEnroll" name="gradeLevelToEnroll" id="gradeLevelToEnroll" onChange={handleChange} value={formFields.gradeLevelToEnroll}>
                        <FormControlLabel value="11" control={<CustomRadio />} label="11" />
                        <FormControlLabel value="12" control={<CustomRadio />} label="12" />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="withLRN">Is with LRN?</CustomFormLabel>
                    <RadioGroup row aria-label="withLRN" name="withLRN" id="withLRN" onChange={handleChange} value={formFields.withLRN}>
                        <FormControlLabel value={true} control={<CustomRadio />} label="Yes" />
                        <FormControlLabel value={false} control={<CustomRadio />} label="No" />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="isReturnee">Is Returnee?</CustomFormLabel>
                    <RadioGroup row aria-label="isReturnee" name="isReturnee" onChange={handleChange} value={formFields.isReturnee}>
                        <FormControlLabel value={true} control={<CustomRadio />} label="Yes" />
                        <FormControlLabel value={false} control={<CustomRadio />} label="No" />
                    </RadioGroup>
                </Grid>
            </Grid>
        </Box>
    )
}

export default BasicInformation