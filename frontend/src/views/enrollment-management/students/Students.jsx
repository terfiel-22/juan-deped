import { Box } from '@mui/system';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';


const Students = () => {

    const BCrumb = [
        {
            to: '/admin/enrollment/students',
            title: 'Enrollment Management',
        },
        {
            title: 'Studentss',
        },
    ];

    return (
        <PageContainer title="JuanDepEd | Studentss" description="this is Studentss page">
            <Breadcrumb title="Studentss" items={BCrumb} />
            <Box>
                {/* Content */}
            </Box>
        </PageContainer>
    );
}

export default Students