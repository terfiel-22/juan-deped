import { Box } from "@mui/system";
import PageContainer from "../../../components/container/PageContainer"
import Breadcrumb from "../../../layouts/full/shared/breadcrumb/Breadcrumb"

const BCrumb = [
    {
        to: '/admin/school-forms/shsf1',
        title: 'School Forms',
    },
    {
        title: 'SHSF5B',
    },
];

const SHSF5B = () => {
    return (
        <PageContainer title="JuanDepEd | SHSF5B" description="this is SHSF5B page">
            {/* breadcrumb */}
            <Breadcrumb title="SHSF5B" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                {/* Header Content */}
                {/* Table Here */}
                {/* Footer Content */}
            </Box>
        </PageContainer>
    )
}

export default SHSF5B