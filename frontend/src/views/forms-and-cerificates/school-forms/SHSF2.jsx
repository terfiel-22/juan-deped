import { Box } from "@mui/system";
import PageContainer from "../../../components/container/PageContainer"
import Breadcrumb from "../../../layouts/full/shared/breadcrumb/Breadcrumb"

const BCrumb = [
    {
        to: '/admin/school-forms/shsf1',
        title: 'School Forms',
    },
    {
        title: 'SHSF2',
    },
];

const SHSF2 = () => {
    return (
        <PageContainer title="JuanDepEd | SHSF2" description="this is SHSF2 page">
            {/* breadcrumb */}
            <Breadcrumb title="SHSF2" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                {/* Header Content */}
                {/* Table Here */}
                {/* Footer Content */}
            </Box>
        </PageContainer>
    )
}

export default SHSF2