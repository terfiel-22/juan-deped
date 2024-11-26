import { Box } from "@mui/system";
import PageContainer from "../../../components/container/PageContainer"
import Breadcrumb from "../../../layouts/full/shared/breadcrumb/Breadcrumb"

const BCrumb = [
    {
        to: '/admin/school-forms/shsf1',
        title: 'School Forms',
    },
    {
        title: 'SHSF4',
    },
];

const SHSF4 = () => {
    return (
        <PageContainer title="JuanDepEd | SHSF4" description="this is SHSF4 page">
            {/* breadcrumb */}
            <Breadcrumb title="SHSF4" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                {/* Header Content */}
                {/* Table Here */}
                {/* Footer Content */}
            </Box>
        </PageContainer>
    )
}

export default SHSF4