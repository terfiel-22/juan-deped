import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import CalendarAndDialog from '../../../components/react-calendar/CalendarAndDialog';
import useRead from '../../../hooks/crud/useRead';
import { setEnrollmentSchedules } from '../../../store/calendar/reducers/enrollment-schedules/EnrollmentScheduleAction';
import { selectEnrollmentSchedules } from '../../../store/calendar/reducers/enrollment-schedules/EnrollmentScheduleSelector';


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

    const { storedData } = useRead({ url: "/enrollment/schedules", setter: setEnrollmentSchedules, selector: selectEnrollmentSchedules })

    return (
        <PageContainer title="JuanDepEd | Schedules" description="this is Schedules page">
            <Breadcrumb title="Schedules" items={BCrumb} />

            <CalendarAndDialog events={storedData} />
        </PageContainer>
    );
}

export default Schedule