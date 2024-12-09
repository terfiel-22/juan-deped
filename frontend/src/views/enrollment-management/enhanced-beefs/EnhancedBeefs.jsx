import { Box } from '@mui/system';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import CustomMUIDataTable from '../../../components/mui-datatable/CustomMUIDataTable';
import useRead from '../../../hooks/crud/useRead';
import { setEnhancedBeefs } from '../../../store/tables/reducers/enhanced-beefs/EnhancedBeefAction';
import { selectEnhancedBeefs } from '../../../store/tables/reducers/enhanced-beefs/EnhancedBeefSelector';


const BCrumb = [
    {
        to: '/admin/enrollment/students',
        title: 'Enrollment Management',
    },
    {
        title: 'Enhanced BEEFs',
    },
];

const EnhancedBeefs = () => {

    const { storedData } = useRead({ url: '/learner/enhanced-beefs', setter: setEnhancedBeefs, selector: selectEnhancedBeefs });

    return (
        <PageContainer title="JuanDepEd | Enhanced BEEFs" description="this is EnhancedBeefs page">
            <Breadcrumb title="Enhanced BEEFs" items={BCrumb} />
            <Box>
                <CustomMUIDataTable title={"Enhanced BEEF List"} backendData={storedData} isWithAddButton={false} />
            </Box>
        </PageContainer>
    );
}

export default EnhancedBeefs