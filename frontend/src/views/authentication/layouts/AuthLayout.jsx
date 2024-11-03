import React from 'react';
import { Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// components
import BlankCard from '../../../components/shared/BlankCard';
import LoginForm from '../forms/LoginForm';
import RegistrationForm from '../forms/RegistrationForm';


const AuthLayout = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            {/* ------------------------------------------------------------------------------------------------ */}
            {/* Basic Layout */}
            {/* ------------------------------------------------------------------------------------------------ */}
            <BlankCard>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: (theme) => theme.palette.divider }}>
                        <TabList
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                            centered
                        >
                            <Tab label="Login" value="1" />
                            <Tab label="Register" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <LoginForm />
                    </TabPanel>
                    <TabPanel value="2">
                        <RegistrationForm />
                    </TabPanel>
                </TabContext>
            </BlankCard>
        </div>
    );
};

export default AuthLayout;
