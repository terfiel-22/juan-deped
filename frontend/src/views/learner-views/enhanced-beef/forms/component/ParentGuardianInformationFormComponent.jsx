import { Grid2 } from '@mui/material'
import CustomFormLabel from '../../../../../components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../../../components/forms/theme-elements/CustomTextField';

const ParentGuardianInformationFormComponent = ({ fieldName, errors, formData, handleNestedChange }) => {
    const { lastName, firstName, middleName, contactNumber, email } = formData[fieldName];

    const handleChange = (e) => handleNestedChange(e, fieldName);

    return (
        <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, sm: 12, lg: 2 }}>
                <CustomFormLabel htmlFor="lastName">Last Name</CustomFormLabel>
                <CustomTextField
                    error={errors[fieldName]?.lastName}
                    helperText={errors[fieldName]?.lastName}
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
            <Grid2 size={{ xs: 12, sm: 12, lg: 2 }}>
                <CustomFormLabel htmlFor="firstName">First Name</CustomFormLabel>
                <CustomTextField
                    error={!!errors[fieldName]?.firstName}
                    helperText={errors[fieldName]?.firstName}
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
            <Grid2 size={{ xs: 12, sm: 12, lg: 2 }}>
                <CustomFormLabel htmlFor="middleName">Middle Name</CustomFormLabel>
                <CustomTextField
                    error={!!errors[fieldName]?.middleName}
                    helperText={errors[fieldName]?.middleName}
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
                <CustomFormLabel htmlFor="contactNumber">Contact Number</CustomFormLabel>
                <CustomTextField
                    error={!!errors[fieldName]?.contactNumber}
                    helperText={errors[fieldName]?.contactNumber}
                    id="contactNumber"
                    name="contactNumber"
                    onChange={handleChange}
                    value={contactNumber}
                    placeholder="Enter contact number"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                <CustomTextField
                    error={!!errors[fieldName]?.email}
                    helperText={errors[fieldName]?.email}
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={email}
                    placeholder="Enter email"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid2>
        </Grid2>
    )
}

export default ParentGuardianInformationFormComponent