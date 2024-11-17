import { Box, Typography, Divider, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCurrentStudent } from '../../../../store/student/StudentSlice';
import useFetch from '../../../../hooks/shared/useFetch';

const FinishedFormData = () => {
    const studentData = useSelector(selectCurrentStudent);
    const track = useFetch({ url: `/track/${studentData.seniorHighSchool.track}` })
    const strand = useFetch({ url: `/strand/${studentData.seniorHighSchool.strand}` })

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

                {/* Returning Learner */}
                {studentData.isReturnee && (
                    <>
                        <Box sx={{ marginTop: 2 }}>
                            <Typography variant="h6">Returning Learner Information</Typography>
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
                    <Typography variant="h6">Senior High School Information</Typography>
                    <Typography><strong>Semester:</strong> {studentData.seniorHighSchool.semester}</Typography>
                    <Typography><strong>Track:</strong> {track.data.name}</Typography>
                    <Typography><strong>Strand:</strong> {strand.data.name}</Typography>
                </Box>
                <Divider />

                {/* Preferred Distance Learning Modalities */}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h6">Preferred Distance Learning Modalities</Typography>
                    {studentData.preferredDistanceLearningModalities.isModularPrint && <Typography>Modular (Print)</Typography>}
                    {studentData.preferredDistanceLearningModalities.isOnline && <Typography>Online</Typography>}
                    {studentData.preferredDistanceLearningModalities.isRadioBased && <Typography>Radio-Based Instruction</Typography>}
                    {studentData.preferredDistanceLearningModalities.isBlended && <Typography>Blended Learning</Typography>}
                    {studentData.preferredDistanceLearningModalities.isModularDigital && <Typography>Modular (Digital)</Typography>}
                    {studentData.preferredDistanceLearningModalities.isEducationTV && <Typography>Educational TV</Typography>}
                    {studentData.preferredDistanceLearningModalities.isHomeschooling && <Typography>Homeschooling</Typography>}
                    {studentData.preferredDistanceLearningModalities.isFaceToFace && <Typography>Face-to-Face</Typography>}
                </Box>
                <Divider />

                {/* NC Passer */}
                {studentData.ncPasser.isNcPasser && (
                    <>
                        <Box sx={{ marginTop: 2 }}>
                            <Typography variant="h6">NC Passer Information</Typography>
                            <Typography><strong>Certificate No:</strong> {studentData.ncPasser.certificateNo}</Typography>
                            <Typography><strong>Specialization:</strong> {studentData.ncPasser.specialization}</Typography>
                            <Typography><strong>Valid Until:</strong> {new Date(studentData.ncPasser.validUntil).toLocaleDateString()}</Typography>
                        </Box>
                        <Divider />
                    </>
                )}

                {/* SHS Eligibility */}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h6">SHS Eligibility</Typography>
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
                    <Typography variant="h6">Additional Information</Typography>
                    <Typography><strong>Weight (kg):</strong> {studentData.weightKg}</Typography>
                    <Typography><strong>Height (m):</strong> {studentData.heightM}</Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default FinishedFormData;
