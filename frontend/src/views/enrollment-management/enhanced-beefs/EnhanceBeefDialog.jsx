import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import useFetch from '../../../hooks/crud/useFetch';

const MUI_X_PRODUCTS = [
    {
        id: 'grid',
        label: 'Data Grid',
        children: [
            { id: 'grid-community', label: '@mui/x-data-grid' },
            { id: 'grid-pro', label: '@mui/x-data-grid-pro' },
            { id: 'grid-premium', label: '@mui/x-data-grid-premium' },
        ],
    },
    {
        id: 'pickers',
        label: 'Date and Time Pickers',
        children: [
            { id: 'pickers-community', label: '@mui/x-date-pickers' },
            { id: 'pickers-pro', label: '@mui/x-date-pickers-pro' },
        ],
    },
    {
        id: 'charts',
        label: 'Charts',
        children: [{ id: 'charts-community', label: '@mui/x-charts' }],
    },
    {
        id: 'tree-view',
        label: 'Tree View',
        children: [{ id: 'tree-view-community', label: '@mui/x-tree-view' }],
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