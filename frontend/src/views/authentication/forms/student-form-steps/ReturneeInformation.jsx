import { Box } from '@mui/system'
import CustomFormLabel from '../../../../components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '../../../../components/forms/theme-elements/CustomTextField'
import { Grid } from '@mui/material'
import useStudentDetailForm from '../../../../hooks/student/useStudentDetailForm'

const ReturneeInformation = () => {
    const fieldName = "returningLearner";
    const { formFields, handleNestedChange } = useStudentDetailForm()
    const { isReturnee } = formFields
    const { lastGradeLevelCompleted, lastSchoolYearCompleted, lastSchoolAttended, schoolID } = formFields[fieldName];

    const handleChange = (e) => handleNestedChange(e, fieldName);

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} lg={6}>
                    <CustomFormLabel htmlFor="lastGradeLevelCompleted">Last Grade Level</CustomFormLabel>
                    <CustomTextField
                        id="lastGradeLevelCompleted"
                        name="lastGradeLevelCompleted"
                        onChange={handleChange}
                        value={lastGradeLevelCompleted}
                        disabled={!isReturnee}
                        placeholder="Enter grade level"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={6}>
                    <CustomFormLabel htmlFor="lastSchoolYearCompleted">Last School Year Completed</CustomFormLabel>
                    <CustomTextField
                        id="lastSchoolYearCompleted"
                        name="lastSchoolYearCompleted"
                        onChange={handleChange}
                        value={lastSchoolYearCompleted}
                        disabled={!isReturnee}
                        placeholder="Enter school year"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={6}>
                    <CustomFormLabel htmlFor="lastSchoolAttended">Last School Attended</CustomFormLabel>
                    <CustomTextField
                        id="lastSchoolAttended"
                        name="lastSchoolAttended"
                        onChange={handleChange}
                        value={lastSchoolAttended}
                        disabled={!isReturnee}
                        placeholder="Enter school name"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={6}>
                    <CustomFormLabel htmlFor="schoolID">School ID</CustomFormLabel>
                    <CustomTextField
                        id="schoolID"
                        name="schoolID"
                        onChange={handleChange}
                        value={schoolID}
                        disabled={!isReturnee}
                        placeholder="Enter school id"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default ReturneeInformation