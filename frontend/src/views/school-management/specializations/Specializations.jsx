import { Box } from '@mui/system'
import PageContainer from '../../../components/container/PageContainer'
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb'
import SpecializationTableList from './SpecializationTableList';

const BCrumb = [
    {
        to: '/',
        title: 'School Management',
    },
    {
        title: 'Specializations',
    },
];

const Specializations = () => {
    return (
        <PageContainer title="JuanDepEd | Specializations" description="this is Specializations page">
            {/* breadcrumb */}
            <Breadcrumb title="Specializations" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                <SpecializationTableList />
            </Box>
        </PageContainer>
    )
}

export default Specializations