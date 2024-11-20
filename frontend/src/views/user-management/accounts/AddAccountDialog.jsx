import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

const AddAccountDialog = ({ isOpen, isFullScreen, handleClose }) => {
    return (
        <Dialog
            fullScreen={isFullScreen}
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                Add User Account
            </DialogTitle>
            <DialogContent>
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
            </DialogContent>
            <DialogActions>
                <Button color='error' onClick={handleClose}>
                    Cancel
                </Button>
                <Button color='primary' onClick={handleClose} autoFocus>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddAccountDialog