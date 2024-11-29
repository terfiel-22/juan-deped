import { Box } from '@mui/system';
import PageContainer from '../../../../components/container/PageContainer';
import Breadcrumb from '../../../../layouts/full/shared/breadcrumb/Breadcrumb';
import CustomMUIDataTable from '../../../../components/mui-datatable/CustomMUIDataTable';
import useRead from '../../../../hooks/crud/useRead';
import { setSpecializedSubjects } from '../../../../store/tables/reducers/subject/SubjectAction';
import { selectSpecializedSubjects } from '../../../../store/tables/reducers/subject/SubjectSelector';

const BCrumb = [
    {
        to: '/',
        title: 'School Management',
    },
    {
        title: 'Specialized Subjects',
    },
];

const SpecializedSubjects = () => {
    /** Fetch Specialized Subjects */
    const { storedData } = useRead({ url: '/subject/specialized-subjects', setter: setSpecializedSubjects, selector: selectSpecializedSubjects });

    return (
        <PageContainer title="JuanDepEd | SpecializedSubjects" description="this is SpecializedSubjects page">
            {/* breadcrumb */}
            <Breadcrumb title="SpecializedSubjects" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                <CustomMUIDataTable title={"Specialized Subject List"} backendData={storedData} />
            </Box>
        </PageContainer>
    )
}

export default SpecializedSubjects