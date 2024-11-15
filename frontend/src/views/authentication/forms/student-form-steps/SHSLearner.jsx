import { Box } from '@mui/system'
import CustomFormLabel from '../../../../components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '../../../../components/forms/theme-elements/CustomTextField'
import { FormControlLabel, Grid, RadioGroup } from '@mui/material'
import useStudentDetailForm from '../../../../hooks/student/useStudentDetailForm'
import CustomRadio from '../../../../components/forms/theme-elements/CustomRadio'

const SHSLearner = () => {

    const fieldName = "seniorHighSchool";
    const { formFields, handleNestedChange } = useStudentDetailForm()
    const { semester, track, strand } = formFields[fieldName];

    const handleChange = (e) => handleNestedChange(e, fieldName);

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="semester">Semester</CustomFormLabel>
                    <RadioGroup row aria-label="semester" name="semester" id="semester" onChange={handleChange} value={semester} >
                        <FormControlLabel value="1st Sem" control={<CustomRadio />} label="1st Sem" />
                        <FormControlLabel value="2nd Sem" control={<CustomRadio />} label="2nd Sem" />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="track">Track</CustomFormLabel>
                    <CustomTextField
                        id="track"
                        name="track"
                        onChange={handleChange}
                        value={track}
                        placeholder="Enter track"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="strand">Strand</CustomFormLabel>
                    <CustomTextField
                        id="strand"
                        name="strand"
                        onChange={handleChange}
                        value={strand}
                        placeholder="Enter strand"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default SHSLearner