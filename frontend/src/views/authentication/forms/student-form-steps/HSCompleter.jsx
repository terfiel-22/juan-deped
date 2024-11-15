import { Box } from '@mui/system'
import CustomFormLabel from '../../../../components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '../../../../components/forms/theme-elements/CustomTextField'
import { FormControlLabel, Grid, RadioGroup } from '@mui/material'
import CustomRadio from '../../../../components/forms/theme-elements/CustomRadio'
import useStudentDetailForm from '../../../../hooks/student/useStudentDetailForm'

const HSCompleter
    = () => {
        const fieldName = "hsCompleter";
        const { formFields, handleNestedChange } = useStudentDetailForm()
        const { isHsCompleter, genAve, schoolAddress, graduationDate } = formFields[fieldName];

        const handleChange = (e) => handleNestedChange(e, fieldName);

        return (
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} lg={3}>
                        <CustomFormLabel htmlFor="isHsCompleter">Is HS (Old Curriculum) Completer?</CustomFormLabel>
                        <RadioGroup row aria-label="isHsCompleter" name="isHsCompleter" onChange={handleChange} value={isHsCompleter}>
                            <FormControlLabel value={true} control={<CustomRadio />} label="Yes" />
                            <FormControlLabel value={false} control={<CustomRadio />} label="No" />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={3}>
                        <CustomFormLabel htmlFor="genAve">General Average</CustomFormLabel>
                        <CustomTextField
                            id="genAve"
                            name="genAve"
                            onChange={handleChange}
                            value={genAve}
                            disabled={!isHsCompleter}
                            placeholder="Enter gen ave."
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={3}>
                        <CustomFormLabel htmlFor="schoolAddress">School Address</CustomFormLabel>
                        <CustomTextField
                            id="schoolAddress"
                            name="schoolAddress"
                            onChange={handleChange}
                            value={schoolAddress}
                            disabled={!isHsCompleter}
                            placeholder="Enter school address"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={3}>
                        <CustomFormLabel htmlFor="graduationDate">Graduation Date</CustomFormLabel>
                        <CustomTextField
                            id="graduationDate"
                            name="graduationDate"
                            type="date"
                            onChange={handleChange}
                            value={graduationDate}
                            disabled={!isHsCompleter}
                            placeholder="Enter graduation date"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid>
                </Grid>
            </Box>
        )
    }

export default HSCompleter
