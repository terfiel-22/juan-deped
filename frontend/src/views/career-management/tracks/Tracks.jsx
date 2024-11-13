import { Box } from '@mui/system'
import PageContainer from '../../../components/container/PageContainer'
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb'
import TrackTableList from './TrackTableList';

const BCrumb = [
    {
        to: '/',
        title: 'Career Management',
    },
    {
        title: 'Tracks',
    },
];

const Tracks = () => {
    return (
        <PageContainer title="JuanDepEd | Tracks" description="this is Tracks page">
            {/* breadcrumb */}
            <Breadcrumb title="Tracks" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                <TrackTableList />
            </Box>
        </PageContainer>
    )
}

export default Tracks