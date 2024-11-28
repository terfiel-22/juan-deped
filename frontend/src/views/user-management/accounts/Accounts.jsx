import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import CustomMUIDataTable from '../../../components/mui-datatable/CustomMUIDataTable';
import AccountDialog from './AccountDialog';
import useTableDialog from '../../../hooks/shared/useTableDialog';
import useRead from '../../../hooks/crud/useRead';
import { setAccounts } from '../../../store/tables/reducers/account/AccountAction';

const BCrumb = [
    {
        to: '/admin/accounts',
        title: 'User Management',
    },
    {
        title: 'Accounts',
    },
];

const defaultFormData = {
    username: "",
    email: "",
    password: "",
    cpassword: "",
    role: ""
};

const Accounts = () => {
    /** Fetch Auths */
    const { data } = useRead({ url: '/auths', setter: setAccounts });
    const [rows, setRows] = useState(data);
    useEffect(() => {
        setRows(data);
    }, [data]);

    /** For Table Dialog */
    const {
        isOpen,
        isFullScreen,
        handleOpenDialog,
        handleCloseDialog,
        selectedData,
        setSelectedData,
    } = useTableDialog({ defaultFormData });

    return (
        <PageContainer title="JuanDepEd | Accounts" description="this is Accounts page">
            {/* breadcrumb */}
            <Breadcrumb title="Accounts" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                <AccountDialog
                    isOpen={isOpen}
                    isFullScreen={isFullScreen}
                    handleClose={handleCloseDialog}
                    data={selectedData}
                />
                <CustomMUIDataTable
                    backendData={rows}
                    handleOpenDialog={handleOpenDialog}
                    setSelectedData={setSelectedData}
                    title="Accounts"
                />
            </Box>
        </PageContainer>
    );
};

export default Accounts;
