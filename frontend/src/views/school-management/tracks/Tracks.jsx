import { Box } from '@mui/system';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import { useEffect, useState } from 'react';
import CustomMUIDataTable from '../../../components/mui-datatable/CustomMUIDataTable';
import useFetch from '../../../hooks/shared/useFetch';

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
    const { data } = useFetch({ url: '/tracks' });
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