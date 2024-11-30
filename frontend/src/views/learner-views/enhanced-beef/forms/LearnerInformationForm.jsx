import { Box } from '@mui/system'
import CustomFormLabel from '../../../../components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '../../../../components/forms/theme-elements/CustomTextField'
import { FormControlLabel, Grid2, RadioGroup } from '@mui/material'
import CustomRadio from '../../../../components/forms/theme-elements/CustomRadio'
import { formatDate } from '../../../../utils/dateFormatter'

const LearnerInformation = ({ formData, handleChange }) => {
    const { isPsaAvailable, psaBirthCertificateNo, lrn, lastName, firstName, middleName, extensionName, birthDate, sex, age, placeOfBirth, motherTongue, isIndigenousPeople, indigenousPeople, isFourPsBeneficiary, fourPsHouseHoldId } = formData;

    return (
        <Box>
            <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                    <CustomFormLabel htmlFor="isPsaAvailable">Is PSA Available?</CustomFormLabel>
                    <RadioGroup row aria-label="isPsaAvailable" name="isPsaAvailable" onChange={handleChange} value={isPsaAvailable}>
                        <FormControlLabel value={true} control={<CustomRadio />} label="Yes" />
                        <FormControlLabel value={false} control={<CustomRadio />} label="No" />
                    </RadioGroup>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                    <CustomFormLabel htmlFor="psaBirthCertificateNo">PSA Birth Certificate No.</CustomFormLabel>
                    <CustomTextField
                        id="psaBirthCertificateNo"
                        name="psaBirthCertificateNo"
                        onChange={handleChange}
                        value={isPsaAvailable ? psaBirthCertificateNo : "To-Follow"}
                        disabled={!isPsaAvailable}
                        placeholder="Enter birth certificate no"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                    <CustomFormLabel htmlFor="lrn">Learner Reference No.</CustomFormLabel>
                    <CustomTextField
                        id="lrn"
                        name="lrn"
                        onChange={handleChange}
                        value={lrn}
                        placeholder="Enter LRN"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                    <CustomFormLabel htmlFor="lastName">Last Name</CustomFormLabel>
                    <CustomTextField
                        id="lastName"
                        name="lastName"
                        onChange={handleChange}
                        value={lastName}
                        placeholder="Enter last name"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                    <CustomFormLabel htmlFor="firstName">First Name</CustomFormLabel>
                    <CustomTextField
                        id="firstName"
                        name="firstName"
                        onChange={handleChange}
                        value={firstName}
                        placeholder="Enter first name"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                    <CustomFormLabel htmlFor="middleName">Middle Name</CustomFormLabel>
                    <CustomTextField
                        id="middleName"
                        name="middleName"
                        onChange={handleChange}
                        value={middleName}
                        placeholder="Enter middle name"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                    <CustomFormLabel htmlFor="extensionName">Extension Name</CustomFormLabel>
                    <CustomTextField
                        id="extensionName"
                        name="extensionName"
                        onChange={handleChange}
                        value={extensionName}
                        placeholder="Enter extension name"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                    <CustomFormLabel htmlFor="birthDate">Birthdate</CustomFormLabel>
                    <CustomTextField
                        id="birthDate"
                        name="birthDate"
                        type="date"
                        onChange={handleChange}
                        value={birthDate ? formatDate(birthDate) : ""}
                        placeholder="dd/mm/yyyy"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                    <CustomFormLabel htmlFor="sex">Sex</CustomFormLabel>
                    <RadioGroup row aria-label="sex" name="sex" onChange={handleChange} value={sex}>
                        <FormControlLabel value="Male" control={<CustomRadio />} label="Male" />
                        <FormControlLabel value="Female" control={<CustomRadio />} label="Female" />
                    </RadioGroup>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                    <CustomFormLabel htmlFor="age">Age</CustomFormLabel>
                    <CustomTextField
                        id="age"
                        name="age"
                        onChange={handleChange}
                        value={age}
                        placeholder="Enter age"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                    <CustomFormLabel htmlFor="placeOfBirth">Place of Birth</CustomFormLabel>
                    <CustomTextField
                        id="placeOfBirth"
                        name="placeOfBirth"
                        onChange={handleChange}
                        value={placeOfBirth}
                        placeholder="Enter place of birth"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                    <CustomFormLabel htmlFor="motherTongue">Mother Tongue</CustomFormLabel>
                    <CustomTextField
                        id="motherTongue"
                        name="motherTongue"
                        onChange={handleChange}
                        value={motherTongue}
                        placeholder="Enter mother tongue"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                    <CustomFormLabel htmlFor="isIndigenousPeople">Is Indigenous People?</CustomFormLabel>
                    <RadioGroup row aria-label="isIndigenousPeople" name="isIndigenousPeople" onChange={handleChange} value={isIndigenousPeople}>
                        <FormControlLabel value={true} control={<CustomRadio />} label="Yes" />
                        <FormControlLabel value={false} control={<CustomRadio />} label="No" />
                    </RadioGroup>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                    <CustomFormLabel htmlFor="indigenousPeople">Indigenous Community</CustomFormLabel>
                    <CustomTextField
                        id="indigenousPeople"
                        name="indigenousPeople"
                        onChange={handleChange}
                        value={indigenousPeople}
                        disabled={!isIndigenousPeople}
                        placeholder="Enter indigenous community"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                    <CustomFormLabel htmlFor="isFourPsBeneficiary">Is 4Ps Beneficiary?</CustomFormLabel>
                    <RadioGroup row aria-label="isFourPsBeneficiary" name="isFourPsBeneficiary" onChange={handleChange} value={isFourPsBeneficiary}>
                        <FormControlLabel value={true} control={<CustomRadio />} label="Yes" />
                        <FormControlLabel value={false} control={<CustomRadio />} label="No" />
                    </RadioGroup>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                    <CustomFormLabel htmlFor="fourPsHouseHoldId">4Ps Household ID</CustomFormLabel>
                    <CustomTextField
                        id="fourPsHouseHoldId"
                        name="fourPsHouseHoldId"
                        onChange={handleChange}
                        value={fourPsHouseHoldId}
                        disabled={!isFourPsBeneficiary}
                        placeholder="Enter household ID"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default LearnerInformation