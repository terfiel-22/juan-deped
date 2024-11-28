import PageContainer from "../../../components/container/PageContainer"
import Breadcrumb from "../../../layouts/full/shared/breadcrumb/Breadcrumb"
import DashboardCard from "../../../components/shared/DashboardCard";

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

            </DashboardCard>
        </PageContainer>
    )
}

export default EnhancedBeef