import { Box } from '@mui/system'
import { Checkbox, FormControlLabel, Grid2 } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const PreferredDistanceLearningModalitiesForm = ({ formData, handleNestedChange }) => {
    const fieldName = "preferredDistanceLearningModalities";
    const {
        isModularPrint, isOnline, isRadioBased, isBlended, isModularDigital, isEducationTV, isHomeschooling, isFaceToFace } = formData[fieldName];

    const handleChange = (e) => handleNestedChange(e, fieldName);

    return (
        <Box>
            <Grid2 container spacing={2} justifyContent={{ lg: "center", xs: "start" }} py={5}>
                <Grid2 size={{ xs: 'auto' }}>
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
                </Grid2>
                <Grid2 size={{ xs: 'auto' }}>
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
                </Grid2>
                <Grid2 size={{ xs: 'auto' }}>
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
                </Grid2>
                <Grid2 size={{ xs: 'auto' }}>
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
                </Grid2>

                <Grid2 size={{ xs: 'auto' }}>
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
                </Grid2>
                <Grid2 size={{ xs: 'auto' }}>
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
                </Grid2>
                <Grid2 size={{ xs: 'auto' }}>
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
                </Grid2>
                <Grid2 size={{ xs: 'auto' }}>
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
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default PreferredDistanceLearningModalitiesForm