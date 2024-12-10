import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';


const EnhanceBeefDialog = ({ isOpen, isFullScreen, handleClose, data = {} }) => {
    const [expandedItems, setExpandedItems] = React.useState([]);

    const handleExpandedItemsChange = (event, itemIds) => {
        setExpandedItems(itemIds);
    };

    const handleExpandClick = () => {
        setExpandedItems((oldExpanded) =>
            oldExpanded.length === 0
                ? [
                    'grid',
                    'grid-community',
                    'grid-pro',
                    'grid-premium',
                    'pickers',
                    'pickers-community',
                    'pickers-pro',
                    'charts',
                    'charts-community',
                    'tree-view',
                    'tree-view-community',
                ]
                : [],
        );
    };

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
                    <div>
                        <Button onClick={handleExpandClick}>
                            {expandedItems.length === 0 ? 'Expand all' : 'Collapse all'}
                        </Button>
                    </div>
                    <Box sx={{ minHeight: 350, minWidth: 450 }}>
                        <SimpleTreeView
                            expandedItems={expandedItems}
                            onExpandedItemsChange={handleExpandedItemsChange}
                        >
                            <TreeItem itemId="grid" label="Data Grid">
                                <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
                                <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
                                <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
                            </TreeItem>
                            <TreeItem itemId="pickers" label="Date and Time Pickers">
                                <TreeItem itemId="pickers-community" label="@mui/x-date-pickers" />
                                <TreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
                            </TreeItem>
                            <TreeItem itemId="charts" label="Charts">
                                <TreeItem itemId="charts-community" label="@mui/x-charts" />
                            </TreeItem>
                            <TreeItem itemId="tree-view" label="Tree View">
                                <TreeItem itemId="tree-view-community" label="@mui/x-tree-view" />
                            </TreeItem>
                        </SimpleTreeView>
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