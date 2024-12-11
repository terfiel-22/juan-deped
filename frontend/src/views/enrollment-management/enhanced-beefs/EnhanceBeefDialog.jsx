import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import useFetch from '../../../hooks/crud/useFetch';

const MUI_X_PRODUCTS = [
    {
        id: 'genInfo',
        label: 'General Information',
        children: [
            { id: 'grid-community1', label: '@mui/x-data-grid' },
            { id: 'grid-pro2', label: '@mui/x-data-grid-pro' },
            { id: 'grid-premium3', label: '@mui/x-data-grid-premium' },
        ],
    },
    {
        id: 'learnerInfo',
        label: 'Learner Information',
        children: [
            { id: 'grid-community4', label: '@mui/x-data-grid' },
            { id: 'grid-pro5', label: '@mui/x-data-grid-pro' },
            { id: 'grid-premium6', label: '@mui/x-data-grid-premium' },
        ],
    },
    {
        id: 'addressInfo',
        label: 'Address Information',
        children: [
            { id: 'grid-community7', label: '@mui/x-data-grid' },
            { id: 'grid-pro8', label: '@mui/x-data-grid-pro' },
            { id: 'grid-premium9', label: '@mui/x-data-grid-premium' },
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
                    <Box sx={{ minHeight: 350, minWidth: 450 }}>
                        <RichTreeView items={MUI_X_PRODUCTS} />
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