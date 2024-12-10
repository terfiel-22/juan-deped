import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import CustomMUIDataTable from '../../../components/mui-datatable/CustomMUIDataTable';
import AccountDialog from './AccountDialog';
import useTableDialog from '../../../hooks/shared/useTableDialog';
import useRead from '../../../hooks/crud/useRead';
import { setAccounts } from '../../../store/tables/reducers/account/AccountAction';
import { selectAccounts } from '../../../store/tables/reducers/account/AccountSelector';

const BCrumb = [
    {
        to: '/admin/accounts',
        title: 'User Management',
    },
    {
        title: 'Accounts',
    },
];

const Accounts = () => {
    /** Fetch Auths */
    const { storedData } = useRead({ url: '/personnels', setter: setAccounts, selector: selectAccounts });

    /** For Table Dialog */
    const {
        isOpen,
        isFullScreen,
        handleOpenDialog,
        handleCloseDialog,
        selectedData,
        setSelectedData,
    } = useTableDialog();

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
                    backendData={storedData}
                    handleOpenDialog={handleOpenDialog}
                    setSelectedData={setSelectedData}
                    title="Accounts"
                />
            </Box>
        </PageContainer>
    );
};

export default Accounts;
