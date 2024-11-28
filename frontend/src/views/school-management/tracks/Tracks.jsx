import { Box } from '@mui/system';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import CustomMUIDataTable from '../../../components/mui-datatable/CustomMUIDataTable';
import useRead from '../../../hooks/crud/useRead';
import { setTracks } from '../../../store/tables/reducers/career/CareerAction';
import { selectTracks } from '../../../store/tables/reducers/career/CareerSelector';

const BCrumb = [
    {
        to: '/',
        title: 'School Management',
    },
    {
        title: 'Tracks',
    },
];

const Tracks = () => {
    /** Fetch Tracks */
    const { storedData } = useRead({ url: '/tracks', setter: setTracks, selector: selectTracks });

    return (
        <PageContainer title="JuanDepEd | Tracks" description="this is Tracks page">
            {/* breadcrumb */}
            <Breadcrumb title="Tracks" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                <CustomMUIDataTable title={"Track List"} backendData={storedData} />
            </Box>
        </PageContainer>
    )
}

export default Tracks