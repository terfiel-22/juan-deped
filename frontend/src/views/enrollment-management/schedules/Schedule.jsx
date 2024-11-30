import Events from './Events';

import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import CalendarAndDialog from '../../../components/react-calendar/CalendarAndDialog';


const Schedule = () => {

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

            <CalendarAndDialog events={Events} />
        </PageContainer>
    );
}

export default Schedule