import { Box } from '@mui/system'
import PageContainer from '../../../components/container/PageContainer'
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb'
import CustomMUIDataTable from '../../../components/mui-datatable/CustomMUIDataTable';
import useRead from '../../../hooks/crud/useRead';
import { setSpecializations } from '../../../store/tables/reducers/career/CareerAction';
import { selectSpecializations } from '../../../store/tables/reducers/career/CareerSelector';

const BCrumb = [
    {
        to: '/',
        title: 'School Management',
    },
    {
        title: 'Specializations',
    },
];

const Specializations = () => {
    /** Fetch Specializations */
    const { storedData } = useRead({ url: '/specializations', setter: setSpecializations, selector: selectSpecializations });

    return (
        <PageContainer title="JuanDepEd | Specializations" description="this is Specializations page">
            {/* breadcrumb */}
            <Breadcrumb title="Specializations" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                <CustomMUIDataTable title={"Specialization List"} backendData={storedData} />
            </Box>
        </PageContainer>
    )
}

export default Specializations