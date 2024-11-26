import { Box } from "@mui/system";
import PageContainer from "../../../components/container/PageContainer"
import Breadcrumb from "../../../layouts/full/shared/breadcrumb/Breadcrumb"

const BCrumb = [
    {
        to: '/admin/school-forms/shsf1',
        title: 'School Forms',
    },
    {
        title: 'SHSF6',
    },
];

const SHSF6 = () => {
    return (
        <PageContainer title="JuanDepEd | SHSF6" description="this is SHSF6 page">
            {/* breadcrumb */}
            <Breadcrumb title="SHSF6" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                {/* Header Content */}
                {/* Table Here */}
                {/* Footer Content */}
            </Box>
        </PageContainer>
    )
}

export default SHSF6