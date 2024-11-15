import { Box } from '@mui/system'
import CustomFormLabel from '../../../../components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '../../../../components/forms/theme-elements/CustomTextField'
import { Grid } from '@mui/material'
import useStudentDetailForm from '../../../../hooks/student/useStudentDetailForm'
import { useMemo } from 'react'

const HealthReport = () => {
    const { formFields, handleChange } = useStudentDetailForm()

    const { weightKg, heightM } = formFields;

    const handleBMI = useMemo(() => parseFloat((weightKg / (heightM ** 2)).toFixed(2)), [weightKg, heightM])

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