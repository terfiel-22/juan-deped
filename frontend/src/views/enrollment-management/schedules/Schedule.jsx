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
                ColorVariation,
                setCalEvents, calevents,
                setOpen, open,
                setTitle, title,
                setColor, color,
                setStart, start,
                setEnd, end,
                setUpdate, update,
            }} />
        </PageContainer>
    );
}

export default Schedule