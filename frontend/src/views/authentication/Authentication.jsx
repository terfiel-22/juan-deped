import { useState } from 'react'
import { Grid2, Box, Card, Tab } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import Logo from 'src/layouts/full/shared/logo/Logo';
import BlankCard from '../../components/shared/BlankCard';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import LoginForm from './forms/LoginForm';
import RegistrationForm from './forms/RegistrationForm';

const Authentication = () => {
    const [value, setValue] = useState('1');

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };
    return (
        <PageContainer title="JuanDepEd | Authentication" description="Juan DepEd Authentication Page">
            <Box
                sx={{
                    position: 'relative',
                    '&:before': {
                        content: '""',
                        background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
                        backgroundSize: '400% 400%',
                        animation: 'gradient 15s ease infinite',
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        opacity: '0.3',
                    },
                }}
            >
                <Grid2 container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
                    <Grid2
                        size={{ xs: 12, sm: 12, lg: 12, xl: 4 }}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', minHeight: { xs: '100vh', sm: 'auto' } }}>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Logo />
                            </Box>
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
                        </Card>
                    </Grid2>
                </Grid2>
            </Box>
        </PageContainer>
    )
}

export default Authentication