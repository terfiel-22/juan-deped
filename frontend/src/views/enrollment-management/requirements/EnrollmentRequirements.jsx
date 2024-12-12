import { Box } from '@mui/system';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import CustomMUIDataTable from '../../../components/mui-datatable/CustomMUIDataTable';
import useRead from '../../../hooks/crud/useRead';
import { setEnrollmentRequirements } from '../../../store/tables/reducers/enrollment-requirement/EnrollmentRequirementAction';
import { selectEnrollmentRequirements } from '../../../store/tables/reducers/enrollment-requirement/EnrollmentRequirementSelector';
import useTableDialog from '../../../hooks/shared/useTableDialog';
import EnrollmentRequirementDialog from './EnrollmentRequirementDialog';


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

    /** For Table Dialog */
    const {
        isOpen,
        isFullScreen,
        handleOpenDialog,
        handleCloseDialog,
        selectedData,
        setSelectedData,
    } = useTableDialog();

    const { storedData } = useRead({ url: '/enrollment/requirements', setter: setEnrollmentRequirements, selector: selectEnrollmentRequirements });

    return (
        <PageContainer title="JuanDepEd | Enrollment Requirements" description="this is EnrollmentRequirements page">
            <Breadcrumb title="Enrollment Requirements" items={BCrumb} />
            <Box>
                <EnrollmentRequirementDialog
                    isOpen={isOpen}
                    isFullScreen={isFullScreen}
                    handleClose={handleCloseDialog}
                    data={selectedData}
                />
                <CustomMUIDataTable
                    title={"Enrollment Requirement List"}
                    handleOpenDialog={handleOpenDialog}
                    setSelectedData={setSelectedData}
                    backendData={storedData}
                />
            </Box>
        </PageContainer>
    );
}

export default EnrollmentRequirements