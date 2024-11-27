import { Box } from "@mui/system";
import PageContainer from "../../../components/container/PageContainer"
import Breadcrumb from "../../../layouts/full/shared/breadcrumb/Breadcrumb"

const BCrumb = [
  {
    to: '/admin/school-forms/shsf1',
    title: 'School Forms',
  },
  {
    title: 'SHSF1',
  },
];

const SHSF1 = () => {
  return (
    <PageContainer title="JuanDepEd | SHSF1" description="this is SHSF1 page">
      {/* breadcrumb */}
      <Breadcrumb title="School Form 1 School Register for Senior High School (SF1-SHS)" items={BCrumb} />
      {/* end breadcrumb */}
      <Box>
        {/* Header Content */}
        {/* Table Here */}
        {/* Footer Content */}
      </Box>
    </PageContainer>
  )
}

export default SHSF1