import { Box } from "@mui/system"
import { useEffect, useState } from 'react';
import PageContainer from "../../../components/container/PageContainer"
import Breadcrumb from "../../../layouts/full/shared/breadcrumb/Breadcrumb"
import useFetchAndDispatch from '../../../hooks/shared/useFetchAndDispatch';
import { selectAuths, setAuths } from '../../../store/user/UserSlice';
import CustomMUIDataTable from "../../../components/mui-datatable/CustomMUIDataTable";

const BCrumb = [
    {
        to: '/admin/accounts',
        title: 'User Management',
    },
    {
        title: 'Accounts',
    },
];

const Accounts = () => {
    /** Fetch Auths */
    const { data } = useFetchAndDispatch({
        url: "/auths", setter: setAuths, selector: selectAuths
    });
    const [rows, setRows] = useState(data);
    useEffect(() => {
        setRows(data)
    }, [data])
    return (
        <PageContainer title="JuanDepEd | Accounts" description="this is Accounts page">
            {/* breadcrumb */}
            <Breadcrumb title="Accounts" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                <CustomMUIDataTable backendData={rows} title="Accounts" />
            </Box>
        </PageContainer>
    )
}

export default Accounts