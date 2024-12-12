import { Box } from '@mui/system';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import CustomMUIDataTable from '../../../components/mui-datatable/CustomMUIDataTable';
import useRead from '../../../hooks/crud/useRead';
import { setEnhancedBeefs } from '../../../store/tables/reducers/enhanced-beefs/EnhancedBeefAction';
import { selectEnhancedBeefs } from '../../../store/tables/reducers/enhanced-beefs/EnhancedBeefSelector';
import EnhanceBeefDialog from './EnhanceBeefDialog';
import useTableDialog from '../../../hooks/shared/useTableDialog';


const BCrumb = [
    {
        to: '/admin/enrollment/enhanced-beefs',
        title: 'Enrollment Management',
    },
    {
        title: 'Enhanced BEEFs',
    },
];

const EnhancedBeefs = () => {

    /** For Table Dialog */
    const {
        isOpen,
        isFullScreen,
        handleOpenDialog,
        handleCloseDialog,
        selectedData,
        setSelectedData,
    } = useTableDialog();

    const { storedData } = useRead({ url: '/learner/enhanced-beefs', setter: setEnhancedBeefs, selector: selectEnhancedBeefs });

    return (
        <PageContainer title="JuanDepEd | Enhanced BEEFs" description="this is EnhancedBeefs page">
            <Breadcrumb title="Enhanced BEEFs" items={BCrumb} />
            <Box>
                <EnhanceBeefDialog
                    isOpen={isOpen}
                    isFullScreen={isFullScreen}
                    handleClose={handleCloseDialog}
                    data={selectedData}
                />
                <CustomMUIDataTable title={"Enhanced BEEF List"}
                    handleOpenDialog={handleOpenDialog}
                    setSelectedData={setSelectedData}
                    backendData={storedData}
                    isWithAddButton={false}
                />
            </Box>
        </PageContainer>
    );
}

export default EnhancedBeefs