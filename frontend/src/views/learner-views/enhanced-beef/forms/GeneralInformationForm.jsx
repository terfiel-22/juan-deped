import { Box } from '@mui/system'
import CustomTextField from '../../../../components/forms/theme-elements/CustomTextField'
import { FormControlLabel, Grid2, RadioGroup } from '@mui/material'
import CustomRadio from '../../../../components/forms/theme-elements/CustomRadio'
import CustomFormLabel from '../../../../components/forms/theme-elements/CustomFormLabel'

const GeneralInformationForm = ({ errors, formData, handleChange }) => {

    const { email, mobile, schoolYear, gradeLevelToEnroll, withLRN, isReturnee } = formData;

    return (
        <Box>
            <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                    <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                    <CustomTextField
                        error={!!errors.email}
                        helperText={errors.email}
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        value={email}
                        placeholder="Enter email"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                    <CustomFormLabel htmlFor="mobile">Mobile</CustomFormLabel>
                    <CustomTextField
                        error={!!errors.mobile}
                        helperText={errors.mobile}
                        id="mobile"
                        name="mobile"
                        onChange={handleChange}
                        value={mobile}
                        placeholder="Enter mobile"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                    <CustomFormLabel htmlFor="schoolYear">School Year</CustomFormLabel>
                    <CustomTextField
                        error={!!errors.schoolYear}
                        helperText={errors.schoolYear}
                        id="schoolYear"
                        name="schoolYear"
                        onChange={handleChange}
                        value={schoolYear}
                        placeholder="Enter school year"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                    <CustomFormLabel htmlFor="gradeLevelToEnroll">Grade Level</CustomFormLabel>
                    <RadioGroup row aria-label="gradeLevelToEnroll" name="gradeLevelToEnroll" id="gradeLevelToEnroll" onChange={handleChange} value={gradeLevelToEnroll} >
                        <FormControlLabel value="11" control={<CustomRadio />} label="11" />
                        <FormControlLabel value="12" control={<CustomRadio />} label="12" />
                    </RadioGroup>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                    <CustomFormLabel htmlFor="withLRN">Is with LRN?</CustomFormLabel>
                    <RadioGroup row aria-label="withLRN" name="withLRN" id="withLRN" onChange={handleChange} value={withLRN}>
                        <FormControlLabel value={true} control={<CustomRadio />} label="Yes" />
                        <FormControlLabel value={false} control={<CustomRadio />} label="No" />
                    </RadioGroup>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                    <CustomFormLabel htmlFor="isReturnee">Is Returnee?</CustomFormLabel>
                    <RadioGroup row aria-label="isReturnee" name="isReturnee" onChange={handleChange} value={isReturnee}>
                        <FormControlLabel value={true} control={<CustomRadio />} label="Yes" />
                        <FormControlLabel value={false} control={<CustomRadio />} label="No" />
                    </RadioGroup>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default GeneralInformationForm