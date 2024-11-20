import { Box } from "@mui/system"
import PageContainer from "../../../components/container/PageContainer"
import Breadcrumb from "../../../layouts/full/shared/breadcrumb/Breadcrumb"
import AccountTableList from "./AccountTableList";

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
    return (
        <PageContainer title="JuanDepEd | Accounts" description="this is Accounts page">
            {/* breadcrumb */}
            <Breadcrumb title="Accounts" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                <AccountTableList />
            </Box>
        </PageContainer>
    )
}

export default Accounts