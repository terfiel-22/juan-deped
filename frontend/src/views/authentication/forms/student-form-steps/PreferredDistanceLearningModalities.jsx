import { Box } from '@mui/system'
import { Checkbox, FormControlLabel, Grid } from '@mui/material'
import useStudentDetailForm from '../../../../hooks/student/useStudentDetailForm'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const PreferredDistanceLearningModalities = () => {
    const fieldName = "preferredDistanceLearningModalities";
    const { formFields, handleNestedChange } = useStudentDetailForm()
    const {
        isModularPrint, isOnline, isRadioBased, isBlended, isModularDigital, isEducationTV, isHomeschooling, isFaceToFace } = formFields[fieldName];

    const handleChange = (e) => handleNestedChange(e, fieldName);

    return (
        <Box>
            <Grid container spacing={2} justifyContent={{ lg: "center", xs: "start" }} py={5}>
                <Grid item xs="auto">
                    <FormControlLabel
                        control={
                            <Checkbox color="primary"
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckBoxIcon />}
                                id="isModularPrint"
                                name="isModularPrint"
                                onChange={handleChange}
                                checked={isModularPrint}
                            />
                        }
                        label="Modular (Print)"
                    />
                </Grid>
                <Grid item xs="auto">
                    <FormControlLabel
                        control={
                            <Checkbox color="primary"
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckBoxIcon />}
                                id="isOnline"
                                name="isOnline"
                                onChange={handleChange}
                                checked={isOnline}
                            />
                        }
                        label="Online"
                    />
                </Grid>
                <Grid item xs="auto">
                    <FormControlLabel
                        control={
                            <Checkbox color="primary"
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckBoxIcon />}
                                id="isRadioBased"
                                name="isRadioBased"
                                onChange={handleChange}
                                checked={isRadioBased}
                            />
                        }
                        label="Radio Based Instruction"
                    />
                </Grid>
                <Grid item xs="auto">
                    <FormControlLabel
                        control={
                            <Checkbox color="primary"
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckBoxIcon />}
                                id="isBlended"
                                name="isBlended"
                                onChange={handleChange}
                                checked={isBlended}
                            />
                        }
                        label="Blended"
                    />
                </Grid>

                <Grid item xs="auto">
                    <FormControlLabel
                        control={
                            <Checkbox color="primary"
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckBoxIcon />}
                                id="isModularDigital"
                                name="isModularDigital"
                                onChange={handleChange}
                                checked={isModularDigital}
                            />
                        }
                        label="Modular (Digital)"
                    />
                </Grid>
                <Grid item xs="auto">
                    <FormControlLabel
                        control={
                            <Checkbox color="primary"
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckBoxIcon />}
                                id="isEducationTV"
                                name="isEducationTV"
                                onChange={handleChange}
                                checked={isEducationTV}
                            />
                        }
                        label="Educational Television"
                    />
                </Grid>
                <Grid item xs="auto">
                    <FormControlLabel
                        control={
                            <Checkbox color="primary"
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckBoxIcon />}
                                id="isHomeschooling"
                                name="isHomeschooling"
                                onChange={handleChange}
                                checked={isHomeschooling}
                            />
                        }
                        label="Homeschooling"
                    />
                </Grid>
                <Grid item xs="auto">
                    <FormControlLabel
                        control={
                            <Checkbox color="primary"
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckBoxIcon />}
                                id="isFaceToFace"
                                name="isFaceToFace"
                                onChange={handleChange}
                                checked={isFaceToFace}
                            />
                        }
                        label="Face to Face"
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default PreferredDistanceLearningModalities