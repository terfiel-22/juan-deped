import { useState } from 'react';
import Events from './Events';

import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import CustomCalendar from '../../../components/react-calendar/CustomCalendar';
import ScheduleDialog from './ScheduleDialog';


const Schedule = () => {
    const [calevents, setCalEvents] = useState(Events);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
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
        setStart(new Date());
        setEnd(new Date());
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
            {/* ------------------------------------------- */}
            {/* Schedules Calendar*/}
            {/* ------------------------------------------- */}
            <CustomCalendar {...{ calevents, setOpen, setStart, setEnd, setColor, setTitle, setUpdate }} />

            {/* ------------------------------------------- */}
            {/* Add Schedules Dialog */}
            {/* ------------------------------------------- */}
            <ScheduleDialog {...{
                open,
                color,
                start,
                end,
                handleClose,
                update,
                updateEvent,
                submitHandler,
                title,
                inputChangeHandler,
                handleStartChange,
                handleEndChange,
                ColorVariation,
                handleClose,
                selectinputChangeHandler,
                deleteHandler
            }} />
        </PageContainer>
    );
}

export default Schedule