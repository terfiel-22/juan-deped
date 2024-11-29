import { Box } from '@mui/system';
import PageContainer from '../../../../components/container/PageContainer';
import Breadcrumb from '../../../../layouts/full/shared/breadcrumb/Breadcrumb';
import CustomMUIDataTable from '../../../../components/mui-datatable/CustomMUIDataTable';
import useRead from '../../../../hooks/crud/useRead';
import { setAppliedSubjects } from '../../../../store/tables/reducers/subject/SubjectAction';
import { selectAppliedSubjects } from '../../../../store/tables/reducers/subject/SubjectSelector';

const BCrumb = [
    {
        to: '/',
        title: 'School Management',
    },
    {
        title: 'Applied Subjects',
    },
];

const AppliedSubjects = () => {
    /** Fetch Applied Subjects */
    const { storedData } = useRead({ url: '/subject/applied-subjects', setter: setAppliedSubjects, selector: selectAppliedSubjects });

    return (
        <PageContainer title="JuanDepEd | AppliedSubjects" description="this is AppliedSubjects page">
            {/* breadcrumb */}
            <Breadcrumb title="AppliedSubjects" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                <CustomMUIDataTable title={"Applied Subject List"} backendData={storedData} />
            </Box>
        </PageContainer>
    )
}

export default AppliedSubjects