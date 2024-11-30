import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import useRead from '../../../hooks/crud/useRead';
import { setEnrollmentSchedules } from '../../../store/calendar/reducers/enrollment-schedules/EnrollmentScheduleAction';
import { selectEnrollmentSchedules } from '../../../store/calendar/reducers/enrollment-schedules/EnrollmentScheduleSelector';

import useBigCalendar from '../../../components/react-calendar/useBigCalendar';
import CustomCalendar from '../../../components/react-calendar/CustomCalendar';


const LearnerSchedules = () => {
    const BCrumb = [
        {
            to: '/learner/schedules',
            title: 'Home',
        },
        {
            title: 'Schedules',
        },
    ];

    const { storedData: events } = useRead({ url: "/enrollment/schedules", setter: setEnrollmentSchedules, selector: selectEnrollmentSchedules })

    const { calevents, setOpen, setFormData, formData, setUpdate } = useBigCalendar({ events })

    return (
        <PageContainer title="JuanDepEd | Schedules" description="this is Schedules page">
            <Breadcrumb title="Schedules" items={BCrumb} />

            <CustomCalendar {...{ calevents, setOpen, setFormData, formData, setUpdate }} />
        </PageContainer>
    );
}

export default LearnerSchedules