import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import useFetch from '../../../hooks/crud/useFetch';
import { dateToLocaleDateString } from '../../../utils/dateFormatter';

const enhanceBeefDataToRichTree = (data) => {
    if (!data) return [
        {
            id: 'none',
            label: 'None',
        }
    ];
    return [
        {
            id: 'genInfo',
            label: 'General Information',
            children: [
                { id: 'email', label: `Email: ${data.email}` },
                { id: 'mobile', label: `Mobile: ${data.mobile}` },
                { id: 'schoolYear', label: `School Year: ${data.schoolYear}` },
                { id: 'gradeLevel', label: `Grade Level To Enroll: ${data.gradeLevelToEnroll}` },
            ],
        },
        {
            id: 'learnerInfo',
            label: 'Learner Information',
            children: [
                { id: 'psa', label: `PSA Certificate No: ${data.psaBirthCertificateNo || "N/A"}` },
                { id: 'lrn', label: `LRN: ${data.lrn || "N/A"}` },
                { id: 'fullName', label: `Full Name: ${data.firstName} ${data.middleName} ${data.lastName} ${data.extensionName}` },
                { id: 'birthdate', label: `Birthdate: ${dateToLocaleDateString(data.birthDate)}` },
                { id: 'sex', label: `Sex: ${data.sex}` },
                { id: 'age', label: `Age: ${data.age}` },
                { id: 'placeOfBirth', label: `Place of Birth: ${data.placeOfBirth}` },
                { id: 'motherTongue', label: `Mother Tongue: ${data.motherTongue}` },
                { id: 'indigenousPeople', label: `Indigenous Community: ${data.indigenousPeople || "N/A"}` },
                { id: 'fourPsHouseHoldId', label: `4P's Household ID: ${data.fourPsHouseHoldId || "N/A"}` },
            ],
        },
        {
            id: 'addressInfo',
            label: 'Address Information',
            children: [
                { id: 'currentAddress', label: `Current Address: ${data.currentHouseNoStreet} ${data.currentStreetName} ${data.currentBarangay}, ${data.currentMunicipalityCity}, ${data.currentProvince}, ${data.currentCountry}, ${data.currentZipCode}` },
                { id: 'permanentAddress', label: `Permanent Address: ${data.isSameAsCurrentAddress ? data.currentHouseNoStreet : data.houseNoStreet} ${data.isSameAsCurrentAddress ? data.currentStreetName : data.streetName} ${data.isSameAsCurrentAddress ? data.currentBarangay : data.barangay}, ${data.isSameAsCurrentAddress ? data.currentMunicipalityCity : data.municipalityCity}, ${data.isSameAsCurrentAddress ? data.currentProvince : data.province}, ${data.isSameAsCurrentAddress ? data.currentCountry : data.country}, ${data.isSameAsCurrentAddress ? data.currentZipCode : data.zipCode}` }
            ],
        },
        {
            id: 'parentGuardianInfo',
            label: 'Parent/Guardian Information',
            children: [
                { id: 'grid-community10', label: '@mui/x-data-grid' },
                { id: 'grid-pro11', label: '@mui/x-data-grid-pro' },
                { id: 'grid-premium12', label: '@mui/x-data-grid-premium' },
            ],
        },
        {
            id: 'returningLearner',
            label: 'For Returning Learner',
            children: [
                { id: 'grid-community13', label: '@mui/x-data-grid' },
                { id: 'grid-pro14', label: '@mui/x-data-grid-pro' },
                { id: 'grid-premium15', label: '@mui/x-data-grid-premium' },
            ],
        },
        {
            id: 'learnerInSHS',
            label: 'For Learners in SHS',
            children: [
                { id: 'grid-community16', label: '@mui/x-data-grid' },
                { id: 'grid-pro17', label: '@mui/x-data-grid-pro' },
                { id: 'grid-premium18', label: '@mui/x-data-grid-premium' },
            ],
        },
        {
            id: 'pdlm',
            label: 'Chosen Distance Learning Modalities',
            children: [
                { id: 'grid-community19', label: '@mui/x-data-grid' },
                { id: 'grid-pro20', label: '@mui/x-data-grid-pro' },
                { id: 'grid-premium21', label: '@mui/x-data-grid-premium' },
            ],
        },
        {
            id: 'ncPasser',
            label: 'For NC Passer',
            children: [
                { id: 'grid-community22', label: '@mui/x-data-grid' },
                { id: 'grid-pro23', label: '@mui/x-data-grid-pro' },
                { id: 'grid-premium24', label: '@mui/x-data-grid-premium' },
            ],
        },
        {
            id: 'shsEligibility',
            label: 'For SHS Eligibility',
            children: [
                { id: 'grid-community25', label: '@mui/x-data-grid' },
                { id: 'grid-pro26', label: '@mui/x-data-grid-pro' },
                { id: 'grid-premium27', label: '@mui/x-data-grid-premium' },
            ],
        },
        {
            id: 'addInfo',
            label: 'Additional Information',
            children: [
                { id: 'grid-community28', label: '@mui/x-data-grid' },
                { id: 'grid-pro29', label: '@mui/x-data-grid-pro' },
                { id: 'grid-premium30', label: '@mui/x-data-grid-premium' },
            ],
        },
    ];
};

const EnhanceBeefDialog = ({ isOpen, isFullScreen, handleClose, data = {} }) => {

    const { data: enhanceBeef, readLoading } = useFetch({ url: data && `/learner/enhanced-beef/${data?._id}` });

    return (
        <Dialog
            fullScreen={isFullScreen}
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                Student Enhance BEEF
            </DialogTitle>
            <DialogContent>
                <Stack spacing={2}>
                    <Box>
                        <RichTreeView
                            items={enhanceBeefDataToRichTree(enhanceBeef)}
                        />
                    </Box>
                </Stack>
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