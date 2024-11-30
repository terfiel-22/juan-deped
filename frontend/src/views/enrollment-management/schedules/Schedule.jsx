import { useState } from 'react';
import {
    CardContent,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Fab,
    TextField,
    Typography,
} from '@mui/material';
import { IconCheck } from '@tabler/icons';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { MobileDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import moment from 'moment';
import Events from './Events';

import './Calendar.css';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import BlankCard from '../../../components/shared/BlankCard';

moment.locale('en-PH');
const localizer = momentLocalizer(moment);

const Schedule = () => {
    const [calevents, setCalEvents] = useState(Events);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [slot, setSlot] = useState();
    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    const [color, setColor] = useState('default');
    const [update, setUpdate] = useState();

    const ColorVariation = [
        {
            id: 1,
            eColor: '#1a97f5',
            value: 'default',
        },
        {
            id: 2,
            eColor: '#39b69a',
            value: 'green',
        },
        {
            id: 3,
            eColor: '#fc4b6c',
            value: 'red',
        },
        {
            id: 4,
            eColor: '#615dff',
            value: 'azure',
        },
        {
            id: 5,
            eColor: '#fdd43f',
            value: 'warning',
        },
    ];
    const addNewEventAlert = (slotInfo) => {
        setOpen(true);
        setSlot(slotInfo);
        setStart(slotInfo.start);
        setEnd(slotInfo.end);
    };
    const editEvent = (event) => {
        setOpen(true);
        const newEditEvent = calevents.find((elem) => elem.title === event.title);
        setColor(event.color);
        setTitle(newEditEvent.title);
        setColor(newEditEvent.color);
        setStart(newEditEvent.start);
        setEnd(newEditEvent.end);
        setUpdate(event);
    };
    const updateEvent = (e) => {
        e.preventDefault();
        setCalEvents(
            calevents.map((elem) => {
                if (elem.title === update.title) {
                    return { ...elem, title, start, end, color };
                }
                return elem;
            }),
        );
        setOpen(false);
        setTitle('');
        setColor('');
        setStart('');
        setEnd('');
        setUpdate(null);
    };
    const inputChangeHandler = (e) => setTitle(e.target.value);
    const selectinputChangeHandler = (id) => setColor(id);

    const submitHandler = (e) => {
        e.preventDefault();
        const newEvents = calevents;
        newEvents.push({
            title,
            start,
            end,
            color,
        });
        setOpen(false);
        e.target.reset();
        setCalEvents(newEvents);
        setTitle('');
        setStart(new Date());
        setEnd(new Date());
    };
    const deleteHandler = (event) => {
        const updatecalEvents = calevents.filter((ind) => ind.title !== event.title);
        setCalEvents(updatecalEvents);
    };
    const handleClose = () => {
        setOpen(false);
        setTitle('');
        setStart(new Date());
        setEnd(new Date());
        setUpdate(null);
    };

    const eventColors = (event) => {
        if (event.color) {
            return { className: `event-${event.color}` };
        }
        return { className: `event-default` };
    };

    const handleStartChange = (newValue) => {
        setStart(newValue);
    };
    const handleEndChange = (newValue) => {
        setEnd(newValue);
    };

    const BCrumb = [
        {
            to: '/admin/enrollment/schedules',
            title: 'Enrollment Management',
        },
        {
            title: 'Schedules',
        },
    ];
    return (
        <PageContainer title="JuanDepEd | Schedules" description="this is Schedules page">
            <Breadcrumb title="Schedules" items={BCrumb} />
            <BlankCard key={slot} variant="outlined">
                {/* ------------------------------------------- */}
                {/* Schedules */}
                {/* ------------------------------------------- */}
                <CardContent>
                    <Calendar
                        selectable
                        events={calevents}
                        defaultView="month"
                        scrollToTime={new Date(1970, 1, 1, 6)}
                        defaultDate={new Date()}
                        localizer={localizer}
                        style={{ height: 'calc(100vh - 350px' }}
                        onSelectEvent={(event) => editEvent(event)}
                        onSelectSlot={(slotInfo) => addNewEventAlert(slotInfo)}
                        eventPropGetter={(event) => eventColors(event)}
                    />
                </CardContent>
            </BlankCard>
            {/* ------------------------------------------- */}
            {/* Add Calendar Event Dialog */}
            {/* ------------------------------------------- */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
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
                                renderInput={(params) => <TextField {...params} fullWidth sx={{ mb: 3 }} />}
                            />
                            <MobileDatePicker
                                label="End Date"
                                inputFormat="MM/dd/yyyy"
                                value={end}
                                onChange={handleEndChange}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        sx={{ mb: 3 }}
                                        error={start > end}
                                        helperText={start > end ? 'End date must be later than start date' : ''}
                                    />
                                )}
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
                            {update ? 'Update Event' : 'Add Event'}
                        </Button>
                    </DialogActions>
                    {/* ------------------------------------------- */}
                    {/* End Calendar */}
                    {/* ------------------------------------------- */}
                </form>
            </Dialog>
        </PageContainer>
    );
}

export default Schedule