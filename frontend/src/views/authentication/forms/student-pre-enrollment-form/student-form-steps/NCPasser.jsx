import { Box } from '@mui/system'
import CustomFormLabel from '../../../../../components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '../../../../../components/forms/theme-elements/CustomTextField'
import { FormControlLabel, Grid, RadioGroup } from '@mui/material'
import CustomRadio from '../../../../../components/forms/theme-elements/CustomRadio'
import useStudentDetailForm from '../../../../../hooks/student/useStudentDetailForm'

const NCPasser
    = () => {
        const fieldName = "ncPasser";
        const { formFields, handleNestedChange } = useStudentDetailForm()
        const { isNcPasser, certificateNo, specialization, validUntil } = formFields[fieldName];

        const handleChange = (e) => handleNestedChange(e, fieldName);

        return (
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} lg={3}>
                        <CustomFormLabel htmlFor="isNcPasser">Is NC Passer?</CustomFormLabel>
                        <RadioGroup row aria-label="isNcPasser" name="isNcPasser" onChange={handleChange} value={isNcPasser}>
                            <FormControlLabel value={true} control={<CustomRadio />} label="Yes" />
                            <FormControlLabel value={false} control={<CustomRadio />} label="No" />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={3}>
                        <CustomFormLabel htmlFor="certificateNo">Certificate No.</CustomFormLabel>
                        <CustomTextField
                            id="certificateNo"
                            name="certificateNo"
                            onChange={handleChange}
                            value={certificateNo}
                            disabled={!isNcPasser}
                            placeholder="Enter certificate no."
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={3}>
                        <CustomFormLabel htmlFor="specialization">Specialization</CustomFormLabel>
                        <CustomTextField
                            id="specialization"
                            name="specialization"
                            onChange={handleChange}
                            value={specialization}
                            disabled={!isNcPasser}
                            placeholder="Enter specialization"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={3}>
                        <CustomFormLabel htmlFor="validUntil">Valid Until</CustomFormLabel>
                        <CustomTextField
                            id="validUntil"
                            name="validUntil"
                            type="date"
                            onChange={handleChange}
                            value={validUntil}
                            disabled={!isNcPasser}
                            placeholder="Enter Specialization"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid>
                </Grid>
            </Box>
        )
    }

export default NCPasser
