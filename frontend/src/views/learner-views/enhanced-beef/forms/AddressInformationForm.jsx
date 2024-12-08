import { Box, Stack } from '@mui/system'
import { FormControlLabel, Grid2, RadioGroup } from '@mui/material'
import CustomTextField from '../../../../components/forms/theme-elements/CustomTextField'
import CustomRadio from '../../../../components/forms/theme-elements/CustomRadio'
import CustomFormLabel from '../../../../components/forms/theme-elements/CustomFormLabel'

const AddressInformationForm = ({ errors, formData, handleChange }) => {
    const { currentHouseNoStreet, currentStreetName, currentBarangay, currentMunicipalityCity, currentProvince, currentCountry, currentZipCode, isSameAsCurrentAddress, houseNoStreet, streetName, barangay, municipalityCity, province, country, zipCode } = formData;

    return (
        <Stack>
            <Box>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                        <CustomFormLabel htmlFor="currentHouseNoStreet">Current House Street No.</CustomFormLabel>
                        <CustomTextField
                            error={!!errors.currentHouseNoStreet}
                            helperText={errors.currentHouseNoStreet}
                            id="currentHouseNoStreet"
                            name="currentHouseNoStreet"
                            onChange={handleChange}
                            value={currentHouseNoStreet}
                            placeholder="Enter house street number"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                        <CustomFormLabel htmlFor="currentStreetName">Current Street Name</CustomFormLabel>
                        <CustomTextField
                            error={!!errors.currentStreetName}
                            helperText={errors.currentStreetName}
                            id="currentStreetName"
                            name="currentStreetName"
                            onChange={handleChange}
                            value={currentStreetName}
                            placeholder="Enter street name"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                        <CustomFormLabel htmlFor="currentBarangay">Current Barangay</CustomFormLabel>
                        <CustomTextField
                            error={!!errors.currentBarangay}
                            helperText={errors.currentBarangay}
                            id="currentBarangay"
                            name="currentBarangay"
                            onChange={handleChange}
                            value={currentBarangay}
                            placeholder="Enter barangay"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                        <CustomFormLabel htmlFor="currentMunicipalityCity">Current Municipality/City</CustomFormLabel>
                        <CustomTextField
                            error={!!errors.currentMunicipalityCity}
                            helperText={errors.currentMunicipalityCity}
                            id="currentMunicipalityCity"
                            name="currentMunicipalityCity"
                            onChange={handleChange}
                            value={currentMunicipalityCity}
                            placeholder="Enter municipality/city"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                        <CustomFormLabel htmlFor="currentProvince">Current Province</CustomFormLabel>
                        <CustomTextField
                            error={!!errors.currentProvince}
                            helperText={errors.currentProvince}
                            id="currentProvince"
                            name="currentProvince"
                            onChange={handleChange}
                            value={currentProvince}
                            placeholder="Enter province"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                        <CustomFormLabel htmlFor="currentCountry">Current Country</CustomFormLabel>
                        <CustomTextField
                            error={!!errors.currentCountry}
                            helperText={errors.currentCountry}
                            id="currentCountry"
                            name="currentCountry"
                            onChange={handleChange}
                            value={currentCountry}
                            placeholder="Enter country"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                        <CustomFormLabel htmlFor="currentZipCode">Current Zip Code</CustomFormLabel>
                        <CustomTextField
                            error={!!errors.currentZipCode}
                            helperText={errors.currentZipCode}
                            id="currentZipCode"
                            name="currentZipCode"
                            onChange={handleChange}
                            value={currentZipCode}
                            placeholder="Enter zip code"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid2>
                </Grid2>
            </Box>
            <Box>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                        <CustomFormLabel htmlFor="isSameAsCurrentAddress">Is Current Address Permanent?</CustomFormLabel>
                        <RadioGroup row aria-label="isSameAsCurrentAddress" name="isSameAsCurrentAddress" onChange={handleChange} value={isSameAsCurrentAddress}>
                            <FormControlLabel value={true} control={<CustomRadio />} label="Yes" />
                            <FormControlLabel value={false} control={<CustomRadio />} label="No" />
                        </RadioGroup>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                        <CustomFormLabel htmlFor="houseNoStreet">Permanent House Street No.</CustomFormLabel>
                        <CustomTextField
                            error={!!errors.houseNoStreet}
                            helperText={errors.houseNoStreet}
                            id="houseNoStreet"
                            name="houseNoStreet"
                            onChange={handleChange}
                            value={isSameAsCurrentAddress ? currentHouseNoStreet : houseNoStreet}
                            disabled={isSameAsCurrentAddress}
                            placeholder="Enter house street number"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                        <CustomFormLabel htmlFor="streetName">Permanent Street Name</CustomFormLabel>
                        <CustomTextField
                            error={!!errors.streetName}
                            helperText={errors.streetName}
                            id="streetName"
                            name="streetName"
                            onChange={handleChange}
                            value={isSameAsCurrentAddress ? currentStreetName : streetName}
                            disabled={isSameAsCurrentAddress}
                            placeholder="Enter street name"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                        <CustomFormLabel htmlFor="barangay">Permanent Barangay</CustomFormLabel>
                        <CustomTextField
                            error={!!errors.barangay}
                            helperText={errors.barangay}
                            id="barangay"
                            name="barangay"
                            onChange={handleChange}
                            value={isSameAsCurrentAddress ? currentBarangay : barangay}
                            disabled={isSameAsCurrentAddress}
                            placeholder="Enter barangay"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                        <CustomFormLabel htmlFor="municipalityCity">Permanent Municipality/City</CustomFormLabel>
                        <CustomTextField
                            error={!!errors.municipalityCity}
                            helperText={errors.municipalityCity}
                            id="municipalityCity"
                            name="municipalityCity"
                            onChange={handleChange}
                            value={isSameAsCurrentAddress ? currentMunicipalityCity : municipalityCity}
                            disabled={isSameAsCurrentAddress}
                            placeholder="Enter municipality/city"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                        <CustomFormLabel htmlFor="province">Permanent Province</CustomFormLabel>
                        <CustomTextField
                            error={!!errors.province}
                            helperText={errors.province}
                            id="province"
                            name="province"
                            onChange={handleChange}
                            value={isSameAsCurrentAddress ? currentProvince : province}
                            disabled={isSameAsCurrentAddress}
                            placeholder="Enter province"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                        <CustomFormLabel htmlFor="country">Permanent Country</CustomFormLabel>
                        <CustomTextField
                            error={!!errors.country}
                            helperText={errors.country}
                            id="country"
                            name="country"
                            onChange={handleChange}
                            value={isSameAsCurrentAddress ? currentCountry : country}
                            disabled={isSameAsCurrentAddress}
                            placeholder="Enter country"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                        <CustomFormLabel htmlFor="zipCode">Permanent Zip Code</CustomFormLabel>
                        <CustomTextField
                            error={!!errors.zipCode}
                            helperText={errors.zipCode}
                            id="zipCode"
                            name="zipCode"
                            onChange={handleChange}
                            value={isSameAsCurrentAddress ? currentZipCode : zipCode}
                            disabled={isSameAsCurrentAddress}
                            placeholder="Enter zip code"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </Grid2>
                </Grid2>
            </Box>
        </Stack>
    )
}

export default AddressInformationForm