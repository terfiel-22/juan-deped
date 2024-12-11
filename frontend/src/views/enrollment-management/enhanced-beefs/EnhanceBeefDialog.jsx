import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid2, Paper, Typography } from '@mui/material';
import useFetch from '../../../hooks/crud/useFetch';
import { dateToDateString } from '../../../utils/dateFormatter';

const EnhanceBeefDialog = ({ isOpen, isFullScreen, handleClose, data = {} }) => {

    const { data: enhanceBeef } = useFetch({ url: data && `/learner/enhanced-beef/${data?._id}` });

    return enhanceBeef && (
        <Dialog
            fullScreen={isFullScreen}
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                Enhanced Basic Education Enrollment Form
            </DialogTitle>
            <DialogContent>
                <Paper elevation={3} sx={{ padding: 3, marginTop: 2, overflow: 'auto' }} className='paper'>
                    {/* General Information */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h5">General Information</Typography>
                        <Grid2 container justifyContent="space-between" mt={2}>
                            <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                                <Typography><strong>Email:</strong> {enhanceBeef.email}</Typography>
                                <Typography><strong>Mobile:</strong> {enhanceBeef.mobile}</Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                                <Typography><strong>School Year:</strong> {enhanceBeef.schoolYear}</Typography>
                                <Typography><strong>Grade Level:</strong> {enhanceBeef.gradeLevelToEnroll}</Typography>
                            </Grid2>
                        </Grid2>
                    </Box>
                    <Divider />

                    {/* Learner Information */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h5">Learner Information</Typography>

                        <Grid2 container justifyContent="space-between" mt={2}>
                            <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                                <Typography><strong>First Name:</strong> {enhanceBeef.firstName}</Typography>
                                <Typography><strong>Last Name:</strong> {enhanceBeef.lastName}</Typography>
                                <Typography><strong>Middle Name:</strong> {enhanceBeef.middleName}</Typography>
                                <Typography><strong>Birth Date:</strong> {new Date(enhanceBeef.birthDate).toLocaleDateString()}</Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                                <Typography><strong>Sex:</strong> {enhanceBeef.sex}</Typography>
                                <Typography><strong>Age:</strong> {enhanceBeef.age}</Typography>
                                <Typography><strong>Place of Birth:</strong> {enhanceBeef.placeOfBirth}</Typography>
                                <Typography><strong>Mother Tongue:</strong> {enhanceBeef.motherTongue}</Typography>
                            </Grid2>
                        </Grid2>
                        {enhanceBeef.isPsaAvailable && (
                            <Typography><strong>PSA Birth Certificate No:</strong> {enhanceBeef.psaBirthCertificateNo}</Typography>
                        )}
                        {enhanceBeef.withLRN && (
                            <Typography><strong>Learner Reference No:</strong> {enhanceBeef.lrn}</Typography>
                        )}
                        {enhanceBeef.isIndigenousPeople && (
                            <Typography><strong>Indigenous People:</strong> {enhanceBeef.indigenousPeople}</Typography>
                        )}
                        {enhanceBeef.isFourPsBeneficiary && (
                            <Typography><strong>Four Ps Household ID:</strong> {enhanceBeef.fourPsHouseHoldId}</Typography>
                        )}
                    </Box>
                    <Divider />

                    {/* Current Address */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h5">Current Address</Typography>

                        <Grid2 container justifyContent="space-between" mt={2}>
                            <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                                <Typography><strong>House No:</strong> {enhanceBeef.currentHouseNoStreet}</Typography>
                                <Typography><strong>Street Name:</strong> {enhanceBeef.currentStreetName}</Typography>
                                <Typography><strong>Barangay:</strong> {enhanceBeef.currentBarangay}</Typography>
                                <Typography><strong>Municipality/City:</strong> {enhanceBeef.currentMunicipalityCity}</Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                                <Typography><strong>Province:</strong> {enhanceBeef.currentProvince}</Typography>
                                <Typography><strong>Country:</strong> {enhanceBeef.currentCountry}</Typography>
                                <Typography><strong>Zip Code:</strong> {enhanceBeef.currentZipCode}</Typography>
                            </Grid2>
                        </Grid2>
                    </Box>
                    <Divider />

                    {/* Permanent Address */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h5">Permanent Address</Typography>
                        <Grid2 container justifyContent="space-between" mt={2}>
                            <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                                <Typography><strong>House No:</strong> {enhanceBeef.isSameAsCurrentAddress ? enhanceBeef.currentHouseNoStreet : enhanceBeef.houseNoStreet}</Typography>
                                <Typography><strong>Street Name:</strong> {enhanceBeef.isSameAsCurrentAddress ? enhanceBeef.currentStreetName : enhanceBeef.streetName}</Typography>
                                <Typography><strong>Barangay:</strong> {enhanceBeef.isSameAsCurrentAddress ? enhanceBeef.currentBarangay : enhanceBeef.barangay}</Typography>
                                <Typography><strong>Municipality/City:</strong> {enhanceBeef.isSameAsCurrentAddress ? enhanceBeef.currentMunicipalityCity : enhanceBeef.municipalityCity}</Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}><Typography><strong>Province:</strong> {enhanceBeef.isSameAsCurrentAddress ? enhanceBeef.currentProvince : enhanceBeef.province}</Typography>
                                <Typography><strong>Country:</strong> {enhanceBeef.isSameAsCurrentAddress ? enhanceBeef.currentCountry : enhanceBeef.country}</Typography>
                                <Typography><strong>Zip Code:</strong> {enhanceBeef.isSameAsCurrentAddress ? enhanceBeef.currentZipCode : enhanceBeef.zipCode}</Typography>
                            </Grid2>
                        </Grid2>
                    </Box>
                    <Divider />

                    {/* Parents or Guardians */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h5">Parents or Guardians</Typography>

                        <Grid2 container justifyContent="space-between" mt={2}>
                            <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                                <Typography><strong>Father's Name:</strong> {`${enhanceBeef.father.firstName} ${enhanceBeef.father.middleName} ${enhanceBeef.father.lastName}`}</Typography>
                                <Typography><strong>Father's Contact:</strong> {enhanceBeef.father.contactNumber}</Typography>
                                <Typography><strong>Father's Email:</strong> {enhanceBeef.father.email}</Typography>
                                <Typography><strong>Mother's Name:</strong> {`${enhanceBeef.mother.firstName} ${enhanceBeef.mother.middleName} ${enhanceBeef.mother.lastName}`}</Typography>
                                <Typography><strong>Mother's Contact:</strong> {enhanceBeef.mother.contactNumber}</Typography>
                                <Typography><strong>Mother's Email:</strong> {enhanceBeef.mother.email}</Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                                <Typography><strong>Guardian's Name:</strong> {`${enhanceBeef.guardian.firstName} ${enhanceBeef.guardian.middleName} ${enhanceBeef.guardian.lastName}`}</Typography>
                                <Typography><strong>Guardian's Contact:</strong> {enhanceBeef.guardian.contactNumber}</Typography>
                                <Typography><strong>Guardian's Email:</strong> {enhanceBeef.guardian.email}</Typography>
                            </Grid2>
                        </Grid2>
                    </Box>
                    <Divider />

                    {/* Returning Learner */}
                    {enhanceBeef.isReturnee && (
                        <>
                            <Box sx={{ marginTop: 2 }}>
                                <Typography variant="h5">Returning Learner Information</Typography>
                                <Typography><strong>Last Grade Level Completed:</strong> {enhanceBeef.returningLearner.lastGradeLevelCompleted}</Typography>
                                <Typography><strong>Last School Year Completed:</strong> {enhanceBeef.returningLearner.lastSchoolYearCompleted}</Typography>
                                <Typography><strong>Last School Attended:</strong> {enhanceBeef.returningLearner.lastSchoolAttended}</Typography>
                                <Typography><strong>School ID:</strong> {enhanceBeef.returningLearner.schoolID}</Typography>
                            </Box>
                            <Divider />
                        </>
                    )}

                    {/* Senior High School */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h5">Senior High School Information</Typography>
                        <Typography><strong>Semester:</strong> {enhanceBeef.seniorHighSchool.semester}</Typography>
                        <Typography><strong>Track:</strong> {enhanceBeef.seniorHighSchool.track.name}</Typography>
                        <Typography><strong>Strand:</strong> {enhanceBeef.seniorHighSchool.strand.name}</Typography>
                    </Box>
                    <Divider />

                    {/* Preferred Distance Learning Modalities */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h5">Preferred Distance Learning Modalities</Typography>
                        <Grid2 container justifyContent="space-between" mt={2}>
                            {enhanceBeef.preferredDistanceLearningModalities.isModularPrint && <Typography>• Modular (Print)</Typography>}
                            {enhanceBeef.preferredDistanceLearningModalities.isOnline && <Typography>• Online</Typography>}
                            {enhanceBeef.preferredDistanceLearningModalities.isRadioBased && <Typography>• Radio-Based Instruction</Typography>}
                            {enhanceBeef.preferredDistanceLearningModalities.isBlended && <Typography>• Blended Learning</Typography>}
                            {enhanceBeef.preferredDistanceLearningModalities.isModularDigital && <Typography>• Modular (Digital)</Typography>}
                            {enhanceBeef.preferredDistanceLearningModalities.isEducationTV && <Typography>• Educational TV</Typography>}
                            {enhanceBeef.preferredDistanceLearningModalities.isHomeschooling && <Typography>• Homeschooling</Typography>}
                            {enhanceBeef.preferredDistanceLearningModalities.isFaceToFace && <Typography>• Face-to-Face</Typography>}
                        </Grid2>
                    </Box>
                    <Divider />

                    {/* NC Passer */}
                    {enhanceBeef.ncPasser.isNcPasser && (
                        <>
                            <Box sx={{ marginTop: 2 }}>
                                <Typography variant="h5">NC Passer Information</Typography>
                                <Typography><strong>Certificate No:</strong> {enhanceBeef.ncPasser.certificateNo}</Typography>
                                <Typography><strong>Specialization:</strong> {enhanceBeef.ncPasser.specialization}</Typography>
                                <Typography><strong>Valid Until:</strong> {new Date(enhanceBeef.ncPasser.validUntil).toLocaleDateString()}</Typography>
                            </Box>
                            <Divider />
                        </>
                    )}

                    {/* SHS Eligibility */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h5">SHS Eligibility</Typography>
                        {enhanceBeef.shsEligibility.isHsCompleter && <Typography><strong>High School General Average:</strong> {enhanceBeef.shsEligibility.hsGenAve}</Typography>}
                        {enhanceBeef.shsEligibility.isJhsCompleter && <Typography><strong>Junior High School General Average:</strong> {enhanceBeef.shsEligibility.jhsGenAve}</Typography>}
                        {enhanceBeef.shsEligibility.graduationDate && <Typography><strong>Graduation Date:</strong> {new Date(enhanceBeef.shsEligibility.graduationDate).toLocaleDateString()}</Typography>}
                        {enhanceBeef.shsEligibility.schoolName && <Typography><strong>School Name:</strong> {enhanceBeef.shsEligibility.schoolName}</Typography>}
                        {enhanceBeef.shsEligibility.schoolAddress && <Typography><strong>School Address:</strong> {enhanceBeef.shsEligibility.schoolAddress}</Typography>}
                        {enhanceBeef.shsEligibility.isPeptPasser && <Typography><strong>PEPT Rating:</strong> {enhanceBeef.shsEligibility.peptRating}</Typography>}
                        {enhanceBeef.shsEligibility.isAlsPasser && <Typography><strong>ALS Rating:</strong> {enhanceBeef.shsEligibility.alsRating}</Typography>}
                        {enhanceBeef.shsEligibility.isOtherExamPasser && <Typography><strong>Other Exam:</strong> {enhanceBeef.shsEligibility.otherExam}</Typography>}
                        {enhanceBeef.shsEligibility.examDate && <Typography><strong>Exam Date:</strong> {new Date(enhanceBeef.shsEligibility.examDate).toLocaleDateString()}</Typography>}
                        {enhanceBeef.shsEligibility.learningCenterName && <Typography><strong>Learning Center Name:</strong> {enhanceBeef.shsEligibility.learningCenterName}</Typography>}
                        {enhanceBeef.shsEligibility.learningCenterAddress && <Typography><strong>Learning Center Address:</strong> {enhanceBeef.shsEligibility.learningCenterAddress}</Typography>}
                    </Box>
                    <Divider />

                    {/* Additional Information */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h5">Additional Information</Typography>
                        <Typography><strong>Weight (kg):</strong> {enhanceBeef.weightKg}</Typography>
                        <Typography><strong>Height (m):</strong> {enhanceBeef.heightM}</Typography>
                    </Box>
                    <Divider />

                    {/* Application Information */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h5">Application</Typography>
                        <Typography><strong>Status:</strong> {enhanceBeef.status}</Typography>
                        <Typography><strong>Submitted At:</strong> {dateToDateString(enhanceBeef.createdAt)}</Typography>
                    </Box>
                </Paper>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'space-between' }}>
                <Box>
                    <Button color='info' type='button' sx={{ marginRight: '10px' }} onClick={handleClose}>
                        Approve
                    </Button>
                    <Button color='warning' type='button' onClick={handleClose}>
                        Denied
                    </Button>
                </Box>
                <Box>
                    <Button color='error' type='button' onClick={handleClose}>
                        Close
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}

export default EnhanceBeefDialog