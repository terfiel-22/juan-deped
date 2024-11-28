import PageContainer from "../../../components/container/PageContainer"
import Breadcrumb from "../../../layouts/full/shared/breadcrumb/Breadcrumb"
import DashboardCard from "../../../components/shared/DashboardCard";
import StudentPreenrollmentFormContainer from "./student-pre-enrollment-form/StudentPreenrollmentFormContainer";
import EnhancedBeefForm from "./EnhancedBeefForm";

const BCrumb = [
    {
        to: '/student',
        title: 'Enrollment',
    },
    {
        title: 'Enhanced BEEF',
    },
];

const EnhancedBeef = () => {
    return (
        <PageContainer title="JuanDepEd | Enhanced BEEF" description="this is EnhancedBeef page">
            {/* breadcrumb */}
            <Breadcrumb title="ENHANCED BASIC EDUCATION ENROLLMENT FORM" items={BCrumb} />
            {/* end breadcrumb */}

            {/* start content */}
            <DashboardCard>
                <EnhancedBeefForm />
            </DashboardCard>
        </PageContainer>
    )
}

export default EnhancedBeef