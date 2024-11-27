import { Box } from "@mui/system"
import PageContainer from "../../../components/container/PageContainer"
import Breadcrumb from "../../../layouts/full/shared/breadcrumb/Breadcrumb"
import useFetchAndDispatch from "../../../hooks/shared/useFetchAndDispatch";
import { selectPersonnels, setPersonnels } from "../../../store/user/UserSlice";
import { useState } from "react";
import { useEffect } from "react";
import CustomMUIDataTable from "../../../components/mui-datatable/CustomMUIDataTable";

const BCrumb = [
    {
        to: '/admin/personnels',
        title: 'User Management',
    },
    {
        title: 'Personnels',
    },
];

const Personnels = () => {

    /** Fetch Personnels */
    const { data } = useFetchAndDispatch({
        url: "/personnels", setter: setPersonnels, selector: selectPersonnels
    });
    const [rows, setRows] = useState(null);
    useEffect(() => {
        setRows(data)
    }, [data])

    return (
        <PageContainer title="JuanDepEd | Personnels" description="this is Personnels page">
            {/* breadcrumb */}
            <Breadcrumb title="Personnels" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                <CustomMUIDataTable title={"Personnel List"} backendData={rows} />
            </Box>
        </PageContainer>
    )
}

export default Personnels