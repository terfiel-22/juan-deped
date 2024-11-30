import { Button, Dialog, DialogActions, DialogContent, Fab, TextField, Typography } from '@mui/material';
import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { IconCheck } from '@tabler/icons';

const CalendarDialog = ({
    ColorVariation,
    setCalEvents, calevents,
    setOpen, open,
    setFormData, formData,
    setUpdate, update,
}) => {

    const resetForm = () => {
        setFormData({
            title: '',
            color: 'default',
            start: new Date(),
            end: new Date(),
        })
    }
    const updateEvent = (e) => {
        e.preventDefault();
        setCalEvents(
            calevents.map((elem) => {
                if (elem.title === update.title) {
                    return { ...elem, ...formData };
                }
                return elem;
            }),
        );
        setOpen(false);
        resetForm();
        setUpdate(null);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const newEvents = calevents;
        newEvents.push(formData);
        setOpen(false);
        e.target.reset();
        setCalEvents(newEvents);
        resetForm();
    };

    const deleteHandler = (event) => {
        const updatecalEvents = calevents.filter((ind) => ind.title !== event.title);
        setCalEvents(updatecalEvents);
    };

    const handleClose = () => {
        setOpen(false);
        resetForm();
        setUpdate(null);
    };

    const inputChangeHandler = (e) => {
        setFormData({
            ...formData,
            title: e.target.value,
        })
    };
    const selectinputChangeHandler = (id) => {
        setFormData({
            ...formData,
            color: id,
        })
    };
    const handleStartChange = (newValue) => {
        setFormData({
            ...formData,
            start: newValue,
        })
    };
    const handleEndChange = (newValue) => {
        setFormData({
            ...formData,
            end: newValue,
        })
    };

    const { title, color, start, end } = formData;

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs" closeAfterTransition={false}>
            <form onSubmit={update ? updateEvent : submitHandler}>
                <DialogContent>
                    {/* ------------------------------------------- */}
                    {/* Add Edit title */}
                    {/* ------------------------------------------- */}
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        {update ? 'Update' : 'Add'}
                    </Typography>
                    <Typography mb={3} variant="subtitle2">
                        {!update
                            ? 'To Add, kindly fillup the title and choose the event color and press the add button'
                            : 'To Edit/Update, kindly change the title and choose the event color and press the update button'}
                    </Typography>
                    <TextField
                        id="Title"
                        placeholder="Enter Title"
                        variant="outlined"
                        fullWidth
                        label="Title"
                        value={title}
                        sx={{ mb: 3 }}
                        onChange={inputChangeHandler}
                    />
                    {/* ------------------------------------------- */}
                    {/* Selection of Start and end date */}
                    {/* ------------------------------------------- */}
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <MobileDateTimePicker
                            label="Start Date"
                            inputFormat="MM/dd/yyyy"
                            value={start}
                            onChange={handleStartChange}
                            slotProps={{ textField: { fullWidth: true, sx: { mb: 3 } } }}
                        />
                        <MobileDateTimePicker
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
                    {/* Calendar Color*/}
                    {/* ------------------------------------------- */}
                    <Typography variant="h6" fontWeight={600} my={2}>
                        Select Color
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
            </form>
        </Dialog>
    )
}

export default CalendarDialog