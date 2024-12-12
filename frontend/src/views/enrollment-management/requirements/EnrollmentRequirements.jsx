import { Box } from '@mui/system';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import CustomMUIDataTable from '../../../components/mui-datatable/CustomMUIDataTable';
import useRead from '../../../hooks/crud/useRead';
import { setEnrollmentRequirements } from '../../../store/tables/reducers/enrollment-requirement/EnrollmentRequirementAction';
import { selectEnrollmentRequirements } from '../../../store/tables/reducers/enrollment-requirement/EnrollmentRequirementSelector';


const BCrumb = [
    {
        to: '/admin/enrollment/requirements',
        title: 'Enrollment Management',
    },
    {
        title: 'Enrollment Requirements',
    },
];

const EnrollmentRequirements = () => {

    const { storedData } = useRead({ url: '/enrollment/requirements', setter: setEnrollmentRequirements, selector: selectEnrollmentRequirements });

    return (
        <PageContainer title="JuanDepEd | Enrollment Requirements" description="this is EnrollmentRequirements page">
            <Breadcrumb title="Enrollment Requirements" items={BCrumb} />
            <Box>
                <CustomMUIDataTable title={"Enrollment Requirement List"}
                    backendData={storedData}
                />
            </Box>
        </PageContainer>
    );
}

export default EnrollmentRequirements