import { Box } from '@mui/system'
import CustomFormLabel from '../../../../components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '../../../../components/forms/theme-elements/CustomTextField'
import { Grid } from '@mui/material'
import useStudentDetailForm from '../../../../hooks/student/useStudentDetailForm'

const CurrentAddressInformation = () => {
    const { formFields, handleChange } = useStudentDetailForm()

    const { currentHouseNoStreet, currentStreetName, currentBarangay, currentMunicipalityCity, currentProvince, currentCountry, currentZipCode } = formFields;

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="currentHouseNoStreet">House Street No.</CustomFormLabel>
                    <CustomTextField
                        id="currentHouseNoStreet"
                        name="currentHouseNoStreet"
                        onChange={handleChange}
                        value={currentHouseNoStreet}
                        placeholder="Enter house street number"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="currentStreetName">Street Name</CustomFormLabel>
                    <CustomTextField
                        id="currentStreetName"
                        name="currentStreetName"
                        onChange={handleChange}
                        value={currentStreetName}
                        placeholder="Enter street name"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="currentBarangay">Barangay</CustomFormLabel>
                    <CustomTextField
                        id="currentBarangay"
                        name="currentBarangay"
                        onChange={handleChange}
                        value={currentBarangay}
                        placeholder="Enter barangay"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={3}>
                    <CustomFormLabel htmlFor="currentMunicipalityCity">Municipality/City</CustomFormLabel>
                    <CustomTextField
                        id="currentMunicipalityCity"
                        name="currentMunicipalityCity"
                        onChange={handleChange}
                        value={currentMunicipalityCity}
                        placeholder="Enter municipality/city"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={3}>
                    <CustomFormLabel htmlFor="currentProvince">Province</CustomFormLabel>
                    <CustomTextField
                        id="currentProvince"
                        name="currentProvince"
                        onChange={handleChange}
                        value={currentProvince}
                        placeholder="Enter province"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={3}>
                    <CustomFormLabel htmlFor="currentCountry">Country</CustomFormLabel>
                    <CustomTextField
                        id="currentCountry"
                        name="currentCountry"
                        onChange={handleChange}
                        value={currentCountry}
                        placeholder="Enter country"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={3}>
                    <CustomFormLabel htmlFor="currentZipCode">Zip Code</CustomFormLabel>
                    <CustomTextField
                        id="currentZipCode"
                        name="currentZipCode"
                        onChange={handleChange}
                        value={currentZipCode}
                        placeholder="Enter zip code"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default CurrentAddressInformation