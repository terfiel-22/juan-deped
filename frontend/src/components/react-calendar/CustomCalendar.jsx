import { useState } from 'react'
import BlankCard from '../shared/BlankCard'
import { CardContent } from '@mui/material'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CustomCalendar.css';

moment.locale('en-PH');
const localizer = momentLocalizer(moment);
const CustomCalendar = ({ calevents, setOpen, setStart, setEnd, setColor, setTitle, setUpdate }) => {
    const [slot, setSlot] = useState();
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
    const eventColors = (event) => {
        if (event.color) {
            return { className: `event-${event.color}` };
        }
        return { className: `event-default` };
    };

    return (
        <BlankCard key={slot} variant="outlined">
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
    )
}

export default CustomCalendar