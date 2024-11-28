import { Box } from "@mui/system"
import PageContainer from "../../../components/container/PageContainer"
import Breadcrumb from "../../../layouts/full/shared/breadcrumb/Breadcrumb"
import CustomMUIDataTable from "../../../components/mui-datatable/CustomMUIDataTable";
import useRead from "../../../hooks/crud/useRead";
import { setPersonnels } from "../../../store/tables/reducers/personnel/PersonnelAction";
import { selectPersonnels } from "../../../store/tables/reducers/personnel/PersonnelSelector";

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
    const { storedData } = useRead({ url: "/personnels", setter: setPersonnels, selector: selectPersonnels })

    return (
        <PageContainer title="JuanDepEd | Personnels" description="this is Personnels page">
            {/* breadcrumb */}
            <Breadcrumb title="Personnels" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                <CustomMUIDataTable title={"Personnel List"} backendData={storedData} />
            </Box>
        </PageContainer>
    )
}

export default Personnels