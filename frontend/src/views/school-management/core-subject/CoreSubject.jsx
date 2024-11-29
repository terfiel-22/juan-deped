import { Box } from '@mui/system';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import CustomMUIDataTable from '../../../components/mui-datatable/CustomMUIDataTable';
import useRead from '../../../hooks/crud/useRead';
import { setCoreSubjects } from '../../../store/tables/reducers/subject/SubjectAction';
import { selectCoreSubjects } from '../../../store/tables/reducers/subject/SubjectSelector';

const BCrumb = [
    {
        to: '/',
        title: 'School Management',
    },
    {
        title: 'Core Subjects',
    },
];

const CoreSubjects = () => {
    /** Fetch Core Subjects */
    const { storedData } = useRead({ url: '/subject/core-subjects', setter: setCoreSubjects, selector: selectCoreSubjects });

    return (
        <PageContainer title="JuanDepEd | CoreSubjects" description="this is CoreSubjects page">
            {/* breadcrumb */}
            <Breadcrumb title="CoreSubjects" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                <CustomMUIDataTable title={"Core Subject List"} backendData={storedData} />
            </Box>
        </PageContainer>
    )
}

export default CoreSubjects