import { Box } from '@mui/system'
import PageContainer from '../../../components/container/PageContainer'
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb'
import StrandTableList from './StrandTableList';

const BCrumb = [
    {
        to: '/',
        title: 'School Management',
    },
    {
        title: 'Strands',
    },
];

const Strands = () => {
    return (
        <PageContainer title="JuanDepEd | Strands" description="this is Strands page">
            {/* breadcrumb */}
            <Breadcrumb title="Strands" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                <StrandTableList />
            </Box>
        </PageContainer>
    )
}

export default Strands