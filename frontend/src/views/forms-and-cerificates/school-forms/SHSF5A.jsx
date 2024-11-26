import { Box } from "@mui/system";
import PageContainer from "../../../components/container/PageContainer"
import Breadcrumb from "../../../layouts/full/shared/breadcrumb/Breadcrumb"

const BCrumb = [
    {
        to: '/admin/school-forms/shsf1',
        title: 'School Forms',
    },
    {
        title: 'SHSF5A',
    },
];

const SHSF5A = () => {
    return (
        <PageContainer title="JuanDepEd | SHSF5A" description="this is SHSF5A page">
            {/* breadcrumb */}
            <Breadcrumb title="SHSF5A" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                {/* Header Content */}
                {/* Table Here */}
                {/* Footer Content */}
            </Box>
        </PageContainer>
    )
}

export default SHSF5A