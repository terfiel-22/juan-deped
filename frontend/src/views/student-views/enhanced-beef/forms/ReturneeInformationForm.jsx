import { Box } from '@mui/system'
import { Grid2 } from '@mui/material'
import CustomFormLabel from '../../../../components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../../components/forms/theme-elements/CustomTextField';

const ReturneeInformationForm = ({ formData, handleNestedChange }) => {
    const fieldName = "returningLearner";
    const { isReturnee } = formData
    const { lastGradeLevelCompleted, lastSchoolYearCompleted, lastSchoolAttended, schoolID } = formData[fieldName];

    const handleChange = (e) => handleNestedChange(e, fieldName);

    return (
        <Box>
            <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
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
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
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
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
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
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
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
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default ReturneeInformationForm