import { Button, Dialog, DialogActions, DialogContent, Fab, TextField, Typography } from '@mui/material';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { IconCheck } from '@tabler/icons';

const ScheduleDialog = ({
    open,
    start,
    end,
    color,
    update,
    updateEvent,
    submitHandler,
    title,
    inputChangeHandler, handleStartChange,
    handleEndChange,
    ColorVariation,
    handleClose,
    selectinputChangeHandler,
    deleteHandler
}) => {
    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs" closeAfterTransition={false}>
            <form onSubmit={update ? updateEvent : submitHandler}>
                <DialogContent>
                    {/* ------------------------------------------- */}
                    {/* Add Edit title */}
                    {/* ------------------------------------------- */}
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        {update ? 'Update Event' : 'Add Event'}
                    </Typography>
                    <Typography mb={3} variant="subtitle2">
                        {!update
                            ? 'To add Event kindly fillup the title and choose the event color and press the add button'
                            : 'To Edit/Update Event kindly change the title and choose the event color and press the update button'}
                    </Typography>
                    <TextField
                        id="Event Title"
                        placeholder="Enter Event Title"
                        variant="outlined"
                        fullWidth
                        label="Event Title"
                        value={title}
                        sx={{ mb: 3 }}
                        onChange={inputChangeHandler}
                    />
                    {/* ------------------------------------------- */}
                    {/* Selection of Start and end date */}
                    {/* ------------------------------------------- */}
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <MobileDatePicker
                            label="Start Date"
                            inputFormat="MM/dd/yyyy"
                            value={start}
                            onChange={handleStartChange}
                            slotProps={{ textField: { fullWidth: true, sx: { mb: 3 } } }}
                        />
                        <MobileDatePicker
                            label="End Date"
                            inputFormat="MM/dd/yyyy"
                            value={end}
                            onChange={handleEndChange}
                            slotProps={{
                                textField: {
                                    fullWidth: true, sx: { mb: 3 }, error: (start > end),
                                    helperText: (start > end ? 'End date must be later than start date' : '')
                                }
                            }}
                        />
                    </LocalizationProvider>

                    {/* ------------------------------------------- */}
                    {/* Calendar Event Color*/}
                    {/* ------------------------------------------- */}
                    <Typography variant="h6" fontWeight={600} my={2}>
                        Select Event Color
                    </Typography>
                    {/* ------------------------------------------- */}
                    {/* colors for event */}
                    {/* ------------------------------------------- */}
                    {ColorVariation.map((mcolor) => {
                        return (
                            <Fab
                                color="primary"
                                style={{ backgroundColor: mcolor.eColor }}
                                sx={{
                                    marginRight: '3px',
                                    transition: '0.1s ease-in',
                                    scale: mcolor.value === color ? '0.9' : '0.7',
                                }}
                                size="small"
                                key={mcolor.id}
                                onClick={() => selectinputChangeHandler(mcolor.value)}
                            >
                                {mcolor.value === color ? <IconCheck width={16} /> : ''}
                            </Fab>
                        );
                    })}
                </DialogContent>
                {/* ------------------------------------------- */}
                {/* Action for dialog */}
                {/* ------------------------------------------- */}
                <DialogActions sx={{ p: 3 }}>
                    <Button onClick={handleClose}>Cancel</Button>

                    {update ? (
                        <Button
                            type="submit"
                            color="error"
                            variant="contained"
                            onClick={() => deleteHandler(update)}
                        >
                            Delete
                        </Button>
                    ) : (
                        ''
                    )}
                    <Button type="submit" disabled={!title} variant="contained">
                        Save
                    </Button>
                </DialogActions>
                {/* ------------------------------------------- */}
                {/* End Calendar */}
                {/* ------------------------------------------- */}
            </form>
        </Dialog>
    )
}

export default ScheduleDialog