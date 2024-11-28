import { Box } from '@mui/system'
import { useMemo } from 'react'
import { Grid } from '@mui/material'
import CustomFormLabel from '../../../../../components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '../../../../../components/forms/theme-elements/CustomTextField'
import useStudentDetailForm from '../../../../../hooks/student/useStudentDetailForm'

const HealthReport = () => {
    const { formFields, handleChange } = useStudentDetailForm()

    const { weightKg, heightM } = formFields;

    const handleBMI = useMemo(() => {
        const bmi = (weightKg / (heightM ** 2)).toFixed(2);
        return isNaN(bmi) ? 0 : bmi;
    }, [weightKg, heightM]);

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="weightKg">Weight</CustomFormLabel>
                    <CustomTextField
                        id="weightKg"
                        name="weightKg"
                        type="number"
                        onChange={handleChange}
                        value={weightKg}
                        placeholder="Enter weight in Kilogram"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="heightM">Height</CustomFormLabel>
                    <CustomTextField
                        id="heightM"
                        name="heightM"
                        type="number"
                        onChange={handleChange}
                        value={heightM}
                        placeholder="Enter height in meter"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="bmi">Body Mass Index</CustomFormLabel>
                    <CustomTextField
                        id="bmi"
                        name="bmi"
                        value={handleBMI}
                        disabled={true}
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default HealthReport