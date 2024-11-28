import { Box } from '@mui/system';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import { selectTracks, setTracks } from '../../../store/career/CareerSlice';
import useFetchAndDispatch from '../../../hooks/shared/useFetchAndDispatch';
import { useEffect, useState } from 'react';
import CustomMUIDataTable from '../../../components/mui-datatable/CustomMUIDataTable';

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
    const { data } = useFetchAndDispatch({
        url: '/tracks',
        setter: setTracks,
        selector: selectTracks
    });
    const [rows, setRows] = useState(data);
    useEffect(() => {
        setRows(data);
    }, [data]);

    return (
        <PageContainer title="JuanDepEd | Tracks" description="this is Tracks page">
            {/* breadcrumb */}
            <Breadcrumb title="Tracks" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                <CustomMUIDataTable title={"Track List"} backendData={rows} />
            </Box>
        </PageContainer>
    )
}

export default Tracks