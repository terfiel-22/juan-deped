import { Box } from "@mui/system"
import PageContainer from "../../../components/container/PageContainer"
import Breadcrumb from "../../../layouts/full/shared/breadcrumb/Breadcrumb"
import PersonnelTableList from "./PersonnelTableList";

const BCrumb = [
    {
        to: '/personnels',
        title: 'User Management',
    },
    {
        title: 'Personnels',
    },
];

const Personnels = () => {
    return (
        <PageContainer title="JuanDepEd | Personnels" description="this is Personnels page">
            {/* breadcrumb */}
            <Breadcrumb title="Personnels" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                <PersonnelTableList />
            </Box>
        </PageContainer>
    )
}

export default Personnels