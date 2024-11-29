import { Box } from '@mui/system'
import PageContainer from '../../../../components/container/PageContainer'
import Breadcrumb from '../../../../layouts/full/shared/breadcrumb/Breadcrumb'
import CustomMUIDataTable from '../../../../components/mui-datatable/CustomMUIDataTable';
import useRead from '../../../../hooks/crud/useRead';
import { setStrands } from '../../../../store/tables/reducers/career/CareerAction';
import { selectStrands } from '../../../../store/tables/reducers/career/CareerSelector';

const BCrumb = [
    {
        to: '/',
        title: 'School Management',
    },
    {
        title: 'Strands',
    },
];

const Strands = () => {
    /** Fetch Strands */
    const { storedData } = useRead({ url: '/strands', setter: setStrands, selector: selectStrands });

    return (
        <PageContainer title="JuanDepEd | Strands" description="this is Strands page">
            {/* breadcrumb */}
            <Breadcrumb title="Strands" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                <CustomMUIDataTable title={"Strand List"} backendData={storedData} />
            </Box>
        </PageContainer>
    )
}

export default Strands