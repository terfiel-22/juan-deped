import { Box } from '@mui/system'
import PageContainer from '../../../components/container/PageContainer'
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb'
import useFetch from '../../../hooks/shared/useFetch';
import CustomMUIDataTable from '../../../components/mui-datatable/CustomMUIDataTable';
import { useEffect, useState } from 'react';

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
    /** Fetch Strands */
    const { data } = useFetch({ url: "/strands" });
    const [rows, setRows] = useState(data);
    useEffect(() => {
        setRows(data)
    }, [data])
    return (
        <PageContainer title="JuanDepEd | Strands" description="this is Strands page">
            {/* breadcrumb */}
            <Breadcrumb title="Strands" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                <CustomMUIDataTable title={"Strand List"} backendData={rows} />
            </Box>
        </PageContainer>
    )
}

export default Strands