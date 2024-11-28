import PageContainer from "../../../components/container/PageContainer"
import Breadcrumb from "../../../layouts/full/shared/breadcrumb/Breadcrumb"
import EnhancedBeefForm from "./EnhancedBeefForm";
import { Card } from "@mui/material";

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
            <Card>
                <EnhancedBeefForm />
            </Card>
        </PageContainer>
    )
}

export default EnhancedBeef