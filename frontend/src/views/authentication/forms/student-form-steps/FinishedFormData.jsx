import { Box, Typography, Divider, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCurrentStudent } from '../../../../store/student/StudentSlice';

const FinishedFormData = () => {
    const studentData = useSelector(selectCurrentStudent);

    if (!studentData) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box sx={{
            height: '50vh', display: 'flex', flexDirection: 'column'
        }}>
            <Paper elevation={3} sx={{ padding: 3, marginTop: 2, overflow: 'auto' }}>
                <Typography variant="h4" gutterBottom>
                    Student Bio Data
                </Typography>
                <Divider />

                {/* General Information */}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h6">General Information</Typography>
                    <Typography><strong>Email:</strong> {studentData.email}</Typography>
                    <Typography><strong>Mobile:</strong> {studentData.mobile}</Typography>
                    <Typography><strong>School Year:</strong> {studentData.schoolYear}</Typography>
                    <Typography><strong>Grade Level:</strong> {studentData.gradeLevelToEnroll}</Typography>
                </Box>
                <Divider />

                {/* Learner Information */}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h6">Learner Information</Typography>
                    <Typography><strong>First Name:</strong> {studentData.firstName}</Typography>
                    <Typography><strong>Last Name:</strong> {studentData.lastName}</Typography>
                    <Typography><strong>Middle Name:</strong> {studentData.middleName}</Typography>
                    <Typography><strong>Birth Date:</strong> {new Date(studentData.birthDate).toLocaleDateString()}</Typography>
                    <Typography><strong>Sex:</strong> {studentData.sex}</Typography>
                    <Typography><strong>Age:</strong> {studentData.age}</Typography>
                    <Typography><strong>Place of Birth:</strong> {studentData.placeOfBirth}</Typography>
                    <Typography><strong>Mother Tongue:</strong> {studentData.motherTongue}</Typography>
                </Box>
                <Divider />

                {/* Current Address */}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h6">Current Address</Typography>
                    <Typography><strong>House No:</strong> {studentData.currentHouseNoStreet}</Typography>
                    <Typography><strong>Street Name:</strong> {studentData.currentStreetName}</Typography>
                    <Typography><strong>Barangay:</strong> {studentData.currentBarangay}</Typography>
                    <Typography><strong>Municipality/City:</strong> {studentData.currentMunicipalityCity}</Typography>
                    <Typography><strong>Province:</strong> {studentData.currentProvince}</Typography>
                    <Typography><strong>Country:</strong> {studentData.currentCountry}</Typography>
                    <Typography><strong>Zip Code:</strong> {studentData.currentZipCode}</Typography>
                </Box>
                <Divider />

                {/* Permanent Address */}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h6">Permanent Address</Typography>
                    <Typography><strong>House No:</strong> {studentData.houseNoStreet}</Typography>
                    <Typography><strong>Street Name:</strong> {studentData.streetName}</Typography>
                    <Typography><strong>Barangay:</strong> {studentData.barangay}</Typography>
                    <Typography><strong>Municipality/City:</strong> {studentData.municipalityCity}</Typography>
                    <Typography><strong>Province:</strong> {studentData.province}</Typography>
                    <Typography><strong>Country:</strong> {studentData.country}</Typography>
                    <Typography><strong>Zip Code:</strong> {studentData.zipCode}</Typography>
                </Box>
                <Divider />

                {/* Parents or Guardians */}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h6">Parents or Guardians</Typography>
                    <Typography><strong>Father's Name:</strong> {`${studentData.father.firstName} ${studentData.father.middleName} ${studentData.father.lastName}`}</Typography>
                    <Typography><strong>Father's Contact:</strong> {studentData.father.contactNumber}</Typography>
                    <Typography><strong>Father's Email:</strong> {studentData.father.email}</Typography>
                    <Typography><strong>Mother's Name:</strong> {`${studentData.mother.firstName} ${studentData.mother.middleName} ${studentData.mother.lastName}`}</Typography>
                    <Typography><strong>Mother's Contact:</strong> {studentData.mother.contactNumber}</Typography>
                    <Typography><strong>Mother's Email:</strong> {studentData.mother.email}</Typography>
                    <Typography><strong>Guardian's Name:</strong> {`${studentData.guardian.firstName} ${studentData.guardian.middleName} ${studentData.guardian.lastName}`}</Typography>
                    <Typography><strong>Guardian's Contact:</strong> {studentData.guardian.contactNumber}</Typography>
                    <Typography><strong>Guardian's Email:</strong> {studentData.guardian.email}</Typography>
                </Box>
                <Divider />

                {/* Additional Information */}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h6">Additional Information</Typography>
                    <Typography><strong>Weight (kg):</strong> {studentData.weightKg}</Typography>
                    <Typography><strong>Height (m):</strong> {studentData.heightM}</Typography>
                </Box>
            </Paper>
        </Box >
    );
};

export default FinishedFormData;
