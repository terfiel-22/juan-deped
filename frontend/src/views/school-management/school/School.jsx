import { Box } from '@mui/system'
import PageContainer from '../../../components/container/PageContainer'
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb'

const BCrumb = [
    {
        to: '/',
        title: 'School Management',
    },
    {
        title: 'School',
    },
];

const School = () => {
    return (
        <PageContainer title="JuanDepEd | School" description="this is School page">
            {/* breadcrumb */}
            <Breadcrumb title="School" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                {/* School Form Here */}
            </Box>
        </PageContainer>
    )
}

export default School