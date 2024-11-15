import { Box } from '@mui/system'
import CustomFormLabel from '../../../../components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '../../../../components/forms/theme-elements/CustomTextField'
import { FormControlLabel, Grid, RadioGroup } from '@mui/material'
import useStudentDetailForm from '../../../../hooks/student/useStudentDetailForm'
import CustomRadio from '../../../../components/forms/theme-elements/CustomRadio'

const PermanentAddressInformation = () => {
    const { formFields, handleChange } = useStudentDetailForm()

    const { currentHouseNoStreet, currentStreetName, currentBarangay, currentMunicipalityCity, currentProvince, currentCountry, currentZipCode, isSameAsCurrentAddress, houseNoStreet, streetName, barangay, municipalityCity, province, country, zipCode } = formFields;

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} lg={3}>
                    <CustomFormLabel htmlFor="isSameAsCurrentAddress">Same as Current Address?</CustomFormLabel>
                    <RadioGroup row aria-label="isSameAsCurrentAddress" name="isSameAsCurrentAddress" onChange={handleChange} value={isSameAsCurrentAddress}>
                        <FormControlLabel value={true} control={<CustomRadio />} label="Yes" />
                        <FormControlLabel value={false} control={<CustomRadio />} label="No" />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={12} lg={3}>
                    <CustomFormLabel htmlFor="houseNoStreet">House Street No.</CustomFormLabel>
                    <CustomTextField
                        id="houseNoStreet"
                        name="houseNoStreet"
                        onChange={handleChange}
                        value={isSameAsCurrentAddress ? currentHouseNoStreet : houseNoStreet}
                        placeholder="Enter house street number"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={3}>
                    <CustomFormLabel htmlFor="streetName">Street Name</CustomFormLabel>
                    <CustomTextField
                        id="streetName"
                        name="streetName"
                        onChange={handleChange}
                        value={isSameAsCurrentAddress ? currentStreetName : streetName}
                        placeholder="Enter street name"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={3}>
                    <CustomFormLabel htmlFor="barangay">Barangay</CustomFormLabel>
                    <CustomTextField
                        id="barangay"
                        name="barangay"
                        onChange={handleChange}
                        value={isSameAsCurrentAddress ? currentBarangay : barangay}
                        placeholder="Enter barangay"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={3}>
                    <CustomFormLabel htmlFor="municipalityCity">Municipality/City</CustomFormLabel>
                    <CustomTextField
                        id="municipalityCity"
                        name="municipalityCity"
                        onChange={handleChange}
                        value={isSameAsCurrentAddress ? currentMunicipalityCity : municipalityCity}
                        placeholder="Enter municipality/city"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={3}>
                    <CustomFormLabel htmlFor="province">Province</CustomFormLabel>
                    <CustomTextField
                        id="province"
                        name="province"
                        onChange={handleChange}
                        value={isSameAsCurrentAddress ? currentProvince : province}
                        placeholder="Enter province"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={3}>
                    <CustomFormLabel htmlFor="country">Country</CustomFormLabel>
                    <CustomTextField
                        id="country"
                        name="country"
                        onChange={handleChange}
                        value={isSameAsCurrentAddress ? currentCountry : country}
                        placeholder="Enter country"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={3}>
                    <CustomFormLabel htmlFor="zipCode">Zip Code</CustomFormLabel>
                    <CustomTextField
                        id="zipCode"
                        name="zipCode"
                        onChange={handleChange}
                        value={isSameAsCurrentAddress ? currentZipCode : zipCode}
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

export default PermanentAddressInformation