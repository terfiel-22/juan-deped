import { Box } from '@mui/system'
import PageContainer from '../../../components/container/PageContainer'
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb'
import CustomMUIDataTable from '../../../components/mui-datatable/CustomMUIDataTable';
import useFetch from '../../../hooks/shared/useFetch';
import { useEffect, useState } from 'react';

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
    /** Fetch Specializations */
    const { data } = useFetch({ url: "/specializations" });
    const [rows, setRows] = useState(data);
    useEffect(() => {
        setRows(data)
    }, [data])
    return (
        <PageContainer title="JuanDepEd | Specializations" description="this is Specializations page">
            {/* breadcrumb */}
            <Breadcrumb title="Specializations" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                <CustomMUIDataTable title={"Specialization List"} backendData={rows} />
            </Box>
        </PageContainer>
    )
}

export default Specializations