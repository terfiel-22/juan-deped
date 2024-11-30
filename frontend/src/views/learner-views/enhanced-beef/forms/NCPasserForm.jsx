import { Box } from '@mui/system'
import CustomFormLabel from '../../../../components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '../../../../components/forms/theme-elements/CustomTextField'
import { FormControlLabel, Grid2, RadioGroup } from '@mui/material'
import CustomRadio from '../../../../components/forms/theme-elements/CustomRadio'
import { formatDate } from '../../../../utils/dateFormatter'

const NCPasserForm
    = ({ formData, handleNestedChange }) => {
        const fieldName = "ncPasser";
        const { isNcPasser, certificateNo, specialization, validUntil } = formData[fieldName];

        const handleChange = (e) => handleNestedChange(e, fieldName);

        return (
            <Box>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                        <CustomFormLabel htmlFor="isNcPasser">Is NC Passer?</CustomFormLabel>
                        <RadioGroup row aria-label="isNcPasser" name="isNcPasser" onChange={handleChange} value={isNcPasser}>
                            <FormControlLabel value={true} control={<CustomRadio />} label="Yes" />
                            <FormControlLabel value={false} control={<CustomRadio />} label="No" />
                        </RadioGroup>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
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
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
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
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                        <CustomFormLabel htmlFor="validUntil">Valid Until</CustomFormLabel>
                        <CustomTextField
                            id="validUntil"
                            name="validUntil"
                            type="date"
                            onChange={handleChange}
                            value={validUntil ? formatDate(validUntil) : ""}
                            disabled={!isNcPasser}
                            placeholder="Enter Specialization"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid2>
                </Grid2>
            </Box>
        )
    }

export default NCPasserForm
