import { Grid } from '@mui/material'
import React from 'react'
import CustomFormLabel from '../../../../../components/forms/theme-elements/CustomFormLabel'
import useStudentDetailForm from '../../../../../hooks/student/useStudentDetailForm'
import CustomTextField from '../../../../../components/forms/theme-elements/CustomTextField'

const ParentInformationForm = ({ fieldName }) => {

    const { formFields, handleNestedChange } = useStudentDetailForm()
    const { lastName, firstName, middleName, contactNumber, email } = formFields[fieldName];

    return (
        <>
            <Grid item xs={12} sm={12} lg={2}>
                <CustomFormLabel htmlFor="lastName">Last Name</CustomFormLabel>
                <CustomTextField
                    id="lastName"
                    name="lastName"
                    onChange={(e) => handleNestedChange(e, fieldName)}
                    value={lastName}
                    placeholder="Enter last name"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={12} sm={12} lg={2}>
                <CustomFormLabel htmlFor="firstName">First Name</CustomFormLabel>
                <CustomTextField
                    id="firstName"
                    name="firstName"
                    onChange={(e) => handleNestedChange(e, fieldName)}
                    value={firstName}
                    placeholder="Enter first name"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={12} sm={12} lg={2}>
                <CustomFormLabel htmlFor="middleName">Middle Name</CustomFormLabel>
                <CustomTextField
                    id="middleName"
                    name="middleName"
                    onChange={(e) => handleNestedChange(e, fieldName)}
                    value={middleName}
                    placeholder="Enter middle name"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={12} sm={12} lg={3}>
                <CustomFormLabel htmlFor="contactNumber">Contact Number</CustomFormLabel>
                <CustomTextField
                    id="contactNumber"
                    name="contactNumber"
                    onChange={(e) => handleNestedChange(e, fieldName)}
                    value={contactNumber}
                    placeholder="Enter contact number"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={12} sm={12} lg={3}>
                <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                <CustomTextField
                    id="email"
                    name="email"
                    type="email"
                    onChange={(e) => handleNestedChange(e, fieldName)}
                    value={email}
                    placeholder="Enter email"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
        </>
    )
}

export default ParentInformationForm