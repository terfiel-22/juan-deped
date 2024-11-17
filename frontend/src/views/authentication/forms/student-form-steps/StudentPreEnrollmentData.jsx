import { Box, Typography, Divider, Paper, Grid } from '@mui/material';
import { useSelector } from 'react-redux';;
import { selectCurrentStudent } from '../../../../store/student/StudentSlice';
import useFetch from '../../../../hooks/shared/useFetch';
import { forwardRef } from 'react';

const StudentPreEnrollmentData = forwardRef((_, ref) => {

    const studentData = useSelector(selectCurrentStudent);
    const track = useFetch({ url: `/track/${studentData.seniorHighSchool.track}` })
    const strand = useFetch({ url: `/strand/${studentData.seniorHighSchool.strand}` })

    if (!studentData || !track.data || !strand.data) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box sx={{
            height: '50vh', display: 'flex', flexDirection: 'column'
        }} className="print-container" ref={ref}>
            <Paper elevation={3} sx={{ padding: 3, marginTop: 2, overflow: 'auto' }} className='paper'>
                <Typography variant="h4" gutterBottom>
                    Student Pre-Enrollment Data
                </Typography>
                <Divider />

                {/* General Information */}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h5">General Information</Typography>
                    <Grid container justifyContent="space-between" mt={2}>
                        <Grid item xs={12} sm={12} lg={6}>
                            <Typography><strong>Email:</strong> {studentData.email}</Typography>
                            <Typography><strong>Mobile:</strong> {studentData.mobile}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6}>
                            <Typography><strong>School Year:</strong> {studentData.schoolYear}</Typography>
                            <Typography><strong>Grade Level:</strong> {studentData.gradeLevelToEnroll}</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Divider />

                {/* Learner Information */}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h5">Learner Information</Typography>

                    <Grid container justifyContent="space-between" mt={2}>
                        <Grid item xs={12} sm={12} lg={6}>
                            <Typography><strong>First Name:</strong> {studentData.firstName}</Typography>
                            <Typography><strong>Last Name:</strong> {studentData.lastName}</Typography>
                            <Typography><strong>Middle Name:</strong> {studentData.middleName}</Typography>
                            <Typography><strong>Birth Date:</strong> {new Date(studentData.birthDate).toLocaleDateString()}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6}>
                            <Typography><strong>Sex:</strong> {studentData.sex}</Typography>
                            <Typography><strong>Age:</strong> {studentData.age}</Typography>
                            <Typography><strong>Place of Birth:</strong> {studentData.placeOfBirth}</Typography>
                            <Typography><strong>Mother Tongue:</strong> {studentData.motherTongue}</Typography>
                        </Grid>
                    </Grid>
                    {studentData.isPsaAvailable && (
                        <Typography><strong>PSA Birth Certificate No:</strong> {studentData.psaBirthCertificateNo}</Typography>
                    )}
                    {studentData.withLRN && (
                        <Typography><strong>Learner Reference No:</strong> {studentData.learnerReferenceNo}</Typography>
                    )}
                    {studentData.isIndigenousPeople && (
                        <Typography><strong>Indigenous People:</strong> {studentData.indigenousPeople}</Typography>
                    )}
                    {studentData.isFourPsBeneficiary && (
                        <Typography><strong>Four Ps Household ID:</strong> {studentData.fourPsHouseHoldId}</Typography>
                    )}
                </Box>
                <Divider />

                {/* Current Address */}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h5">Current Address</Typography>

                    <Grid container justifyContent="space-between" mt={2}>
                        <Grid item xs={12} sm={12} lg={6}>
                            <Typography><strong>House No:</strong> {studentData.currentHouseNoStreet}</Typography>
                            <Typography><strong>Street Name:</strong> {studentData.currentStreetName}</Typography>
                            <Typography><strong>Barangay:</strong> {studentData.currentBarangay}</Typography>
                            <Typography><strong>Municipality/City:</strong> {studentData.currentMunicipalityCity}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6}>
                            <Typography><strong>Province:</strong> {studentData.currentProvince}</Typography>
                            <Typography><strong>Country:</strong> {studentData.currentCountry}</Typography>
                            <Typography><strong>Zip Code:</strong> {studentData.currentZipCode}</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Divider />

                {/* Permanent Address */}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h5">Permanent Address</Typography>
                    <Grid container justifyContent="space-between" mt={2}>
                        <Grid item xs={12} sm={12} lg={6}>
                            <Typography><strong>House No:</strong> {studentData.isSameAsCurrentAddress ? studentData.currentHouseNoStreet : studentData.houseNoStreet}</Typography>
                            <Typography><strong>Street Name:</strong> {studentData.isSameAsCurrentAddress ? studentData.currentStreetName : studentData.streetName}</Typography>
                            <Typography><strong>Barangay:</strong> {studentData.isSameAsCurrentAddress ? studentData.currentBarangay : studentData.barangay}</Typography>
                            <Typography><strong>Municipality/City:</strong> {studentData.isSameAsCurrentAddress ? studentData.currentMunicipalityCity : studentData.municipalityCity}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6}><Typography><strong>Province:</strong> {studentData.isSameAsCurrentAddress ? studentData.currentProvince : studentData.province}</Typography>
                            <Typography><strong>Country:</strong> {studentData.isSameAsCurrentAddress ? studentData.currentCountry : studentData.country}</Typography>
                            <Typography><strong>Zip Code:</strong> {studentData.isSameAsCurrentAddress ? studentData.currentZipCode : studentData.zipCode}</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Divider />

                {/* Parents or Guardians */}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h5">Parents or Guardians</Typography>

                    <Grid container justifyContent="space-between" mt={2}>
                        <Grid item xs={12} sm={12} lg={6}>
                            <Typography><strong>Father's Name:</strong> {`${studentData.father.firstName} ${studentData.father.middleName} ${studentData.father.lastName}`}</Typography>
                            <Typography><strong>Father's Contact:</strong> {studentData.father.contactNumber}</Typography>
                            <Typography><strong>Father's Email:</strong> {studentData.father.email}</Typography>
                            <Typography><strong>Mother's Name:</strong> {`${studentData.mother.firstName} ${studentData.mother.middleName} ${studentData.mother.lastName}`}</Typography>
                            <Typography><strong>Mother's Contact:</strong> {studentData.mother.contactNumber}</Typography>
                            <Typography><strong>Mother's Email:</strong> {studentData.mother.email}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6}>
                            <Typography><strong>Guardian's Name:</strong> {`${studentData.guardian.firstName} ${studentData.guardian.middleName} ${studentData.guardian.lastName}`}</Typography>
                            <Typography><strong>Guardian's Contact:</strong> {studentData.guardian.contactNumber}</Typography>
                            <Typography><strong>Guardian's Email:</strong> {studentData.guardian.email}</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Divider />

                {/* Returning Learner */}
                {studentData.isReturnee && (
                    <>
                        <Box sx={{ marginTop: 2 }}>
                            <Typography variant="h5">Returning Learner Information</Typography>
                            <Typography><strong>Last Grade Level Completed:</strong> {studentData.returningLearner.lastGradeLevelCompleted}</Typography>
                            <Typography><strong>Last School Year Completed:</strong> {studentData.returningLearner.lastSchoolYearCompleted}</Typography>
                            <Typography><strong>Last School Attended:</strong> {studentData.returningLearner.lastSchoolAttended}</Typography>
                            <Typography><strong>School ID:</strong> {studentData.returningLearner.schoolID}</Typography>
                        </Box>
                        <Divider />
                    </>
                )}

                {/* Senior High School */}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h5">Senior High School Information</Typography>
                    <Typography><strong>Semester:</strong> {studentData.seniorHighSchool.semester}</Typography>
                    <Typography><strong>Track:</strong> {track.data.name}</Typography>
                    <Typography><strong>Strand:</strong> {strand.data.name}</Typography>
                </Box>
                <Divider />

                {/* Preferred Distance Learning Modalities */}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h5">Preferred Distance Learning Modalities</Typography>
                    <Grid container justifyContent="space-between" mt={2}>
                        {studentData.preferredDistanceLearningModalities.isModularPrint && <Typography>• Modular (Print)</Typography>}
                        {studentData.preferredDistanceLearningModalities.isOnline && <Typography>• Online</Typography>}
                        {studentData.preferredDistanceLearningModalities.isRadioBased && <Typography>• Radio-Based Instruction</Typography>}
                        {studentData.preferredDistanceLearningModalities.isBlended && <Typography>• Blended Learning</Typography>}
                        {studentData.preferredDistanceLearningModalities.isModularDigital && <Typography>• Modular (Digital)</Typography>}
                        {studentData.preferredDistanceLearningModalities.isEducationTV && <Typography>• Educational TV</Typography>}
                        {studentData.preferredDistanceLearningModalities.isHomeschooling && <Typography>• Homeschooling</Typography>}
                        {studentData.preferredDistanceLearningModalities.isFaceToFace && <Typography>• Face-to-Face</Typography>}
                    </Grid>
                </Box>
                <Divider />

                {/* NC Passer */}
                {studentData.ncPasser.isNcPasser && (
                    <>
                        <Box sx={{ marginTop: 2 }}>
                            <Typography variant="h5">NC Passer Information</Typography>
                            <Typography><strong>Certificate No:</strong> {studentData.ncPasser.certificateNo}</Typography>
                            <Typography><strong>Specialization:</strong> {studentData.ncPasser.specialization}</Typography>
                            <Typography><strong>Valid Until:</strong> {new Date(studentData.ncPasser.validUntil).toLocaleDateString()}</Typography>
                        </Box>
                        <Divider />
                    </>
                )}

                {/* SHS Eligibility */}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h5">SHS Eligibility</Typography>
                    {studentData.shsEligibility.isHsCompleter && <Typography><strong>High School General Average:</strong> {studentData.shsEligibility.hsGenAve}</Typography>}
                    {studentData.shsEligibility.isJhsCompleter && <Typography><strong>Junior High School General Average:</strong> {studentData.shsEligibility.jhsGenAve}</Typography>}
                    {studentData.shsEligibility.graduationDate && <Typography><strong>Graduation Date:</strong> {new Date(studentData.shsEligibility.graduationDate).toLocaleDateString()}</Typography>}
                    {studentData.shsEligibility.schoolName && <Typography><strong>School Name:</strong> {studentData.shsEligibility.schoolName}</Typography>}
                    {studentData.shsEligibility.schoolAddress && <Typography><strong>School Address:</strong> {studentData.shsEligibility.schoolAddress}</Typography>}
                    {studentData.shsEligibility.isPeptPasser && <Typography><strong>PEPT Rating:</strong> {studentData.shsEligibility.peptRating}</Typography>}
                    {studentData.shsEligibility.isAlsPasser && <Typography><strong>ALS Rating:</strong> {studentData.shsEligibility.alsRating}</Typography>}
                    {studentData.shsEligibility.isOtherExamPasser && <Typography><strong>Other Exam:</strong> {studentData.shsEligibility.otherExam}</Typography>}
                    {studentData.shsEligibility.examDate && <Typography><strong>Exam Date:</strong> {new Date(studentData.shsEligibility.examDate).toLocaleDateString()}</Typography>}
                    {studentData.shsEligibility.learningCenterName && <Typography><strong>Learning Center Name:</strong> {studentData.shsEligibility.learningCenterName}</Typography>}
                    {studentData.shsEligibility.learningCenterAddress && <Typography><strong>Learning Center Address:</strong> {studentData.shsEligibility.learningCenterAddress}</Typography>}
                </Box>
                <Divider />

                {/* Additional Information */}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h5">Additional Information</Typography>
                    <Typography><strong>Weight (kg):</strong> {studentData.weightKg}</Typography>
                    <Typography><strong>Height (m):</strong> {studentData.heightM}</Typography>
                </Box>
            </Paper>
        </Box>
    );
});

export default StudentPreEnrollmentData;
